import prisma from "../config/dbConfig.js";

export const getLookupByName = async (req, res) => {
  try {
    const { name } = req.params;

    const values = await prisma.lookup.findMany({
      where: { name, isActive: true },
      select: { id: true, value: true },
    });

    return res.status(200).json(values);
  } catch (error) {
    console.log("Error in getLookupByName", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const createLookup = async (req, res) => {
  try {
    const data = req.body;

    const result = await prisma.lookup.createMany({
      data,
      skipDuplicates: true,
    });

    return res.status(201).json(result);
  } catch (error) {
    console.log("Error in createLookup", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateLookup = async (req, res) => {
  try {
    const { id } = req.params;
    const { value, isActive } = req.body;

    const existing = await prisma.lookup.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Lookup not found" });
    }

    const lookup = await prisma.lookup.update({
      where: { id: parseInt(id) },
      data: {
        ...(value && { value }),
        ...(isActive !== undefined && { isActive }),
      },
    });

    return res.status(200).json(lookup);
  } catch (error) {
    console.log("Error in updateLookup", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteLookup = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.lookup.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Lookup not found" });
    }

    await prisma.lookup.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: "Lookup deleted successfully" });
  } catch (error) {
    console.log("Error in deleteLookup", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
