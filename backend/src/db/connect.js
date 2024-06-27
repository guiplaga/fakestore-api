import mongoose from "mongoose";
import "dotenv/config.js";

export const connect = () => {
  mongoose.connect(process.env.CONNECTION_STRING);
  console.log("Connected to mongoose");
};
