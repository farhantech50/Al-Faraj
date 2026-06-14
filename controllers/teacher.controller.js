import prisma from "../config/dbConfig.js";

export const createTeacherProfile = async (req, res) => {
  try {
    const { bio, experienceYears, educationalBackground, cvUrl, mode, userId } =
      req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const existing = await prisma.teacherProfile.findUnique({
      where: { userId },
    });

    if (existing) {
      return res.status(400).json({ error: "Teacher profile already exists" });
    }

    const profile = await prisma.teacherProfile.create({
      data: {
        userId,
        bio,
        experienceYears,
        educationalBackground,
        cvUrl,
        mode,
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    return res.status(201).json(profile);
  } catch (error) {
    console.log("Error in createTeacherProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTeacherProfile = async (req, res) => {
  try {
    const { bio, experienceYears, educationalBackground, cvUrl, mode, userId } =
      req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const existing = await prisma.teacherProfile.findUnique({
      where: { userId },
    });

    if (!existing) {
      return res.status(404).json({ error: "Teacher profile not found" });
    }

    const profile = await prisma.teacherProfile.update({
      where: { userId },
      data: {
        bio,
        experienceYears,
        educationalBackground,
        cvUrl,
        mode,
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    return res.status(200).json(profile);
  } catch (error) {
    console.log("Error in updateTeacherProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMyTeacherProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await prisma.teacherProfile.findUnique({
      where: { userId },
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    if (!profile) {
      return res.status(404).json({ error: "Teacher profile not found" });
    }

    return res.status(200).json(profile);
  } catch (error) {
    console.log("Error in getMyTeacherProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await prisma.teacherProfile.findUnique({
      where: { userId: parseInt(id) },
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    if (!profile) {
      return res.status(404).json({ error: "Teacher profile not found" });
    }

    return res.status(200).json(profile);
  } catch (error) {
    console.log("Error in getTeacherById", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const { mode } = req.query;

    const teachers = await prisma.teacherProfile.findMany({
      where: mode
        ? {
            mode: {
              has: mode,
            },
          }
        : undefined,
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    return res.status(200).json(teachers);
  } catch (error) {
    console.log("Error in getAllTeachers", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const applyToTuitionPost = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const { tuitionPostId, coverNote } = req.body;

    const existing = await prisma.tuitionApplication.findFirst({
      where: {
        teacherId,
        tuitionPostId: Number(tuitionPostId),
      },
    });

    if (existing) {
      return res.status(400).json({ error: "Already applied" });
    }

    const application = await prisma.tuitionApplication.create({
      data: {
        coverNote,

        teacher: {
          connect: { id: teacherId },
        },

        tuitionPost: {
          connect: { id: Number(tuitionPostId) },
        },
      },
    });

    return res.status(201).json(application);
  } catch (error) {
    console.log("Error in applyToTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMyApplications = async (req, res) => {
  try {
    const teacherId = req.user.id;

    const { search, page, limit } = req.query;

    const take = limit ? Number(limit) : 10;
    const skip = page ? (Number(page) - 1) * take : 0;

    const where = {
      teacherId,
      ...(search && {
        tuitionPost: {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
          ],
        },
      }),
    };

    const [applications, total] = await Promise.all([
      prisma.teacherApplication.findMany({
        where,
        skip,
        take,
        orderBy: { appliedAt: "desc" },
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

      prisma.teacherApplication.count({ where }),
    ]);

    const result = applications.map((app) => ({
      id: app.id,
      appliedAt: app.appliedAt,
      status: app.status,

      tuitionPost: {
        ...app.tuitionPost,
        area: app.tuitionPost.area?.value,
        status: app.tuitionPost.status?.value,
        subjects: app.tuitionPost.subjects
          .map((s) => s.subject.value)
          .join(", "),
      },
    }));

    return res.json({
      data: result,
      total,
      page: Number(page) || 1,
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.log("Error in getMyApplications", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getAssignedStudents = async (req, res) => {
  try {
    const { teacherId } = req.query;

    const students = await prisma.assignedTeacherStudent.findMany({
      where: {
        teacherId: Number(teacherId),
      },
      distinct: ["studentId"],
      select: {
        student: {
          select: { id: true, name: true, email: true, contact: true },
        },
      },
    });

    const result = students.map((s) => ({ user: s.student }));

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getAssignedStudents", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
