import "./Sponsorspage.css"

const Sponsorspage = () => {
  return (
    <div className=" px-24 py-20">
        <div className="text-center text-xl font-bold pb-10">340+ Leading Universities And Companies</div>

        <div className="logos border-2 border-gray-300 p-8">
      
          <div className="logos-slide flex gap-16 justify-around">
            <img src="/src/assets/clickUp.png" alt=""></img>
            <img src="/src/assets/dropbox.png" alt=""></img>
            <img src="/src/assets/intuit.png" alt=""></img>
            <img src="/src/assets/shopify.png" alt=""></img>
            <img src="/src/assets/slack1.png" alt=""></img>
            <img src="/src/assets/twillo.png" alt=""></img>
          </div>

        </div>
    </div>
  )
}

export default Sponsorspage;