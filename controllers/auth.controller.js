import prisma from "../config/dbConfig.js";
import argon2 from "argon2";
import {
  generateAccessToken,
  generateRefreshToken,
  setRefreshTokenCookie,
  saveRefreshToken,
} from "./token.controller.js";
import { profile } from "console";

const getPermissions = async (role) => {
  const permissions = await prisma.rolePermission.findMany({
    where: { role },
    select: {
      permission: true,
    },
  });

  return permissions.map((p) => p.permission);
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isPasswordCorrect = await argon2.verify(user.password, password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    if (!user.isActive) {
      return res.status(403).json({ error: "Account is disabled" });
    }

    const permissions = await getPermissions(user.role);

    let profile = null;
    let mode = null;

    if (user.role === "student") {
      profile = await prisma.studentProfile.findUnique({
        where: { userId: user.id },
      });
      mode = profile?.mode || null;
    }

    if (user.role === "teacher") {
      profile = await prisma.teacherProfile.findUnique({
        where: { userId: user.id },
      });
      mode = profile?.mode || null;
    }

    const isProfileComplete =
      user.role === "student" || user.role === "teacher" ? !!profile : true;

    const refreshToken = generateRefreshToken(user.id, user.role, user.name);

    await saveRefreshToken(user.id, refreshToken);

    setRefreshTokenCookie(res, refreshToken);

    return res.status(200).json({
      id: user.id,
      userId: user.userId,
      name: user.name,
      email: user.email,
      role: user.role,
      mode,
      permissions,
      [process.env.ACCESS_TOKEN_KEY]: generateAccessToken(
        user.id,
        user.userId,
        user.role,
        user.name,
        isProfileComplete,
        mode,
      ),
    });
  } catch (error) {
    console.log("Error in login controller", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, address, contact, gender, role } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await argon2.hash(password);

    const result = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          address,
          contact,
          gender,
          role,
        },
      });

      const updatedUser = await tx.user.update({
        where: { id: newUser.id },
        data: {
          userId: `ALF-${String(newUser.id).padStart(4, "0")}`,
        },
      });

      return updatedUser;
    });

    return res.status(201).json({
      id: result.id,
      userId: result.userId,
      name: result.name,
      email: result.email,
      role: result.role,
    });
  } catch (error) {
    console.log("Error in register controller", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    const token = req.cookies[process.env.REFRESH_TOKEN_KEY];

    if (token) {
      await prisma.refreshToken.deleteMany({
        where: { token },
      });
    }

    res.clearCookie(process.env.REFRESH_TOKEN_KEY, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log("Error in logout controller", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getUsers = async (req, res) => {
  try {
    const { role, mode, page, limit, search, id } = req.query;

    const where = {};
    if (id) {
      where.id = Number(id);
    }
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { contact: { contains: search, mode: "insensitive" } },
        { userId: { contains: search, mode: "insensitive" } },
      ];
    }
    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          userId: true,
          name: true,
          email: true,
          role: true,
          contact: true,
          address: true,
          gender: true,
          isActive: true,
          createdAt: true,
        },
      }),
      prisma.user.count({ where }),
    ]);

    return res.status(200).json({
      data: users,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.log("Error in getUsers", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { name, email, contact, address, gender, role, isActive } = req.body;

    const existing = await prisma.user.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({ error: "User not found" });
    }

    if (email && email !== existing.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email },
      });

      if (emailExists) {
        return res.status(400).json({
          error: "Email already exists",
        });
      }
    }

    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(email !== undefined && { email }),
        ...(contact !== undefined && { contact }),
        ...(address !== undefined && { address }),
        ...(gender !== undefined && { gender }),
        ...(role !== undefined && { role }),
        ...(isActive !== undefined && { isActive }),
      },
      select: {
        id: true,
        userId: true,
        name: true,
        email: true,
        role: true,
        contact: true,
        address: true,
        gender: true,
        isActive: true,
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log("Error in updateUser", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const changePassword = async (req, res) => {
  try {
    const userId = req.user.id;

    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        error: "Current and new password are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const isCorrect = await argon2.verify(user.password, currentPassword);

    if (!isCorrect) {
      return res.status(400).json({
        error: "Current password is incorrect",
      });
    }

    const hashedPassword = await argon2.hash(newPassword);

    await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });

    await prisma.refreshToken.deleteMany({
      where: { userId },
    });

    return res.status(200).json({
      message: "Password changed successfully. Please login again.",
    });
  } catch (error) {
    console.log("Error in changePassword", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({
        error: "New password is required",
      });
    }

    const existing = await prisma.user.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const hashedPassword = await argon2.hash(newPassword);

    await prisma.user.update({
      where: { id },
      data: {
        password: hashedPassword,
      },
    });

    await prisma.refreshToken.deleteMany({
      where: { userId: id },
    });

    return res.status(200).json({
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log("Error in resetPassword", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
