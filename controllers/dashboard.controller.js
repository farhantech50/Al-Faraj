import prisma from "../config/dbConfig.js";
import { getTeacherMonthlyIncome } from "../services/paymentService.js";
export const getAdminDashboardCardStats = async (req, res) => {
  try {
    const [
      totalStudents,
      totalTeachers,
      pendingApplications,
      pendingTuitionPosts,
      shortlistedCandidates,
      demoClasses,
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

      prisma.tuitionApplication.count({
        where: {
          statusId: 15,
        },
      }),

      prisma.assigned.count({
        where: {
          isActive: true,
          isDemo: true,
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
        label: "New Job Applications",
        count: pendingApplications,
      },
      {
        label: "Tuition Post Request",
        count: pendingTuitionPosts,
      },
      {
        label: "Shortlisted Candidates",
        count: shortlistedCandidates,
      },
      {
        label: "Demo Classes",
        count: demoClasses,
      },
    ]);
  } catch (error) {
    console.log("Error in getAdminDashboardCardStats", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getTeacherDashboardCardStats = async (req, res) => {
  try {
    const teacherId = req.user.id;

    const [
      activeTuitions,
      appliedTuitions,
      pendingApplications,
      currentMonthIncome,
    ] = await Promise.all([
      prisma.assigned.count({
        where: {
          teacherId,
          isActive: true,
          isDemo: false,
          isConfirmed: true,
        },
      }),

      prisma.tuitionApplication.count({
        where: {
          teacherId,
        },
      }),

      prisma.tuitionApplication.count({
        where: {
          teacherId,
          statusId: 14,
        },
      }),

      getTeacherMonthlyIncome(
        teacherId,
        new Date().getFullYear(),
        new Date().getMonth() + 1,
      ),
    ]);

    return res.status(200).json([
      {
        label: "Active Tuitions",
        count: activeTuitions,
      },
      {
        label: "Applied Tuitions",
        count: appliedTuitions,
      },
      {
        label: "Pending Applications",
        count: pendingApplications,
      },
      {
        label: "Current Month Earning",
        count: currentMonthIncome.total,
      },
    ]);
  } catch (error) {
    console.log("Error in getTeacherDashboardCardStats", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
export const getStudentDashboardCardStats = async (req, res) => {
  try {
    const studentId = req.user.id;

    const [totalTuitions, demoTuitions, assignedTuitions] = await Promise.all([
      prisma.assigned.count({
        where: {
          studentId,
          isActive: true,
        },
      }),

      prisma.assigned.count({
        where: {
          studentId,
          isActive: true,
          isDemo: true,
        },
      }),

      prisma.assigned.count({
        where: {
          studentId,
          isActive: true,
          isDemo: false,
          isConfirmed: true,
        },
      }),
    ]);

    return res.status(200).json([
      {
        label: "Total Tuitions",
        count: totalTuitions,
      },
      {
        label: "Demo Tuitions",
        count: demoTuitions,
      },
      {
        label: "Assigned Tuitions",
        count: assignedTuitions,
      },
    ]);
  } catch (error) {
    console.log("Error in getStudentDashboardCardStats", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
