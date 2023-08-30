import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper'
import React from 'react'
import {IoMdHeartEmpty} from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className='flex flex-col md:flex-row  md:px-10 gap-[50px] lg-[100px]'>
                          {/* LEFT START */}
                          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full  mx-auto lg:mx-0'>
                            <ProductDetailsCarousel />
                          </div>
                          {/* LEFT END */}

                          {/* RIGHT START */}
                          <div className='flex-[1] py-3'>
                            <div className='text-[34px] font-semibold mb-2'>
                                Jordan Relio 6 G
                            </div>
                            <div className='text-lg font-semibold mb-5'>Men&apos; s Golf Shoes</div>
                            <div className='text-lg font-semibold'> MRP : $ 19 695.00</div>
                            <div className='text-md font-semibold text-black/[0.5]'>Incl. of taxes</div>
                            <div className='text-md font-semibold text-black/[0.5] mb-20'>{`(Also includes all applicable duties)`}</div>

                            {/* Product size start */}
                            <div className='mb-10'>
                                <div className='flex justify-between mb-2'>
                                      <div className='text-md font-semibold'>Select</div>  
                                      <div className='text-md font-semibold cursor-pointer text-black/[0.5]'>Guide</div>
                                </div>
                                {/* size start */}
                                <div className='grid grid-cols-3 gap-2 '>
                                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 6</div>
                                
                                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 7</div>
                              
                                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 8</div>
                                
                                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 9</div>
                              
                                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 10</div>
                                
                                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 10.5</div>
                                    <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer' >UK 11</div>
                                    <div className='border rounded-md text-center py-3 cursor-not-allowed font-medium hover:border-black/[0.1] opacity-50 ' >UK 11.5</div>
                                    
                                </div>
                                <div className='text-red-500 mt-1'>
                                        Selection is Required
                               </div>

                                {/* size end */}

                                        {/* ADD TO CART */}
                                  <button className='border bg-black text-white text-center w-full py-4
                                   mb-5 mt-5  rounded-full font-medium transition-transform active:scale-95 hover:opacity-75 text-lg '>Add to Cart
                                   </button>
                                   {/* WHISH LIST */}
                                   <button className='border border-black text-black text-center w-full py-4
                                   mb-5 mt-5   rounded-full  flex  items-center justify-center gap-2 font-medium transition-transform active:scale-95 hover:opacity-95 text-lg '>
                                    Whishlist
                                    <IoMdHeartEmpty size={20} />
                                   </button>
                            </div>
                             {/* Product size end */}

                             <div >
                                <div className='text-lg font-bold mb-5'>Product Details</div>
                                <div className='text-md mb-5'>Feel unbeatable from the tee box to final 
                                put in a design that's pure ealry MJ: speed class
                                laden with to ealry 90's touches like visible Air and transluncet rubber 
                                sole that continue to stand the test of time. this model fuses the strut of 1st MJ'S championship 
                                with some of our best golf technology helping , to you make a statement of confidence when it comes time to tame the course. 
                                </div>
                                <div className='text-md mb-5'>Feel unbeatable from the tee box to final 
                                put in a design that's pure ealry MJ: speed class
                                laden with to ealry 90's touches like visible Air and transluncet rubber 
                                sole that continue to stand the test of time. this model fuses the strut of 1st MJ'S championship 
                                with some of our best golf technology helping , to you make a statement of confidence when it comes time to tame the course. 
                                </div>
                             </div>
                          </div>
                       {/* right end */}
            </div>
            {/* Related Products */}
            <RelatedProducts />
        </Wrapper>
    </div>
  )
}

export default ProductDetails