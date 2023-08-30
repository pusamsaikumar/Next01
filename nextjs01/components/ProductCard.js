import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
   <Link 
   href={'/product/1'}
   className='transform overflow-hidden duration-200 hover:scale-105 cursor-pointer bg-white'
   
   >
    <img src='/product-1.webp' className='w-full' alt='Product Image' />
    <div className='py-4 text-black/[0.9]'>
        <h2 className='text-lg font-medium'> Product Name</h2>
        <div className='flex items-center text-black/[0.5]'>
            <p className='mr-2 text-g font-semibold '>$20.00</p>
            <p className='line-through text-base font-medium'>$25.00</p>
            <p className='ml-auto text-green-500 text-base font-medium'>20% off</p>
        </div>

    </div>
   </Link>
  )
}

export default ProductCard