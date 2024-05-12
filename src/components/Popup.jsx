import { useState } from "react";
import poolot from "../assets/poolot-logo.png";
import Pricepage from "./pricepage";
import axios from "axios";

const Popup = ({onClose}) => {


  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");


  const [step, setStep] = useState(1);
 

  const handleNextStep = async(e) => {
    e.preventDefault();
    setStep(step + 1);
    try{
      const response = await axios.post("https://1b26-105-113-12-157.ngrok-free.app/api/v1/user/register",{
        email,
        phoneNumber,
        lastName,
        firstName,
      });
      console.log("data:", response.data);
    }catch(error){
      console.error("error in fetching api:", error );
    } 
    
  };
    
 
  
  return (
    <div  className="popup-bg h-screen w-full flex justify-center  items-center inset-0 overflow-hidden  fixed top-0 left-0 right-0 z-20">
        <div className="bg-[#fafaf9] w-1/2 h-3/4  p-8 max-sm:w-3/4">
          <div className="flex justify-between items-center pb-8">
            <img className="w-32" src={poolot}></img>
            <div className="flex " onClick={onClose}><button type="submit" className="bg-blue-600 rounded-md px-3 py-1 text-white">close</button></div>
          </div>


          {step === 1 && (
            <form  className="flex flex-col gap-4">
              <input required className="border border-black rounded-md outline-none p-2 bg-transparent" type="email" name="name" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="email" />
              <input required  className="border border-black rounded-md outline-none p-2 bg-transparent" type="text" name="phoneNumber" value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
              <input required  className="border border-black rounded-md outline-none p-2 bg-transparent" type="text" name="firstName" value={firstName}  onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
              <input required  className="border border-black rounded-md outline-none p-2 bg-transparent" type="text" name="lastName" value={lastName}  onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
              <input required  className="border border-black rounded-md outline-none p-2 bg-transparent" type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <div className="flex "><button type="submit" onClick={handleNextStep} className="bg-blue-600 rounded-md px-3 py-1 text-white">Next</button></div>
            </form>
          )}

          {step === 2 && (
            <Pricepage handlePrice={onClose} />
          )}

        
           
        </div>
       
    </div>
  )
}

export default Popup