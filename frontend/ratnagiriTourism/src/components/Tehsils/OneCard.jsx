import React from "react";

const OneCard = ({ title, image, description= "Learn More" }) => {
  return (
    <div className="rounded-lg bg-slate-200 overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-56 sm:h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default OneCard;
