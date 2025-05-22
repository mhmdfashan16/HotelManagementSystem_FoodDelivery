import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import {food_list} from '../Assets/assets';

export const Storecontext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token,setToken]=useState("");
    const [food_list,setFoodList]=useState([]);

    const addToCart = async (itemId)=>{
        if(!cartItems[itemId]){                                                                                      
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const addProductCount= async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
      
    }
    const removeFromCart = async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;1
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price*cartItems[item];
            }
           
        }
        return totalAmount;
    }

    const fetchFoodList = async ()=>{
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
    }
    // const loadCartData = async(token)=>{
    //     try{
    //     const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    //     setCartItems(response.data.cartData);

    //     }catch(error){
    //     console.error("Failed to load cart data:", error);
    //     setCartItems({});

    //     }
        
    // }
    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            console.log("Cart Data:", response.data.cartData); // Debug log
            setCartItems(response.data.cartData || {}); 
        } catch (error) {
            console.error("Error loading cart:", error);
            setCartItems({});
        }
    };

    useEffect(()=>{
       
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
        
    },[])

    const contexValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        addProductCount,
        url,
        token,
        setToken
    }
    return(
        <Storecontext.Provider value={contexValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StoreContextProvider;