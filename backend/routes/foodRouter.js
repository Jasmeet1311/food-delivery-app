import express from 'express';
import { addFood, listfood, removeFood } from '../controllers/food-controllers.js';
import multer from 'multer'; // For creating image storing system

const foodRouter = express.Router();

// Image storing logic
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listfood)
foodRouter.post("/remove",removeFood)



export default foodRouter;