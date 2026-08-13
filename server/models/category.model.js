import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    CName: {
        type: String,
        trim: true,
        required: true
    },
    CDesc: {
        type: String
    },
    image_url: {
        type: String
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }

},
    { timestamps: true }
)
const Category = mongoose.model("categories", categorySchema)
export default Category;