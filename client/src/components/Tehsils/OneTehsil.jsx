import React from "react";
import { Link } from "react-router-dom";

const OneTehsil = ({ title, image, description, visitURL }) => {
  return (
    <div className="relative my-4 w-full sm:max-w-sm md:max-w-md lg:max-w-3xl">
      <div className="relative w-ful h-[250px] sm:min-h-[400px] md:min-h-[450px] xl:min-h-[380px] border-black border-2 overflow-hidden rounded bg-white">
        <img
          src={image}
          className="absolute inset-0 h-full w-full object-cover"
          alt={`Image of ${title}`}
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start text-white bg-black bg-opacity-30 p-3 sm:p-4">
          <p className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl z-10 m-1 uppercase">
            {title}
          </p>
          <p className="text-xs sm:text-[18px] md:text-xl lg:text-[16px] z-10 mt-2 sm:mt-4 leading-snug">
            {description}
          </p>
          <div className="relative mt-auto">
            {visitURL && (
              <Link
                to={visitURL}
                className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 bg-blue-600 p-2 rounded-md w-34 flex cursor-pointer justify-center text-xs sm:text-sm md:text-base lg:text-xl"
                aria-label={`Explore ${title}`}
              >
                Explore
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTehsil;