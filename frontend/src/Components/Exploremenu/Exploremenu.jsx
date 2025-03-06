import React from 'react'
import './Exploremenu.css'
import {menu_list}from '../../Assets/assets'

const Exploremenu = ({category,setCategory}) => {

  return (
    <div className='explore_menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore_menu_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque quo error temporibus nisi vitae tempore quibusdam. Omnis doloremque autem optio provident id, porro accusamus nobis, deserunt nisi natus veritatis!</p>
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
