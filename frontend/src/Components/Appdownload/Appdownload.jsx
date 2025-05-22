import React from 'react'
import './Appdownload.css'
import { assets } from '../../Assets/assets'

const Appdownload = () => {
  return (
    <div className='app_download' id='app_download'>
      <p>For Better Experience Download <br/>Feastify App</p>
      <div className="app_download_plateform">
        <img src={assets.play_store}/>
        <img src={assets.app_store}/>
      </div>
    </div>
  )
}

export default Appdownload
