
const Navbar = () => {
  return (
    <div className="">
        <nav className="flex px-24 py-6 justify-between items-center">
            <div className="flex items-center gap-12">
            
                <div className="border-r border-gray-300 pr-6">
                    <img className="cursor-pointer w-32" alt="poolot-logo" src="/src/assets/poolot-logo.png"></img>
                </div>

                <div>
                    <ul className="cursor-pointer flex gap-12 items-center text-lg font-semibold">
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

         
            <div className="flex items-center gap-6">
                <div className="flex items-center bg-gray-300 p-3 rounded-md">
                    <input type="text" className="bg-gray-300 outline-none" placeholder="Search Item"></input>

                    <div><svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div>
                </div>

                <div className="bg-blue-600 text-white p-3 font-bold rounded-md">
                    <button type="button">Enroll Now</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;