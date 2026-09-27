import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    category:{type:String,required:true},
    features:{
        type:[String]
    },
    description:{type:String,required:true},
},{timestamps:true})

const Product = new mongoose.model("Producr",ProductSchema)

export default Product