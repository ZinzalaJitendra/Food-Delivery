import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState('home');
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="flex py-5 justify-between items-center">
      <Link to='/'><img src={assets.logo} className="w-[150px] lg:w-[140px] md:w-[120px]" alt="Food app logo"/></Link>
      <ul className="list-none gap-5 text-[#49557e] lg:flex md:flex lg:gap-[20px] md:gap-[15px] lg:text-[17px] md:text-[16px] hidden" style={{cursor: 'pointer'}}>
        <Link to='/'  onClick={()=>setMenu('home')} className={menu === 'home' ? 'pb-0.5 border-b-2 border-[#49557e]' : ''}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu === 'menu' ? 'pb-0.5 border-b-2 border-[#49557e]' : ''}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app' ? 'pb-0.5 border-b-2 border-[#49557e]' : ''}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu === 'contact-us' ? 'pb-0.5 border-b-2 border-[#49557e]' : ''}>Contact-us</a>
      </ul>
      <div className="flex items-center gap-[12px] lg:gap-[30px] md:gap-[20px] sm:gap-[15px]">
        <img className='max-w-[18px] lg:w-[22px] md:w-[20px]' src={assets.search_icon} alt="Search Icon" />
        <div className="relative">
           <Link to='/cart'><img className='max-w-[18px] lg:w-[22px] md:w-[20px]' src={assets.basket_icon} alt="Basket Icon " /></Link>
           {getTotalCartAmount() === 0? '' : <div className="absolute min-h-3 min-w-3 bg-[#ff6347] rounded-md top-[-7px] right-[-7px]"></div> }
        </div>
        <button onClick={()=> setShowLogin(true)} className="bg-transparent text-base text-[#49957e] border border-[#ff6347] rounded-[50px] py-[5px] px-[15px] hover:bg-[#fff4f2] ease-in lg:py-2 lg:px-6 md:py-[7px] md:px-[20px] md:text-[15px]">Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
