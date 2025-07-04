import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="copyright">

        
        <div className="footer_content">
            <div className="footer_content_left">
            <img src={assets.feastify_logo}/>
            <p>
            At Feastify, we're passionate about connecting you with your favorite meals from the best local restaurants. Whether it's a quick bite or a gourmet dinner, we deliver freshness, flavor, and satisfaction right to your doorstep. With a seamless ordering experience and reliable service, we're here to make every meal effortless and enjoyable.
            </p>
            
            </div>
            <div className="footer_content_center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer_content_right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94776854025</li>
                    <li>mohammedfashan16@gmail.com</li>
                </ul>

            </div>
           
            
                
        </div>
        <hr className='line-one'/>
        <div className="footer_social_icon">
                <div className="icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
                <div className="details">
                    <p>Mohhammed Fashan</p>
                    <p>mhmdFshn16</p>
                    <p>Mohammed Fashan</p>
                </div>
        </div>
        <hr className='line'/>
        <div className="line-div">
        
        <p className="footer_copyright">Copyright 2024 @ Tomoto.com - All Right Reserved.</p>
        </div>
       
        </div>

      
        

        
       
        
      
    </div>
    
  )
}

export default Footer
