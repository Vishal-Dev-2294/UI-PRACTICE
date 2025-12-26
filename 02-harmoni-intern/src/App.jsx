import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Notfound from "./Pages/Notfound";
import Events from "./Pages/Events";
import Event from "./Pages/Event";
import Details from "./Pages/Details";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";

function App() {
  return (
    <>
    <Navbar />
    <Routes> 
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} /> 
        <Route path="/Events/Event" element={<Event />} />
        <Route path="/Details"  element={<Details />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Account" element={<Account />} />
        <Route path="*" element={<Notfound />} />
    </Routes>
    </>
  )
}

export default App;
