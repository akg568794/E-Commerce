
import Categories from "@/components/Categories"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { Suspense } from "react"

const HomePage = async () => {

  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_CATEGORY_ID!} limit={4}/>
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <Suspense fallback={"loading"}>
          <Categories/>
        </Suspense>
      
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">New Products</h1>
      {/* <ProductList/> */}
      </div>
    </div>
  )
}

export default HomePage