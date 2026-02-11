import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import bgimg1 from "../assets/bg-img-1.png";
import bgimg2 from "../assets/bg-img-2.png"
import bgimg3 from "../assets/bg-img-3.jpeg"
import logo from "../assets/logo.png";


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
    <div className="relative w-full h-screen font-[prompt]">

      {/* Background Image */}
      <img
        src={images[current]}
        alt="Luxury Home"
        className="absolute inset-0 w-full h-full transition-opacity duration-1000"
        />


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 text-white">

          {/* Logo */}
          <div className="flex items-center">
            <img
                src={logo}
                alt="Landmark Letts Logo"
                className="h-30 w-auto object-contain"
            />
            </div>


          {/* Nav Links */}
          <nav className="hidden md:flex gap-10 text-md font-medium">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Listing</a>
          </nav>

          {/* Contact Button */}
          <button className="border border-white px-5 py-2 rounded-full text-md hover:bg-white hover:text-black transition">
            Contact
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full pt-25">
         <div className="max-w-7xl mx-auto px-6 text-white w-full">

          <h1 className="text-4xl md:text-8xl font-semibold leading-tight mb-6 font-[poppins]"><i>
            Exceptional Homes. <br />
            <span className="ml-20">Elevated Living.</span>
            </i>
          </h1>

          <p className="max-w-3xl text-gray-200 mb-8 ml-20">
            Luxury residences, modern apartments, and premium properties
            across the United Kingdom.
          </p>

          <button className="bg-white/10 backdrop-blur-[2px] px-6 py-3 rounded-full border border-[#4E4C4C] hover:bg-white hover:text-black transition">
            Explore Listing
          </button>

          {/* Happy Clients */}
          <div className="flex items-center gap-4 mt-30">

            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
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
      <div className="absolute right-6 -bottom-25 -translate-y-1/2 z-20 flex flex-col gap-4">

        <SocialIcon><FaTwitter /></SocialIcon>
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
    <div className="w-15 h-15 flex items-center justify-center rounded-full  backdrop-blur-[10px] text-2xl text-white border border-[#4E4C4C] hover:bg-white hover:text-black transition cursor-pointer">
      {children}
    </div>
  );
}
