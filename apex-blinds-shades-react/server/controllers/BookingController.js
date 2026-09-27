import Booking from "../models/BookingModel.js";

export const getBooking = async(req,res)=>{
    try {
        const Bookings = await Booking.find({})
        res.status(200).json(Bookings)
    } catch (error) {
        res.status(400).json({message:"Error in Booking Controller. "})
        console.log("Error in Booking Controller.",error);
    
}
}

export const addBooking = async(req,res)=>{
    const {service,date,time,name,phone,email,address,note} = req.body;
    const 
}
