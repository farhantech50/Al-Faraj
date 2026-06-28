import { getTeacherMonthlyIncome } from "../services/paymentService.js";

export const getPaymentByTeacherId = async (req, res) => {
  try {
    const teacherId = req.params.id;

    const { month, year } = req.query;

    const selectedYear = year ? Number(year) : new Date().getFullYear();
    const selectedMonth = month ? Number(month) : new Date().getMonth() + 1;

    const currentMonthIncome = await getTeacherMonthlyIncome(
      teacherId,
      selectedYear,
      selectedMonth,
    );

    const yearlyIncome = [];

    for (let i = 1; i <= 12; i++) {
      yearlyIncome.push({
        month: i,
        monthName: new Date(selectedYear, i - 1, 1).toLocaleString("en-US", {
          month: "long",
        }),
        ...(await getTeacherMonthlyIncome(teacherId, selectedYear, i)),
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
