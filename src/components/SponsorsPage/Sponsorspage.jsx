import "./Sponsorspage.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import dropbox from "../../assets/dropbox.png"
import twillo from "../../assets/twillo.png"
import slack from "../../assets/slack1.png"
import shopify from "../../assets/shopify.png"
import init from "../../assets/intuit.png"
import clickup from "../../assets/clickUp.png"

const Sponsorspage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <div className=" px-24 py-20 max-sm:px-4 max-lg:px-10">
        <div className="text-center text-xl font-bold pb-10">340+ Leading Universities And Companies</div>


       
      
          <Carousel responsive={responsive}  
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]} 
            className=" flex items-center justify-around border-2 logos border-gray-300  p-10 max-sm:px-8 max-sm:py-6 "
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={1500}

          >
            <img className="w-32" src={clickup} alt=""></img>
            <img className="w-32"  src={twillo} alt=""></img>
            <img className="w-32" src={slack}  alt=""></img>
            <img className="w-32"  src={shopify}  alt=""></img>
            <img className="w-32"  src={init}  alt=""></img>
            <img className="w-32"  src={dropbox}  alt=""></img>
          </Carousel>

        
    </div>
  )
}

export default Sponsorspage;
