import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Listing", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
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
            alt="Logo"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-20" : "h-30"
            }`}
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-10 text-md font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-300">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <button className="hidden md:block border border-white px-5 py-2 rounded-full text-md hover:bg-white hover:text-black transition cursor-pointer">
          Contact
        </button>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 text-white`}
      >
        <div className="flex flex-col gap-4 p-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full border border-white px-5 py-2 rounded-full text-md mt-2">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}