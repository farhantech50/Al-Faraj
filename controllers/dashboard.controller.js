import prisma from "../config/dbConfig.js";

export const getAdminDashboardCardStats = async (req, res) => {
  try {
    const [
      totalStudents,
      totalTeachers,
      pendingApplications,
      pendingTuitionPosts,
    ] = await Promise.all([
      prisma.user.count({
        where: {
          role: "student",
          isActive: true,
        },
      }),

      prisma.user.count({
        where: {
          role: "teacher",
          isActive: true,
        },
      }),

      prisma.tuitionApplication.count({
        where: {
          statusId: 14,
        },
      }),

      prisma.tuitionPost.count({
        where: {
          statusId: 1,
        },
      }),
    ]);

    return res.status(200).json([
      {
        label: "Total Students",
        count: totalStudents,
      },
      {
        label: "Total Teachers",
        count: totalTeachers,
      },
      {
        label: "Pending Applications",
        count: pendingApplications,
      },
      {
        label: "Pending Tuition Posts",
        count: pendingTuitionPosts,
      },
    ]);
  } catch (error) {
    console.log("Error in getAdminDashboardCardStats", error);

    return res.status(500).json({
      error: "Internal server error",
    });
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

    const teacherStats = await prisma.user.findMany({
      where: {
        role: "teacher",
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        teacherAssignments: {
          select: {
            id: true,
          },
        },
      },
    });

    const teacherTuitions = teacherStats.map((teacher) => ({
      name: teacher.name,
      count: teacher.teacherAssignments.length,
    }));

    const weeklyPosts = [];

    const currentDate = new Date(startOfWeek);

    while (currentDate <= endOfWeek) {
      const start = new Date(currentDate);
      start.setHours(0, 0, 0, 0);

      const end = new Date(currentDate);
      end.setHours(23, 59, 59, 999);

      const count = await prisma.tuitionPost.count({
        where: {
          createdAt: {
            gte: start,
            lte: end,
          },
        },
      });

      weeklyPosts.push({
        date: start.toISOString().split("T")[0],
        count,
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return res.status(200).json({
      teacherTuitions,
      weeklyPosts,
    });
  } catch (error) {
    console.log("Error in getAdminDashboardChartStats", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
