import prisma from "../config/dbConfig.js";
import { startOfDay, endOfDay } from "date-fns";

export const updateClassSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { days, startTime, endTime } = req.body;

    const existing = await prisma.classSchedule.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Class schedule not found" });
    }

    const schedule = await prisma.classSchedule.update({
      where: { id: parseInt(id) },
      data: {
        ...(days && { days }),
        ...(startTime && { startTime }),
        ...(endTime && { endTime }),
      },
    });

    return res.status(200).json(schedule);
  } catch (error) {
    console.log("Error in updateClassSchedule", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getUserClassSchedulesByUserId = async (req, res) => {
  try {
    const { userId } = req.query;

    const id = Number(userId);

    if (!id) {
      return res.status(400).json({
        error: "userId is required",
      });
    }

    const schedules = await prisma.classSchedule.findMany({
      where: {
        OR: [{ teacherId: id }, { studentId: id }],
      },
      select: {
        id: true,
        startTime: true,
        endTime: true,
        days: true,

        teacher: {
          select: {
            id: true,
            name: true,
          },
        },

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
    });

    return res.status(200).json({
      data: schedules,
    });
  } catch (error) {
    console.log("Error in getUserClassSchedules", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
export const createScheduleOverride = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const {
      classScheduleId,
      originalDate,
      newDate,
      startTime,
      endTime,
      medium,
    } = req.body;

    const schedule = await prisma.classSchedule.findUnique({
      where: { id: classScheduleId },
    });

    if (!schedule) {
      return res.status(404).json({ error: "Class schedule not found" });
    }

    const originalDateObj = new Date(originalDate);
    const today = new Date();
    const newDateObj = new Date(newDate);

    if (originalDateObj <= today) {
      return res.status(400).json({
        error: "Only future classes can be rescheduled",
      });
    }
    if (newDateObj <= today) {
      return res.status(400).json({
        error: "Only future dates can be given",
      });
    }
    // Check if override already exists for this original date
    const existing = await prisma.classScheduleOverride.findFirst({
      where: {
        classScheduleId,
        newDate: {
          gte: startOfDay(originalDateObj),
          lte: endOfDay(originalDateObj),
        },
      },
    });
    if (existing) {
      return res
        .status(400)
        .json({ error: "Override already exists for this class" });
    }

    const override = await prisma.classScheduleOverride.create({
      data: {
        classScheduleId,
        originalDate: originalDateObj,
        newDate: newDateObj,
        startTime,
        endTime,
        medium,
      },
    });

    return res.status(201).json(override);
  } catch (error) {
    console.log("Error in createScheduleOverride", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getTeacherSchedule = async (req, res) => {
  try {
    const { startDate, endDate, teacherId } = req.query;

    const teacherIdInt = teacherId ? parseInt(teacherId) : req.user.id;

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ error: "startDate and endDate are required" });
    }

    const dayNames = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const schedules = await prisma.classSchedule.findMany({
      where: { teacherId: teacherIdInt },
      include: {
        assignment: {
          include: {
            tuitionPost: {
              select: {
                area: { select: { id: true, value: true } },
                subjects: {
                  select: {
                    subject: { select: { id: true, value: true } },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (schedules.length === 0) {
      return res.status(200).json([]);
    }

    const weekDates = [];
    const current = new Date(startDate);
    const end = new Date(endDate);

    while (current <= end) {
      weekDates.push({
        date: current.toISOString().split("T")[0],
        day: dayNames[current.getDay()],
      });
      current.setDate(current.getDate() + 1);
    }

    const studentIds = [...new Set(schedules.map((s) => s.studentId))];

    const students = await prisma.user.findMany({
      where: { id: { in: studentIds } },
      select: {
        id: true,
        name: true,
        email: true,
        contact: true,
      },
    });

    const result = [];

    for (const { date, day } of weekDates) {
      const classes = [];

      for (const schedule of schedules) {
        if (!schedule.days.includes(day)) continue;

        const student = students.find((s) => s.id === schedule.studentId);
        const area = schedule.assignment?.tuitionPost?.area || null;
        const subjects =
          schedule.assignment?.tuitionPost?.subjects.map((s) => s.subject) ||
          [];

        classes.push({
          scheduleId: schedule.id,
          area,
          subjects,
          student,
          startTime: schedule.startTime,
          endTime: schedule.endTime,
          medium: schedule.medium,
        });
      }

      result.push({ date, day, classes });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getTeacherSchedule", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getStudentSchedule = async (req, res) => {
  try {
    const { startDate, endDate, studentId } = req.query;
    const studentIdInt = parseInt(studentId);

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ error: "startDate and endDate are required" });
    }

    const dayNames = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const schedules = await prisma.classSchedule.findMany({
      where: { studentId: studentIdInt },
    });

    if (schedules.length === 0) {
      return res.status(200).json([]);
    }

    const weekDates = [];
    const current = new Date(startDate);
    const end = new Date(endDate);

    while (current <= end) {
      weekDates.push({
        date: current.toISOString().split("T")[0],
        day: dayNames[current.getDay()],
      });
      current.setDate(current.getDate() + 1);
    }

    const assignmentIds = [...new Set(schedules.map((s) => s.assignedId))];
    const teacherIds = [...new Set(schedules.map((s) => s.teacherId))];

    const [assignments, teachers] = await Promise.all([
      prisma.assigned.findMany({
        where: { id: { in: assignmentIds } },
        include: {
          tuitionPost: {
            include: {
              area: { select: { id: true, value: true } },
              subjects: {
                include: {
                  subject: { select: { id: true, value: true } },
                },
              },
            },
          },
        },
      }),
      prisma.user.findMany({
        where: { id: { in: teacherIds } },
        select: {
          id: true,
          name: true,
          email: true,
          contact: true,
        },
      }),
    ]);

    const result = [];

    for (const { date, day } of weekDates) {
      const classes = [];

      for (const schedule of schedules) {
        if (!schedule.days.includes(day)) continue;

        const assignment = assignments.find(
          (a) => a.id === schedule.assignedId,
        );
        const teacher = teachers.find((t) => t.id === schedule.teacherId);
        const area = assignment?.tuitionPost?.area || null;
        const subjects = (assignment?.tuitionPost?.subjects || []).map(
          (s) => s.subject,
        );

        classes.push({
          scheduleId: schedule.id,
          area,
          subjects,
          teacher,
          startTime: schedule.startTime,
          endTime: schedule.endTime,
          medium: schedule.medium,
        });
      }

      result.push({ date, day, classes });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getStudentSchedule", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
