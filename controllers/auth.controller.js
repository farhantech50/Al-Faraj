import prisma from "../config/dbConfig.js";
import argon2 from "argon2";
import {
  generateAccessToken,
  generateRefreshToken,
  setRefreshTokenCookie,
  saveRefreshToken,
} from "./token.controller.js";
import { profile } from "console";

const getPermissions = async (userId) => {
  const permissions = await prisma.moderatorPermission.findUnique({
    where: { userId },
    select: {
      canAssignTeachers: true,
      canApproveJobs: true,
      canManageUsers: true,
      canPostJobs: true,
      canRejectApplications: true,
    },
  });
  if (!permissions) return null;
  return {
    permissions,
  };
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

    const permissions =
      user.role === "moderator" ? await getPermissions(user.id) : null;

    let profile = null;

    if (user.role === "student") {
      profile = await prisma.studentProfile.findUnique({
        where: { userId: user.id },
      });
    }

    if (user.role === "teacher") {
      profile = await prisma.teacherProfile.findUnique({
        where: { userId: user.id },
      });
    }

    const isProfileComplete =
      user.role === "student" || user.role === "teacher" ? !!profile : null;

    const refreshToken = generateRefreshToken(user.id, user.role, user.name);
    await saveRefreshToken(user.id, refreshToken);
    setRefreshTokenCookie(res, refreshToken);

    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      permissions,
      [process.env.ACCESS_TOKEN_KEY]: generateAccessToken(
        user.id,
        user.role,
        user.name,
        permissions,
        isProfileComplete,
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
          userCode: `ALF-${String(newUser.id).padStart(4, "0")}`,
        },
      });

      if (role === "moderator") {
        await tx.moderatorPermission.create({
          data: {
            userId: newUser.id,
            canAssignTeachers: false,
            canApproveJobs: false,
            canManageUsers: false,
            canPostJobs: false,
            canRejectApplications: false,
          },
        });
      }

      return updatedUser;
    });
    return res.status(201).json({
      id: result.id,
      userCode: result.userCode,
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

    res.cookie(process.env.REFRESH_TOKEN_KEY, "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getUsers = async (req, res) => {
  try {
    const { role, id, search, page, limit, isActive } = req.query;
    const where = {};

    if (id) {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          contact: true,
          address: true,
          gender: true,
          isActive: true,
          createdAt: true,
        },
      });

      if (!user) return res.status(404).json({ error: "User not found" });
      return res.status(200).json(user);
    }

    if (role) where.role = role;

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { contact: { contains: search, mode: "insensitive" } },
      ];
    }
    if (!isActive) {
      where.isActive = true;
    } else {
      where.isActive = isActive === "true";
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
      page: Number(page) || 1,
      totalPages: take ? Math.ceil(total / take) : 1,
    });
  } catch (error) {
    console.log("Error in getUsers", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact, address, gender, role, isActive } = req.body;

    const existing = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(contact && { contact }),
        ...(address && { address }),
        ...(gender && { gender }),
        ...(role && { role }),
        ...(isActive !== undefined && { isActive }),
      },
      select: {
        id: true,
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
      return res
        .status(400)
        .json({ error: "Current and new password are required" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isCorrect = await argon2.verify(user.password, currentPassword);
    if (!isCorrect) {
      return res.status(400).json({ error: "Current password is incorrect" });
    }

    const hashedPassword = await argon2.hash(newPassword);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    await prisma.refreshToken.deleteMany({
      where: { userId },
    });

    return res
      .status(200)
      .json({ message: "Password changed successfully. Please login again." });
  } catch (error) {
    console.log("Error in changePassword", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ error: "New password is required" });
    }

    const existing = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "User not found" });
    }

    const hashedPassword = await argon2.hash(newPassword);

    await prisma.user.update({
      where: { id: parseInt(id) },
      data: { password: hashedPassword },
    });

    await prisma.refreshToken.deleteMany({
      where: { userId: parseInt(id) },
    });

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.log("Error in resetPassword", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
