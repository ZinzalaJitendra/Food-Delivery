import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='mt-[100px]'>
      <div className="cart-items">
        <div className='grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-gray-600 text-[max(1vw,12px)]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center text-black text-[max(1vw,12px)] my-[10px] mx-0'>
                  <img className='w-[50px]' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
              </div>
            )
          }
        })}
      </div>
      <div className='mt-[80px] flex md:flex  md:flex-row flex-col-reverse gap-[max(12vw,20px)]'>
        <div className='flex flex-col flex-1 gap-[20px]'>
          <h2>Cart Totals</h2>
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
          {getTotalCartAmount() === 0 ? <button className='border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] px-0 rounded cursor-pointer'>PROCEED TO CHECKOUT</button> : <button onClick={()=>navigate('/placeorder')} className='border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] px-0 rounded cursor-pointer'>PROCEED TO CHECKOUT</button> }
        </div>
        <div className='flex-1'>
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='mt-[10px] flex  justify-between items-center bg-[#eaeaea] rounded border'>
              <input className='bg-transparent border-none outline-none ml-2' type="text" placeholder='promo code' />
              <button className='w-[max(10vw,150px)] py-3 px-1 bg-black border-none rounded text-white'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
