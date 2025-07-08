import React from "react";
import OneTehsil from "./OneTehsil";
// import RatnagiriImage from "../../Images/Ratnagiri.jpg";
import RatnagiriImage from "../../Images/RatnagiriTehsil.jpg";
import ChiplunImage from "../../Images/ChiplunTehsil.jpg";
import LanjaImage from "../../Images/LanjaTehsil.jpg";
import KhedImage from "../../Images/KhedTehsil.jpeg";
import DapoliImage from "../../Images/DapoliTehsil.jpg";
import MandangadImage from "../../Images/MandangadTehsil.jpeg";
import RajapurImage from "../../Images/RajapurTehsil.jpg";
import SangmeshwarImage from "../../Images/SangameshwarTehsil.jpg";
import GuhagarImage from "../../Images/GuhagarTehsil.jpg";
import Home from "../pages/Home";

const Tehsils = () => {
  const tehsils = [
    {
      id: "1",
      title: "Ratnagiri",
      image: RatnagiriImage,
      description:
        "Ratnagiri is a coastal district in Maharashtra, India, known for its natural beauty, rich history, and cultural significance. It's famous for its Alphonso mangoes, scenic beaches like Ganapatipule, and historic sites like the Ratnagiri Fort.",
      visitURL: "/ratnagiri",
    },
    {
      id: "2",
      title: "Chiplun",
      image: ChiplunImage,
      description:
        "Chiplun is nestled along the banks of the Vashishti River. Famous for its lush greenery, waterfalls, and the Parshuram Temple, it is a blend of natural beauty and cultural heritage, attracting tourists and pilgrims alike.",
      visitURL: "/chiplun",
    },
    {
      id: "3",
      title: "Lanja",
      image: LanjaImage,
      description:
        "Lanja is surrounded by lush greenery, rolling hills, and serene villages. Known for its agricultural produce, especially rice and cashews, it offers a peaceful escape into nature and showcases the charm of traditional Konkani culture.",
      visitURL: "/lanja",
    },
    {
      id: "4",
      title: "Khed",
      image: KhedImage,
      description:
        "A picturesque region in Ratnagiri district, Khed is known for its hilly terrain, verdant landscapes, and historical significance. It is a gateway to scenic spots like forts, waterfalls, and temples, making it a blend of nature and heritage.",
      visitURL: "/khed",
    },
    {
      id: "5",
      title: "Dapoli",
      image: DapoliImage,
      description:
        "Known as the Mini Mahabaleshwar of Ratnagiri district, Dapoli boasts a cool climate, lush greenery, and beautiful beaches like Ladghar and Karde. Famous for its forts, temples, and dolphin sightings, it’s a perfect mix of adventure and tranquility.",
      visitURL: "/dapoli",
    },
    {
      id: "6",
      title: "Mandangad",
      image: MandangadImage,
      description:
        "Mandangad is known for its historical fort and scenic landscapes.",
      visitURL: "/mandangad",
    },
    {
      id: "7",
      title: "Rajapur",
      image: RajapurImage,
      description:
        "Rajapur is a serene destination known for its natural springs like Rajapur Ganga, ancient temples like Dhootpapeshwar, and lush greenery. It’s a hub for Alphonso mangoes, cashew farming, and traditional Konkani culture.",
      visitURL: "/rajapur",
    },
    {
      id: "8",
      title: "Sangmeshwar",
      image: SangmeshwarImage,
      description:
        "Sangmeshwar is known for its agricultural landscape and the historic Sangameshwar Temple.",
      visitURL: "/sangmeshwar",
    },
    {
      id: "9",
      title: "Guhagar",
      image: GuhagarImage,
      description:
        "Guhagar is known for its pristine beaches and lush surroundings.",
      visitURL: "/guhagar",
    },
  ];

  return (
    <>
      <div>
        {/* <Home /> */}
        <div className="font-serif p-4 md:p-8 lg:p-12 w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tehsils.map((tehsil) => (
              <OneTehsil
                key={tehsil.id}
                title={tehsil.title}
                image={tehsil.image}
                description={tehsil.description}
                visitURL={tehsil.visitURL}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tehsils;
