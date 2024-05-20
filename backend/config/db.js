import mongoose from 'mongoose';

export const connectdb = async()=>{
    await mongoose.connect('mongodb+srv://jasmeet13112001:wtpukdz0wv@cluster0.eltqu6y.mongodb.net/food-delivery-app').then(()=>{
        console.log("Database connected");
    })
}
// mongodb+srv://jasmeet13112001:wtpukdz0wv@cluster0.tscjddm.mongodb.net/food-delivery-app
// mongodb+srv://jasmeet13112001:wtpukdz0wv@cluster0.eltqu6y.mongodb.net/food-delivery-app