import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () =>   {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    await connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas Connected Successfully");
  } catch (err) {
    if (err instanceof Error) {
      console.log(`MongoDB Atlas Connection Failed : ${err.message}`);
    } else {
      console.log("MongoDB Atlas Connection Failed with an unknown error");
    }
  }
};

export default connectDB;
