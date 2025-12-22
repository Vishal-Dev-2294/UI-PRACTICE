import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <>
    <Navbar />
    <Routes> 
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />

        <Route path="*" element={<Notfound />} />
    </Routes>
    </>
  )
}

export default App;
