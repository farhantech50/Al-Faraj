import prisma from "../config/dbConfig.js";

export const createTeacherProfile = async (req, res) => {
  try {
    const {
      bio,
      experienceYears,
      educationalBackground,
      cvUrl,
      medium,
      userId,
    } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }
    const existing = await prisma.teacherProfile.findUnique({
      where: { userId },
    });

    if (existing) {
      return res.status(400).json({ error: "Teacher profile already exists" });
    }

    const profile = await prisma.teacherProfile.create({
      data: {
        userId,
        bio,
        experienceYears,
        educationalBackground,
        cvUrl,
        medium,
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    return res.status(201).json(profile);
  } catch (error) {
    console.log("Error in createTeacherProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTeacherProfile = async (req, res) => {
  try {
    const {
      bio,
      experienceYears,
      educationalBackground,
      cvUrl,
      medium,
      userId,
    } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const existing = await prisma.teacherProfile.findUnique({
      where: { userId },
    });

    if (!existing) {
      return res.status(404).json({ error: "Teacher profile not found" });
    }

    const profile = await prisma.teacherProfile.update({
      where: { userId },
      data: {
        bio,
        experienceYears,
        educationalBackground,
        cvUrl,
        medium,
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    });

    return res.status(200).json(profile);
  } catch (error) {
    console.log("Error in updateTeacherProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMyTeacherProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await prisma.teacherProfile.findUnique({
      where: { userId },
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    if (!profile) {
      return res.status(404).json({ error: "Teacher profile not found" });
    }

    return res.status(200).json(profile);
  } catch (error) {
    console.log("Error in getMyTeacherProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await prisma.teacherProfile.findUnique({
      where: { userId: parseInt(id) },
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    if (!profile) {
      return res.status(404).json({ error: "Teacher profile not found" });
    }

    return res.status(200).json(profile);
  } catch (error) {
    console.log("Error in getTeacherById", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.teacherProfile.findMany({
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    return res.status(200).json(teachers);
  } catch (error) {
    console.log("Error in getAllTeachers", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const applyToTuitionPost = async (req, res) => {
  try {
    const { tuitionPostId, coverNote, teacherId } = req.body;

    const tuitionPost = await prisma.tuitionPost.findUnique({
      where: { id: parseInt(tuitionPostId) },
    });

    if (!tuitionPost) {
      return res.status(404).json({ error: "Tuition post not found" });
    }

    if (tuitionPost.status !== 24) {
      return res
        .status(400)
        .json({ error: "Tuition post is not open for applications" });
    }

    const existing = await prisma.teacherApplication.findFirst({
      where: { tuitionPostId, teacherId },
    });

    if (existing) {
      return res
        .status(400)
        .json({ error: "You have already applied to this post" });
    }

    const application = await prisma.teacherApplication.create({
      data: {
        tuitionPostId,
        teacherId,
        coverNote,
      },
    });

    return res.status(201).json(application);
  } catch (error) {
    console.log("Error in applyToTuitionPost", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMyApplications = async (req, res) => {
  try {
    const teacherId = req.user.id;

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

    const applicationWhere = { teacherId };
    if (status) applicationWhere.status = parseInt(status);

    const applications = await prisma.teacherApplication.findMany({
      where: applicationWhere,
      orderBy: { appliedAt: "desc" },
    });

    if (applications.length === 0) {
      return res
        .status(200)
        .json({ data: [], total: 0, page: 1, totalPages: 1 });
    }

    const postIds = applications.map((a) => a.tuitionPostId);
    const statusIds = [...new Set(applications.map((a) => parseInt(a.status)))];

    const postWhere = { id: { in: postIds } };

    if (area) postWhere.area = parseInt(area);

    if (search) {
      postWhere.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (subjectIds) {
      postWhere.subjects = {
        hasSome: subjectIds.split(",").map((id) => parseInt(id)),
      };
    }

    if (budgetFrom || budgetTo) {
      postWhere.budget = {
        ...(budgetFrom && { gte: parseFloat(budgetFrom) }),
        ...(budgetTo && { lte: parseFloat(budgetTo) }),
      };
    }

    if (fromDate && toDate) {
      postWhere.createdAt = { gte: new Date(fromDate), lte: new Date(toDate) };
    } else if (fromDate) {
      postWhere.createdAt = { gte: new Date(fromDate) };
    } else if (toDate) {
      postWhere.createdAt = { lte: new Date(toDate) };
    }

    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const [posts, total] = await Promise.all([
      prisma.tuitionPost.findMany({
        where: postWhere,
        skip,
        take,
        orderBy: { createdAt: "desc" },
      }),
      prisma.tuitionPost.count({ where: postWhere }),
    ]);

    const areaIds = [...new Set(posts.map((p) => parseInt(p.area)))];
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
      const application = applications.find((a) => a.tuitionPostId === post.id);
      const statusObj = statuses.find((s) => s.id === application?.status);
      const postSubjects = post.subjects
        .map((id) => subjects.find((s) => s.id === id))
        .filter(Boolean);
      return {
        ...post,
        area: areaObj ?? post.area,
        applicationStatus: statusObj ?? application?.status,
        appliedAt: application?.appliedAt,
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
    console.log("Error in getMyApplications", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getAssignedStudents = async (req, res) => {
  try {
    const { teacherId } = req.query;

    const students = await prisma.assignedTeacherStudent.findMany({
      where: {
        teacherId: Number(teacherId),
      },
      distinct: ["studentId"],
      select: {
        student: {
          select: { id: true, name: true, email: true, contact: true },
        },
      },
    });

    const result = students.map((s) => ({ user: s.student }));

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in getAssignedStudents", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
