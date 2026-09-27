import express from "express"
import { getBooking } from "../controllers/BookingController.js"

const router = express.Router()

router.get("/",getBooking)

export default router;