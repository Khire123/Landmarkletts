import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import bgimg1 from "../assets/bg-img-1.png";
import bgimg2 from "../assets/bg-img-2.png"
import bgimg3 from "../assets/bg-img-3.jpeg"
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";



export default function Hero() {

    const images = [bgimg1, bgimg2, bgimg3];
const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 4000); // change every 4 sec

  return () => clearInterval(interval);
}, []);

  return (
    <div className="relative w-full min-h-screen font-[prompt]">

      {/* Background Image */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Luxury Home"
          className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <Navbar />


      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full pt-40">
         <div className="max-w-7xl mx-auto px-6 text-white w-full">

          <h1 className="text-5xl md:text-8xl font-semibold leading-tight mb-6 font-[poppins]"><i>
            Exceptional Homes. <br />
            <span className="md:ml-20">Elevated Living.</span>
            </i>
          </h1>

          <p className="max-w-3xl text-gray-200 mb-8 md:ml-20">
            Luxury residences, modern apartments, and premium properties
            across the United Kingdom.
          </p>

          <button className="bg-white/10 backdrop-blur-[2px] px-6 py-3 rounded-full border border-[#4E4C4C] hover:bg-white hover:text-black transition cursor-pointer">
            Explore Listing
          </button>

          {/* Happy Clients */}
          <div className="flex items-center gap-3 sm:gap-4 mt-16 sm:mt-24 md:mt-30 mb-10">

            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
              />
            </div>

            <div className="text-sm">
              <span className="font-semibold">50k+</span> <br />
              Happy Clients
            </div>

          </div>
        </div>
      </div>

      {/* Social Sidebar */}
    <div className=" relative flex justify-center mt-4 bottom-5 sm:absolute sm:right-6 sm:bottom-10 sm:flex-col z-20 gap-3 sm:gap-4">

        <SocialIcon><SiX /></SocialIcon>
        <SocialIcon><FaLinkedinIn /></SocialIcon>
        <SocialIcon><FaFacebookF /></SocialIcon>
        <SocialIcon><FaInstagram /></SocialIcon>

      </div>
    </div>
  );
}


/* Reusable Social Icon */
function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full backdrop-blur-[10px] text-lg sm:text-xl md:text-2xl text-white border border-[#4E4C4C] hover:bg-white hover:text-black transition cursor-pointer">
      {children}
    </div>
  );
}
