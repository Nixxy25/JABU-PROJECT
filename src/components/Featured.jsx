import FeaturedCard from "./featuredCard"

const Featured = () => {
  return (
    <div className="px-24 py-20 bg-gray-200">
        <div className="flex flex-col justify-center items-center gap-4 pb-8">
           <div className="flex">
                <div className="text-red-600  font-bold bg-red-50 p-2 px-6 border-t-2 border-red-600">Featured Coures</div>
            </div>

            <div className="font-bold text-[38px] max-sm:text-[24px] text-center">Explore Featured Coures</div>

            <div className="">
                <ul className="flex bg-white px-16 py-2 rounded-full text-lg  gap-16 text-gray-500">
                    <li className="">See All</li>
                    <li>Trending</li>
                    <li>Featured</li>
                    <li>Web Design</li>
                    <li>Popular</li>
                </ul>
            </div>
        </div>
        
        <FeaturedCard />
      

        
    </div>
  )
}

export default Featured