import React from "react";
import OneCard from "./OneCard";
// import RTHomePage from "../Images/Ratnagiri/RTHomePage.jpg";
import SangameshwarBG from "../../Images/Sangameshwar/Sangameshwar.webp"
import Confluence from "../../Images/Sangameshwar/Confluence.jpg"

import DhodavaneTivreWaterfall from "../../Images/Sangameshwar/DhodavaneTivreWaterfall.jpg";
import SangameshwarTemple from "../../Images/Sangameshwar/SangameshwarTemple.jpg";
import KarneshwarTemple from "../../Images/Sangameshwar/KarneshwarTemple.png";
// import Bhatye from "../../Images/Ratnagiri/Bhatye_Beach.jpg";
// import Mandvi_Beach from "../../Images/Ratnagiri/Mandvi_Beach.jpg";
// import Parshuram_Temple from "../../Images/Ratnagiri/Parshuram_Temple.jpg";
// import Velaneshwar_Temple from "../../Images/Ratnagiri/Velaneshwar_Temple.jpg";
// import Tilak_Ali_Museum from "../../Images/Ratnagiri/Tilak_Ali_Museum.jpg";
// import Aare_Ware from "../../Images/Ratnagiri/Aare_Ware.jpg";
// import Patit_Pavan_Mandir from "../../Images/Ratnagiri/Patit_Pavan_Mandir.jpg"

function Ratnagiri() {
  const attractions = [
    {
      title: "Confluence of Sonavi and Shastri Rivers",
      image: Confluence,
      description:
        "The name “Sangameshwar” comes from this meeting point (“Sangam”) of two rivers – Sonavi and Shastri. It's a calm and scenic place, often visited for its spiritual and natural importance. Great spot for a peaceful visit or meditation.",
    },
    {
      title: "Dhodavane Tivre Waterfall",
      image: DhodavaneTivreWaterfall,
      description:
        "A hidden gem surrounded by greenery, this waterfall flows throughout the year. It's perfect for a short picnic, especially in the rainy season when the flow is stronger. The calm and cool environment is great for relaxing in nature.",
      price: 800,
    },
    {
      title: "Sangameshwar Temple",
      image: SangameshwarTemple,
      description:
        "A prominent Lord Shiva temple in the town, believed to be very ancient and sacred. Many people come here to pray, especially during Mahashivratri. The temple is simple yet spiritually powerful, attracting both locals and tourists.",
      price: 600,
    },
    {
      title: "Karneshwar Temple",
      image: KarneshwarTemple,
      description:
        " An ancient temple built in Hemadpanti architecture, dedicated to Lord Shiva and other deities. It holds religious value for locals and offers a peaceful vibe for visitors. The temple's stone structure and carvings are also interesting to see.",
      price: 500,
    },
    // {
    //   title: "Aare Ware Beach",
    //   image: Aare_Ware,
    //   description:
    //     "Aare Ware Beach in Ratnagiri is a tranquil and picturesque destination, known for its pristine white sand, crystal-clear waters, and stunning sunsets.",
    //   price: 1200,
    // },
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
          style={{ backgroundImage: `url(${SangameshwarBG})` }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase text-white p-4 sm:p-5 shadow-lg">
            Sangameshwar
          </h1>
        </div>
      </div>

      <div className="m-4 sm:m-8 text-lg sm:text-xl p-4 sm:p-8 bg-slate-100  rounded-md shadow-2xl font-serif leading-normal">
        <p className="text-gray-800">
        Sangameshwar is a historic town in the Ratnagiri district of Maharashtra. The name "Sangameshwar" means "the place where rivers meet," as it lies at the confluence of the Sonavi and Shastri rivers. Surrounded by the Sahyadri hills, it is rich in natural beauty and spiritual heritage. The town is known for its ancient temples like Marleshwar and Sangameshwar Temple, scenic waterfalls, and peaceful atmosphere. It also has historical importance—legend says that Chhatrapati Sambhaji Maharaj was captured here by the Mughals.
        </p>
      </div>


      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif capitalize">
          Top Attractions
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600 mt-2 capitalize pb-5">
          get enchanted by the charm of Sangameshwar
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
