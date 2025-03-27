import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Images/BookHotel/img1.jpg";
import img2 from "../../Images/BookHotel/img2.jpg";
import img3 from "../../Images/BookHotel/img3.webp";
import img4 from "../../Images/BookHotel/img4.jpg";
import img5 from "../../Images/BookHotel/img5.webp";

const BookTour = () => {
  const experiences = [
    {
      id: 1,
      title: "A Taste of Konkan: Ratnagiri",
      image: img1,
      description:
        "A 3-day culinary experience in Ratnagiri, sampling Konkan cuisine, local markets, and even participating in cooking classes.",
      price: "600/-",
    },
    {
      id: 2,
      title: "Ratnagiri & Historical Forts Tour",
      image: img2,
      description:
        "A 3-day tour dedicated to visiting historical forts like Ratnagiri Fort and Fort Jaigad, combined with coastal sightseeing.",
      price: "800/-",
    },
    {
      id: 3,
      title: "Ratnagiri Beachside Bliss",
      image: img3,
      description:
        "A 2-3 day beach vacation enjoying beachfront accommodations, relaxing beach walks, and visits to scenic beaches in Ratnagiri.",
      price: "900/-",
    },
    {
      id: 4,
      title: "Konkan Vibes: Ratnagiri Expedition",
      image: img4,
      description:
        "A 5-day Konkan adventure exploring Ratnagiri’s natural beauty, beaches, cultural traditions, and scenic landscapes.",
      price: "800/-",
    },
    {
      id: 5,
      title: "Ratnagiri Adventure Retreat",
      image: img5,
      description:
        "A 3-4 day adventure tour offering trekking, water sports, and nature walks amid Ratnagiri's stunning landscapes.",
      price: "1500/-",
    },
    {
      id: 6,
      title: "Heritage and Beaches of Ratnagiri",
      image: img1,
      description:
        "A 3-day tour combining visits to historical sites like Ratnagiri Fort with beach outings to popular spots like Ganpatipule and Bhatye Beach.",
      price: "700/-",
    },
  ];

  return (
    <div className="bg-gray-100 text-center py-10 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 capitalize">
        Ratnagiri Tour Packages
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mt-2">
        Explore diverse travel experiences, from thrilling safaris to romantic getaways.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full aspect-[16/9] object-cover rounded-md"
            />

            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mt-4 text-gray-800 capitalize">
                {exp.title}
              </h3>
              <p className="text-gray-500 text-sm flex-grow">{exp.description}</p>
              <p className="font-medium text-center">{`Rate: ${exp.price}`}</p>
            </div>

            {/* Link to the booking page */}
            <Link
              to={`/booking?title=${encodeURIComponent(exp.title)}&id=${exp.id}`}
              className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors w-full text-center block"
            >
              Book Tour
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTour;
