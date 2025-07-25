import mongoose from "mongoose";

//schema for describe food model
const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true}
})

// using this schema we want create the model
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;
