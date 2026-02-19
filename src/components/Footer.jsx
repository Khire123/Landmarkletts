import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#f4f1ea] border-t border-[#e2ddd3] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#1c1c1c]">
            EstateElite
          </h2>

          <p className="text-[#b28a4a] mt-3 font-medium">
            Luxury Homes. Trusted Guidance.
          </p>

          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            A premier property consultancy delivering bespoke real estate
            solutions for discerning clients since 2005.
          </p>

          {/* Glass Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    bg-white/60
                    backdrop-blur-lg
                    border border-white/50
                    shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                    hover:border-[#b28a4a]
                    hover:shadow-[0_0_15px_rgba(178,138,74,0.25)]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <Icon size={16} className="text-gray-700" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-5 text-[#1c1c1c]">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              "Home",
              "About Us",
              "Properties",
              "Featured Listings",
              "Blog",
              "Contact",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-[#b28a4a] transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-5 text-[#1c1c1c]">Our Services</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              "Buy Property",
              "Sell Property",
              "Rent Property",
              "Property Valuation",
              "Investment Consulting",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-[#b28a4a] transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="font-semibold mb-5 text-[#1c1c1c]">Contact Us</h4>

          <div className="space-y-4 text-sm text-gray-600 mb-6">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#b28a4a] mt-1" />
              <p>42 King Street, London EC2V 8AT</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#b28a4a]" />
              <p>+44 20 7946 0958</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#b28a4a]" />
              <p>hello@youragency.co.uk</p>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-[#b28a4a]" />
              <p>Mon–Fri: 9am–6pm</p>
            </div>
          </div>

          {/* Glass Newsletter Card */}
          <div className="
            p-6
            rounded-2xl
            bg-white/60
            backdrop-blur-lg
            border border-white/50
            shadow-[0_15px_35px_rgba(0,0,0,0.08)]
          ">
            <h5 className="font-semibold text-[#1c1c1c] mb-2">
              Stay Updated
            </h5>

            <p className="text-xs text-gray-500 mb-4">
              Get latest property updates
            </p>

           <div className="relative flex items-center">
  <input
    type="email"
    placeholder="Your email"
    className="
      w-full
      px-5 py-3
      text-sm
      bg-white/80
      border border-gray-300
      rounded-xl
      focus:outline-none
      focus:border-[#b28a4a]
    "
  />

  <button
    className="
      absolute right-1
      h-[85%]
      px-6
      bg-[#b28a4a]
      text-white
      rounded-xl
      hover:bg-[#9d773f]
      transition
      shadow-md
    "
  >
    →
  </button>
</div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e2ddd3]">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">

    {/* Left Side */}
    <p>
      © 2026 EstateElite. All rights reserved.
    </p>

    {/* Right Side */}
    <div className="flex items-center gap-3">
      <span className="hover:text-[#b28a4a] cursor-pointer transition">
        Privacy Policy
      </span>

      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>

      <span className="hover:text-[#b28a4a] cursor-pointer transition">
        Terms & Conditions
      </span>

      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>

      <span>
        Designed by{" "}
        <span className="text-[#b28a4a] font-medium">
          EstateElite
        </span>
      </span>
    </div>

  </div>
</div>

    </footer>
  );
};

export default Footer;
