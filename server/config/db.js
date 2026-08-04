import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/e-commerce");
        console.log("mongodb connect");
    } catch (error) {
        console.log("mongodb error", error);
    }
};

export default dbConnect;

