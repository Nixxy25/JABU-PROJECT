import "./Sponsorspage.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div className=" px-24 py-20 max-sm:px-4">
        <div className="text-center text-xl font-bold pb-10">340+ Leading Universities And Companies</div>

        <div className="border-2 border-gray-300 p-10 max-sm:p-4">
      
          <Carousel responsive={responsive}  
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]} 
            className="logos-slide flex items-center justify-around max-sm:justify-between"
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={1500}
            keyBoardControl={true}
            customTransition="all .10"
            transitionDuration={500}
          >
            <img src="/src/assets/clickUp.png" alt=""></img>
            <img src="/src/assets/dropbox.png" alt=""></img>
            <img src="/src/assets/intuit.png" alt=""></img>
            <img src="/src/assets/shopify.png" alt=""></img>
            <img src="/src/assets/slack1.png" alt=""></img>
            <img src="/src/assets/twillo.png" alt=""></img>
          </Carousel>

        </div>
    </div>
  )
}

export default Sponsorspage;