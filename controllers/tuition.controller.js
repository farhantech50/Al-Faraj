import prisma from "../config/dbConfig.js";

export const createTuitionPost = async (req, res) => {
  try {
    const {
      title,
      description,
      budget,
      medium,
      area,
      days,
      startTime,
      endTime,
      subjectIds,
    } = req.body;

    const post = await prisma.tuitionPost.create({
      data: {
        postedBy: req.user.id,
        title,
        description,
        budget: budget ? parseFloat(budget) : null,
        medium,
        area: parseInt(area),
        days,
        startTime,
        endTime,
        subjects: subjectIds,
      },
    });

    return res.status(201).json(post);
  } catch (error) {
    console.log("Error in createTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTuitionPost = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      budget,
      medium,
      area,
      days,
      startTime,
      endTime,
      subjectIds,
    } = req.body;

    const existing = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    if (existing.status !== 23) {
      return res
        .status(400)
        .json({ error: "Only pending posts can be edited" });
    }

    const post = await prisma.tuitionPost.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        budget: budget ? parseFloat(budget) : null,
        medium,
        area: area ? parseInt(area) : undefined,
        days,
        startTime,
        endTime,
        ...(subjectIds && { subjects: subjectIds }),
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log("Error in updateTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllTuitionPosts = async (req, res) => {
  try {
    const {
      status,
      search,
      page,
      limit,
      area,
      fromDate,
      toDate,
      subjectIds,
      budgetFrom,
      budgetTo,
    } = req.query;

    const where = {};

    if (status) where.status = parseInt(status);
    if (area) where.area = parseInt(area);

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (subjectIds) {
      where.subjects = {
        hasSome: subjectIds.split(",").map((id) => parseInt(id)),
      };
    }

    if (budgetFrom || budgetTo) {
      where.budget = {
        ...(budgetFrom && { gte: parseFloat(budgetFrom) }),
        ...(budgetTo && { lte: parseFloat(budgetTo) }),
      };
    }

    if (fromDate && toDate) {
      where.createdAt = { gte: new Date(fromDate), lte: new Date(toDate) };
    } else if (fromDate) {
      where.createdAt = { gte: new Date(fromDate) };
    } else if (toDate) {
      where.createdAt = { lte: new Date(toDate) };
    }

    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const [posts, total] = await Promise.all([
      prisma.tuitionPost.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
      }),
      prisma.tuitionPost.count({ where }),
    ]);

    if (posts.length === 0) {
      return res.json({
        data: [],
        total: 0,
        page: Number(page) || 1,
        totalPages: 1,
      });
    }

    const areaIds = [...new Set(posts.map((p) => parseInt(p.area)))];
    const statusIds = [...new Set(posts.map((p) => parseInt(p.status)))];
    const subjectIdList = [...new Set(posts.flatMap((p) => p.subjects))];
    const [areas, statuses, subjects] = await Promise.all([
      prisma.lookup.findMany({
        where: { id: { in: areaIds } },
        select: { id: true, value: true },
      }),
      prisma.lookup.findMany({
        where: { id: { in: statusIds } },
        select: { id: true, value: true },
      }),
      prisma.lookup.findMany({
        where: { id: { in: subjectIdList } },
        select: { id: true, value: true },
      }),
    ]);

    const result = posts.map((post) => {
      const areaObj = areas.find((a) => a.id === post.area);
      const statusObj = statuses.find((s) => s.id === post.status);
      const postSubjects = post.subjects
        .map((id) => subjects.find((s) => s.id === id))
        .filter(Boolean);

      return {
        ...post,
        area: areaObj ?? post.area,
        status: statusObj ?? post.status,
        subjects: postSubjects.map((s) => s),
      };
    });

    return res.json({
      data: result,
      total,
      page: Number(page) || 1,
      totalPages: take ? Math.ceil(total / take) : 1,
    });
  } catch (error) {
    console.log("Error in getAllTuitionPosts", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getTuitionPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(id) },
    });

    if (!post) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    const [areaLookup, statusLookup, subjectLookups] =
      await prisma.$transaction([
        prisma.lookup.findUnique({
          where: { id: parseInt(post.area) },
          select: { id: true, value: true },
        }),
        prisma.lookup.findUnique({
          where: { id: parseInt(post.status) },
          select: { id: true, value: true },
        }),
        prisma.lookup.findMany({
          where: { id: { in: post.subjects } },
          select: { id: true, value: true },
        }),
      ]);

    return res.status(200).json({
      ...post,
      area: areaLookup ?? post.area,
      status: statusLookup ?? post.status,
      subjects: subjectLookups.map((a) => a) ?? post.subjects,
    });
  } catch (error) {
    console.log("Error in getTuitionPostById", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTuitionPostStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const existing = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    const post = await prisma.tuitionPost.update({
      where: { id: parseInt(id) },
      data: { status: parseInt(status) },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log("Error in updateTuitionPostStatus", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTuitionPost = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    await prisma.tuitionPost.delete({
      where: { id: parseInt(id) },
    });

    return res
      .status(200)
      .json({ message: "Tuition post deleted successfully" });
  } catch (error) {
    console.log("Error in deleteTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getTuitionsHavePendingApplications = async (req, res) => {
  try {
    const applications = await prisma.teacherApplication.findMany({
      where: { status: 23 },
      select: { tuitionPostId: true, teacherId: true },
    });

    if (applications.length === 0) {
      return res.status(200).json([]);
    }

    const teacherIds = [...new Set(applications.map((a) => a.teacherId))];
    const teachers = await prisma.user.findMany({
      where: { id: { in: teacherIds } },
      select: {
        id: true,
        name: true,
        email: true,
        address: true,
        contact: true,
        gender: true,
      },
    });

    const countMap = {};
    for (const app of applications) {
      const postId = app.tuitionPostId;
      if (!countMap[postId]) {
        countMap[postId] = { count: 0, teacherDetails: [] };
      }
      const teacher = teachers.find((t) => t.id === app.teacherId);
      countMap[postId].count += 1;
      if (teacher) countMap[postId].teacherDetails.push(teacher);
    }

    const tuitionPostIds = Object.keys(countMap).map(Number);

    const posts = await prisma.tuitionPost.findMany({
      where: { id: { in: tuitionPostIds } },
      orderBy: { createdAt: "desc" },
    });

    const areaIds = [...new Set(posts.map((p) => parseInt(p.area)))];
    const statusIds = [...new Set(posts.map((p) => parseInt(p.status)))];
    const subjectIdList = [...new Set(posts.flatMap((p) => p.subjects))];
    const [areas, statuses, subjects] = await Promise.all([
      prisma.lookup.findMany({
        where: { id: { in: areaIds } },
        select: { id: true, value: true },
      }),
      prisma.lookup.findMany({
        where: { id: { in: statusIds } },
        select: { id: true, value: true },
      }),
      prisma.lookup.findMany({
        where: { id: { in: subjectIdList } },
        select: { id: true, value: true },
      }),
    ]);

    const result = posts.map((post) => {
      const areaObj = areas.find((a) => a.id === post.area);
      const statusObj = statuses.find((s) => s.id === post.status);
      const postSubjects = post.subjects
        .map((id) => subjects.find((s) => s.id === id))
        .filter(Boolean);

      return {
        ...post,
        area: areaObj ?? post.area,
        status: statusObj ?? post.status,
        subjects: postSubjects.map((s) => s),
        pendingApplicationCount: countMap[post.id]?.count || 0,
        teacherDetails: countMap[post.id]?.teacherDetails || [],
      };
    });

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getTuitionsHavePendingApplications", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteTeacherApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.teacherApplication.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    await prisma.teacherApplication.delete({
      where: { id: parseInt(id) },
    });

    return res
      .status(200)
      .json({ message: "Tuition post deleted successfully" });
  } catch (error) {
    console.log("Error in deleteTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getActiveTuitions = async (req, res) => {
  try {
    const { role, id } = req.query;

    let where = {};

    if (role && id) {
      if (role === "teacher") {
        where.teacherId = Number(id);
      } else if (role === "student") {
        where.studentId = Number(id);
      }
    }

    const tuitions = await prisma.assignedTeacherStudent.findMany({
      where,
      include: {
        tuitionPost: true,
        student: {
          select: {
            name: true,
            address: true,
            contact: true,
            gender: true,
          },
        },
        teacher: {
          select: {
            name: true,
            contact: true,
            gender: true,
          },
        },
      },
    });

    const areaIds = [
      ...new Set(
        tuitions
          .map((t) => t.tuitionPost?.area)
          .filter(Boolean)
          .map(Number),
      ),
    ];

    const statusIds = [
      ...new Set(
        tuitions
          .map((t) => t.tuitionPost?.status)
          .filter(Boolean)
          .map(Number),
      ),
    ];

    const subjectIdList = [
      ...new Set(tuitions.flatMap((t) => t.tuitionPost?.subjects || [])),
    ];

    const [areas, statuses, subjects] = await Promise.all([
      prisma.lookup.findMany({
        where: { id: { in: areaIds } },
        select: { id: true, value: true },
      }),
      prisma.lookup.findMany({
        where: { id: { in: statusIds } },
        select: { id: true, value: true },
      }),
      prisma.lookup.findMany({
        where: { id: { in: subjectIdList } },
        select: { id: true, value: true },
      }),
    ]);

    const result = tuitions.map((tuition) => {
      const post = tuition.tuitionPost;

      if (!post) return tuition;

      const areaObj = areas.find((a) => a.id === Number(post.area));
      const statusObj = statuses.find((s) => s.id === Number(post.status));

      const postSubjects = (post.subjects || [])
        .map((id) => subjects.find((s) => s.id === Number(id)))
        .filter(Boolean);

      return {
        ...tuition,
        tuitionPost: {
          ...post,
          area: areaObj ?? post.area,
          status: statusObj ?? post.status,
          subjects: postSubjects,
        },
      };
    });

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getActiveTuitions", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};
