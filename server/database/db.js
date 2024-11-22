import mongoose from "mongoose";

  const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Authentication",
    });

    console.log("MongoDB Connected !!👌");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;