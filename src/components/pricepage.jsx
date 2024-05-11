import { useState } from "react";
import ThankyouPopup from "./ThankyouPopup";


const Pricepage = ({handlePrice}) => {
    const [price, setPrice] = useState("");
    const [priceError, setPriceError] = useState("");

    const [thankYouPopup, setThankYouPopup] = useState(false);
    
    const handleThankyouOpen = () => {
        setThankYouPopup(false);
    }

    const handleOptionChange = (e) => {
        setPrice(e.target.value);
        setPriceError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (price === ""){
            setPriceError("priceError");
        } else{
            setPriceError("")
            
            setThankYouPopup(true);
        }
       
        
        
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-content items-center gap-4">
        <label htmlFor="price" className="font-bold">Select a Price: </label>
        <select  value={price} onChange={handleOptionChange} className="border border-black rounded-md outline-none px-4 py-1" >
            <option value="" className="max-sm:text-sm">Enter the value</option>
            <option value="price1">$10</option>
            <option value="price2">$20</option>
            <option value="price3">$30</option>
            <option value="price4">$40</option>
            <option value="price5">$50</option>
        </select>
        <div><button type="submit" className="bg-blue-600 rounded-md px-3 py-1 text-white">Finish</button>
        {thankYouPopup && <ThankyouPopup onCloseThankyouPopup={handleThankyouOpen} />}
        </div>
        {priceError && (<p className="text-red-500 font-bold">Select a price</p>)}   
       
    </form>
    )
    }

export default Pricepage;