import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-2" : "py-5"
        } text-white`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Landmark Letts Logo"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-20" : "h-30"
            }`}
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 text-md font-medium">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Listing</a>
        </nav>

        {/* Contact Button */}
        <button className="border border-white px-5 py-2 rounded-full text-md hover:bg-white hover:text-black transition cursor-pointer">
          Contact
        </button>
      </div>
    </header>
  );
}
