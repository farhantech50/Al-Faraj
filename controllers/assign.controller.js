import prisma from "../config/dbConfig.js";

export const createAssigned = async (req, res) => {
  try {
    const { tuitionPostId, teacherId, startDate, endDate } = req.body;
    const assignedBy = req.user.id;

    const tuitionPost = await prisma.tuitionPost.findUnique({
      where: { id: Number(tuitionPostId) },
      include: {
        subjects: true,
      },
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

    const application = await prisma.tuitionApplication.findFirst({
      where: {
        tuitionPostId: Number(tuitionPostId),
        teacherId: Number(teacherId),
      },
    });

    const [assignment, schedule] = await prisma.$transaction(async (tx) => {
      const assignment = await tx.assigned.create({
        data: {
          tuitionPostId: Number(tuitionPostId),
          teacherId: Number(teacherId),
          studentId: tuitionPost.postedBy,
          assignedBy,
          startDate: new Date(startDate),
          endDate: endDate ? new Date(endDate) : null,
        },
      });

      const schedule = await tx.classSchedule.create({
        data: {
          assignedId: assignment.id,
          teacherId: Number(teacherId),
          studentId: tuitionPost.postedBy,
          days: tuitionPost.days,
          startTime: tuitionPost.startTime,
          endTime: tuitionPost.endTime,
          medium: tuitionPost.mode,
        },
      });

      await tx.tuitionPost.update({
        where: { id: Number(tuitionPostId) },
        data: {
          statusId: 4,
        },
      });

      await tx.tuitionApplication.updateMany({
        where: {
          tuitionPostId: Number(tuitionPostId),
        },
        data: {
          statusId: 18,
        },
      });

      if (application) {
        await tx.tuitionApplication.update({
          where: {
            id: application.id,
          },
          data: {
            statusId: 16,
          },
        });
      }

      return [assignment, schedule];
    });

    return res.status(201).json({
      assignment,
      schedule,
    });
  } catch (error) {
    console.log("Error in createAssignment", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.assignedTeacherStudent.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Assignment not found" });
    }

    await prisma.$transaction(async (tx) => {
      await tx.assignedTeacherStudent.delete({
        where: { id: parseInt(id) },
      });

      await tx.tuitionPost.update({
        where: { id: existing.tuitionPostId },
        data: { status: 24 },
      });
    });

    return res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    console.log("Error in deleteAssignment", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getStudentAssignments = async (req, res) => {
  try {
    const studentId = parseInt(req.params.studentId);

    const assignments = await prisma.assignedTeacherStudent.findMany({
      where: { studentId },
    });

    if (assignments.length === 0) {
      return res.status(200).json([]);
    }

    const result = [];

    for (const assignment of assignments) {
      const teacher = await prisma.user.findUnique({
        where: { id: assignment.teacherId },
        select: { id: true, name: true, email: true, contact: true },
      });

      const subjects = await prisma.subject.findMany({
        where: { id: { in: assignment.subjectIds } },
        select: { id: true, name: true },
      });

      const schedule = await prisma.classSchedule.findUnique({
        where: { assignmentId: assignment.id },
        select: {
          days: true,
          startTime: true,
          endTime: true,
          medium: true,
        },
      });

      const tuitionPost = await prisma.tuitionPost.findUnique({
        where: { id: assignment.tuitionPostId },
        select: { budget: true, area: true },
      });

      result.push({
        assignmentId: assignment.id,
        startDate: assignment.startDate,
        endDate: assignment.endDate,
        budget: tuitionPost?.budget,
        area: tuitionPost?.area,
        teacher,
        subjects,
        schedule,
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getStudentAssignments", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getTeacherAssignments = async (req, res) => {
  try {
    const teacherId = parseInt(req.params.teacherId);

    const assignments = await prisma.assignedTeacherStudent.findMany({
      where: { teacherId },
    });

    if (assignments.length === 0) {
      return res.status(200).json([]);
    }

    const result = [];

    for (const assignment of assignments) {
      const student = await prisma.user.findUnique({
        where: { id: assignment.studentId },
        select: { id: true, name: true, email: true, contact: true },
      });

      const subjects = await prisma.subject.findMany({
        where: { id: { in: assignment.subjectIds } },
        select: { id: true, name: true },
      });

      const schedule = await prisma.classSchedule.findUnique({
        where: { assignmentId: assignment.id },
        select: {
          days: true,
          startTime: true,
          endTime: true,
          medium: true,
        },
      });

      const tuitionPost = await prisma.tuitionPost.findUnique({
        where: { id: assignment.tuitionPostId },
        select: { budget: true, area: true },
      });

      result.push({
        assignmentId: assignment.id,
        startDate: assignment.startDate,
        endDate: assignment.endDate,
        budget: tuitionPost?.budget,
        area: tuitionPost?.area,
        student,
        subjects,
        schedule,
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getTeacherAssignments", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
