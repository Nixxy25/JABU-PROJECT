import Navbar from "./components/Navbar"
import Heropage from "./components/Heropage";
import Sponsorspage from "./components/SponsorsPage/Sponsorspage";
import Featured from "./components/Featured";
import EventsPage from "./components/eventsPage";
import StudentsPreview from "./components/studentsPreview";
import StatsPage from "./components/StatsPage";
import Footer from "./components/footer";
import"./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Sponsorspage />
      <Featured />
      <EventsPage />
      <StudentsPreview />
      <StatsPage />
      <Footer />
    </div>
  )
}

export default App