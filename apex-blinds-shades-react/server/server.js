import express from "express"
// import cors from "cors"
import dotenv from "dotenv/config"
import { ConnectDB } from "./config/db.js"
import ProductRoutes from "./routes/ProductsRoutes.js"
import BookingRoutes from "./routes/BookingRoutes.js"


const app = express()
const PORT = process.env.PORT

// app.use(cors())
app.use(express.json())
app.use("/api/products",ProductRoutes)
app.use("/api/bookings",BookingRoutes)



app.get("/",(req,res)=>{
    res.send("Hello There!")
})




ConnectDB();
app.listen(PORT,()=>{
    console.log("Server is up and running");
})