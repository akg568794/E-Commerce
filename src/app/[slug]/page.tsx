import Add from '@/components/Add'
import CustomizeProduct from '@/components/CustomizeProduct'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMG */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages/>
      </div>
      {/* TEXTS */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          <h1 className='text-4xl font-medium'>Product Name</h1>
          <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className='h-[2px] bg-gray-100'/>
          <div className='flex items-center gap-4'>
            <span className='text-xl text-gray-500 line-through'>$59</span>
            <span className='font-medium text-2xl'>$49</span>
          </div>
          <div className='h-[2px] bg-gray-100'/>
          <CustomizeProduct/>
          <Add/>
          <div className='h-[2px] bg-gray-100'/>
          <div className='text-sm'>
            <h4 className='font-medium mb-4'> Title</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

            </p>
          </div>
          <div className='text-sm'>
            <h4 className='font-medium mb-4'> Title</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

            </p>
          </div>
          <div className='text-sm'>
            <h4 className='font-medium mb-4'> Title</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

            </p>
          </div>
      </div>
      
    </div>
  )
}

export default SinglePage