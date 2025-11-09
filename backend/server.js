import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Db connection
connectdb();    

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


app.get("/",(req,res)=>{
    res.send("API Working")
})
// mongodb+srv://jasmeet13112001:wtpukdz0wv@cluster0.tscjddm.mongodb.net/?
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})