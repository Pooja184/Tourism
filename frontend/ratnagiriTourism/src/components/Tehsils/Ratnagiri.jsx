import React from "react";
import OneCard from "./OneCard";
// import RTHomePage from "../Images/Ratnagiri/RTHomePage.jpg";
import RTHomePage from "../../Images/Ratnagiri/RTHomePage.jpg"
import Ganapatipule from "../../Images/Ratnagiri/Ganapatipule.jpg"

import Ratnadurg from "../../Images/Ratnagiri/Ratnadurg.jpg";
import Thiba_Palace from "../../Images/Ratnagiri/Thiba.jpg";
import Jaigad from "../../Images/Ratnagiri/Jaigad.avif";
import Bhatye from "../../Images/Ratnagiri/Bhatye_Beach.jpg";
import Mandvi_Beach from "../../Images/Ratnagiri/Mandvi_Beach.jpg";
import Parshuram_Temple from "../../Images/Ratnagiri/Parshuram_Temple.jpg";
import Velaneshwar_Temple from "../../Images/Ratnagiri/Velaneshwar_Temple.jpg";
import Tilak_Ali_Museum from "../../Images/Ratnagiri/Tilak_Ali_Museum.jpg";
import Aare_Ware from "../../Images/Ratnagiri/Aare_Ware.jpg";
import Patit_Pavan_Mandir from "../../Images/Ratnagiri/Patit_Pavan_Mandir.jpg"

function Ratnagiri() {
  const attractions = [
    {
      title: "Ganapatipule Beach",
      image: Ganapatipule,
      description:
        "Ganapatipule is a scenic beach town in Ratnagiri, Maharashtra, known for its pristine beaches and ancient Ganapati Temple. The temple, situated on the beach, is believed to be over 400 years old. It's a popular tourist spot for its natural beauty and spiritual significance.",
    },
    {
      title: "Ratnadurg Fort",
      image: Ratnadurg,
      description:
        "Ratnadurg Fort is a 16th-century fort located in Ratnagiri, Maharashtra, overlooking the Arabian Sea. The fort, also known as Bhagawati Fort, is a significant historical landmark and offers stunning views of the surrounding coastline.",
    },
    {
      title: "Thiba Palace",
      image: Thiba_Palace,
      description:
        "Thiba Palace is a majestic palace located in Ratnagiri, Maharashtra, built in 1910 for the exiled king of Burma, Thibaw. The palace showcases a blend of Indian and Burmese architectural styles. It now serves as a museum, offering a glimpse into the region's rich history.",
    },
    {
      title: "Jaigad Lighthouse",
      image: Jaigad,
      description:
        "The Jaigad Lighthouse, situated in Jaigad, Ratnagiri, is a historic lighthouse built in 1832, offering breathtaking views of the Arabian Sea and the surrounding coastline. The lighthouse stands atop a hill, providing a panoramic view of the Jaigad Fort, the sea, and the surrounding landscape.",
    },
    {
      title: "Aare Ware Beach",
      image: Aare_Ware,
      description:
        "Aare Ware Beach in Ratnagiri is a tranquil and picturesque destination, known for its pristine white sand, crystal-clear waters, and stunning sunsets. This beach is a perfect spot for relaxation, swimming, and water sports, offering an ideal getaway from the hustle and bustle of city life.",
    },
    {
      title: "Patit Pavan Mandir",
      image: Patit_Pavan_Mandir,
      description:
      "Patit Pavan Mandir in Ratnagiri is a sacred temple dedicated to Lord Rama, known for its beautiful architecture and serene atmosphere, attracting devotees and tourists alike. The temple is particularly famous for its charitable activities, providing food and shelter to the needy, and is a symbol of social reform and community service."
    },
    {
      title: "Bhatye Beach",
      image: Bhatye,
      description:
        "Bhatye Beach, located in Ratnagiri, is a picturesque beach with a long stretch of sand, ideal for walking, sunbathing, and relaxation. The beach offers stunning views of the sunset, surrounded by majestic palm trees, creating a peaceful atmosphere perfect for tourists.",
    },
    {
      title: "Velneshwar Shiva Temple",
      image: Velaneshwar_Temple,
      description:
        "The Velneshwar Shiva Temple, located in Velneshwar, Ratnagiri, is an ancient temple dedicated to Lord Shiva, situated on the shores of the Arabian Sea. The temple's serene atmosphere, surrounded by coconut and ashok trees, makes it a peaceful spot for relaxation and prayer.",
    },
    {
      title: "Tilak Ali Museum",
      image: Tilak_Ali_Museum,
      description:
        "The Tilak Ali Museum, located in Ratnagiri, showcases the ancestral house of Lokmanya Bal Gangadhar Tilak, a prominent Indian freedom fighter. The museum features exhibits on Tilak's life, the Indian independence movement, and the history of the region, offering a glimpse into India's struggle for independence.",
    },
    {
      title: "Mandvi Beach",
      image: Mandvi_Beach,
      description:
        "Mandvi Beach is a scenic beach located in Ratnagiri, Maharashtra, known for its pristine waters, soft sand, and stunning views of the surrounding coastline. The beach is a popular spot for swimming, sunbathing, and water sports.",
    },
    {
      title: "Parshuram Temple",
      image: Parshuram_Temple,
      description:
        "The Parshuram Temple, located in Chiplun, Ratnagiri, is a sacred site dedicated to Lord Parshuram, the sixth incarnation of Lord Vishnu. According to legend, Lord Parshuram created this temple himself, making it a revered pilgrimage site for devotees.",
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
            Ratnagiri
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
          />
        ))}
      </div>
    </>
  );
}

export default Ratnagiri;
