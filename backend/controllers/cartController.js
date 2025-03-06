import userModel from "../models/userModel.js"

//add items to user carts
const addToCart = async(req,res)=>{


    
    
    try{
         
       
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        const userId = req.body.userId;
        
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        const updatedUser = await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to Cart : "+cartData[req.body.itemId],message2:"userInfo : "+updatedUser,message3:"userId : "+userId});

        //Sample Check

 
        // const itemId=req.body.itemId;
        // let userData = await userModel.findOne({_id:req.body.userId})
        // let cartData = await userData.cardData;
        // // if(!itemId){
        // //     return res.json({success:false,message:"Item Id Doesn't exist"})
        // // }else{
        // //     return res.json({success:true,message:"Item Id : "+itemId})
        // // }
        // if(!userData){
        //     return res.json({success:false,message:"user token not provide ", error:error.message})
        // }else{
        //     return res.json({success:true,message:"Cart Data : "+cartData})
        // }

        // if (!req.body || !req.body.productId) {
        //     return res.status(400).json({ success: false, message: "Product ID is required ",error:error.message });
        // }

      


        // //from chatGPT
        // const { userId, itemId } = req.body;

        // // Check if userId is provided
        // if (!userId) {
        //     return res.json({ success: false, message: "userId is missing in the request" });
        // }

        // // Fetch user data
        // let userData = await userModel.findOne({ _id: userId });
        // if (!userData) {
        //     return res.json({ success: false, message: "User not found" });
        // }

        // // Ensure cartData is an object
        // let cartData = userData.cartData;

        // // Add or update item quantity
        // if (!cartData[itemId]) {
        //     cartData[itemId] = 1; // If item doesn't exist, set to 1
        // } else {
        //     cartData[itemId] += 1; // If item exists, increment
        // }

        // // Update cart in database
        // const updatedUser = await userModel.findByIdAndUpdate(
        //     userId,
        //     { $set: { cartData } },
        //     { new: true }
        // );

        // res.json({ success: true, message: "Added to Cart : "+cartData[itemId]});
        
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Internal server error : ",error:error.message});
      
    }
}

//remove items from user carts
const removeFromCart = async (req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
      
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});

        res.json({success:true,message:"removed from cart"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error",error:error.message})
    }       
}

//fetch user cart data
const getCart = async(req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error : "+error.message})

    }

}

export {addToCart,removeFromCart,getCart}


