import React from "react";
import OneCard from "./OneCard";
// import RTHomePage from "../Images/Ratnagiri/RTHomePage.jpg";
import RTHomePage from "../../Images/Ratnagiri/RTHomePage.jpg"
// import Ganapatipule from "../../Images/Ratnagiri/Ganapatipule.jpg"

import KhornikaDam from "../../Images/Lanja/khornikaDam.jpg";
import Sawatsada from "../../Images/Lanja/sawatsada.webp";


function Ratnagiri() {
  const attractions = [
    {
      title: "Khornika Dam",
      image: KhornikaDam,
      description:
        "Khorninko Dam is a peaceful and scenic spot located in Lanja, Ratnagiri. Surrounded by lush greenery, it’s especially beautiful during the monsoon when water flows over its wide steps like a waterfall. This earthen dam is not only useful for irrigation but also a relaxing nature spot for visitors. Its calm atmosphere and natural charm make it a great escape for picnics and photography lovers.",
      price: 1500, // Price in INR
    },
    {
      title: "Sawatsada Dam",
      image: Sawatsada,
      description:
        "Swatsada Dam is a beautiful seasonal waterfall located near lanja in Ratnagiri district. Nestled in the greenery of the Western Ghats, it comes alive during the monsoon when water cascades down the rocky cliffs, creating a stunning natural waterfall. Easily visible from the Mumbai-Goa highway, it attracts travelers looking for a quick nature break. The peaceful surroundings and lush landscapes make it a favorite spot for photos, short walks, and enjoying the refreshing beauty of the rain-soaked Konkan. It's a perfect stop for nature lovers and monsoon travelers.",
      price: 800,
    },
    
  ];
  
  return (
    <>
      <div className="relative w-full min-h-screen font-serif flex items-center justify-center bg-cover bg-center p-4 sm:p-6 md:p-12 lg:p-24">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${RTHomePage})` }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase text-white p-4 sm:p-5 shadow-lg">
           Lanja
          </h1>
        </div>
      </div>

      <div className="m-4 sm:m-8 text-lg sm:text-xl p-4 sm:p-8 bg-slate-100  rounded-md shadow-2xl font-serif leading-normal">
        <p className="text-gray-800">
        Lanja Tehsil in Ratnagiri is a hidden gem where nature and tradition come together in perfect harmony. Picture yourself wandering through lush green fields, the air filled with the sweet scent of mango blossoms from nearby orchards. In the heart of this peaceful tehsil lie ancient temples like the Shree Devi Bhavani Temple, where locals gather in devotion and festivals light up the entire village with joy. As you explore further, you’ll find winding roads lined with coconut trees and charming hamlets that offer a glimpse into the slow, serene rhythm of Konkan life. During the monsoon, waterfalls cascade down the hills, turning Lanja into a lush green paradise. Whether you're seeking tranquility, a connection to heritage, or just a breath of fresh air, Lanja welcomes you with open arms and a soul-soothing experience you won't forget.
        </p>
      </div>


      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif capitalize">
          Top Attractions
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600 mt-2 capitalize pb-5">
          get enchanted by the charm of lanja
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 font-serif">
        {attractions.map((attraction, index) => (
          <OneCard
            key={index}
            title={attraction.title}
            image={attraction.image}
            description={attraction.description}
            price = {attraction.price}
          />
        ))}
      </div>
    </>
  );
}

export default Ratnagiri;
