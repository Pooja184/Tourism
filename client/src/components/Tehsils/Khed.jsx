import React from "react";
import OneCard from "./OneCard";
import khedBg from "../../Images/Khed/khedBg.jpg";
import BhosteGhat from "../../Images/khed/BhosteGhat.jpg"
import Jagbudi from "../../Images/Khed/Jagbudi.jpeg";
import KalkaiMandir from "../../Images/Khed/KalkaiMandir.jpeg";
import BuddhaCaves from "../../Images/Khed/BuddhaCaves.jpg";
import Mahipatgad from "../../Images/Khed/Mahipatgad.jpg";
import RaghuveerGhat from "../../Images/Khed/RaghuveerGhat.avif";

function Ratnagiri() {
  const attractions = [
    {
      title: "Bhoste Ghat",
      image: BhosteGhat,
      description:
        "Bhoste Ghat is a scenic mountain pass located near Khed in the Ratnagiri district of Maharashtra. Known for its winding roads and lush green surroundings, this ghat section is part of the Mumbai-Goa National Highway (NH-66). It offers breathtaking views of the Western Ghats, especially during the monsoon season when the entire region is covered in mist and greenery. While it is a visual treat for travelers and nature lovers, Bhoste Ghat is also known for its sharp curves and steep slopes, which make it a challenging drive. The ghat is an important route for transport but requires cautious driving due to landslide risks during heavy rains. Despite its challenges, Bhoste Ghat remains a captivating route that beautifully blends natural charm with adventurous roads.",
      price: 1500, // Price in INR
    },
    {
      title: "Jagbudi River",
      image: Jagbudi,
      description:
        "Jagbudi River flows through Khed in Ratnagiri, Maharashtra, and originates from the Sahyadri hills. It is known for its scenic beauty, especially during the monsoon when the surrounding areas turn lush green. The river supports local agriculture and wildlife, including crocodiles. Though peaceful, it can cause flooding in heavy rains. Jagbudi is an important natural and cultural part of the region.",
      price: 800,
    },
    {
      title: "Kalkai Mandir",
      image: KalkaiMandir,
      description:
        "Kalkai Devi Mandir is a well-known temple located near Khed in Ratnagiri, beside the Mumbai-Goa Highway (NH-66). Dedicated to Goddess Kalkai, the temple has a legend where a cow offered milk on a stone, believed to be divine. The temple is peaceful and especially lively during Navratri, attracting many devotees from the region.",
      price: 600,
    },
    {
      title: "Buddha Caves",
      image: BuddhaCaves,
      description:
        "Khed Caves, also known as Bouddh Caves, are ancient rock-cut Buddhist caves located in the town of Khed, Ratnagiri. These caves date back to early centuries and reflect the deep spiritual and architectural heritage of Buddhism. The main cave features a large vihara (monastery) with small meditation cells and a stupa in a long chamber, which was used for worship and reflection. Alongside, there are four smaller caves. Though in a worn-out condition today, these caves still hold historical importance and offer a glimpse into the peaceful monastic life of ancient Buddhist monks.",
      price: 500,
    },
    {
      title: "Mahipat gad",
      image: Mahipatgad,
      description:
        "Mahipatgad Fort is a historic hill fort located near Khed in Ratnagiri, Maharashtra. Built in the 15th century by the Adilshahi dynasty and later captured by Chhatrapati Shivaji Maharaj, the fort sits at around 3,090 feet. It features six gateways, old temple ruins, horse stables, and wells. Surrounded by dense forest, it's a great spot for trekking and offers scenic views and a glimpse into Maratha history.",
      price: 1200,
    },
    {
      title: "Raghuveer Ghat",
      image: RaghuveerGhat,
      description:
        "Raghuveer Ghat is a scenic mountain pass located near Khed in Ratnagiri, Maharashtra. Situated at an elevation of approximately 760 meters above sea level, this 12-kilometer stretch connects the Ratnagiri and Satara districts. Known for its natural beauty, the ghat is particularly stunning during the monsoon season when it transforms into a lush green landscape, adorned with over 27 waterfalls and surrounded by dense fog. The peaceful atmosphere and breathtaking views make Raghuveer Ghat a must-visit destination for nature lovers and monsoon travelers seeking serenity and picturesque surroundings.",
      price: 400,
    },
  ];
  
  return (
    <>
      <div className="relative w-full min-h-screen font-serif flex items-center justify-center bg-cover bg-center p-4 sm:p-6 md:p-12 lg:p-24">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${khedBg})` }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase text-white p-4 sm:p-5 shadow-lg">
            Khed
          </h1>
        </div>
      </div>

      <div className="m-4 sm:m-8 text-lg sm:text-xl p-4 sm:p-8 bg-slate-100  rounded-md shadow-2xl font-serif leading-normal">
        <p className="text-gray-800">
        Khed is a picturesque tehsil in the Ratnagiri district of Maharashtra, known for its natural beauty and historical significance. It is surrounded by the lush greenery of the Western Ghats, making it a haven for nature lovers and trekkers. The area is dotted with ancient temples, forts, and scenic viewpoints, offering visitors a blend of cultural heritage and tranquil landscapes. Attractions like the Buddha Caves, Mahipatgad Fort, and the scenic Bhoste Ghat attract history buffs, spiritual seekers, and adventure enthusiasts alike. The Khed tehsil also features the serene Jagbudi River and the Kalkai Mandir, making it a perfect destination for those seeking peace and exploration. Whether you're interested in exploring ancient rock-cut caves, trekking through dense forests, or simply enjoying the beauty of nature, Khed offers a memorable experience for all.
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
