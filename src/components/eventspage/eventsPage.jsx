import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import featuredImage from "../../assets/blog-21.jpg";
import './eventsPage.css'

const EventsPage = () => {
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
    <div>
        <div className="bg-gray-300 px-24 py-20 max-sm:px-4 max-lg:px-10">
            <div className="flex justify-between gap-4 items-center pb-10 max-sm:block">
                <div className="flex flex-col gap-2">
                    <p className="text-red-600 font-bold bg-red-100 p-2 border-l-2 border-red-600 w-3/4">Conference on Education</p>
                    <p className="text-[40px] font-bold flex">Upcoming Events</p>
                </div>

              
            </div>

            <Carousel className="px-2 py-3 " responsive={responsive}>
                <div className="card bg-white py-6 px-4 rounded-lg flex flex-col gap-4 mr-6">
                    <div><img  className="card-img" alt="featuredImage" src={featuredImage}></img></div>

                    <div className="flex item-center gap-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-3" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                            <p className="text-gray-500">London,US</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                            <p className="text-gray-500">8.00 am - 6.00 pm</p>
                        </div>
                    </div>

                    <div className="text-xl font-bold pb-4 hover:text-blue-600"><p>Personalized Learning & Meeting The Needs of Every Student.</p></div>

                    <div ><button className="px-4 py-1 rounded-md border border-black transition" type="button">Get Ticket</button></div>
                </div>

                <div className="card bg-white py-6 px-4 rounded-lg flex flex-col gap-4  mr-6">
                    <div><img className="card-img" alt="featuredImage" src={featuredImage}></img></div>

                    <div className="flex item-center gap-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-3" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                            <p className="text-gray-500">London,US</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                            <p className="text-gray-500">8.00 am - 6.00 pm</p>
                        </div>
                    </div>

                    <div className="text-xl font-bold pb-4 hover:text-blue-600"><p>Personalized Learning & Meeting The Needs of Every Student.</p></div>

                    <div ><button className="px-4 py-1 border border-black transition rounded-md" type="button">Get Ticket</button></div>
                </div>

                <div className="bg-white py-6 px-4 card rounded-lg flex flex-col gap-4  mr-6">
                    <div><img alt="featuredImage" className="card-img" src={featuredImage}></img></div>

                    <div className="flex item-center gap-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-3" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                            <p className="text-gray-500">London,US</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                            <p className="text-gray-500">8.00 am - 6.00 pm</p>
                        </div>
                    </div>

                    <div className="text-xl font-bold pb-4 hover:text-blue-600"><p>Personalized Learning & Meeting The Needs of Every Student.</p></div>

                    <div ><button className="px-4 py-1 border border-black transition rounded-md" type="button">Get Ticket</button></div>
                </div>

                <div className="bg-white py-6 px-4 card rounded-lg flex flex-col gap-4  mr-6">
                    <div><img alt="featuredImage" className="card-img" src={featuredImage}></img></div>

                    <div className="flex item-center gap-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-3" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                            <p className="text-gray-500">London,US</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                            <p className="text-gray-500">8.00 am - 6.00 pm</p>
                        </div>
                    </div>

                    <div className="text-xl font-bold pb-4 hover:text-blue-600"><p>Personalized Learning & Meeting The Needs of Every Student.</p></div>

                    <div ><button className="px-4 py-1 border border-black transition rounded-md" type="button">Get Ticket</button></div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default EventsPage;