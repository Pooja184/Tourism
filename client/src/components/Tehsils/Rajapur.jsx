import React from "react";
import OneCard from "./OneCard";
// import RTHomePage from "../Images/Ratnagiri/RTHomePage.jpg";
import Rajapur from "../../Images/Rajapur/Rajapur.jpg"
import Ganapatipule from "../../Images/Ratnagiri/Ganapatipule.jpg"
import Kasheli from "../../Images/Rajapur/Kasheli.jpg"
import DhamapurLake from "../../Images/Rajapur/DhamapurLake.jpeg";
import MalgundBeach from "../../Images/Rajapur/MalgundBeach.jpg";
import MarineMuseum from "../../Images/Rajapur/MarineMuseum.webp";
import PandreSamudra from "../../Images/Rajapur/PandreSamudra.png";
import RajapurGanga from "../../Images/Rajapur/RajapurGanga.jpg";
// import Velaneshwar_Temple from "../../Images/Rajapur/Velaneshwar_Temple.jpg";
// import Tilak_Ali_Museum from "../../Images/Rajapur/Tilak_Ali_Museum.jpg";
// import Aare_Ware from "../../Images/Rajapur/Aare_Ware.jpg";
// import Patit_Pavan_Mandir from "../../Images/Rajapur/Patit_Pavan_Mandir.jpg"

function Ratnagiri() {
  const attractions = [
    // {
    //   title: "Ganapatipule Beach",
    //   image: Ganapatipule,
    //   description:
    //     "Ganapatipule is a scenic beach town in Ratnagiri, Maharashtra, known for its pristine beaches and ancient Ganapati Temple. The temple, situated on the beach, is believed to be over 400 years old. It's a popular tourist spot for its natural beauty and spiritual significance.",
    //   price: 1500, // Price in INR
    // },
    // {
    //   title: "Ratnadurg Fort",
    //   image: Ratnadurg,
    //   description:
    //     "Ratnadurg Fort is a 16th-century fort located in Ratnagiri, Maharashtra, overlooking the Arabian Sea. The fort, also known as Bhagawati Fort, is a significant historical landmark and offers stunning views of the surrounding coastline.",
    //   price: 800,
    // },
    {
      title: "Dhamapur Lake",
      image: DhamapurLake,
      description:
        "Dhamapur Lake is a large freshwater lake surrounded by lush greenery. It's a popular picnic spot and offers boating. The calm water and scenic views make it ideal for nature lovers.",
    },
    {
      title: "Kasheli Beach",
      image: Kasheli,
      description: 
      "Kasheli Beach, also known as Devghali Beach, is a secluded coastal gem located near the village of Kasheli in the Ratnagiri district of Maharashtra. Surrounded by steep mountains on three sides, the beach forms a crescent-shaped shoreline, offering a tranquil and picturesque setting for visitors.",
    },
    {
      title: "Malgund Beach",
      image: MalgundBeach,
      description:
        " Malgund Beach is a serene and clean beach located near the birthplace of Marathi poet Keshavsut. It’s known for its peaceful vibe and golden sands. Great for spending quiet time by the sea.",
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
    {
      title: "Marine Fish Museum",
      image: MarineMuseum,
      description:
        "The Marine Fish Museum displays different types of sea creatures, fish models, and information about marine life. It’s educational and interesting for students and tourists who love ocean life.",
      price: 1000,
    },
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
    {
      title: "Pandre Samudra",
      image: PandreSamudra,
      description:
        "Pandre Samudra, which means 'White Sea' is a beautiful beach with clean, white sand and clear water. It is peaceful, less crowded, and perfect for relaxing walks and watching sunsets.",
      price: 1300,
    },
    {
      title: "Rajapur Ganga",
      image: RajapurGanga,
      description:
        "Rajapur chi Ganga is a group of 14 holy water springs that flow naturally from rocks. It is considered sacred by locals, and many believe it has spiritual importance and healing power.",
      price: 900,
    },
  ];
  
  return (
    <>
      <div className="relative w-full min-h-screen font-serif flex items-center justify-center bg-cover bg-center p-4 sm:p-6 md:p-12 lg:p-24">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${Rajapur})` }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase text-white p-4 sm:p-5 shadow-lg">
            Rajapur
          </h1>
        </div>
      </div>

      <div className="m-4 sm:m-8 text-lg sm:text-xl p-4 sm:p-8 bg-slate-100  rounded-md shadow-2xl font-serif leading-normal">
        <p className="text-gray-800">
        Rajapur is a beautiful town located in the Ratnagiri district of Maharashtra. Surrounded by hills and rivers, it is known for its natural beauty, clean beaches, temples, and historical places. Rajapur is also famous for its Alphonso (Hapus) mangoes and peaceful environment. The town has cultural importance and is home to sacred places like Rajapur chi Ganga. With a mix of nature, spirituality, and history, Rajapur is a hidden gem for travelers looking for a calm and scenic getaway.
        </p>
      </div>


      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif capitalize">
          Top Attractions
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600 mt-2 capitalize pb-5">
          get enchanted by the charm of Rajapur
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
