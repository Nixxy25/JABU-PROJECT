import { useState } from "react";

const Popup = ({onClose}) => {

  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    price: ''
  });
  const [step, setStep] = useState(1);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };
    
  const handleFinish = () => {
    // Handle form submission (e.g., send data to server)
    // Show Thank You page
    setStep(3);
  };
  return (
    <div  className="bg-transparent h-screen w-full flex justify-center  items-center  fixed top-0 left-0 right-0 z-10">
        <div className="bg-red-100 w-1/3 h-3/4  p-8 max-sm:w-3/4">
          <div className="flex justify-between pb-8">
            <h1>Popup</h1>
            <div className="flex " onClick={onClose}><button type="submit" className="bg-blue-600 rounded-md px-3 py-1 text-white">close</button></div>
          </div>


          {step === 1 && (
            <form onSubmit={handleNextStep} className="flex flex-col gap-4">
              <input required className="border-2 border-blue-600 rounded-md outline-none p-2 bg-transparent" type="text" name="name" value={form.name} onChange={handleForm} placeholder="Name" />
              <input required  className="border-2 border-blue-600 rounded-md outline-none p-2 bg-transparent" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleForm} placeholder="Phone Number" />
              <div className="flex "><button type="submit" className="bg-blue-600 rounded-md px-3 py-1 text-white">Next</button></div>
            </form>
          )}

          {step === 2 && (
            <form>
              <input type="text" name="name" value={form.name} onChange={handleForm} placeholder="Name" />
              <button type="submit">Finish</button>
            </form>
          )}
        </div>
       
    </div>
  )
}

export default Popup