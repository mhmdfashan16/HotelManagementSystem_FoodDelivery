import React, { useContext, useState } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../Context/Storecontext'
import axios from 'axios'

const Placeorder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(Storecontext)
  
  const[formData, setFormData]=useState({
    name:"",
    email:"",
    address:"",
  })

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))

  }
  // useEffect(()=>{
  //   console.log(data);
    
  // },[data])
  const placeOrder = async (event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    // console.log(orderItems);
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+10,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }else{
      alert("Error");
      
      
      
    }
    
  }

  return (
    
      
      <form onSubmit={placeOrder} className='placeorder'>
      <div className="place_order_left">
        <p className="title">Delivery Information</p>
        <div className="multy_field">
          <input  required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
          <input  required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
        <div className="multy_field">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
          <input required name='state' onChange={onChangeHandler} value={data.state || ""} type="text" placeholder='State'/>
        </div>
        <div className="multy_field">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code'/>
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='phone'/>
      </div>
       
        

      <div className="place_order_right">
      <div className="cart_total">
                    <h2>Cart totals</h2>
                    <div>
                    
                      <div className="cart_total_details">
                        <p>Subtotal</p>
                        <p>Rs: {getTotalCartAmount()}</p>
                      </div>
                      <hr/>
                      <div className="cart_total_details">
                        <p>Delivery fee</p>
                        <p>Rs: {getTotalCartAmount()===0?0:100}</p>
                      </div><hr/>
                      <div className="cart_total_details">
                        <p>Total</p>
                        <p>Rs: {getTotalCartAmount()===0?0:getTotalCartAmount()+15}</p>

                      </div>
                      
                    </div>
                    <button type='submit' >PROCEED TO PAYMENT</button>
                </div>

      </div>
      </form>
      
  
  )
}

export default Placeorder
