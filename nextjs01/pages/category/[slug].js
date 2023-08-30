import React from 'react';
import { useRouter } from 'next/router';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';

// ROUTE: http://localhost:3000/category/category1
const  Category= () => {
    const router = useRouter();
    const {slug} = router.query;
   // console.log("slug",router.query.slug)  dynamic router  ex: slug is the name of the filename [slug] Or [pid] = router.query.pid
   return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className='text-center max-w-[800px] mt-8 mx-auto md:mt-0  '>
                <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight '>Running Shoes</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
        </div>
        </Wrapper>

    </div>
  )
}

export default Category