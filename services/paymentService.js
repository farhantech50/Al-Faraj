import prisma from "../config/dbConfig.js";

export const getTeacherMonthlyIncome = async (teacherId, year, month) => {
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

  const students = assignments
    .filter((item) => {
      if (!item.startDate) return false;

      const date = new Date(item.startDate);

      return (
        date.getFullYear() === Number(year) &&
        date.getMonth() + 1 === Number(month)
      );
    })
    .map((item) => ({
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
