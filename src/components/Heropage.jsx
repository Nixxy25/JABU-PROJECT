

const Heropage = () => {
  return (
    <div>
        <div className="px-24 flex items-center gap-8 justify-between bg-[#bae6fd] min-h-max pt-28  rounded-3xl">

            <div className="flex flex-col gap-8">
                <div className="bg-white text-red-700 font-bold p-2 pl-4 border-l-2 border-red-700 w-1/2">
                    <p>Online Learning Platform</p>
                </div>

                <div className="text-6xl font-bold">Master the Skills Drive Your Career.</div>

                <div className="text-gray-600">Through a combination of lectures, readings, and discussions, students
                will gain a solid foundation in educational psychology.</div>

                <div ><button className="bg-blue-600 text-white p-4 px-6 rounded-md font-bold" >View All Course</button></div>
            </div>

            <div className="w-full">
                <img className="" src="/src/assets/fabu-hero2.png" alt="hero-Image"></img>
            </div>
        </div>
    </div>
  )
}

export default Heropage