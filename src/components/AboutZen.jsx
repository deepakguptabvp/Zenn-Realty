import React from "react";

const AboutZen = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-amber-50 md:py-16 p-4">
      {/* Content part */}
      <div className="flex flex-col md:w-1/2 md:px-8 md:py-10 text-center justify-center space-y-2 w-full">
        <h1 className="flex text-amber-800 text-xl font-bold font-serif ">
          About Zen Realty
        </h1>
        <p className="flex text-justify">
          Zen Realty is a distinguished real estate firm specializing in the
          sale, purchase, and leasing of premium flats, plots, and luxury
          properties. With an unwavering commitment to integrity,
          professionalism, and client-centric service, we deliver seamless and
          transparent real estate solutions. Our expertise lies in curating
          exclusive properties and tailoring strategies that meet the unique
          requirements of discerning clients, ensuring trust, value, and
          long-term relationships.
        </p>
        <div className="flex flex-col w-36 py-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-amber-800 via-amber-600 to-amber-700 shadow-amber-900 shadow-xl  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          >
            About Us
          </button>
        </div>
      </div>

      {/* Img section */}
      <div className="flex flex-col md:w-1/2">
        <img
          src="https://www.jaypeehotels.com/images/meeting-event-page/js-conference-room.jpg"
          alt="About Zen Realty Image"
          className="flex flex-col md:flex-row rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutZen;
