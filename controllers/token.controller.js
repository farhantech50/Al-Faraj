import prisma from "../config/dbConfig.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export const generateAccessToken = (
  id,
  userId,
  role,
  name,
  isProfileComplete,
  mode,
) => {
  console.log(mode);
  return jwt.sign(
    { id, userId, role, name, isProfileComplete, mode },
    process.env.JWT_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    },
  );
};

export const generateRefreshToken = (id, role, name) => {
  return jwt.sign(
    {
      id,
      role,
      name,
      jti: crypto.randomUUID(),
    },
    process.env.JWT_KEY,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    },
  );
};
export const setRefreshTokenCookie = (res, token) => {
  res.cookie(process.env.REFRESH_TOKEN_KEY, token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: parseInt(process.env.REFRESH_TOKEN_EXPIRY_MS),
  });
};

export const saveRefreshToken = async (userId, token) => {
  const expiresAt = new Date(
    Date.now() + parseInt(process.env.REFRESH_TOKEN_EXPIRY_MS),
  );

  await prisma.refreshToken.create({
    data: {
      token,
      userId,
      expiresAt,
    },
  });
};

export const refreshToken = async (req, res) => {
  try {
    const token = req.cookies[process.env.REFRESH_TOKEN_KEY];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    const storedToken = await prisma.refreshToken.findUnique({
      where: { token },
    });

    if (!storedToken) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

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
    if (!user || !user.isActive) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    await prisma.refreshToken.deleteMany({
      where: { token },
    });

    const newRefreshToken = generateRefreshToken(user.id, user.role, user.name);
    await saveRefreshToken(user.id, newRefreshToken);
    setRefreshTokenCookie(res, newRefreshToken);

    return res.status(200).json({
      [process.env.ACCESS_TOKEN_KEY]: generateAccessToken(
        user.id,
        user.userId,
        user.role,
        user.name,
        user.isProfileComplete,
        mode,
      ),
    });
  } catch (error) {
    console.log("Error in refresh token controller", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
