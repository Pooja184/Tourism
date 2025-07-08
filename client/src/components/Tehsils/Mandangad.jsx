import React from "react";
import OneCard from "./OneCard";
// import RTHomePage from "../Images/Ratnagiri/RTHomePage.jpg";
import MandangadBg from "../../Images/Mandangad/MandangadBg.webp"
import BankotFort from "../../Images/Mandangad/BankotFort.jpeg"

import TulsiDam from "../../Images/Mandangad/TulsiDam.jpeg";
import MandangadFort from "../../Images/Mandangad/MandangadFort.webp";
import velasTurtle from "../../Images/Mandangad/velasTurtle.webp";


function Ratnagiri() {
  const attractions = [
    {
      title: "Bankot Fort ",
      image: BankotFort,
      description:
        "Bankot Fort is a historic sea fort located near the coast of Mandangad in Ratnagiri district. It offers stunning views of the Arabian Sea and the Savitri River. Once an important trading and strategic point, this fort has seen control by the Portuguese, Marathas, and British. Surrounded by coconut trees and serene landscapes, it’s a perfect spot for history lovers and photographers.",
      price: 1500, // Price in INR
    },
    {
      title: "Tulsi Dam",
      image: TulsiDam,
      description:
        "Tulsi Dam is a peaceful and lesser-known spot in Mandangad tehsil. Surrounded by hills and greenery, it's mainly used for irrigation and water storage but also serves as a relaxing place for locals and nature lovers. The calm atmosphere makes it a nice location for small picnics and monsoon visits.",
      price: 800,
    },
    {
      title: "Mandangad Fort",
      image: MandangadFort,
      description:
        "Mandangad Fort is a small yet historically significant hill fort in Ratnagiri, built during the reign of Shivaji Maharaj. It offers panoramic views of the surrounding valleys and countryside. The fort has a few structures left including a water tank and temple, making it an ideal destination for trekking and exploring Maratha history.",
      price: 600,
    },
    {
      title: "Velas Turtle Festival",
      image: velasTurtle,
      description:
        "Velas Turtle Festival is a unique and eco-friendly event held every year in the small coastal village of Velas. It celebrates the hatching of Olive Ridley turtle eggs and their safe journey to the sea. Organized by local villagers and conservationists, the festival attracts nature lovers and photographers from all over. It's a beautiful experience that promotes wildlife awareness and sustainable tourism.",
      price: 500,
    },
  ];
  
  return (
    <>
      <div className="relative w-full min-h-screen font-serif flex items-center justify-center bg-cover bg-center p-4 sm:p-6 md:p-12 lg:p-24">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${MandangadBg})`}}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase text-white p-4 sm:p-5 shadow-lg">
            Mandangad
          </h1>
        </div>
      </div>

      <div className="m-4 sm:m-8 text-lg sm:text-xl p-4 sm:p-8 bg-slate-100  rounded-md shadow-2xl font-serif leading-normal">
        <p className="text-gray-800">
          Ratnagiri district in Maharashtra is a paradise for beach lovers and
          history enthusiasts alike. Imagine spending lazy afternoons on the
          golden sands of Ganapatipule Beach, watching the waves dance against
          the shore. Or exploring ancient forts like Ratnadurga and Murud, where
          the walls whisper stories of battles and conquests from centuries
          past. For a deeper dive into the region's maritime heritage, the
          Ratnagiri Marine Museum is a must-visit, showcasing a fascinating
          collection of marine life and artifacts. And let's not forget the
          mouthwatering cuisine – Ratnagiri is famous for its fresh seafood
          delicacies that are sure to tantalize your taste buds. With its scenic
          beauty, rich history, and culinary delights, Ratnagiri district
          promises an unforgettable getaway for all who visit.
        </p>
      </div>


      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif capitalize">
          Top Attractions
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600 mt-2 capitalize pb-5">
          get enchanted by the charm of ratnagiri
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
