"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

const Menu = () => {
    const [open,setOpen]=useState(false);
  return (
    <div className="">
        <Image alt="menu" src="/menu.png" height={28} width={28} className="cursor-pointer" onClick={()=>setOpen((prev)=>!prev)}/>
        {open && (
            <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center text-xl z-1 gap-8">
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart(1)</Link>
            </div>
        )}
    </div>
  )
}

export default Menu