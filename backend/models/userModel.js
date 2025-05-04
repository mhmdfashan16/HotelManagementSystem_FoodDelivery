import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String, required:true},
    cartData:{type:Object,default:{}},
    //image:{type:String, required:true},
    


},{minimize:false})

// changed model into models
const userModel = mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;
