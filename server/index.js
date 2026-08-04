import express from "express";
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
import authRouter from "./routes/auth.route.js"
dotenv.config();

const app = express();
dbConnect()

app.use(express.json())
app.use(authRouter)

app.listen(process.env.PORT , ()=>{
    console.log(`server start ${process.env.PORT}`);
})

