import React, { useContext, useState } from 'react'
import './Fooddisplay.css';
import { Storecontext } from '../../Context/Storecontext';
import Fooditem from '../Fooditem/Fooditem';

const Fooddisplay = ({category}) => {


    const{food_list}= useContext(Storecontext)

  return (
    <div className='food_display' id='food_display'>
      <h2>Top Dishes Near You!</h2>
      <div className="food_display_list">
        {/* {food_list.map((item,index){
            return <Fooditem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
        })} */}
        {food_list.map((item,index)=>{
            if(category==="All" || category===item.category){
                return <Fooditem key={index} id={item._id} name={item.name}  price={item.price}  description={item.description}image={item.image}/>
            }

           
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
