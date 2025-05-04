import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Page/Home/Home'
import Cart from './Page/Cart/Cart'
import Placeorder from './Page/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import Loginpopup from './Components/Loginpopup/Loginpopup'
import Profile from './Page/Profile/Profile'
import Verify from './Page/Verify/Verify'
import MyOrders from './Page/MyOrders/MyOrders'

//test
function App() {
  const [count, setCount] = useState(0)
  const [showLogin, setShowLogin]= useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path='/profile-image' element={<Profile/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='myorders' element={<MyOrders/>}/>
        
      </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App
