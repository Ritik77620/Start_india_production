import User from "../models/User.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().lean();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "name and email are required" });
    }
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (err) {
    // handle duplicate email nicely
    if (err.code === 11000) {
      return res.status(409).json({ error: "Email already exists" });
    }
    next(err);
  }
};


