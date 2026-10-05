import Booking from "../models/BookingModel.js";

export const getBooking = async(req,res)=>{
    try {
        // Ceck category
        const  Category = req.query.category;

        let query = {}
         
         if(Category && Category !== "all"){
            query.category = Category;
         }

        const Bookings = await Booking.find(query).sort({createdAt: -1})
        res.status(200).json(Bookings)
    } catch (error) {
        res.status(400).json({message:"Error in Booking Controller. "})
        console.log("Error in Booking Controller.",error);
    
}
}

export const addBooking = async(req,res)=>{
    const {service,date,time,name,phone,email,address,description} = req.body;
    try {
        const AddedBooking =  new Booking({
            service,
            date,
            time,
            name,
            phone,
            email,
            address,
            description
        })
        await AddedBooking.save()
        res.status(200).json({message:"Added Booking",AddedBooking})
        
    } catch (error) {
        res.status(400).json({message:"Error while trying to add booking"})
        console.log("Error in Adding Booking: " + error);
        
    }
}
