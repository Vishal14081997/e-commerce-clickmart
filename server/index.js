import express from "express";
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import adminRouter from "./routes/admin.route.js"


import cors from "cors"
dotenv.config();

const app = express();
dbConnect()

app.use(cors())
app.use(express.json())

app.use("/auth",authRouter)
app.use("/admin", adminRouter)


app.listen(process.env.PORT , ()=>{
    console.log(`server start ${process.env.PORT}`);
})

