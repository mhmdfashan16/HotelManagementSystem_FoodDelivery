import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../Context/Storecontext'
import {useNavigate}from 'react-router-dom'

const Cart = () => {
  const{cartItems, food_list,removeFromCart,addProductCount,getTotalCartAmount,url} = useContext(Storecontext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart_items">
        <div className="cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          <p>Add</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item)=>{
            if(cartItems[item._id]>0)
          {  
            return(
              <div key={item._id}>
                <div className='cart_items_title cart_items_item' >
                {/* <p>{item.name}</p> */}
                <img src={url+"/images/"+item.image}/>
                <p>{item.name}</p>
                <p>Rs:{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs:{item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                <p onClick={()=>addProductCount(item._id)} className='addProduct' >+</p>
              </div>
              <hr/>

              </div>
              
              )
            }
        })}
        
              <div className="cart_bottom">
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
                        <p>Rs: {getTotalCartAmount()===0?0:getTotalCartAmount()+100}</p>

                      </div><hr/>
                      
                    </div>
                    {/* <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button> */}
                    {/* <button onClick={getTotalCartAmount()===0?{}:()=>navigate('/order')}>PROCEED TO CHECKOUT</button> */}
                    <button onClick={getTotalCartAmount()===0?()=>{}:()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart_promocode">
                  <div>
                     <p>If you have a promo code, Enter it here</p>
                     <div className="cart_promocode_input">
                      <input type='text' placeholder='promocode'/>
                      <button>Submit</button>
                     </div>
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default Cart
