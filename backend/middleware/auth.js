import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next)=>{
    // res.json({sucess:true,message:"Successfully entered authmiddleware"})

    const {token}=req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login Again"});

    }
    try{
        const token_decode = jwt.verify(token,"random#secret");
        req.body.userId = token_decode.id;
        next();
    }catch(error){
        console.log(error);
        res.json({success:false, message:"Error in token"});

    }

}

export default authMiddleware;