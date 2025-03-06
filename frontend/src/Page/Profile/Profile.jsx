import React, { useState } from 'react'
import './Profile.css'
import { assets } from '../../Assets/assets'

const Profile = (url) => {
    const [image,setImage]=useState(false);
    const onSubmit =()=>{
        
    }
  return (
    <div className='profile'>
        <div className="profile-left">
            <h2>User Profile</h2>
            <p>User Info</p>
            <p>Favorite</p>
            <p>Watchlist</p>
            <p>Setting</p>
            <p>Notification</p>

        </div>
        <div className="profile-right">
            <div className="profile-icon-info">
                <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.profile_icon } alt=""/>
                </label>
                <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" id='image' hidden/>
            
            <p>Mohammed Fashan</p>

            </div>
            <div className="name">
                <form className='formTag' action="">
                    <div className="user-info">
                        <div className="userinfo-left">
                            <label htmlFor="">Name</label><input type="text" placeholder='Fashan' />
                            <label htmlFor=""> Email Address</label><input type="email" placeholder='abc12@gmail.com' />
                            <label htmlFor="">Location</label><input type="text" placeholder='e.g.New York,USA' />

                        </div>
                        <div className="userinfo-right">
                            <label htmlFor="">Full Name</label><input type="text" placeholder='Mohammed Fashan' />
                            <label htmlFor="">Phone Number</label><input type="Number" placeholder='+94776854025' />
                            <label htmlFor="">Postal Code</label><input type="Number" placeholder='234567'/>
                        </div>
                    </div>
                </form>
                <button className='submit-btn'>Save Changes</button>
               
            </div>
            
            

        </div>


      
    </div>
  )
}

export default Profile
