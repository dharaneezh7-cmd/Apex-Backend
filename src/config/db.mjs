import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
export const db = async ()=>
{
    try
    {
        console.log("Connecting DB...")
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB has connected");
    }
    catch (e) 
    {
        console.error("Database connection failed:", e);
        process.exit(1);
    }
}