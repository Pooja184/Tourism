import React, { useRef } from 'react';
import Tehsil from '../Tehsils/Tehsil';
import FrontImage from '../../Images/FrontImage.jpg';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar';
// import { Link } from 'react-router-dom';
// import RegisterForm from './RegisterForm';
// import Footer from './Footer';

export default function Home() {

  const navigate = useNavigate();

  const userId = sessionStorage.getItem("userId");

  const exploreSectionRef = useRef(null);

  console.log(exploreSectionRef);

  const handleScrollToExplore=()=>{
    if(exploreSectionRef.current){
      exploreSectionRef.current.scrollIntoView({behavior : 'smooth'});
    }
  };

  const handlePlanYourStay = () => {
    if (userId) {
      navigate("/bookTour");
    } else {
      navigate("/login");
      console.log("/login");
    }
  };


  return (
    <div>
      {/* <Navbar/> */}
      <div className="w-full h-screen bg-cover bg-center ">
        <img className='absolute inset-0 w-full h-full object-cover' src={FrontImage} alt='front Image' />
        <div className="relative z-10 flex flex-col items-center justify-center h-96 text-center text-black p-4">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 font-playfair">
    Ratnagiri
  </h1>
  <p className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl font-roboto max-w-[20rem] text-gray-900 mb-4">
    Explore Adventure, Serenity, and Spirituality
  </p>

  {/* Buttons side by side */}
  <div className="flex gap-4 mt-2">
    <button
      onClick={handleScrollToExplore}
      className="p-2 w-[250px] text-2xl bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
    >
      Explore
    </button>
    <button
      onClick={handlePlanYourStay}
      className="p-2 w-[250px] h-[70px] text-2xl bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
    >
      Book Tour
    </button>
  </div>
</div>

      </div>
      <div className='w-full p-4 ' ref={exploreSectionRef}>
      <Tehsil />
      </div >
      {/* <RegisterForm/> */}
    
    </div>
  );
}
