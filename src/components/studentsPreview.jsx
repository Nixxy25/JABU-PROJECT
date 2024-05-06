import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import studentsLogo from "../assets/tv (3).png"
import stars from "../assets/dots.png";

const StudentsPreview = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="w-full p-2 py-28 bg-white max-lg:pb-10">
        <div className="flex justify-center items-center flex-col gap-4 pb-16">
            <div><p className="border-t-2 border-red-600 text-red-600 bg-red-100 p-2 px-4 font-bold">Student Reviews</p></div>

            <div className="text-[42px] text-center font-bold flex flex-col max-sm:text-3xl">What Our Students <span className="text-center">Saying</span></div>

            <p className="text-gray-400 text-center flex flex-col max-sm:text-[16px]">Through a combination of lectures, readings, discussions, students will gain a <span className="text-center">solid foundation in educational psychology</span></p>
        </div>

        <Carousel responsive={responsive} showDots={true}  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} className="">
            <div className="bg-gray-100 px-6 py-12 flex flex-col gap-8 mr-6">
                <div className="flex justify-between px-2">
                    <div className="flex gap-3 items-center">
                        <div><img className="w-10" src={studentsLogo}></img></div>

                        <div className="">
                            <p className="font-bold">Indigo Violet</p>
                            <p className="text-gray-400">Marketing</p>
                        </div>
                    </div>

                    <div><img src={stars}></img></div>
                </div>
                
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 px-6 py-12 flex flex-col gap-8 mr-6">
                <div className="flex justify-between px-2">
                    <div className="flex gap-3">
                        <div><img src={studentsLogo}></img></div>

                        <div className="">
                            <p className="font-bold">Indigo Violet</p>
                            <p className="text-gray-400">Marketing</p>
                        </div>
                    </div>

                    <div><img src={stars}></img></div>
                </div>
                
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>


            <div className="bg-gray-100 px-6 py-12 flex flex-col gap-8 mr-6">
                <div className="flex justify-between px-2">
                    <div className="flex gap-3">
                        <div><img src={studentsLogo}></img></div>

                        <div className="">
                            <p className="font-bold">Indigo Violet</p>
                            <p className="text-gray-400">Marketing</p>
                        </div>
                    </div>

                    <div><img src={stars}></img></div>
                </div>
                
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 px-6 py-12 flex flex-col gap-8 mr-6">
                <div className="flex justify-between px-2">
                    <div className="flex gap-3">
                        <div><img src={studentsLogo}></img></div>

                        <div className="">
                            <p className="font-bold">Indigo Violet</p>
                            <p className="text-gray-400">Marketing</p>
                        </div>
                    </div>

                    <div><img src={stars}></img></div>
                </div>
                
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>


            <div className="bg-gray-100 px-6 py-12 flex flex-col gap-8 mr-6">
                <div className="flex justify-between px-2">
                    <div className="flex gap-3">
                        <div><img src={studentsLogo}></img></div>

                        <div className="">
                            <p className="font-bold">Indigo Violet</p>
                            <p className="text-gray-400">Marketing</p>
                        </div>
                    </div>

                    <div><img src={stars}></img></div>
                </div>
                
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 px-6 py-12 flex flex-col gap-8 mr-6">
                <div className="flex justify-between px-2">
                    <div className="flex gap-3">
                        <div><img src={studentsLogo}></img></div>

                        <div className="">
                            <p className="font-bold">Indigo Violet</p>
                            <p className="text-gray-400">Marketing</p>
                        </div>
                    </div>

                    <div><img src={stars}></img></div>
                </div>
                
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>

            
        </Carousel>

    </div>
  )
}

export default StudentsPreview;