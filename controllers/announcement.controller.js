import prisma from "../config/dbConfig.js";

const parseDhakaTime = (dateString) => {
  if (!dateString) return null;

  return new Date(`${dateString}:00+06:00`);
};

export const createAnnouncement = async (req, res) => {
  try {
    const { title, message, roles, startAt, endAt } = req.body;

    const announcement = await prisma.announcement.create({
      data: {
        title,
        message,
        roles,
        startAt: parseDhakaTime(startAt),
        endAt: parseDhakaTime(endAt),
        createdById: req.user.id,
      },
    });

    return res.status(201).json(announcement);
  } catch (error) {
    return res.status(500).json({
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

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllAnnouncements = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    const take = Number(limit);
    const skip = (Number(page) - 1) * take;

    const where = {
      ...(search && {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            message: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.announcement.findMany({
        where,
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
        skip,
        take,
      }),

      prisma.announcement.count({
        where,
      }),
    ]);

    return res.status(200).json({
      data,
      total,
      page: Number(page),
      limit: Number(limit),
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, message, roles, startAt, endAt } = req.body;

    const announcement = await prisma.announcement.findUnique({
      where: {
        id: id,
      },
    });

    if (!announcement) {
      return res.status(404).json({
        message: "Announcement not found",
      });
    }

    const updated = await prisma.announcement.update({
      where: {
        id: id,
      },
      data: {
        ...(title && { title }),
        ...(message && { message }),
        ...(roles && { roles }),
        ...(startAt && { startAt: parseDhakaTime(startAt) }),
        ...(endAt && { endAt: parseDhakaTime(endAt) }),
      },
    });

    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    const announcement = await prisma.announcement.findUnique({
      where: {
        id: id,
      },
    });

    if (!announcement) {
      return res.status(404).json({
        message: "Announcement not found",
      });
    }

    await prisma.announcement.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: "Announcement deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
