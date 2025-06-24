import React from 'react'

const Header = () => {
  return (
    <div className="relative w-full h-[34vw] my-8 mx-auto bg-[url('/header_img.png')] bg-cover bg-repeat-round lg:h-[38vw]">
      <div className="absolute flex items-start flex-col gap-[1.5vw] max-w-[70%] bottom-[10%] left-[6vw] lg:max-w-[55%] md:max-w-[65%]" >
        <h2 className="font-medium text-white leading-none text-[max(4.5vw,22px)]">Order your favourite food here</h2>
        <p className="text-white hidden md:block text-[1vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
        <button className="border-none text-[#747474] px-[4vw] py-[2vw] font-medium text-[max(1.2vw,13px)] rounded-[50px] bg-white md:py-[1vw] md:px-[2.3vw]">View Menu</button>
      </div>
    </div>
  )
}

export default Header
