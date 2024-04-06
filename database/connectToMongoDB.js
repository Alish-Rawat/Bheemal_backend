import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to MONGODB");
  } catch (error) {
    console.log("Error in connecting MONGODB", error.message);
  }
};

export default connectToMongoDB;
