"use client"

import { useState } from "react"

const Add = ({productId,variantId,stockNumber}:{productId:string,variantId:string,stockNumber:number}) => {
    const [quantity,setQuantity] =useState(1);
    const handleQuantity=(type: "i" | "d")=>{
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === "i" && quantity < stockNumber) {
            setQuantity((prev) => prev + 1);
        }

    }
    return (
      <div className='flex flex-col gap-4'>
        <h4 className="font-medium">Choose a Quantity</h4>
        <div className='flex justify-between'>
            <div className="flex items-center gap-4">
                <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                    <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("d")}>-</button>
                    {quantity}
                    <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("i")}>+</button>
                </div>
            {stockNumber < 1 ? (<div className="text-xs">Product is <span className="text-red-500 font-semibold">out</span> of stock!</div>):(<div className="text-xs">Only <span className="text-orange-500">{stockNumber} items</span>  left!<br/> {"Don't"} {"miss it"}.</div>)}
        </div>
        <button className="w-18 text-sm rounded-md ring-1 ring-ak text-ak py-1 px-4 hover:bg-ak hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none" disabled={stockNumber<1}>Add to Cart</button>
      </div>
      </div>
    )
  }
  
  export default Add
  