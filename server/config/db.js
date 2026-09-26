import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connect");
    } catch (error) {
        console.log("mongodb error", error);
    }
};

export default dbConnect;

