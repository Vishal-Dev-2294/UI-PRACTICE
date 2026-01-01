import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Notfound from "./Pages/Notfound";
import Events from "./Pages/Events";
import Event from "./Pages/Event";
import Details from "./Pages/Details";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Changepass from "./Pages/Changepass";
import MyBookings from "./Pages/MyBookings";
import ChangeUserDetail from "./Pages/ChangeUserDetail";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import LoginHome from "./Pages/LoginHome";
import Register from "./Pages/Register";
import AddEvent from "./Pages/AddEvent";
import PostCategory from "./Pages/PostCategory";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <LoginHome />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Events/Event" element={<Event />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Changepass" element={<Changepass />} />
        <Route path="/MyBookings" element={<MyBookings />} />
        <Route path="/ChangeUserDetail" element={<ChangeUserDetail />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Admin/AddEvent" element={<AddEvent />} />
        <Route path="/Admin/Category" element={<PostCategory />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
