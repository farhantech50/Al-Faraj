import prisma from "../config/dbConfig.js";
const generatePostId = () => `PST-${Date.now().toString().slice(-8)}`;
export const createTuitionPost = async (req, res) => {
  try {
    const {
      title,
      description,
      budget,
      area,
      days,
      startTime,
      endTime,
      subjectIds,
    } = req.body;

    const userId = req.user.id;
    const role = req.user.role;

    let mode;

    if (role === "admin" || role === "moderator") {
      mode = req.body.mode;
    } else {
      const studentProfile = await prisma.studentProfile.findUnique({
        where: { userId },
      });

      if (!studentProfile) {
        return res.status(400).json({ error: "Student profile not found" });
      }

      mode = studentProfile.mode;
    }

    const post = await prisma.tuitionPost.create({
      data: {
        postId: generatePostId(),
        postedByUser: {
          connect: { id: userId },
        },
        title,
        description,
        budget: budget ? parseFloat(budget) : null,
        mode,
        area: {
          connect: { id: parseInt(area) },
        },
        days,
        startTime,
        endTime,
        subjects: {
          create: subjectIds.map((id) => ({
            subject: {
              connect: { id },
            },
          })),
        },
      },
    });

    return res.status(201).json(post);
  } catch (error) {
    console.log("Error in createTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const updateTuitionPost = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      budget,
      area,
      days,
      startTime,
      endTime,
      subjectIds,
    } = req.body;

    const existing = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    await prisma.tuitionPostSubject.deleteMany({
      where: { tuitionPostId: parseInt(id) },
    });

    const post = await prisma.tuitionPost.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        budget: budget ? parseFloat(budget) : null,
        areaId: area ? parseInt(area) : undefined,
        days,
        startTime,
        endTime,
        subjects: {
          create: subjectIds?.map((id) => ({
            subject: {
              connect: { id },
            },
          })),
        },
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log("Error in updateTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllTuitionPosts = async (req, res) => {
  try {
    const { mode, search, page, limit, status, area, fromDate, toDate } =
      req.query;

    const where = {};

    if (mode) {
      where.mode = mode;
    }
    if (status) {
      where.statusId = Number(status);
    }

    if (fromDate && toDate) {
      where.createdAt = { gte: new Date(fromDate), lte: new Date(toDate) };
    } else if (fromDate) {
      where.createdAt = { gte: new Date(fromDate) };
    } else if (toDate) {
      where.createdAt = { lte: new Date(toDate) };
    }

    if (area) where.areaId = parseInt(area);
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const [posts, total] = await Promise.all([
      prisma.tuitionPost.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          area: {
            select: {
              id: true,
              value: true,
            },
          },
          status: {
            select: {
              id: true,
              value: true,
            },
          },
          subjects: {
            include: {
              subject: true,
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
  } catch (error) {
    console.log("Error in getAllTuitionPosts", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getTuitionPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(id) },
      include: {
        postedByUser: {
          select: {
            email: true,
            userId: true,
            name: true,
          },
        },
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
    });

    if (!post) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.log("Error in getTuitionPostById", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTuitionPostStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const existing = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    const post = await prisma.tuitionPost.update({
      where: { id: parseInt(id) },
      data: { status: { connect: { id: parseInt(status) } } },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log("Error in updateTuitionPostStatus", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTuitionPost = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    await prisma.tuitionPost.delete({
      where: { id: parseInt(id) },
    });

    return res
      .status(200)
      .json({ message: "Tuition post deleted successfully" });
  } catch (error) {
    console.log("Error in deleteTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getTuitionApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const teacherId = req.user.id;
    const application = await prisma.tuitionApplication.findUnique({
      where: {
        tuitionPostId_teacherId: {
          tuitionPostId: parseInt(id),
          teacherId: parseInt(teacherId),
        },
      },
      select: {
        id: true,
        appliedAt: true,
        coverNote: true,
        status: {
          select: {
            id: true,
            value: true,
          },
        },
        teacher: {
          select: {
            id: true,
            name: true,
            email: true,
            contact: true,
            teacherProfile: {
              select: {
                bio: true,
                experienceYears: true,
                educationalBackground: true,
                cvUrl: true,
                mode: true,
              },
            },
          },
        },
        tuitionPost: {
          select: {
            id: true,
            title: true,
            description: true,
            budget: true,
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
        },
      },
    });
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }

    return res.status(200).json(application);
  } catch (error) {
    console.log("Error in getTuitionApplicationById", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getTuitionsHavePendingApplications = async (req, res) => {
  try {
    const { mode } = req.query;
    const posts = await prisma.tuitionPost.findMany({
      where: {
        applications: {
          some: {
            statusId: 14,
          },
        },

        ...(mode && { mode }),
      },

      include: {
        area: true,
        status: true,

        applications: {
          where: {
            statusId: 14,
          },

          include: {
            teacher: {
              select: {
                id: true,
                name: true,
                email: true,
                contact: true,
              },
            },
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.log("Error in getTuitionsHavePendingApplications", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteTeacherApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.teacherApplication.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    await prisma.teacherApplication.delete({
      where: { id: parseInt(id) },
    });

    return res
      .status(200)
      .json({ message: "Tuition post deleted successfully" });
  } catch (error) {
    console.log("Error in deleteTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const shortlistTeachers = async (req, res) => {
  try {
    const { tuitionPostId, teacherIds } = req.body;

    if (!tuitionPostId || !Array.isArray(teacherIds)) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const postId = Number(tuitionPostId);
    const shortlistedIds = teacherIds.map(Number);

    await prisma.$transaction([
      prisma.tuitionApplication.updateMany({
        where: {
          tuitionPostId: postId,
          teacherId: { in: shortlistedIds },
        },
        data: {
          statusId: 15,
        },
      }),

      prisma.tuitionApplication.updateMany({
        where: {
          tuitionPostId: postId,
          teacherId: { notIn: shortlistedIds },
        },
        data: {
          statusId: 18,
        },
      }),
    ]);

    return res.status(200).json({
      message: "Shortlisted and others rejected successfully",
    });
  } catch (error) {
    console.log("Error in shortlistTeachers", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
