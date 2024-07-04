"use client"

import Image from "next/image"
import Link from "next/link"


const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500">

            </Image>
            <Image src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" fill sizes="25vw">

            </Image>    
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ak text-ak py-2 px-4 hover:bg-ak w-max ease-in duration-300 hover:text-white">Add to Cart</button>
        
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500">

            </Image>
            <Image src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" fill sizes="25vw">

            </Image>    
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ak text-ak py-2 px-4 hover:bg-ak w-max ease-in duration-300 hover:text-white">Add to Cart</button>
        
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500">

            </Image>
            <Image src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" fill sizes="25vw">

            </Image>    
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ak text-ak py-2 px-4 hover:bg-ak w-max ease-in duration-300 hover:text-white">Add to Cart</button>
        
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500">

            </Image>
            <Image src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" fill sizes="25vw">

            </Image>    
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ak text-ak py-2 px-4 hover:bg-ak w-max ease-in duration-300 hover:text-white">Add to Cart</button>
        
        </Link>
    </div>

  )
}

export default ProductList