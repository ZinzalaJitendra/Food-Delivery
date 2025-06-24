import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' className='text-center mt-[100px] m-auto text-[max(3vw,20px)] font-medium'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className='flex justify-center items-center gap-[max(2vw,10px)] mt-[40px]'>
      <img className='w-[max(30vw,120px)] max-w-[180px] cursor-pointer hover:transform hover:scale-[1.05] transition duration-200 ease-in' src={assets.play_store} alt="play store img" />
      <img className='w-[max(30vw,120px)] max-w-[180px] cursor-pointer hover:transform hover:scale-[1.05] transition duration-200 ease-in' src={assets.app_store} alt="app store img" />
      </div>
    </div>
  )
}

export default AppDownload
