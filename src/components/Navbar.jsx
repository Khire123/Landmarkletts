import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
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
        <button className="border border-white px-5 py-2 rounded-full text-md hover:bg-white hover:text-black transition cursor-pointer">
          Contact
        </button>

      </div>
    </header>
  );
}
