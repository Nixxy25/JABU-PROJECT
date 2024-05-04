import heroImage from "../assets/jabu-hero-removebg-preview.png"

const Heropage = () => {
  return (
    <div>
        <div className="px-24 max-sm:px-4 flex items-center pt-32 gap-8 justify-between bg-[#bae6fd] max-sm:py-36  rounded-xl">

            <div className="flex flex-col gap-8">
                <div className="w-1/2 max-sm:w-3/4 text-sm">
                    <p className="bg-white text-red-700 font-bold p-2 pl-4 border-l-2 border-red-700">Online Learning Platform</p>
                </div>

                <div className="text-6xl font-bold max-sm:text-4xl">Master the Skills Drive Your Career.</div>

                <div className="text-gray-600 max-sm:text-[15.4px]">Through a combination of lectures, readings, and discussions, students
                will gain a solid foundation in educational psychology.</div>

                <div className=""><button className="bg-blue-600 text-white p-4 px-6 rounded-md font-bold" >View All Course</button></div>
            </div>

            <div className="w-full max-lg:hidden">
                <img className="" src={heroImage} alt="hero-Image"></img>
            </div>
        </div>
    </div>
  )
}

export default Heropage