"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Filter = () => {
    const pathname=usePathname();
    const searchParams=useSearchParams();
    const {replace}=useRouter()

    const handleFilterChange=(e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=>{
        const {name,value}=e.target;
        // console.log(name,value);
        const params=new URLSearchParams(searchParams);
        params.set(name,value)
        replace(`${pathname}?${params.toString()}`)

    }


  return (
    <div className="mt-12 flex justify-between">
        <div className="flex gap-6 flex-wrap">
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium border border-gray-300 focus:outline-none  focus:ring-green-500 focus:border-green-500"
            onChange={handleFilterChange}>
                <option>Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 border border-gray-300 focus:outline-none  focus:ring-green-500 focus:border-green-500"
            onChange={handleFilterChange}/>
            <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 border border-gray-300 focus:outline-none  focus:ring-green-500 focus:border-green-500"
            onChange={handleFilterChange}/>
            {/* <select name="size" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option>Size</option>
                <option value="small">Small</option>
            </select>
            <select name="color" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option>Color</option>
                <option value="red">Red</option>
            </select> */}
            <select name="category" id="" className="py-2 px-4 rounded-2xl text-xs font-medium border border-gray-300 focus:outline-none  focus:ring-green-500 focus:border-green-500" 
            onChange={handleFilterChange}>
                <option>Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>
            <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium border border-gray-300 focus:outline-none  focus:ring-green-500 focus:border-green-500" 
            onChange={handleFilterChange}>
                <option>All Filters</option>
            </select>
            <select name="sort" id="" className="py-2 px-4 rounded-2xl text-xs font-medium border border-gray-300 focus:outline-none  focus:ring-green-500 focus:border-green-500"
            onChange={handleFilterChange}>
                <option>Sort By</option>
                <option value="desc price">Price (High to Low)</option>
                <option value="asc price">Price (Low to High)</option>
                <option value="asc lastUpdated">Newest</option>
                <option value="desc lastUpdated">Oldest</option>
            </select>
        </div>
    
            

    </div>
  )
}

export default Filter