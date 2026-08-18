import express from "express"
import { createCategory, getAllCategory,getSingleCategory, updateCategory,imageUpload } from "../controllers/admin.controller.js";
import verifyToken from "../middleware/verify.middleware.js";
import upload from "../middleware/upload.middleware.js";
import uploadToCloudinary from "../middleware/cloudinary.middleware.js";

const router = express.Router()
 
router.post("/create-category",verifyToken, upload.single("category_image"), uploadToCloudinary, createCategory)
router.get("/get-all-category", verifyToken, getAllCategory)
router.get("/get-category/:id", verifyToken, getSingleCategory)
router.patch("/update-category/:id",verifyToken, updateCategory)
router.post("/image_upload" ,upload.single("image"), imageUpload)

export default router;