import prisma from "../config/dbConfig.js";

export const createStudentProfile = async (req, res) => {
  try {
    const {
      gradeLevel,
      institution,
      userId,
      guardianName,
      guardianAddress,
      guardianContact,
      mode,
    } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const existing = await prisma.studentProfile.findUnique({
      where: { userId },
    });

    if (existing) {
      return res.status(400).json({ error: "Student profile already exists" });
    }

    const profile = await prisma.studentProfile.create({
      data: {
        userId,
        gradeLevel,
        institution,
        guardianName,
        guardianAddress,
        guardianContact,
        mode,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(201).json(profile);
  } catch (error) {
    console.log("Error in createStudentProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateStudentProfile = async (req, res) => {
  try {
    const {
      gradeLevel,
      institution,
      userId,
      guardianName,
      guardianAddress,
      guardianContact,
      mode,
    } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const existing = await prisma.studentProfile.findUnique({
      where: { userId },
    });

    if (!existing) {
      return res.status(404).json({ error: "Student profile not found" });
    }

    const profile = await prisma.studentProfile.update({
      where: { userId },
      data: {
        gradeLevel,
        institution,
        guardianName,
        guardianAddress,
        guardianContact,
        mode,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(200).json(profile);
  } catch (error) {
    console.log("Error in updateStudentProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMyStudentProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await prisma.studentProfile.findUnique({
      where: { userId },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    if (!profile) {
      return res.status(404).json({ error: "Student profile not found" });
    }

    return res.status(200).json({
      ...profile,
      gradeLevel: profile.gradeLevel,
    });
  } catch (error) {
    console.log("Error in getMyStudentProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await prisma.studentProfile.findUnique({
      where: { userId: parseInt(id) },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    if (!profile) {
      return res.status(404).json({ error: "Student profile not found" });
    }

    return res.status(200).json({
      ...profile,
      gradeLevel: profile.gradeLevel,
    });
  } catch (error) {
    console.log("Error in getStudentById", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const { mode, search, page = 1, limit = 10 } = req.query;

    const take = Number(limit);
    const skip = (Number(page) - 1) * take;

    const where = {};

    if (mode) {
      where.mode = mode;
    }

    if (search) {
      where.OR = [
        {
          user: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          user: {
            email: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          user: {
            contact: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          user: {
            userId: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
      ];
    }

    const [students, total] = await Promise.all([
      prisma.studentProfile.findMany({
        where,
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              userId: true,
              contact: true,
            },
          },
        },
      }),

      prisma.studentProfile.count({ where }),
    ]);

    return res.status(200).json({
      data: students,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.log("Error in getAllStudents", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMyTuitionPosts = async (req, res) => {
  try {
    const id = req.user.id;
    const { statusId, search, page, limit } = req.query;

    const where = {
      postedBy: id,
    };

    if (statusId) {
      where.statusId = Number(statusId);
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const [posts, total] = await Promise.all([
      await prisma.tuitionPost.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          status: {
            select: {
              id: true,
              value: true,
            },
          },
          area: {
            select: {
              id: true,
              value: true,
            },
          },
          subjects: {
            select: {
              subject: {
                select: {
                  id: true,
                  value: true,
                },
              },
            },
          },
        },
      }),
      prisma.tuitionPost.count({ where }),
    ]);

    return res.json({
      data: posts,
      total,
      page: Number(page) || 1,
      totalPages: take ? Math.ceil(total / take) : 1,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
