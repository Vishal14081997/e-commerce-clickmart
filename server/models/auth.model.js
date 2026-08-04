import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    user_name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    phone_no: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 6
    },
    profile_pic: {
        type: String
    },
    userType: {
        type: String,
        enum: ["Admin", "Customer"],
        default: "Customer"
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }

});
const User = mongoose.model("users", userSchema)
export default User;