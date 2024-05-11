

const ThankyouPopup = ({onCloseThankyouPopup}) => {
  return (
    <div className="bg-red-600 top-0 popup-bg h-screen  flex justify-center items-center  fixed top-0 left-0 right-0 z-20 ">
      <div className="bg-white  flex justify-center flex-col gap-6 items-center rounded-md w-1/4 h-1/2 max-sm:w-3/4 max-lg:w-1/2 text-lg">
        <svg className="w-20" xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
        <div className="text-center">
            <h2 className="text-xl">Thank You!</h2>
            <p>Your Payment have been received.</p>
        </div>
        <button onClick={onCloseThankyouPopup} className="bg-blue-600 rounded-md px-6 py-1 text-white">OK</button>
      </div>
    </div>
  )
}

export default ThankyouPopup;