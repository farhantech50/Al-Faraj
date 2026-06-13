import prisma from "../config/dbConfig.js";

export const createStudentProfile = async (req, res) => {
  try {
    const { gradeLevel, institution, userId, contact } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const existing = await prisma.studentProfile.findUnique({
      where: { userId },
    });

    if (existing) {
      return res.status(400).json({ error: "Student profile already exists" });
    }

    const profile = await prisma.studentProfile.create({
      data: {
        userId,
        gradeLevel,
        institution,
        contact,
      },
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    return res.status(201).json(profile);
  } catch (error) {
    console.log("Error in createStudentProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateStudentProfile = async (req, res) => {
  try {
    const { gradeLevel, institution, userId, contact } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const existing = await prisma.studentProfile.findUnique({
      where: { userId },
    });

    if (!existing) {
      return res.status(404).json({ error: "Student profile not found" });
    }

    const profile = await prisma.studentProfile.update({
      where: { userId },
      data: {
        gradeLevel,
        institution,
        contact,
      },
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    return res.status(200).json(profile);
  } catch (error) {
    console.log("Error in updateStudentProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMyStudentProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await prisma.studentProfile.findUnique({
      where: { userId },
      include: {
        user: {
          select: { id: true, name: true, email: true, contact: true },
        },
      },
    });

    if (!profile) {
      return res.status(404).json({ error: "Student profile not found" });
    }

    const gradeDetails = await prisma.lookup.findUnique({
      where: { id: profile.gradeLevel },
      select: { id: true, value: true },
    });

    return res.status(200).json({
      ...profile,
      gradeLevel: gradeDetails || null,
    });
  } catch (error) {
    console.log("Error in getMyStudentProfile", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await prisma.studentProfile.findUnique({
      where: { userId: parseInt(id) },
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    if (!profile) {
      return res.status(404).json({ error: "Student profile not found" });
    }
    const gradeDetails = await prisma.lookup.findUnique({
      where: { id: profile.gradeLevel },
      select: { id: true, value: true },
    });

    return res.status(200).json({
      ...profile,
      gradeLevel: gradeDetails || null,
    });
  } catch (error) {
    console.log("Error in getStudentById", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.studentProfile.findMany({
      include: {
        user: { select: { id: true, name: true, email: true, contact: true } },
      },
    });

    return res.status(200).json(students);
  } catch (error) {
    console.log("Error in getAllStudents", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getMyTuitionPosts = async (req, res) => {
  try {
    const id = req.user.id;
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

    if (id) {
      where.postedBy = parseInt(id);
    }
    if (status) {
      where.status = parseInt(status);
    }
    if (area) {
      where.area = parseInt(area);
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }
    if (subjectIds) {
      where.subjects = {
        some: {
          subjectId: { in: subjectIds.split(",").map((id) => parseInt(id)) },
        },
      };
    }
    if (budgetFrom || budgetTo) {
      where.budget = {
        ...(budgetFrom && { gte: parseFloat(budgetFrom) }),
        ...(budgetTo && { lte: parseFloat(budgetTo) }),
      };
    }
    if (fromDate && toDate) {
      where.createdAt = {
        gte: new Date(fromDate),
        lte: new Date(toDate),
      };
    } else if (fromDate) {
      where.createdAt = { gte: new Date(fromDate) };
    } else if (toDate) {
      where.createdAt = { lte: new Date(toDate) };
    }

    const take = limit ? Number(limit) : undefined;
    const skip = page && limit ? (Number(page) - 1) * Number(limit) : undefined;

    const posts = await prisma.tuitionPost.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: "desc" },
    });
    const total = await prisma.tuitionPost.count({ where });

    const areaIds = posts.map((p) => parseInt(p.area));
    const statusIds = posts.map((p) => parseInt(p.status));
    const subjectIdList = posts.flatMap((p) => p.subjects);

    const areas = await prisma.lookup.findMany({
      where: { id: { in: areaIds } },
      select: { id: true, value: true },
    });
    const statuses = await prisma.lookup.findMany({
      where: { id: { in: statusIds } },
      select: { id: true, value: true },
    });
    const subjects = await prisma.lookup.findMany({
      where: { id: { in: subjectIdList } },
      select: { id: true, value: true },
    });

    const result = posts.map((post) => {
      const areaObj = areas.find((a) => a.id === post.area);
      const statusObj = statuses.find((a) => a.id === post.status);
      const postSubjects = post.subjects
        .map((id) => subjects.find((s) => s.id === id))
        .filter(Boolean);

      return {
        ...post,
        area: areaObj.value ?? post.area,
        status: statusObj.value ?? post.status,
        subjects: postSubjects.map((a) => a.value) ?? post.subjects,
      };
    });

    return res.json({
      data: result,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / take),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
