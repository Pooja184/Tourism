import React from "react";
import OneCard from "./OneCard";
// import RTHomePage from "../Images/Ratnagiri/RTHomePage.jpg";
import GuhagarBG from "../../Images/Guhagar/GuhagarBG.jpg"
import GuhagarBeach from "../../Images/Guhagar/GuhagarBeach.jpg"

import VelneshwarBeach from "../../Images/Guhagar/VelneshwarBeach.jpg";
import GopalgadFort from "../../Images/Guhagar/GopalgadFort.jpg";
import DashbhujaGaneshTemple from "../../Images/Guhagar/DashbhujaGaneshTemple.jpg";
import DabholFishMarket from "../../Images/Guhagar/DabholFishMarket.avif";
// import Mandvi_Beach from "../../Images/Guhagar/Mandvi_Beach.jpg";
// import Parshuram_Temple from "../../Images/Guhagar/Parshuram_Temple.jpg";
// import Velaneshwar_Temple from "../../Images/Ratnagiri/Velaneshwar_Temple.jpg";
// import Tilak_Ali_Museum from "../../Images/Ratnagiri/Tilak_Ali_Museum.jpg";
// import Aare_Ware from "../../Images/Ratnagiri/Aare_Ware.jpg";
// import Patit_Pavan_Mandir from "../../Images/Ratnagiri/Patit_Pavan_Mandir.jpg"

function Ratnagiri() {
  const attractions = [
    {
      title: "Guhagar Beach",
      image: GuhagarBeach,
      description:
        "A long, clean beach with soft white sand and shady Suru (Casuarina) trees. It's peaceful, perfect for walks, sunsets, and relaxing by the sea. A favorite spot for tourists who want calm and quiet.",
      price: 1500, // Price in INR
    },
    {
      title: "Velneshwar Beach",
      image: VelneshwarBeach,
      description:
        "A hidden gem around 15 km from Guhagar. Known for its clean sands and calm sea—safe for swimming. It’s less crowded and great for a peaceful picnic or quiet getaway.",
      price: 800,
    },
    {
      title: "Gopalgad Fort",
      image: GopalgadFort,
      description:
        "A historical sea fort located near Anjanwel, 10 km from Guhagar. It offers amazing views of the Arabian Sea and nearby villages. A great spot for history lovers and nature enthusiasts.",
      price: 600,
    },
    {
      title: "Dashbhuja Ganesh Temple",
      image: DashbhujaGaneshTemple,
      description:
        "Located about 25 km from Guhagar, this temple is dedicated to Lord Ganesha with 10 arms (Dashbhuja). It’s a unique and sacred place, especially popular during Ganesh festivals.",
      price: 500,
    },
    {
      title: "Dabhol Fish Market",
      image: DabholFishMarket,
      description:
        "Located near Dabhol, this market is vibrant and full of local life. You can see fresh seafood being sold, and it gives you a real taste of the coastal lifestyle and local culture.",
      price: 1200,
    },
    // {
    //   title: "Patit Pavan Mandir",
    //   image: Patit_Pavan_Mandir,
    //   description:
    //     "Patit Pavan Mandir in Ratnagiri is a sacred temple dedicated to Lord Rama, known for its beautiful architecture and serene atmosphere.",
    //   price: 400,
    // },
    // {
    //   title: "Bhatye Beach",
    //   image: Bhatye,
    //   description:
    //     "Bhatye Beach, located in Ratnagiri, is a picturesque beach with a long stretch of sand, ideal for walking, sunbathing, and relaxation.",
    //   price: 1000,
    // },
    // {
    //   title: "Velneshwar Shiva Temple",
    //   image: Velaneshwar_Temple,
    //   description:
    //     "The Velneshwar Shiva Temple, located in Velneshwar, Ratnagiri, is an ancient temple dedicated to Lord Shiva, situated on the shores of the Arabian Sea.",
    //   price: 700,
    // },
    // {
    //   title: "Tilak Ali Museum",
    //   image: Tilak_Ali_Museum,
    //   description:
    //     "The Tilak Ali Museum, located in Ratnagiri, showcases the ancestral house of Lokmanya Bal Gangadhar Tilak, a prominent Indian freedom fighter.",
    //   price: 500,
    // },
    // {
    //   title: "Mandvi Beach",
    //   image: Mandvi_Beach,
    //   description:
    //     "Mandvi Beach is a scenic beach located in Ratnagiri, Maharashtra, known for its pristine waters, soft sand, and stunning views of the surrounding coastline.",
    //   price: 1300,
    // },
    // {
    //   title: "Parshuram Temple",
    //   image: Parshuram_Temple,
    //   description:
    //     "The Parshuram Temple, located in Chiplun, Ratnagiri, is a sacred site dedicated to Lord Parshuram, the sixth incarnation of Lord Vishnu.",
    //   price: 900,
    // },
  ];
  
  return (
    <>
      <div className="relative w-full min-h-screen font-serif flex items-center justify-center bg-cover bg-center p-4 sm:p-6 md:p-12 lg:p-24">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${GuhagarBG})` }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase text-white p-4 sm:p-5 shadow-lg">
            Guhagar
          </h1>
        </div>
      </div>

      <div className="m-4 sm:m-8 text-lg sm:text-xl p-4 sm:p-8 bg-slate-100  rounded-md shadow-2xl font-serif leading-normal">
        <p className="text-gray-800">
        Guhagar is a charming coastal town in Maharashtra’s Ratnagiri district, known for its long stretches of pristine beaches and authentic Konkan culture. With soft white sands, swaying Casuarina trees, and a calm Arabian Sea, Guhagar offers a tranquil escape from the hustle and bustle of city life. The town is steeped in history and tradition, with ancient temples such as Vyadeshwar Temple and Durga Devi Temple adding a spiritual dimension to the coastal serenity.
        </p>
      </div>


      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif capitalize">
          Top Attractions
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600 mt-2 capitalize pb-5">
          get enchanted by the charm of Guhagar
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
