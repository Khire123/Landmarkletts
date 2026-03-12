import React from "react";
import curve from "../assets/curve.png";

import { FiHome, FiMapPin } from "react-icons/fi";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

export default function PropertyAdCard({ property, activeImg, setActiveImg }) {
  const { images, thumbs } = property;

  const navigate = useNavigate();

  function DetailPill({ icon, text }) {
    return (
      <div className="flex items-center gap-2 border border-gray-400 px-3 py-2 rounded-full bg-white/40 backdrop-blur-sm text-xs md:text-sm">
        <span className="text-sm sm:text-lg">{icon}</span>
        <span className="truncate">{text}</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* -------- LEFT IMAGE -------- */}
        <div className="relative rounded-3xl md:h-[450px] overflow-hidden shadow-lg w-full aspect-square lg:aspect-[4/5]">
          <img
            src={images[activeImg]}
            alt="Property"
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* THUMBNAILS */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-2 rounded-2xl sm:rounded-full flex gap-2 sm:gap-3 border border-white/20 max-w-[90%] overflow-x-auto no-scrollbar">
            {thumbs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setActiveImg(index)}
                className={`w-8 h-8 sm:w-14 sm:h-14 rounded-full object-cover border-2 cursor-pointer flex-shrink-0 transition-all ${
                  activeImg === index
                    ? "border-white scale-110"
                    : "border-transparent opacity-70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* -------- RIGHT DETAILS -------- */}
        <div className="flex flex-col w-full">
          
          <div className="relative w-full aspect-[1.3/1] sm:aspect-[1.5/1] lg:aspect-[1.35/1]">
            <img
              src={curve}
              alt="Background"
              className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none"
            />

            <div className="relative z-10 flex flex-col h-full p-6 sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-2xl font-semibold">
                  Property Details
                </h3>

                <div className="flex items-center gap-2 bg-[#b28a4a] text-white tracking-[0.1em] font-semibold px-4 py-1.5 rounded-l-full -mr-6 sm:-mr-10 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  For Sale
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-10">
                <DetailPill icon={<FiHome />} text={property.name} />
                <DetailPill icon={<FiMapPin />} text={property.location} />
                <DetailPill icon={<FaBed />} text={property.bed} />
                <DetailPill icon={<TbRulerMeasure />} text={property.area} />
                <DetailPill icon={<FaBath />} text={property.bath} />
                <DetailPill icon={<FaCar />} text={property.car} />
              </div>

              <div className="mt-8 sm:mt-auto pb-2 sm:pb-6">
                <button
                  onClick={() => navigate(property.link)}
                  className="bg-[#b28a4a] text-white font-semibold tracking-[0.1em] w-full max-w-[200px] sm:max-w-[300px] py-3 rounded-full text-sm sm:text-lg hover:opacity-90 transition cursor-pointer shadow-md"
                >
                  Details
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <span className="text-[#2f3540] text-2xl sm:text-4xl font-medium">
              Price : {property.price}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}