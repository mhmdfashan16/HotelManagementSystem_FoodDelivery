import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets'
import {Link,useNavigate} from 'react-router-dom'
import { Storecontext } from '../../Context/Storecontext'


const Navbar = ({setShowLogin}) => {
    const [menu, setMenu]=useState("home");
    // const[getTotalCartAmount]=useContext(Storecontext);
    const {getTotalCartAmount,token,setToken} = useContext(Storecontext);
    
    // const navigate = useNavigate();
    const navigate = useNavigate();
    
    const logOut = ()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");

    }
    const profileChangeHandler = ()=>{


    }



  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.feastify_logo} className='logo'/></Link>
       <ul className='navbar_menu'>
        
        {/* <li onClick={()=>{setMenu("home")}} className={menu==="home"?"act":""}><Link to='/'>home</Link> </li>
        <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?"act":""}><Link to='/menu'>menu</Link></li>
        <li onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"act":""}><Link to='mobile-app'>mobile-app</Link></li>
        <li onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"act":""}><Link to='footer'>contact-us</Link></li> */}
        
        <Link onClick={()=>{setMenu("home")}} className={menu==="home"?"act":""}>home</Link>
        <a href='#explore_menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"act":""}>menu</a>
        <a href='#app_download' onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"act":""}>mobile-app</a>
        <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"act":""}>contact-us</a>
        
       </ul>
       <div className="navbar_right">
        <img src={assets.search_icon}/>
        <div className="navbar_search_icon">
            <Link to='/cart'><img src={assets.basket_icon}/></Link>
            {/* <div className={getTotalCartAmount()?"":"dot"}></div> */}
          <div className={getTotalCartAmount()?"dot":""}></div>
            {/* <div className="dot"></div> */}
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :<div className='navbar-profile'>
           {/* <Link to='profile-image'><img src={assets.profile_icon}  alt="" /></Link>  */}
           <img src={assets.profile_icon} />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
        
       </div>
       {/* <div className="navbar_left">

       </div> */}

    </div>
    
  )
}

export default Navbar
