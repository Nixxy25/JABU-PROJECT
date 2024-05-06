import FeaturedCard from "./featuredCard"

const Featured = () => {

  return (
    <div className="px-24 py-20 bg-gray-200 max-sm:px-4 max-lg:px-10">
        <div className="flex flex-col justify-center items-center gap-4 pb-8">
           <div className="flex">
                <div className="text-red-600  font-bold bg-red-50 p-2 px-6 border-t-2 border-red-600">Featured Coures</div>
            </div>

            <div className="font-bold text-[38px] max-sm:text-[24px] text-center">Explore Featured Coures</div>

            <div className="">
                <ul className="flex bg-white px-16 max-lg:px-8 py-2  rounded-full text-lg max-sm:grid grid-cols-2 max-sm:gap-4  gap-16 text-gray-500">
                    <li className="cursor-pointer">See All</li>
                    <li className="cursor-pointer">Trending</li>
                    <li className="cursor-pointer">Featured</li>
                    <li className="cursor-pointer">Web Design</li>
                    <li className="cursor-pointer max-sm:col-span-2 max-sm:text-center">Popular</li>
                </ul>
            </div>
        </div>
        
        <FeaturedCard />
      

        
    </div>
  )
}

export default Featured