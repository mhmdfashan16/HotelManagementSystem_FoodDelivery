import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://mohammedfashan:62934521@cluster0.cbht0.mongodb.net/foodcabin').then(()=>console.log("DB Connected"));

}