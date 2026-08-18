import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = async (req, res, next) => {
try {
    const result = await cloudinary.uploader.upload(req.file.path, {
        folder:"e-commerce-clickmart"
    } )
    console.log("result",result);
    req.imageUrl = result.secure_url
    next()
} catch (error) {
    next(error)
}
}
export default uploadToCloudinary;