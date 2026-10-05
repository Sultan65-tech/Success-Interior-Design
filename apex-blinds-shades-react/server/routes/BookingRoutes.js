import express from "express"
import { addBooking, getBooking } from "../controllers/BookingController.js"

const router = express.Router()

router.get("/",getBooking)
router.post("/",addBooking)


export default router;