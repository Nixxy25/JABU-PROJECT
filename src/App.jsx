import Navbar from "./components/Navbar"
import Heropage from "./components/Heropage";
import Sponsorspage from "./components/SponsorsPage/Sponsorspage";
import Featured from "./components/Featured";

import"./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Sponsorspage />
      <Featured />
    </div>
  )
}

export default App