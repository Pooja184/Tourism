import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';
// import { User } from '../models/user.model.js';
// import express from 'express';



const connectDB = async () => {
    try{
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); // This is the connection string   
         console.log(`MongoDB connected !! HOST :${connectionInstance.connection.host}`);    
        //  console.log(DB_NAME);
    }catch(err){
        console.error("MongoDB connection FAILED: ", err);
        process.exit(1);
    }
}
export default connectDB;