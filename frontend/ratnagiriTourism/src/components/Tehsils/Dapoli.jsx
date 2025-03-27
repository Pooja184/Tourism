import React from "react";
import OneCard from "./OneCard";
// import RTHomePage from "../Images/Ratnagiri/RTHomePage.jpg";
import frontImg from "../../Images/Dapoli/frontImg.jpg"
import Ladghar from "../../Images/Dapoli/Ladghar.jpg"

import Murud_Beach from "../../Images/Dapoli/Murud_Beach.jpeg";
import Suvarndurg from "../../Images/Dapoli/Suvarndurg.jpg";
import Unhavare from "../../Images/Dapoli/Unhavare.jpg";
import Karde_Beach from "../../Images/Dapoli/Karde_Beach.avif";
import Harnai_Market from "../../Images/Dapoli/Harnai_Market.webp";
import Panhalekaji_Caves from "../../Images/Dapoli/Panhalekaji_Caves.jpeg";
import Kelshi_Beach from "../../Images/Dapoli/Kelshi_Beach.jpg";
import Keshavraj_Temple from "../../Images/Dapoli/Keshavraj_Temple.jpg";
import Anjarle_Beach from "../../Images/Dapoli/Anjarle_Beach.jpg";

function Dapoli() {
  const attractions = [
    {
      title: "Ladghar Beach",
      image: Ladghar,
      description:
        "Ladghar Beach, also known as Tamas Theertha, is a serene destination in Dapoli, famous for its red-colored sand, dolphin-watching tours, and mesmerizing sunsets.",
      price: 1200, // Price in INR
    },
    {
      title: "Murud Beach",
      image: Murud_Beach,
      description:
        "Murud Beach in Dapoli is a pristine stretch of golden sand, perfect for water sports, horse rides, and enjoying the scenic beauty of the Arabian Sea.",
      price: 1000,
    },
    {
      title: "Suvarnadurg Fort",
      image: Suvarndurg,
      description:
        "Suvarnadurg Fort, a historic sea fort built by Shivaji Maharaj, stands on a small island off the coast of Harnai. It is a must-visit for history enthusiasts.",
      price: 800,
    },
    {
      title: "Unhavare Hot Water Springs",
      image: Unhavare,
      description:
        "Unhavare Hot Water Springs, located near Dapoli, are natural geothermal springs believed to have therapeutic properties, offering a relaxing experience.",
      price: 600,
    },
    {
      title: "Karde Beach",
      image: Karde_Beach,
      description:
        "Karde Beach is a quiet and scenic beach in Dapoli, ideal for dolphin spotting, long walks, and unwinding amidst nature.",
      price: 1100,
    },
    {
      title: "Harnai Fish Market",
      image: Harnai_Market,
      description:
        "Harnai Fish Market is a bustling marketplace where visitors can witness live fish auctions and explore the rich seafood culture of Dapoli.",
      price: 500,
    },
    {
      title: "Panhalekaji Caves",
      image: Panhalekaji_Caves,
      description:
        "Panhalekaji Caves are ancient rock-cut Buddhist caves near Dapoli, featuring intricate carvings and a peaceful atmosphere.",
      price: 700,
    },
    {
      title: "Kelshi Beach",
      image: Kelshi_Beach,
      description:
        "Kelshi Beach is a hidden gem in Dapoli, known for its untouched beauty, sand dunes, and a historic Ganpati temple nearby.",
      price: 900,
    },
    {
      title: "Keshavraj Temple",
      image: Keshavraj_Temple,
      description:
        "Keshavraj Temple, located amidst lush greenery, is an ancient temple dedicated to Lord Vishnu, offering a peaceful spiritual retreat.",
      price: 400,
    },
    {
      title: "Anjarle Beach & Kadyavarcha Ganpati Temple",
      image: Anjarle_Beach,
      description:
        "Anjarle Beach is a beautiful, untouched beach famous for its soft sand and the Kadyavarcha Ganpati Temple, perched on a hill offering scenic views.",
      price: 1300,
    },
  ];
  

  
  
  return (
    <>
      <div className="relative w-full min-h-screen font-serif flex items-center justify-center bg-cover bg-center p-4 sm:p-6 md:p-12 lg:p-24">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${frontImg})` }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase text-white p-4 sm:p-5 shadow-lg">
            Dapoli
          </h1>
        </div>
      </div>

      <div className="m-4 sm:m-8 text-lg sm:text-xl p-4 sm:p-8 bg-slate-100  rounded-md shadow-2xl font-serif leading-normal">
        <p className="text-gray-800">
        Dapoli, a charming coastal town in Maharashtra, is a hidden gem for nature lovers and history buffs alike. Picture yourself strolling along the pristine shores of Ladghar and Murud Beach, where the golden sands meet the endless blue horizon. Adventure seekers can witness mesmerizing dolphin sightings at Kolthare Beach or take a refreshing dip in the natural hot water springs of Unhavare. History comes alive at Suvarnadurg Fort, a majestic sea fort that once played a crucial role in Maratha naval battles. For those craving local flavors, Dapoli offers an array of delicious Konkani seafood, from spicy fish curries to freshly grilled prawns. With its tranquil beaches, historical marvels, and mouthwatering cuisine, Dapoli promises a perfect escape for those seeking relaxation and adventure in equal measure.
        </p>
      </div>


      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif capitalize">
          Top Attractions
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600 mt-2 capitalize pb-5">
          get enchanted by the charm of Dapoli
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

export default Dapoli;
