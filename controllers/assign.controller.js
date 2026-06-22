import prisma from "../config/dbConfig.js";

export const createAssigned = async (req, res) => {
  try {
    const {
      tuitionPostId,
      teacherId,
      startDate,
      endDate,
      studentId: studentIdFromBody,
    } = req.body;
    const assignedBy = req.user.id;

    const tuitionPost = await prisma.tuitionPost.findUnique({
      where: { id: Number(tuitionPostId) },
    });

    if (!tuitionPost) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    if (tuitionPost.statusId !== 2) {
      return res.status(400).json({ error: "Tuition post is not approved" });
    }

    const teacher = await prisma.user.findUnique({
      where: { id: Number(teacherId) },
    });

    if (!teacher || teacher.role !== "teacher") {
      return res.status(404).json({ error: "Teacher not found" });
    }

    const application = await prisma.tuitionApplication.findUnique({
      where: {
        tuitionPostId_teacherId: {
          tuitionPostId: Number(tuitionPostId),
          teacherId: Number(teacherId),
        },
      },
    });

    if (!application) {
      return res.status(404).json({
        error: "Teacher application not found",
      });
    }

    const studentId = studentIdFromBody
      ? Number(studentIdFromBody)
      : tuitionPost.postedBy;

    const [assignment, schedule] = await prisma.$transaction(async (tx) => {
      const assignment = await tx.assigned.create({
        data: {
          tuitionPostId: Number(tuitionPostId),
          teacherId: Number(teacherId),
          studentId,
          assignedBy,
          isDemo: true,
          isConfirmed: false,
          startDate: startDate ? new Date(startDate) : undefined,
          endDate: endDate ? new Date(endDate) : null,
        },
      });

      const schedule = await tx.classSchedule.create({
        data: {
          assignedId: assignment.id,
          teacherId: Number(teacherId),
          studentId,
          days: tuitionPost.days,
          startTime: tuitionPost.startTime,
          endTime: tuitionPost.endTime,
        },
      });

      await tx.tuitionPost.update({
        where: {
          id: Number(tuitionPostId),
        },
        data: {
          statusId: 4,
        },
      });

      // await tx.tuitionApplication.updateMany({
      //   where: {
      //     tuitionPostId: Number(tuitionPostId),
      //     teacherId: {
      //       not: Number(teacherId),
      //     },
      //   },
      //   data: {
      //     statusId: 18,
      //   },
      // });

      await tx.tuitionApplication.update({
        where: {
          id: application.id,
        },
        data: {
          statusId: 16,
        },
      });

      return [assignment, schedule];
    });

    return res.status(201).json({
      assignment,
      schedule,
    });
  } catch (error) {
    console.log("Error in createAssigned", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getAssignedPostDetailsById = async (req, res) => {
  try {
    const { id } = req.params;

    const tuitionPost = await prisma.tuitionPost.findUnique({
      where: {
        id: Number(id),
      },
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
          select: {
            subject: {
              select: {
                id: true,
                value: true,
              },
            },
          },
        },

        assigned: {
          select: {
            id: true,

            teacher: {
              select: {
                id: true,
                name: true,
                email: true,
                contact: true,
                address: true,
              },
            },

            student: {
              select: {
                id: true,
                name: true,
                email: true,
                contact: true,
                address: true,
              },
            },
            startDate: true,
            endDate: true,
          },
        },
      },
    });

    if (!tuitionPost) {
      return res.status(404).json({
        error: "Tuition post not found",
      });
    }

    return res.status(200).json(tuitionPost);
  } catch (error) {
    console.log("Error in getTuitionPostDetails", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
export const getAssignedTuitions = async (req, res) => {
  try {
    const { mode, search, page = 1, limit = 10 } = req.query;

    const take = Number(limit);
    const skip = (Number(page) - 1) * take;

    const where = { isActive: true };

    if (mode) {
      where.tuitionPost = {
        mode,
      };
    }

    if (search) {
      where.OR = [
        {
          teacher: {
            userId: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          teacher: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          student: {
            userId: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          student: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
      ];
    }

    const [assigned, total] = await Promise.all([
      prisma.assigned.findMany({
        where,
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          teacher: {
            select: {
              id: true,
              name: true,
              email: true,
              contact: true,
              userId: true,
            },
          },
          student: {
            select: {
              id: true,
              name: true,
              email: true,
              contact: true,
              userId: true,
            },
          },
          tuitionPost: {
            select: {
              id: true,
              title: true,
              description: true,
              budget: true,
              mode: true,
              area: true,
              subjects: true,
            },
          },
        },
      }),

      prisma.assigned.count({ where }),
    ]);

    return res.status(200).json({
      data: assigned,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / take),
    });
  } catch (error) {
    console.log("Error in getAssignedTuitions", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const unassignTuition = async (req, res) => {
  try {
    const { assignedId } = req.params;

    const assigned = await prisma.assigned.findUnique({
      where: {
        id: Number(assignedId),
      },
      include: {
        tuitionPost: true,
      },
    });

    if (!assigned) {
      return res.status(404).json({
        error: "Assigned tuition not found",
      });
    }

    if (!assigned.isActive) {
      return res.status(400).json({
        error: "Tuition is already unassigned",
      });
    }

    await prisma.$transaction(async (tx) => {
      await tx.assigned.update({
        where: {
          id: Number(assignedId),
        },
        data: {
          isActive: false,
          endDate: new Date(),
        },
      });

      await tx.tuitionPost.update({
        where: {
          id: assigned.tuitionPostId,
        },
        data: {
          statusId: 2,
        },
      });

      await tx.tuitionApplication.update({
        where: {
          tuitionPostId_teacherId: {
            tuitionPostId: assigned.tuitionPostId,
            teacherId: assigned.teacherId,
          },
        },
        data: {
          statusId: 15,
        },
      });
    });

    return res.status(200).json({
      message: "Tuition unassigned successfully",
    });
  } catch (error) {
    console.log("Error in unassignTuition", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
