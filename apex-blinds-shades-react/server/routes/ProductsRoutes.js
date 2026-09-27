import express from "express"
import { getOneProducts, getProducts,postProducts, updateProducts } from "../controllers/ProductsController.js";


const router = express.Router();

router.get("/",getProducts)
router.get("/:id",getOneProducts)
router.post("/",postProducts)
router.patch("/:id",updateProducts)

export default router;