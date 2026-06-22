import prisma from "../config/dbConfig.js";

export const getPaymentByTeacherId = async (req, res) => {
  try {
    const teacherId = req.params.id;

    const { month, year } = req.query;

    const selectedYear = year ? Number(year) : new Date().getFullYear();

    const selectedMonth = month ? Number(month) : new Date().getMonth() + 1;

    const getMonthRange = (year, month) => {
      const start = new Date(year, month - 1, 1);
      const end = new Date(year, month, 0, 23, 59, 59, 999);

      return {
        gte: start,
        lte: end,
      };
    };

    const assignments = await prisma.assigned.findMany({
      where: {
        teacherId: Number(teacherId),
        isActive: true,
        isDemo: false,
        isConfirmed: true,
      },

      include: {
        student: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },

        tuitionPost: {
          select: {
            id: true,
            title: true,
            budget: true,
          },
        },
      },
    });

    const calculateMonthlyIncome = (monthNumber) => {
      const monthAssignments = assignments.filter((item) => {
        if (!item.startDate) return false;

        const date = new Date(item.startDate);

        return (
          date.getFullYear() === selectedYear &&
          date.getMonth() + 1 === monthNumber
        );
      });

      const students = monthAssignments.map((item) => ({
        studentId: item.student.id,
        studentName: item.student.name,
        email: item.student.email,
        tuitionId: item.tuitionPost.id,
        title: item.tuitionPost.title,
        amount: Number(item.tuitionPost.budget || 0),
      }));

      const total = students.reduce((sum, item) => sum + item.amount, 0);

      return {
        total,
        students,
      };
    };

    const currentMonthIncome = calculateMonthlyIncome(selectedMonth);

    const yearlyIncome = [];

    for (let i = 1; i <= 12; i++) {
      yearlyIncome.push({
        month: i,
        monthName: new Date(selectedYear, i - 1, 1).toLocaleString("en-US", {
          month: "long",
        }),

        ...calculateMonthlyIncome(i),
      });
    }

    return res.status(200).json({
      year: selectedYear,

      selectedMonth: {
        month: selectedMonth,
        ...currentMonthIncome,
      },

      yearlyIncome,
    });
  } catch (error) {
    console.log("Error in getPaymentByTeacherId", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
