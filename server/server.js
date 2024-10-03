import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js"
import userRoutes from "./routes/userRoute.js"
import postRoutes from "./routes/postRoute.js"
import notificationRoutes from "./routes/notificationRoute.js"
import connectionRoutes from "./routes/connectionRoute.js"
import cors from "cors"
import cookieParser  from "cookie-parser";
import { connectDB } from "./lib/db.js";

dotenv.config()

const app=express();
const PORT=process.env.PORT || 5000

app.use(express.json({linit:"5mb"})) //for images
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/posts",postRoutes)
app.use("/api/v1/notifications",notificationRoutes)
app.use("/api/v1/connections",connectionRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})