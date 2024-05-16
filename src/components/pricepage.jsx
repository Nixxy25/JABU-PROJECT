import { useState } from "react";
import ThankyouPopup from "./ThankyouPopup";
import axios from "axios";


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

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post("https://1b26-105-113-12-157.ngrok-free.app/api/v1/pay/initiate",{price});
            window.location.href = response.data.paymentUrl;
            if (price === ""){
                setPriceError("priceError");
            } else{
                setPriceError("")
                
                setThankYouPopup(true);
            }
        } catch (error){
            console.log("PAYMENT SECTION IS ON MAINTAINANCE MODE:", error);
            alert("PAYMENT SECTION IS ON MAINTAINANCE")
        }

       
    }
  return (
    <form className="flex flex-col justify-content items-center gap-4">
        <label htmlFor="price" className="font-bold">Select a Price: </label>
        <select  value={price} onChange={handleOptionChange} className="border border-black rounded-md outline-none px-4 py-1" >
            <option value="" className="max-sm:text-sm">Enter the price</option>
            <option value="price1">$10</option>
            <option value="price2">$20</option>
            <option value="price3">$30</option>
            <option value="price4">$40</option>
            <option value="price5">$50</option>
        </select>
        <div><button type="submit" onClick={handleSubmit} className="bg-blue-600 rounded-md px-3 py-1 text-white">Finish</button>
        {thankYouPopup && <ThankyouPopup onCloseThankyouPopup={handleThankyouOpen} />}
        </div>
        {priceError && (<p className="text-red-500 font-bold">Select a price</p>)}   
       
    </form>
    )
    }

export default Pricepage;