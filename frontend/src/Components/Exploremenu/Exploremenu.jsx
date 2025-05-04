import React from 'react'
import './Exploremenu.css'
import {menu_list}from '../../Assets/assets'

const Exploremenu = ({category,setCategory}) => {

  return (
    <div className='explore_menu' id='explore_menu'>
        <h1>Explore our menu</h1>
        <p className='explore_menu_text'>
            Explore Our Menu  
            Discover delicious dishes from top restaurants near you.  
            From hearty meals to sweet treats, there’s something for everyone.  
            Easy to browse, quick to order — satisfy your cravings today! 
        </p>
        <div className="explore_menu_list">
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore_menu_list_item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default Exploremenu
