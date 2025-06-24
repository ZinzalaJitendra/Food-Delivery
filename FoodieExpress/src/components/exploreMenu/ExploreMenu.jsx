import React from 'react';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div id='explore-menu' className='flex flex-col gap-5'>
            <h1 className='text-[#262626] text-[max(2vw,24px)] font-medium'>Explore our menu</h1>
            <p className='max-w-full lg:max-w-[65%] lg:text-[14px] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>

            <div id='explore-menu-list' className='flex justify-between items-center gap-8 my-5 mx-0 text-center overflow-x-scroll'>
                {menu_list.map((item, index) => {
                    return (
                        <div key={index} onClick={()=>setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-300'>
                            <img src={item.menu_image} alt="Image of Food"  className={category === item.menu_name ? 'border-4 rounded-[50%] border-[tomato] p-0.5' : ''} />
                            <p className='mt-3 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer' >{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='my-3 mx-0 h-0.5 bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu
