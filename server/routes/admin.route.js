import express from "express"
import { AddCategory, AddProduct, deleteCategory, getAllCategory, getSingleCategory, updateCategory, getAllProducts, getDashboard } from "../controllers/admin.controller.js";
import verifyToken from "../middleware/verify.middleware.js";
import upload from "../middleware/upload.middleware.js";
import uploadToCloudinary from "../middleware/cloudinary.middleware.js";

const router = express.Router()

router.post("/create-category", verifyToken, upload.single("category_image"), uploadToCloudinary, AddCategory)
router.get("/get-all-category", verifyToken, getAllCategory)
router.get("/get-category/:id", verifyToken, getSingleCategory)
router.patch("/update-category/:id", verifyToken, upload.single("category_image"), uploadToCloudinary, updateCategory);
router.delete("/delete-category/:id", verifyToken, deleteCategory);

router.post("/create-product", upload.single("product_image"), uploadToCloudinary, verifyToken, AddProduct)
router.get("/get-all-products", verifyToken, getAllProducts)
router.get("/get-dashboard",verifyToken, getDashboard)

export default router;