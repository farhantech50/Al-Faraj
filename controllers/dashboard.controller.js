import prisma from "../config/dbConfig.js";

export const getAdminDashboardCardStats = async (req, res) => {
  try {
    const [
      totalStudents,
      totalTeachers,
      pendingApplications,
      pendingTuitionPosts,
    ] = await Promise.all([
      prisma.user.count({ where: { role: "student", isActive: true } }),
      prisma.user.count({ where: { role: "teacher", isActive: true } }),
      prisma.teacherApplication.count({ where: { status: 23 } }),
      prisma.tuitionPost.count({ where: { status: 23 } }),
    ]);

    return res.status(200).json([
      { label: "Total Students", count: totalStudents },
      { label: "Total Teachers", count: totalTeachers },
      { label: "Pending Applications", count: pendingApplications },
      { label: "Pending Tuition Posts", count: pendingTuitionPosts },
    ]);
  } catch (error) {
    console.log("Error in getDashboardStats", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getAdminDashboardChartStats = async (req, res) => {
  try {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const teachers = await prisma.user.findMany({
      where: { role: "teacher", isActive: true },
      select: { id: true, name: true },
    });

    const assignmentCounts = await Promise.all(
      teachers.map(async (teacher) => ({
        name: teacher.name,
        count: await prisma.assignedTeacherStudent.count({
          where: { teacherId: teacher.id },
        }),
      })),
    );

    const weekDates = [];
    const current = new Date(startOfWeek);
    while (current <= endOfWeek) {
      weekDates.push(current.toISOString().split("T")[0]);
      current.setDate(current.getDate() + 1);
    }

    const postCounts = await Promise.all(
      weekDates.map(async (date) => ({
        date,
        count: await prisma.tuitionPost.count({
          where: {
            createdAt: {
              gte: new Date(date),
              lte: new Date(new Date(date).setHours(23, 59, 59, 999)),
            },
          },
        }),
      })),
    );

    return res.status(200).json({
      teacherTuitions: assignmentCounts,
      weeklyPosts: postCounts,
    });
  } catch (error) {
    console.log("Error in getDashboardCharts", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
