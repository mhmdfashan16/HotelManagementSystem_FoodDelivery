import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../Assets/assets'
import { Storecontext } from '../../Context/Storecontext'

const Fooditem = ({id, name, price, description, image}) => {
    const [itemCount, setItemCount] = useState(0)
    const {cartItems,addToCart,removeFromCart,url} = useContext(Storecontext);


  return (
    <div className='food_item'>
      <div className="food_item_image_container">
        <img className='food_item_image' src={url+"/images/"+image}/>
        {

            !cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
            :<div className="food_item_counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
                
            </div>
            // !itemCount
            // ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white}/>
            // :<div className="food_item_counter">
            //     <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red}/>
            //     <p>{itemCount}</p>
            //     <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green}/>
            
            // </div>
        }
        
      </div>
      <div className="food_item_info">
        <div className="food_item_info_rating">
            <p>{name}</p>
            <img src={assets.star_icon}/>
        </div>
        <p className="food_item_description">{description}</p>
        <p className="food_item_price">Rs: {price}</p>
      </div>
    </div>
  )
}

export default Fooditem
