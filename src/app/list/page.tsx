import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Image from 'next/image';
import React from 'react';

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* For Smaller Device */}
      <div className='md:hidden bg-pink-50 px-4 flex flex-col md:flex-row justify-between items-center md:items-start'>
        <div className='md:w-2/3 flex flex-col items-center md:items-start justify-center gap-8 text-center md:text-left py-8 md:py-0'>
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>
            Grab up to 50% off on Selected Products
          </h1>
          <button className='rounded-3xl bg-ak text-white w-max py-3 px-5 text-sm'>
            Buy Now
          </button>
        </div>
        <div className='relative w-full md:w-1/3 h-64 md:h-auto'>
          <Image src="/woman.png" alt='Promotional Woman' layout='fill' className='object-contain'/>
        </div>
      </div>
      {/* For larger Device */}
      <div className='hidden bg-pink-50 px-4  md:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
        <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab up to 50% off on Selected Products</h1>
        <button className='rounded-3xl bg-ak text-white w-max py-3 px-5 text-sm'>Buy Now</button>
        </div>
        <div className='relative  w-1/3'>
          <Image src="/woman.png" alt='' fill className='object-contain'/>
        </div>
      </div>

      {/* Filter */}
      <Filter/>
      {/* Products */}
      <h1 className='mt-12 text-xl font-semibold'>Shoes For You!</h1>
      <ProductList/>
    </div>
  );
}

export default ListPage;

