import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";
  const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
  };
  await mongoose.connect(uri, options);
  console.log("MongoDB connected");
  return mongoose.connection;
};

export default connectDB;
