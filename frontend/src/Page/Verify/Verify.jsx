import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'
import './Verify.css'
import { Storecontext } from '../../Context/Storecontext';
import axios from 'axios';

const Verify = () => {

const [searchParams, setSearchParams]= useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(Storecontext);
    const navigate = useNavigate();

    // console.log(success,orderId);
    const verifyPayment = async () =>{
      const response = await axios.post(url+"/api/order/verify",{success,orderId})
      // const resp = await axios.post(url+"api/order/remove",{success:false,orderId})
      if(response.data.success){
        navigate("/myorders");

      }else{
        navigate("/")
        
        
      }
    }
    useEffect(()=>{
      verifyPayment();
    },[])

  return (
    <div className='verify'>
       <div className="spinner"></div>
      
    </div>
  )
}



export default Verify
