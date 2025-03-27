import React from "react";
import OneCard from "./OneCard";
// import RTHomePage from "../Images/Ratnagiri/RTHomePage.jpg";
import Chiplun_Bg_Img from "../../Images/Chiplun/Chiplun_Bg_Img.jpg"
import Aarya_Farm from "../../Images/Chiplun/Aarya_Farm.jpg"

import marleshwar from "../../Images/Chiplun/marleshwar.jpg";
import Koyna_Wildlife_Sanctuary from "../../Images/Chiplun/Koyna_Wildlife_Sanctuary.jpg";
import Nehru_Smriti_Udyan from "../../Images/Chiplun/Nehru_Smriti_Udyan.jpg";
import sawatsada from "../../Images/Chiplun/sawatsada.jpg";
import Vashisthi from "../../Images/Chiplun/Vashisthi.jpg";
import walavalkar_shivaji_museum from "../../Images/Chiplun/walavalkar_shivaji_museum.jpg";
// import Velaneshwar_Temple from "../../Images/Chiplun/Velaneshwar_Temple.jpg";
// import Tilak_Ali_Museum from "../../Images/Chiplun/Tilak_Ali_Museum.jpg";
// import Aare_Ware from "../../Images/Chiplun/Aare_Ware.jpg";
// import Patit_Pavan_Mandir from "../../Images/Chiplun/Patit_Pavan_Mandir.jpg"

function Ratnagiri() {
  const attractions = [
    {
      title: "Aarya Farm",
      image: Aarya_Farm,
      description:
        "Aarya Farm in Chiplun is a serene farm stay nestled amidst lush greenery. It offers comfortable accommodation, farm-fresh produce, and recreational activities like farming and nature walks. Guests can enjoy delicious local cuisine at the in-house restaurant and relax in the beautifully maintained garden. With its peaceful ambiance and welcoming staff, Aarya Farm is an ideal getaway for those seeking a tranquil escape from city life.",
      price: 1500, // Price in INR
    },
    {
      title: "Marleshwar Temple",
      image: marleshwar,
      description:
        "The Marleshwar Temple, located in Maharashtra's Ratnagiri district, is a sacred Hindu cave temple dedicated to Lord Shiva. Surrounded by lush forests, waterfalls, and scenic valleys, the temple is a popular pilgrimage site and tourist destination. The temple houses a self-manifested Shiva Linga and celebrates various festivals, including the Marleshwar Yatra. Visitors can also enjoy trekking, cave exploration, and stunning views of the surrounding natural beauty.",
      price: 800,
    },
    {
      title: "Koyna Wildlife Sanctuary",
      image: Koyna_Wildlife_Sanctuary,
      description:
        "Koyna Wildlife Sanctuary, located in Maharashtra's Satara district, is a biodiversity hotspot spanning 423.55 sq km. The sanctuary features tropical forests, is home to various wildlife species like Bengal tigers and Indian bison, and offers stunning views of the Koyna Dam. Visitors can enjoy wildlife safaris, trekking, and birdwatching, with over 200 bird species documented. The best time to visit is from October to May.",
      price: 600,
    },
    {
      title: "Nehru Smriti Udyan",
      image: Nehru_Smriti_Udyan,
      description:
        "Nehru Smriti Udyan in Chiplun, Maharashtra, is a scenic garden dedicated to Jawaharlal Nehru's memory. The garden offers stunning views, beautiful landscaping, a children's play area, and a memorial. It's a popular spot for relaxation and recreation, and is best visited during the monsoon season when the surroundings are lush and green.",
      price: 500,
    },
    {
      title: "Waterfall",
      image: sawatsada,
      description:
        "The Sawatsada Waterfall, located in Maharashtra's Ratnagiri district, is a breathtaking 50-foot waterfall surrounded by lush green forests and rolling hills. The waterfall creates a natural pool perfect for swimming and relaxation. Best visited during the monsoon season, the waterfall offers scenic views, trekking opportunities, and a chance to connect with nature.",
      price: 1200,
    },
    {
      title: "Vashishti River",
      image: Vashisthi,
      description:
        "The Vashishti River, located in Maharashtra's Ratnagiri district, is a sacred and scenic waterbody that flows through the Western Ghats. Originating in the Sahyadri mountains, it empties into the Arabian Sea, offering breathtaking views, waterfalls, and rapids along the way. Considered sacred in Hindu mythology, the Vashishti River is a popular spot for fishing, boating, and adventure seekers, with nearby attractions like Guhanagar, Vashishti Temple,and Chiplun.",
      price: 400,
    },
    // {
    //   title: "Bhatye Beach",
    //   image: walavalkar_shivaji_museum,
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
          style={{ backgroundImage: `url(${Chiplun_Bg_Img})` }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono uppercase text-white p-4 sm:p-5 shadow-lg">
            Chiplun
          </h1>
        </div>
      </div>

      <div className="m-4 sm:m-8 text-lg sm:text-xl p-4 sm:p-8 bg-slate-100  rounded-md shadow-2xl font-serif leading-normal">
        <p className="text-gray-800">
        Chiplun is a charming city located in the Ratnagiri district of
          Maharashtra, India. Situated on the banks of the Vashishti River,
          Chiplun is known for its natural beauty, scenic views, and historic
          temples. The city is surrounded by lush greenery and offers a tranquil
          atmosphere. Chiplun is also a major stopover for trains traveling from
          Mumbai to Goa. The city's proximity to the Arabian Sea adds to its
          picturesque charm.
        </p>
      </div>


      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif capitalize">
          Top Attractions
        </h2>
        <p className="text-lg sm:text-2xl text-gray-600 mt-2 capitalize pb-5">
        Discover the captivating charm of Chiplun
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
