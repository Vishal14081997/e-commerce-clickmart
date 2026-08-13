import express from "express"
import { createCategory, getAllCategory,getSingleCategory, updateCategory } from "../controllers/admin.controller.js";

const router = express.Router()
 
router.post("/create-category", createCategory)
router.get("/get-all-category", getAllCategory)
router.get("/get-category/:id", getSingleCategory)
router.patch("/update-category/:id", updateCategory)

export default router;