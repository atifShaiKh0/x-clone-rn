import mongoose from "mongoose";
import dotenv from "dotenv";
import { ENV } from "./env.js";

dotenv.config();

export const connectDB = async () => {

    try{
        await mongoose.connect(ENV.MONGO_URI);
        console.log("Connected to db Successfully");
    }
    catch (error){
        console.log("Error connecting to MONGODB: ", error.message);
        process.exit(1);
    }

}