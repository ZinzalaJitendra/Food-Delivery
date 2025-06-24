import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='w-full m-auto rounded-2xl shadow-md'>
            <div className='relative'>
                <img src={image} alt="Food Item" className='w-full rounded-t-[16px]' />

                {!cartItems[id] ?
                 <img onClick={() => addToCart(id)} className='w-9 absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' src={assets.add_icon_white} alt='add to cart icon' /> :
                    <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                        <img onClick={() => removeFromCart(id)} className='w-8' src={assets.remove_icon_red} alt='remove icon' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} className='w-8' src={assets.add_icon_green} alt='add icon' />
                    </div>
                }
            </div>
            <div className='p-5'>
                <div className='flex justify-between items-center mb-3'>
                    <p className='text-[20px] font-medium '>{name}</p>
                    <img src={assets.rating_starts} alt="Food star Rating" className='w-[70px]' />
                </div>
                <p className='text-[#676767] text-sm'>{description}</p>
                <p className='text-[tomato] text-xl font-medium my-2'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
