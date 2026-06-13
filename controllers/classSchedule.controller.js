import prisma from "../config/dbConfig.js";
import { startOfDay, endOfDay } from "date-fns";

export const updateClassSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { days, startTime, endTime, medium } = req.body;

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
        ...(medium && { medium }),
      },
    });

    return res.status(200).json(schedule);
  } catch (error) {
    console.log("Error in updateClassSchedule", error);
    return res.status(500).json({ error: "Internal server error" });
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
    // if (existing) {
    //   await prisma.classScheduleOverride.update({
    //     where: { id: existing.id },
    //     data: {
    //       newDate: newDateObj,
    //     },
    //   });
    // }
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
    const teacherIdInt = parseInt(teacherId);

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
    });

    if (schedules.length === 0) {
      return res.status(200).json([]);
    }

    // Generate week range
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

    const overrides = await prisma.classScheduleOverride.findMany({
      where: {
        classScheduleId: { in: schedules.map((s) => s.id) },
      },
    });

    const assignmentIds = [...new Set(schedules.map((s) => s.assignmentId))];
    const studentIds = [...new Set(schedules.map((s) => s.studentId))];

    const [assignments, students] = await Promise.all([
      prisma.assignedTeacherStudent.findMany({
        where: { id: { in: assignmentIds } },
        include: { tuitionPost: { select: { area: true, subjects: true } } },
      }),
      prisma.user.findMany({
        where: { id: { in: studentIds } },
        select: { id: true, name: true, email: true, contact: true },
      }),
    ]);

    const areaIds = [
      ...new Set(assignments.map((a) => a.tuitionPost?.area).filter(Boolean)),
    ];

    const subjectIdList = [
      ...new Set(assignments.flatMap((a) => a.tuitionPost?.subjects || [])),
    ];

    const [areas, subjects] = await Promise.all([
      prisma.lookup.findMany({
        where: { id: { in: areaIds } },
        select: { id: true, value: true },
      }),
      prisma.lookup.findMany({
        where: { id: { in: subjectIdList } },
        select: { id: true, value: true },
      }),
    ]);

    const normalize = (d) => new Date(d).toISOString().split("T")[0];

    const result = [];

    for (const { date, day } of weekDates) {
      const classes = [];

      for (const schedule of schedules) {
        const assignment = assignments.find(
          (a) => a.id === schedule.assignmentId,
        );

        const student = students.find((s) => s.id === schedule.studentId);

        const areaObj = areas.find(
          (a) => a.id === assignment?.tuitionPost?.area,
        );

        const postSubjects = (assignment?.tuitionPost?.subjects || [])
          .map((id) => subjects.find((s) => s.id === id))
          .filter(Boolean);

        const movedHere = overrides.find(
          (o) =>
            o.classScheduleId === schedule.id && normalize(o.newDate) === date,
        );

        if (movedHere) {
          classes.push({
            scheduleId: schedule.id,
            area: areaObj ?? null,
            subjects: postSubjects,
            student,
            startTime: movedHere.startTime,
            endTime: movedHere.endTime,
            medium: movedHere.medium,
            isOverride: true,
            originalDate: movedHere.originalDate,
          });
          continue;
        }

        const movedAway = overrides.find(
          (o) =>
            o.classScheduleId === schedule.id &&
            normalize(o.originalDate) === date,
        );

        if (movedAway) continue;

        if (schedule.days.includes(day)) {
          classes.push({
            scheduleId: schedule.id,
            area: areaObj ?? null,
            subjects: postSubjects,
            student,
            startTime: schedule.startTime,
            endTime: schedule.endTime,
            medium: schedule.medium,
            isOverride: false,
          });
        }
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

    const overrides = await prisma.classScheduleOverride.findMany({
      where: {
        classScheduleId: { in: schedules.map((s) => s.id) },
      },
    });

    const assignmentIds = [...new Set(schedules.map((s) => s.assignmentId))];
    const teacherIds = [...new Set(schedules.map((s) => s.teacherId))];

    const [assignments, teachers] = await Promise.all([
      prisma.assignedTeacherStudent.findMany({
        where: { id: { in: assignmentIds } },
        include: { tuitionPost: { select: { area: true, subjects: true } } },
      }),
      prisma.user.findMany({
        where: { id: { in: teacherIds } },
        select: { id: true, name: true, email: true, contact: true },
      }),
    ]);

    const areaIds = [
      ...new Set(assignments.map((a) => a.tuitionPost?.area).filter(Boolean)),
    ];
    const subjectIdList = [
      ...new Set(assignments.flatMap((a) => a.tuitionPost?.subjects || [])),
    ];

    const [areas, subjects] = await Promise.all([
      prisma.lookup.findMany({
        where: { id: { in: areaIds } },
        select: { id: true, value: true },
      }),
      prisma.lookup.findMany({
        where: { id: { in: subjectIdList } },
        select: { id: true, value: true },
      }),
    ]);

    const result = [];

    for (const { date, day } of weekDates) {
      const classes = [];

      for (const schedule of schedules) {
        const assignment = assignments.find(
          (a) => a.id === schedule.assignmentId,
        );
        const teacher = teachers.find((t) => t.id === schedule.teacherId);
        const areaObj = areas.find(
          (a) => a.id === assignment?.tuitionPost?.area,
        );
        const postSubjects = (assignment?.tuitionPost?.subjects || [])
          .map((id) => subjects.find((s) => s.id === id))
          .filter(Boolean);

        // Check if this date was moved away
        const movedAway = overrides.find(
          (o) => o.classScheduleId === schedule.id && o.originalDate === date,
        );

        if (movedAway) continue;

        // Check if a class was moved TO this date
        const movedHere = overrides.find(
          (o) => o.classScheduleId === schedule.id && o.newDate === date,
        );

        if (movedHere) {
          classes.push({
            scheduleId: schedule.id,
            area: areaObj ?? null,
            subjects: postSubjects,
            teacher,
            startTime: movedHere.startTime,
            endTime: movedHere.endTime,
            medium: movedHere.medium,
            isOverride: true,
          });
          continue;
        }

        // Normal recurring class
        if (schedule.days.includes(day)) {
          classes.push({
            scheduleId: schedule.id,
            area: areaObj ?? null,
            subjects: postSubjects,
            teacher,
            startTime: schedule.startTime,
            endTime: schedule.endTime,
            medium: schedule.medium,
            isOverride: false,
          });
        }
      }

      result.push({ date, day, classes });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getStudentSchedule", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
