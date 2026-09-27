import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    service:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    name:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    note:{type:String,required:true}
})

const Booking = new mongoose.model("Booking",BookingSchema);

export default Booking;



















