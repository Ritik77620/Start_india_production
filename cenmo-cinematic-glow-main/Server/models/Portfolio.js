import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model("Portfolio", portfolioSchema);
