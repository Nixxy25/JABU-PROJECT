import { useState } from "react";
import poolot from "../assets/poolot-logo.png";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const handleMobileNav = () => {
        setMobileNav(!mobileNav)
    }

    const menuVars = {
        initial: {
            scaleX: 0,
        },
        animate:{
            scaleX: 1,
            transition:{
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            }
        },
        exit: {
            scaleX: 0,
            transition:{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }
        },
    }
  return (
        <nav className="px-24 py-6 relative max-sm:p-0 max-lg:px-0 ">

            <div className="fixed top-0 z-10 border-b border-gray-300 right-0 left-0">
                <div className="flex items-center  bg-white w-full justify-between  max-lg:hidden px-24 py-2">
                    <div className="flex items-center gap-4">
                        <img className="cursor-pointer w-32 " alt="poolot-logo" src={poolot}></img>
                        

                        <div>
                            <ul className="cursor-pointer border-l border-gray-400 px-6 flex gap-12 items-center text-lg font-semibold">
                                <li className="hover:text-blue-500 changes">Home</li>
                                <li className="hover:text-blue-500 changes">Courses</li>
                                <li className="hover:text-blue-500 changes">Pages</li>
                                <li className="hover:text-blue-500 changes">Blog</li>
                                <li className="hover:text-blue-500 changes">Contact</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center bg-gray-100 px-8 gap-2 py-3 rounded-md">
                            <input type="text" className="bg-gray-100 outline-none" placeholder="Search Item"></input>

                            <div><svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div>
                        </div>

                        <div className="bg-blue-600 text-white p-3 font-bold rounded-md hover:bg-blue-800 changes">
                            <button type="button" className="">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="lg:hidden relative ">
                <div className="flex fixed top-0 w-full border-b border-gray-300 bg-white z-10 justify-between px-4 max-sm:px-4 max-lg:px-10 max-lg:py-3">
                    <img className="w-32" src={poolot}></img>

                    <div className="flex items-center gap-4">
                            <button type="button" className="max-sm:hidden bg-blue-600 text-white p-3 font-bold rounded-md hover:bg-blue-800 changes">Enroll Now</button>
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" onClick={handleMobileNav} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </div>

                    
                </div>

                <AnimatePresence>
                {mobileNav === true && (
                    <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className="fixed top-0 origin-right z-20 max-lg:w-1/2 max-sm:w-full right-0 flex-col gap-8 bg-black h-screen oveflow-hidden w-screen px-10 py-4">
                        <div className="flex justify-between pb-6">
                            <img className="w-32" src={poolot}></img>

                            <svg className="w-5" fill="white" xmlns="http://www.w3.org/2000/svg" onClick={handleMobileNav} viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </div>

                        <div className="flex flex-col gap-6 text-white">
                            <div className="flex justify-between items-center">
                                <p className="text-lg hover:text-blue-600 changes">HOME</p>
                                <p className="text-2xl font-bold">+</p>
                            </div>  

                            <div className="flex justify-between items-center">
                                <p className="text-lg hover:text-blue-600 changes">COURSES</p>
                                <p className="text-2xl font-bold">+</p>
                            </div>  

                            <div className="flex justify-between items-center">
                                <p className="text-lg hover:text-blue-600 changes">PAGES</p>
                                <p className="text-2xl font-bold">+</p>
                            </div>  

                            <div className="flex justify-between items-center">
                                <p className="text-lg hover:text-blue-600 changes">BLOG</p>
                                <p className="text-2xl font-bold">+</p>
                            </div>  

                            <div className="text-lg  hover:text-blue-600 changes">CONTACT</div>

                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>

         

        </nav>
  )
}

export default Navbar;