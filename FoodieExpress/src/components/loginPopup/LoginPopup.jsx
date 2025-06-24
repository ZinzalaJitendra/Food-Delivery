import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState('Login')

    return (
        <div className='absolute z-10 w-full h-full bg-[#00000090] grid '>
            <form className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[30px] py-[25px] border rounded-lg text-[14px] '>
                <div className='flex justify-between items-center text-black'>
                    <h2>{currState}</h2>
                    <img className='w-[16px] cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className='flex flex-col gap-[20px]'>
                    {currState === 'Login' ? <></> : <input className='outline-none border border-[#c9c9c9] p-[10px] rounded-[4px] text-[#181818]' type="text" placeholder='Your name' required />}
                    <input className='outline-none border border-[#c9c9c9] p-[10px] rounded-[4px] text-[#181818]' type="email" placeholder='Your email' required />
                    <input className='outline-none border border-[#c9c9c9] p-[10px] rounded-[4px] text-[#181818]' type="password" placeholder='Password' required />
                </div>
                <button className='border-none p-[10px] rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className='flex items-start gap-[8px] -mt-[15px]'>
                    <input className='mt-[5px]' type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>

                {currState === 'Login' ? <p onClick={()=> setCurrState('Sign Up')}>Create a new account? <span className='text-[tomato] font-medium cursor-pointer'>Click here</span></p> : <p onClick={()=> setCurrState('Login')}>Already have an account? <span className='text-[tomato] font-medium cursor-pointer'>Login here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup
