import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chiplun from "./components/Tehsils/Chiplun";
import Dapoli from "./components/Tehsils/Dapoli";
import Guhagar from "./components/Tehsils/Guhagar";
import Khed from "./components/Tehsils/Khed";
import Lanja from "./components/Tehsils/Lanja";
import Mandangad from "./components/Tehsils/Mandangad";
import Rajapur from "./components/Tehsils/Rajapur";
import Ratnagiri from "./components/Tehsils/Ratnagiri";
import Sangmeshwar from "./components/Tehsils/Sangmeshwar";
import Tehsils from "./components/Tehsils/Tehsil";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/Login";
import Review from "./components/pages/Review";
import Sign from "./components/pages/Sign";
// import Logout from "./components/pages/Logout";
import Contact from "./components/pages/Contact";
// import IndexPage from "./components/BookHotel/IndexPage";
import { Toaster } from "react-hot-toast";
import BookTour from "./components/BookHotel/BookTour";
import BookingForm from "./components/BookHotel/BookingForm";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          {/*login and sign in route */}
          <Route path="/register" element={<Sign />} />
          <Route path="/logIn" element={<Login />} />
          {/* <Route path="/logout" element={<Logout/>}/> */}

          {/* Main Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tehsils" element={<Tehsils />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/review" element={<Review />} />
            {/* <Route path="/bookHotels" element={<IndexPage />} /> */}
            <Route path="/bookTour" element={<BookTour />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ratnagiri" element={<Ratnagiri />} />
            <Route path="/rajapur" element={<Rajapur />} />
            <Route path="/lanja" element={<Lanja />} />
            <Route path="/sangmeshwar" element={<Sangmeshwar />} />
            <Route path="/chiplun" element={<Chiplun />} />
            <Route path="/guhagar" element={<Guhagar />} />
            <Route path="/khed" element={<Khed />} />
            <Route path="/dapoli" element={<Dapoli />} />
            <Route path="/mandangad" element={<Mandangad />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

{
  /* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tehsils" element={<Tehsil />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/temples" element={<Temples />} />
      </Routes> */
}
