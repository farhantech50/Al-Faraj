import prisma from "../config/dbConfig.js";

export const createLesson = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const { studentId, currentLesson, lessonUrl } = req.body;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const existingLesson = await prisma.lesson.findFirst({
      where: {
        teacherId,
        studentId: Number(studentId),
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    if (existingLesson) {
      return res.status(400).json({
        error: "Lesson for this student has already been created today.",
      });
    }

    const lesson = await prisma.lesson.create({
      data: {
        teacherId,
        studentId: Number(studentId),
        currentLesson,
        lessonUrl,
      },
    });

    return res.status(201).json(lesson);
  } catch (error) {
    console.log("Error in createLesson", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
export const getLessons = async (req, res) => {
  try {
    const { teacherId } = req.query;

    const where = {};

    if (teacherId) {
      where.teacherId = Number(teacherId);
    }

    const lessons = await prisma.lesson.findMany({
      where,
      include: {
        teacher: {
          select: {
            id: true,
            name: true,
            email: true,
            contact: true,
          },
        },
        student: {
          select: {
            id: true,
            name: true,
            email: true,
            contact: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(lessons);
  } catch (error) {
    console.log("Error in getLessons", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const createRating = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { teacherId, rating, review } = req.body;

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        error: "Rating must be between 1 and 5.",
      });
    }

    const existingRating = await prisma.rating.findUnique({
      where: {
        teacherId_studentId: {
          teacherId: Number(teacherId),
          studentId,
        },
      },
    });

    if (existingRating) {
      return res.status(400).json({
        error: "You have already rated this teacher.",
      });
    }

    const createdRating = await prisma.rating.create({
      data: {
        teacherId: Number(teacherId),
        studentId,
        rating: Number(rating),
        review,
      },
    });

    return res.status(201).json(createdRating);
  } catch (error) {
    console.log("Error in createRating", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getAverageRating = async (req, res) => {
  try {
    const teacherId = req.user.id;

    const [aggregate, reviews] = await Promise.all([
      prisma.rating.aggregate({
        where: {
          teacherId: Number(teacherId),
        },
        _avg: {
          rating: true,
        },
        _count: {
          rating: true,
        },
      }),

      prisma.rating.findMany({
        where: {
          teacherId: Number(teacherId),
        },
        include: {
          student: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
    ]);

    return res.status(200).json({
      teacherId: Number(teacherId),
      averageRating: aggregate._avg.rating
        ? Number(aggregate._avg.rating.toFixed(1))
        : 0,
      totalRatings: aggregate._count.rating,
      reviews: reviews.map((item) => ({
        studentId: item.student.id,
        studentName: item.student.name,
        rating: item.rating,
        review: item.review,
        createdAt: item.createdAt,
      })),
    });
  } catch (error) {
    console.log("Error in getAverageRating", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const updateRating = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { teacherId, rating, review } = req.body;

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        error: "Rating must be between 1 and 5.",
      });
    }

    const existingRating = await prisma.rating.findUnique({
      where: {
        teacherId_studentId: {
          teacherId: Number(teacherId),
          studentId,
        },
      },
    });

    if (!existingRating) {
      return res.status(404).json({
        error: "Rating not found.",
      });
    }

    const updatedRating = await prisma.rating.update({
      where: {
        teacherId_studentId: {
          teacherId: Number(teacherId),
          studentId,
        },
      },
      data: {
        rating: Number(rating),
        review,
      },
    });

    return res.status(200).json(updatedRating);
  } catch (error) {
    console.log("Error in updateRating", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
export const getStudentRatingForTeacher = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { teacherId } = req.params;

    const rating = await prisma.rating.findUnique({
      where: {
        teacherId_studentId: {
          teacherId: Number(teacherId),
          studentId,
        },
      },
    });

    return res.status(200).json(rating);
  } catch (error) {
    console.log("Error in getStudentRatingForTeacher", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
