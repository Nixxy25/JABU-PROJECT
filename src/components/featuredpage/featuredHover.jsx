import "./featured.css";
import featuredLogo from "../../assets/grid.png";
import Popup from "../Popup";
import { useState } from "react";
import ThankyouPopup from "../ThankyouPopup";

const FeaturedHover = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [thankYouPopup, setThankYouPopup] = useState(false);

    const handlePopupClose = () => {
        setShowPopup(false);
        setThankYouPopup(true);
      };
    
    const handleThankyouOpen = () => {
        setThankYouPopup(false);
    }
  return (
    <div>
        <div className="card-body bg-white p-4 flex flex-col  gap-4">
            <div className="flex gap-2 text-gray-400">
                <img className="" src={featuredLogo}/>
                <p>University of London</p>
            </div>

            <div className="font-bold text-xl ">The Complete JavaScript Course From Zero to Expert!</div>

            <p className="text-gray-400 ">Lorem ipsum dolorous rises quiz varus qualm quisque id connecter adipescent commode impediment.</p>

            <div>
                <div className="flex gap-2">
                    <svg className="w-4 pb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <p className="text-sm text-gray-600 w-full">Eita quad ex, rhonchus vitae lectors in, digicam pharetra ipsum</p>
                </div>

                <div className="flex gap-2">
                    <svg className="w-4"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <p className="text-sm text-gray-600">Magmas dis parturient mantes</p>
                </div>

                <div className="flex gap-2">
                    <svg className="w-4"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <p className="text-sm text-gray-600">Morbi critique lorem sit a met arco utricles tempus.</p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <button onClick={() => setShowPopup(true)} className="bg-blue-600 w-full text-center text-white font-bold p-2 rounded-md hover:bg-blue-800 changes">Add to Cart</button>
                {showPopup && <Popup onClose={handlePopupClose}/>}
                {thankYouPopup && <ThankyouPopup onCloseThankyouPopup={handleThankyouOpen} />}
                <div className="bg-gray-200 rounded-full p-3"><svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg></div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedHover