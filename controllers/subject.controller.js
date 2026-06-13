import prisma from "../config/dbConfig.js";

export const createSubject = async (req, res) => {
  try {
    const { name, description } = req.body;

    const existing = await prisma.subject.findUnique({
      where: { name },
    });

    if (existing) {
      return res.status(400).json({ error: "Subject already exists" });
    }

    const subject = await prisma.subject.create({
      data: { name, description },
    });

    return res.status(201).json(subject);
  } catch (error) {
    console.log("Error in createSubject", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await prisma.subject.findMany({
      orderBy: { name: "asc" },
    });

    return res.status(200).json(subjects);
  } catch (error) {
    console.log("Error in getAllSubjects", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const existing = await prisma.subject.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Subject not found" });
    }

    const subject = await prisma.subject.update({
      where: { id: parseInt(id) },
      data: { name, description },
    });

    return res.status(200).json(subject);
  } catch (error) {
    console.log("Error in updateSubject", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.subject.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Subject not found" });
    }

    await prisma.subject.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: "Subject deleted successfully" });
  } catch (error) {
    console.log("Error in deleteSubject", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
