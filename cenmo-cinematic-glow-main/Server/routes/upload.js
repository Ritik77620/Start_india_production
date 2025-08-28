import express from "express";
import multer from "multer";
import path from "path";
import Portfolio from "../models/Portfolio.js";

const router = express.Router();

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// GET all portfolio items
router.get("/", async (req, res) => {
  try {
    const items = await Portfolio.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST upload file
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { category } = req.body;
    if (!category) return res.status(400).json({ message: "Category is required" });
    if (!req.file) return res.status(400).json({ message: "File is required" });

    const newItem = new Portfolio({
      title: req.file.originalname,
      category,
      type: req.file.mimetype.startsWith("video") ? "video" : "photo",
      image: `/uploads/${req.file.filename}`,
      description: "Uploaded file"
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
