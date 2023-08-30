import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const cart = () => {
  return (
    <div className='w-full py-20'>
      <Wrapper>
        {/* Heading */}
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'> Shopping Cart</div>
        </div>

        {/* cart content */}
        <div className='flex flex-col md:flex-row gap-12 py-10 '>
          {/* cart item */}
          <div className='flex-[2]'>
            <div className='text-lg font-bold'>Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* summary */}
          <div className='flex-[1]'>
            <div className='text-lg font-bold'>Summary</div>
            {/* sub total */}
            <div className='bg-black/[0.05] p-5 my-5 rounded-xl'>
              <div className=' flex justify-between'>
                <div className='uppercase text-md md:text-lg font-medium text-black'>subtotal</div>
                <div className='text-md md:text-lg font-medium text-black hover:text-red-400 '>$ 19 965.00</div>
              </div>
              <div className='border-t py-5 text-sm md:text-md mt-5'>
                Subtotal reflects the total price of the your orders,including duties and taxes , before any applicable discounts.
                it does not includes delivery cost and international transactions fees.
              </div>

            </div>
            <button className='w-full bg-black text-yellow-50 font-medium rounded-full py-4 text-lg text-center transition-transform  active:scale-95 hover:opacity-75 '>Checkout</button>
          </div>
         
        </div>
        <div className='flex flex-col items-center pb-[50px] md:mt-14'>
             <Image src={"/empty-cart.jpg"} width={300} height={300} className='w-[300px] md:w-[400px]' />
         <span className='text-xl font-medium'>Your cart is Empty</span>
         <span className='items-center mt-9 '>
            Looks like you have not added anything in your cart <br />
            Go head and Explore top technologies.
         </span>
          <Link href={"/"}
           className='mt-10 bg-black text-white  px-10 py-5 rounded-full w-[350px] text-center transition-transform active:scale-95 hover:opacity-75'
          >Continue Shopping</Link>
        </div>
      </Wrapper>
    </div>
  )
}

export default cart