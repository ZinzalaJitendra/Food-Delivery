import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div id='footer' className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 pt-[80px] px-[8vw] mt-[100px]'>
            <div className="w-full flex flex-col gap-[35px] md:grid md:grid-cols-[2fr,1fr,1fr]">
                <div className='flex flex-col items-start gap-5'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam aut commodi molestias eaque hic fugit sit enim necessitatibus! Quia fugit illo provident aperiam architecto blanditiis.</p>
                    <div className='flex gap-3'>
                        <img src={assets.facebook_icon} alt="facebook icon" /><img src={assets.twitter_icon} alt="twitter icon" /><img src={assets.linkedin_icon} alt="linkedin icon" />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-5'>
                    <h2 className='text-white text-xl font-medium'>COMPANY</h2>
                    <ul className='list-none mb-2 cursor-pointer'>
                        <li className='mb-2'>Home</li>
                        <li className='mb-2'>About Us</li>
                        <li className='mb-2'>Delivery</li>
                        <li className='mb-2'>Privacy policy</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start gap-5'>
                    <h2 className='text-white text-xl font-medium'>GET IN TOUCH</h2>
                    <ul className='cursor-pointer list-none'>
                        <li className='mb-2'>+1-123-456-7890</li>
                        <li className='mb-2'>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-0.5 my-5 mx-0 bg-gray-600 border-none' />
            <p className=" text-center md:footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
