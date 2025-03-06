import React, { useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../Assets/assets'
import { Storecontext } from '../../Context/Storecontext'
import axios from "axios"

const Loginpopup = ({setShowLogin}) => {

    const {url,setToken}=useContext(Storecontext)

    const[currentState, setCurrentState]=useState("Sign Up")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    // useEffect(()=>{
    //     console.log(data);
    // },[data])
    const onLogin = async (event)=>{
        event.preventDefault()
        let newUrl = url;
        if(currentState==="Login"){
            newUrl += "/api/user/Login"
        }else{
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);

        if(response.data.success){

            setToken(response.data.token);
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)

        }else{
            alert(response.data.message);
        }


    }

  return (
    <div className='login_popup'>
        <form onSubmit={onLogin} className='login_popup_container'>
            <div className="login_popup_title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>

            </div>
            <div className="login_popup_input">
                {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your Name' required/>}
               
                <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='your password' required/>
            </div>
            <button type='submit'>{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login_popup_condition">
                <input type='checkbox' required/>
                <p>By Continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>{setCurrentState("Sign Up")}}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>{setCurrentState("Login")}}>Login here</span></p>
            }
            
            
        </form>
      
    </div>
  )
}

export default Loginpopup
