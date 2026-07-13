import prisma from "../config/dbConfig.js";
import { uploadToCloudinary } from "../config/uploadToCloudinary.js";

export const createHomework = async (req, res) => {
  try {
    const { studentId, title, description, dueDate, subjectId } = req.body;

    const homework = await prisma.assignment.create({
      data: {
        teacherId: req.user.id,
        studentId: Number(studentId),
        title,
        description,
        dueDate: new Date(dueDate),
        subjectId: Number(subjectId),
      },
    });

    res.json(homework);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const submitHomework = async (req, res) => {
  try {
    const { id } = req.params;

    const homework = await prisma.assignment.findUnique({
      where: { id: Number(id) },
    });

    if (!homework) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    if (homework.studentId !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    let fileUrl = null;
    let fileName = null;

    if (req.file) {
      const result = await uploadToCloudinary(
        req.file.buffer,
        req.file.originalname,
      );
      fileUrl = result.secure_url;
      fileName = req.file.originalname;
    }

    const updated = await prisma.assignment.update({
      where: { id: Number(id) },
      data: {
        fileUrl,
        fileName,
        note: req.body.note,
        status: {
          connect: {
            id: 38,
          },
        },
      },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const gradeHomework = async (req, res) => {
  try {
    const { grade, feedback, id } = req.body;

    const homework = await prisma.assignment.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!homework) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found",
      });
    }

    if (!homework.fileUrl) {
      return res.status(400).json({
        success: false,
        message: "Homework has not been submitted yet",
      });
    }
    if (grade < 0 || grade > 100) {
      return res.status(400).json({
        message: "Grade must be between 0 and 100",
      });
    }

    const updatedHomework = await prisma.assignment.update({
      where: {
        id: Number(id),
      },
      data: {
        grade,
        feedback,
        gradedAt: new Date(),
        status: {
          connect: {
            id: 39,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Assignment graded successfully",
      data: updatedHomework,
    });
  } catch (error) {
    console.error("Error grading assignment:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to grade assignment",
      error: error.message,
    });
  }
};
export const getAssignmentsByTeacher = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { teacherId, status, dueDate, subjectId, page, limit } = req.query;

    const where = { studentId };

    if (teacherId) where.teacherId = Number(teacherId);
    if (status) where.status = Number(status);
    if (subjectId) where.subjectId = Number(subjectId);

    if (dueDate) {
      where.dueDate = {
        gte: new Date(dueDate),
        lte: new Date(new Date(dueDate).setHours(23, 59, 59, 999)),
      };
    }

    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const [assignments, total] = await Promise.all([
      prisma.assignment.findMany({
        where,
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
        include: {
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
            },
          },
        },
      }),
      prisma.assignment.count({ where }),
    ]);

    return res.status(200).json({
      data: assignments,
      total,
      page: Number(page) || 1,
      totalPages: take ? Math.ceil(total / take) : 1,
    });

    return res.status(200).json({
      data: result,
      total,
      page: Number(page) || 1,
      totalPages: take ? Math.ceil(total / take) : 1,
    });
  } catch (error) {
    console.log("Error in getAssignmentsByTeacher", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAssignmentsByStudent = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const { studentId, status, dueDate, subjectId, page, limit } = req.query;

    const where = { teacherId };

    if (studentId) where.studentId = Number(studentId);
    if (status) where.status = Number(status);
    if (subjectId) where.subjectId = Number(subjectId);

    if (dueDate) {
      where.dueDate = {
        gte: new Date(dueDate),
        lte: new Date(new Date(dueDate).setHours(23, 59, 59, 999)),
      };
    }

    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const [assignments, total] = await Promise.all([
      prisma.assignment.findMany({
        where,
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          status: {
            select: {
              id: true,
              value: true,
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
      }),
      prisma.assignment.count({ where }),
    ]);

    return res.status(200).json({
      data: assignments,
      total,
      page: Number(page) || 1,
      totalPages: take ? Math.ceil(total / take) : 1,
    });
  } catch (error) {
    console.log("Error in getAssignmentsByStudent", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllAssignments = async (req, res) => {
  try {
    const { studentId, teacherId, status, dueDate, subjectId, page, limit } =
      req.query;

    const where = {};

    if (studentId) where.studentId = Number(studentId);
    if (teacherId) where.teacherId = Number(teacherId);
    if (status) where.status = Number(status);
    if (subjectId) where.subjectId = Number(subjectId);

    if (dueDate) {
      where.dueDate = {
        gte: new Date(dueDate),
        lte: new Date(new Date(dueDate).setHours(23, 59, 59, 999)),
      };
    }

    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const [assignments, total] = await Promise.all([
      prisma.assignment.findMany({
        where,
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          status: {
            select: {
              id: true,
              value: true,
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
          teacher: {
            select: {
              id: true,
              name: true,
              email: true,
              contact: true,
            },
          },
        },
      }),
      prisma.assignment.count({ where }),
    ]);

    return res.status(200).json({
      data: assignments,
      total,
      page: Number(page) || 1,
      totalPages: take ? Math.ceil(total / take) : 1,
    });
  } catch (error) {
    console.log("Error in getAllAssignments", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
