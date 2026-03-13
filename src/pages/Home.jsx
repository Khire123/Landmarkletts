import React, { useState, useEffect } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import bgimg1 from "../assets/bg-img-1.png";
import bgimg2 from "../assets/bg-img-2.png";
import bgimg3 from "../assets/bg-img-3.jpeg";
import Navbar from "../components/Navbar";

export default function Hero() {
  const images = [bgimg1, bgimg2, bgimg3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full min-h-screen font-[prompt] overflow-x-hidden">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Luxury Home"
          className={`
            absolute inset-0 transition-opacity duration-[2000ms] ease-in-out
            /* DESKTOP/TABLET: Standard full cover */
            sm:w-full sm:h-full sm:object-cover
            /* MOBILE: Allow overflow (150% width) and center it */
            max-sm:min-w-[150vw] max-sm:min-h-full max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:object-cover
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6 text-white w-full">
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold leading-tight mb-6 font-[poppins]">
            <i className="not-italic">
              Exceptional Homes. <br />
              <span className="md:ml-20 italic">Elevated Living.</span>
            </i>
          </h1>

          <p className="max-w-xl text-gray-200 mb-8 md:ml-20 text-sm sm:text-base md:text-lg">
            Luxury residences, modern apartments, and premium properties
            across the United Kingdom.
          </p>

          <div className="md:ml-20">
            <button className="bg-white/10 backdrop-blur-[2px] px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition cursor-pointer text-sm sm:text-base">
              Explore Listing
            </button>
          </div>

          {/* Happy Clients */}
          <div className="flex items-center gap-3 sm:gap-4 mt-16 sm:mt-24 md:ml-20">
            <div className="flex -space-x-3">
              {[32, 44, 76].map((num) => (
                <img
                  key={num}
                  src={`https://randomuser.me/api/portraits/${num % 2 === 0 ? 'women' : 'men'}/${num}.jpg`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                  alt="client"
                />
              ))}
            </div>
            <div className="text-xs sm:text-sm">
              <span className="font-semibold text-lg">50k+</span> <br />
              <span className="text-gray-300">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Sidebar */}
      {/* <div className="relative flex justify-center pb-8 sm:absolute sm:right-6 sm:bottom-10 sm:flex-col z-20 gap-3 sm:gap-4">
        <SocialIcon><SiX /></SocialIcon>
        <SocialIcon><FaLinkedinIn /></SocialIcon>
        <SocialIcon><FaFacebookF /></SocialIcon>
        <SocialIcon><FaInstagram /></SocialIcon>
      </div> */}
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full backdrop-blur-[10px] text-lg sm:text-xl md:text-2xl text-white border border-white/20 hover:bg-[#b28a4a] hover:border-[#b28a4a] transition-all cursor-pointer">
      {children}
    </div>
  );
}