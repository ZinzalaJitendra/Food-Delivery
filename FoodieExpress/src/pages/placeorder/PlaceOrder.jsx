import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='flex md:items-start md:justify-between gap-[50px] mt-[100px] md:flex md:flex-row flex-col'>
      <div className='w-full max-w-[max(30%),500px]'>
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className='flex gap-[10px]'>
          <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]' type="text" placeholder='First name' />
          <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]' type="text" placeholder='Last name' />
        </div>
        <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]'  type="email" placeholder='Email address' />
        <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]'  type="text" placeholder='Street' />
        <div className='flex gap-[10px]'>
          <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]'  type="text" placeholder='City' />
          <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]'  type="text" placeholder='State' />
        </div>
        <div className='flex gap-[10px]'>
          <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]'  type="text" placeholder='Zip code' />
          <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]'  type="text" placeholder='Country' />
        </div>
        <input className='mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]'  type="text" placeholder='Phone' />
      </div>
      <div className='max-w-[max(40%,500px)] w-full'>
        <div className='flex flex-col flex-1 gap-[20px]'>
          <h2 className='text-xl font-semibold mt-[10px]'>Cart Totals</h2>
          <div>
          <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0? 0 : 2}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className='border-none mt-[30px] text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] px-0 rounded cursor-pointer'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
