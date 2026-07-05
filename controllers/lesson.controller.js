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
    const { teacherId, studentId } = req.query;

    const where = {};

    if (teacherId) {
      where.teacherId = Number(teacherId);
    }

    if (studentId) {
      where.studentId = Number(studentId);
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
