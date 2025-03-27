import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ratnagiri from "./components/Tehsils/Ratnagiri";
import Rajapur from "./components/Tehsils/Rajapur";
import Lanja from "./components/Tehsils/Lanja"
import Sangmeshwar from "./components/Tehsils/Sangmeshwar"
import Guhagar from "./components/Tehsils/Guhagar"
import Khed from "./components/Tehsils/Khed"
import Dapoli from "./components/Tehsils/Dapoli"
import Mandangad from "./components/Tehsils/Mandangad"
import Chiplun from "./components/Tehsils/Chiplun"
import Layout from "./components/pages/Layout";
import Sign from "./components/pages/Sign";
import Login from "./components/pages/Login";
import Review from "./components/pages/Review";
import Tehsils from "./components/Tehsils/Tehsil";
import About from "./components/pages/About";
// import Logout from "./components/pages/Logout";
import Contact from "./components/pages/Contact";
import IndexPage from "./components/BookHotel/IndexPage";
import { Toaster } from "react-hot-toast"; 
import Profile from "./components/pages/Profile";
import BookTour from "./components/BookHotel/BookTour";
import BookingForm from "./components/BookHotel/BookingForm";


function App() {
  return (
    <>
      <Router>
      <Toaster position="top-center" reverseOrder={false} />
        <Routes>
            {/*login and sign in route */}
           <Route path="/register" element={<Sign/>}/>
           <Route path="/logIn" element={<Login/>}/>
           {/* <Route path="/logout" element={<Logout/>}/> */}
           
            {/* Main Layout */}
          <Route path="/" element={<Layout />}>
           <Route index element={<Home />}/>
           <Route path="/home" element={<Home />} />
           <Route path="/tehsils" element={<Tehsils />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/review" element={<Review />} />
           {/* <Route path="/bookHotels" element={<IndexPage />} /> */}
           <Route path="/bookTour" element={<BookTour/>}/>
           <Route path="/booking" element={<BookingForm/>} />
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/ratnagiri" element={<Ratnagiri/>}/>
           <Route path="/rajapur" element={<Rajapur/>}/>
           <Route path="/lanja" element={<Lanja/>}/>
           <Route path="/sangmeshwar" element={<Sangmeshwar/>}/>
           <Route path="/chiplun" element={<Chiplun/>}/>
           <Route path="/guhagar" element={<Guhagar/>}/>
           <Route path="/khed" element={<Khed/>}/>
           <Route path="/dapoli" element={<Dapoli/>}/>
           <Route path="/mandangad" element={<Mandangad/>}/>
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
