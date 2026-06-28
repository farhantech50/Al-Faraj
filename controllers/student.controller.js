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
    const studentId = req.user.id;
    const { search, page, limit, apptype } = req.query;

    const take = limit ? Number(limit) : 10;
    const skip = page ? (Number(page) - 1) * take : 0;

    const where = {
      postedBy: studentId,

      ...(search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      }),

      ...(apptype && {
        applications: {
          some: {
            statusId: Number(apptype),
          },
        },
      }),
    };

    const posts = await prisma.tuitionPost.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: "desc" },

      select: {
        id: true,
        title: true,
        description: true,
        budget: true,
        createdAt: true,

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

        applications: true,
      },
    });

    const result = posts.map((post) => ({
      ...post,
      teacherId: post.applications.teacherId,
      status: apptype
        ? {
            id: Number(apptype),
            value: apptype == 16 ? "Demo" : apptype == 17 ? "Assigned" : "",
          }
        : post.status,
    }));

    const total = await prisma.tuitionPost.count({ where });

    return res.status(200).json({
      data: result,
      total,
      page: Number(page) || 1,
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.log("Error in getMyStudentApplications", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const findStudentApplicationStatusCounts = async (req, res) => {
  try {
    const studentId = req.user.id;

    const [totalPost, demo, assigned] = await Promise.all([
      prisma.tuitionPost.count({
        where: {
          postedBy: Number(studentId),
        },
      }),

      prisma.tuitionApplication.count({
        where: {
          statusId: 16,
          tuitionPost: {
            postedBy: Number(studentId),
          },
        },
      }),
      prisma.tuitionApplication.count({
        where: {
          statusId: 17,
          tuitionPost: {
            postedBy: Number(studentId),
          },
        },
      }),
    ]);

    return res.status(200).json({
      data: [
        {
          id: 0,
          value: "Total Posts",
          count: totalPost,
        },
        {
          id: 16,
          value: "Demo",
          count: demo,
        },
        {
          id: 17,
          value: "Assigned",
          count: assigned,
        },
      ],
    });
  } catch (error) {
    console.log("Error in findStudentApplicationStatusCounts", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const confirmDemoTeacher = async (req, res) => {
  try {
    const studentId = req.user.id;

    const { applicationId, statusId } = req.body;

    if (![17, 18].includes(Number(statusId))) {
      return res.status(400).json({
        error: "Invalid status",
      });
    }

    const application = await prisma.tuitionApplication.findUnique({
      where: {
        id: Number(applicationId),
      },
      include: {
        tuitionPost: {
          include: {
            assigned: true,
          },
        },
      },
    });

    if (!application) {
      return res.status(404).json({
        error: "Application not found",
      });
    }

    const assignment = application.tuitionPost.assigned;
    if (!assignment) {
      return res.status(404).json({
        error: "Assignment not found",
      });
    }

    if (assignment[0].studentId !== studentId) {
      return res.status(403).json({
        error: "Unauthorized",
      });
    }

    const [updatedApplication, updatedAssignment] = await prisma.$transaction([
      prisma.tuitionApplication.update({
        where: {
          id: Number(application.id),
        },
        data: {
          statusId: Number(statusId),
        },
      }),

      prisma.assigned.update({
        where: {
          id: assignment[0].id,
        },
        data: {
          isConfirmed: Number(statusId) === 17,
          isDemo: false,
          isActive: Number(statusId) === 17,
        },
      }),
    ]);

    return res.status(200).json({
      message:
        Number(statusId) === 17
          ? "Teacher confirmed successfully."
          : "Teacher rejected successfully.",
      application: updatedApplication,
      assignment: updatedAssignment,
    });
  } catch (error) {
    console.log("Error in confirmDemoTeacher", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
