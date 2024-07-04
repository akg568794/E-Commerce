"use client"

import Image from "next/image"

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image src="/profile.png" alt="profile" height={22} width={22} className="cursor-pointer"/>
      <Image src="/notification.png" alt="profile" height={22} width={22} className="cursor-pointer"/>
      <Image src="/cart.png" alt="profile" height={22} width={22} className="cursor-pointer"/>
    </div>
  )
}

export default NavIcons