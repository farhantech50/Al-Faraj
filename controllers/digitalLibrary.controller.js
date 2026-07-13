import prisma from "../config/dbConfig.js";
import { uploadToCloudinary } from "../config/uploadToCloudinary.js";

export const createLibraryItem = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    const result = await uploadToCloudinary(
      req.file.buffer,
      req.file.originalname,
    );

    const item = await prisma.digitalLibrary.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        fileUrl: result.secure_url,
        fileName: req.file.originalname,
      },
    });

    return res.status(201).json(item);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Internal server error" });
  }
};
export const getLibraryItems = async (req, res) => {
  try {
    const items = await prisma.digitalLibrary.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateLibraryItem = async (req, res) => {
  try {
    const item = await prisma.digitalLibrary.update({
      where: { id: Number(req.params.id) },
      data: {
        title: req.body.title,
        description: req.body.description,
        fileUrl: req.body.fileUrl,
        fileName: req.body.fileName,
      },
    });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteLibraryItem = async (req, res) => {
  try {
    await prisma.digitalLibrary.delete({
      where: { id: Number(req.params.id) },
    });

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
