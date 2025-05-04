import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from "validator"

//Login user
const loginUser = async (req,res)=>{
    const {email, password}=req.body;
    try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"USer doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        
        if(!isMatch){
            return res.json({success:false,message:"Invalid Credential"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"})

    }

}

const createToken = (id)=>{
    return jwt.sign({id},"random#secret")
}

//const registeredUser
const registerUser = async (req,res)=>{
    const {name,email,password}=req.body;
    // let image_filename= `${req.file.filename}`;
    try{
        //Chacking is user already exist
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User Already exist"})
        }
        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter Valid email"})
        }

        if(password.length<8){
            return res.json({success:false, message:"Please Enter Strong Password"})
        }

        //Hashing user Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword,
            // image:image_filename,
        })

       const user = await newUser.save()
       const token = createToken(user._id)
       res.json({success:true,token})


    }catch(error){
        console.log("Error");
        res.json({success:false,message:"Error"})
    }

}

export {loginUser,registerUser}
