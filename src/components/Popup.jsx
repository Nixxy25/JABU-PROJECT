import { useState } from "react";
import poolot from "../assets/poolot-logo.png";
import Pricepage from "./pricepage";

const Popup = ({onClose}) => {

  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    email:"",
  });

  const [step, setStep] = useState(1);
 

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };
    
 
  
  return (
    <div  className="popup-bg h-screen w-full flex justify-center  items-center inset-0 overflow-hidden  fixed top-0 left-0 right-0 z-20">
        <div className="bg-[#fafaf9] w-1/2 h-3/4  p-8 max-sm:w-3/4">
          <div className="flex justify-between items-center pb-8">
            <img className="w-32" src={poolot}></img>
            <div className="flex " onClick={onClose}><button type="submit" className="bg-blue-600 rounded-md px-3 py-1 text-white">close</button></div>
          </div>


          {step === 1 && (
            <form onSubmit={handleNextStep} className="flex flex-col gap-4">
              <input required className="border border-black rounded-md outline-none p-2 bg-transparent" type="text" name="name" value={form.name} onChange={handleForm} placeholder="Name" />
              <input required  className="border border-black rounded-md outline-none p-2 bg-transparent" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleForm} placeholder="Phone Number" />
              <input required  className="border border-black rounded-md outline-none p-2 bg-transparent" type="email" name="email" value={form.email} onChange={handleForm} placeholder="Email" />
              <div className="flex "><button type="submit" className="bg-blue-600 rounded-md px-3 py-1 text-white">Next</button></div>
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