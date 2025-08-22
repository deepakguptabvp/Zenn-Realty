import React from "react";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiLocation } from "react-icons/ti";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white">
      <div className="w-full flex justify-center relative">
        <img
          src="/hero-Image.webp"
          loading="lazy"
          alt="Gurgaon Real Estate"
          className="w-full max-h-[90vh] h-[90vh] object-cover opacity-85 bg-transparent"
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute mt-20 md:mt-70 p-2">
        <h1 className="text-center justify-center text-lg md:text-4xl font-bold text-orange-950 shadow-2xl ">
          Gurgaon's Most Exclusive Real Estate Experience
        </h1>
        {/*  */}
        {/* <div className="flex justify-between gap-8 mt-2 md:mt-10">
          <span className="font-semibold text-sm md:text-base text-orange-950 bg-orange-100 p-4 rounded-xl">
            Premium Properties
          </span>
          <span className="font-semibold text-sm md:text-base text-orange-950 bg-orange-100 p-4 rounded-xl">
            Trusted Advisors{" "}
          </span>
          <span className="font-semibold text-sm md:text-base text-orange-950 bg-orange-100 p-4 rounded-xl">
            Tailored Solutions
          </span>
        </div> */}
        {/* Contact Info buttons */}
        <div className="flex justify-between gap-8 mt-2 md:mt-10">
          <span className="font-semibold text-sm md:text-base text-orange-950 bg-orange-100 p-2 rounded-xl inline-flex items-center gap-2 cursor-pointer">
          <img src="/call-2.png" alt="Call" className="h-7" />
            Call Now
          </span>
          <span className="font-semibold text-sm md:text-base text-orange-950 bg-orange-100 p-2 rounded-xl inline-flex items-center gap-2 cursor-pointer">
           <img src="/whatsapp.png" alt="Whatsapp" className="h-7" />
            Whatsapp
          </span>
          <span className="font-semibold text-sm md:text-base text-orange-950 bg-orange-100 p-2 rounded-xl inline-flex items-center gap-2 cursor-pointer">
            <img src="/booking.png" alt="Booking" className="h-7" />
            Book a site visit
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
