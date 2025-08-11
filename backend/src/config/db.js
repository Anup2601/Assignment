import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () =>   {
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas Connected Successfully");
  } catch (err) {
    console.log(`MongoDB Atlas Connection Failed : ${err.message}`);
  }
};

export default connectDB;
