import prisma from "../config/dbConfig.js";

export const createAnnouncement = async (req, res) => {
  try {
    const { title, message, roles, startAt, endAt } = req.body;

    const announcement = await prisma.announcement.create({
      data: {
        title,
        message,

        roles,

        startAt: new Date(startAt),
        endAt: new Date(endAt),

        createdById: req.user.id,
      },
    });

    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getActiveAnnouncements = async (req, res) => {
  try {
    const now = new Date();

    const data = await prisma.announcement.findMany({
      where: {
        roles: {
          has: req.user.role,
        },

        isActive: true,

        startAt: {
          lte: now,
        },

        endAt: {
          gte: now,
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllAnnouncements = async (req, res) => {
  try {
    const data = await prisma.announcement.findMany({
      include: {
        createdBy: {
          select: {
            name: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
