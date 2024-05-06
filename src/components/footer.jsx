import poolot from "../assets/poolot-logo.png";

const Footer = () => {
  return (
    <div className="px-24 py-24 bg-gray-200 max-sm:px-4 max-sm:py-16 max-lg:px-10">
        <div className="grid grid-cols-4 max-sm:gap-8  pb-20 max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-10">
        
            <div className="flex flex-col gap-8 pr-8">
                <div className="flex flex-col gap-4">
                    <div className="w-32"><img src={poolot}></img></div>

                    <p className="text-gray-500">Through a combination of lectures, readings, discussions, students will gain solid 
                    foundation in educational.</p>
                </div>
                
                <div className="flex gap-4 items-center">
                    <div className="border border-gray-500 rounded p-2 "><svg className="w-4" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></div>
                    <div className="border border-gray-500 rounded p-2 "><svg className="w-4" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></div>
                    <div className="border border-gray-500 rounded p-2 "><svg className="w-4" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="text-xl font-bold">Useful Link</div>

                <div className="flex flex-col gap-4 text-gray-500">
                    <p>About Poolot</p>
                    <p>Contact</p>
                    <p>Help Centre</p>
                    <p>Refund</p>
                    <p>Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="text-xl font-bold">Categories</div>

                <div className="flex flex-col gap-4 text-gray-500">
                    <p>Design Skills</p>
                    <p>Development</p>
                    <p>Marketing</p>
                    <p>Finance & Accounting</p>
                    <p>IT & Software</p>
                    <p>Sales Marketing</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="text-xl font-bold">Newsletter</div>

                <div className="flex flex-col gap-4">
                    <p className="text-gray-500">Sign up for our newsletter and get 34%
                    off your next course.</p>

                    <div className="flex justify-between border border-gray-300 px-3 py-1 rounded-md">
                        <input className="bg-gray-200" placeholder="Enter your email" type="email"></input>
                        <button type="button" className="bg-blue-600 px-4 py-2 rounded-md text-white">Subcribe</button>
                    </div>

                    <div className="flex gap-2">
                        <input type="checkbox"></input>
                        <p className="text-sm text-gray-500">I agree to the terms of use and privacy policy</p>
                    </div>
                </div>
            </div>  
        </div>

        <div className="text-center text-gray-500"><p>Copyright © 2023 All Rights Reserved by Eduan</p></div>
    </div>
  )
}

export default Footer;