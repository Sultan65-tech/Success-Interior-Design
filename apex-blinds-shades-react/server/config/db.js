import mongoose from "mongoose"

export const ConnectDB =()=>{
    console.log("Database Connected!");
    
    mongoose.connect("mongodb://localhost:27017/WindowBlindDB")
}