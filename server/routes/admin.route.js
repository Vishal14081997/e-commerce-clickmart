import express from "express"
import { createCategory, getAllCategory,getSingleCategory, updateCategory } from "../controllers/admin.controller.js";
import verifyToken from "../middleware/verify.middleware.js";

const router = express.Router()
 
router.post("/create-category",verifyToken, createCategory)
router.get("/get-all-category", verifyToken, getAllCategory)
router.get("/get-category/:id", verifyToken, getSingleCategory)
router.patch("/update-category/:id",verifyToken, updateCategory)

export default router;