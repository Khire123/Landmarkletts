import React from "react";
import curve from "../assets/curve.png";

import { FiHome, FiMapPin } from "react-icons/fi";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";

export default function PropertyAdCard({
  property,
  activeImg,
  setActiveImg,
})
 {
    const images = property.images;
    const thumbs = property.thumbs;
  function DetailPill({ icon, text }) {
    return (
      <div className="flex items-center gap-3 border border-gray-400 px-2 py-1 sm:px-5 sm:py-3 rounded-full bg-white/40 backdrop-blur-sm text-xs sm:text-sm sm:text-base">
        <span className="text-sm sm:text-lg">{icon}</span>
        <span>{text}</span>
      </div>
    );
  }


  return (
    <>
      {/* ================= IMAGE + DETAILS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* -------- LEFT IMAGE -------- */}
        <div className="relative rounded-3xl overflow-hidden">

          <img
            src={images[activeImg]}
            alt="Property"
            className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] object-cover rounded-3xl transition-all duration-500"
          />

          {/* THUMBNAILS */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full flex gap-3">

            {thumbs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setActiveImg(index)}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 cursor-pointer transition-all duration-300
                  ${
                    activeImg === index
                      ? "border-white scale-110"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
              />
            ))}

          </div>
        </div>

        {/* -------- RIGHT DETAILS -------- */}
        <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[420px] w-full">

          <img
            src={curve}
            alt="Property Details Background"
            className="absolute inset-0 w-full h-full object-full sm:object-full lg:object-contain select-none pointer-events-none"
          />

          <div className="relative z-10 flex flex-col h-full p-8 pr-0 pt-6 sm:pt-12">

            {/* HEADER */}
            <div className="flex items-center">
              <h3 className="text-md sm:text-2xl font-semibold">
                Property Details
              </h3>

              <div className="flex items-center gap-2 bg-[#b28a4a] text-white tracking-[0.1em] font-semibold px-4 py-1.5 rounded-tl-full rounded-bl-full text-xs sm:text-sm ml-auto">
                <span className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></span>
                For Sale
              </div>
            </div>

            {/* PILLS */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4 sm:mt-8 mr-6">

            <DetailPill icon={<FiHome />} text={property.name} />
            <DetailPill icon={<FiMapPin />} text={property.location} />
            <DetailPill icon={<FaBed />} text={property.bed} />
            <DetailPill icon={<TbRulerMeasure />} text={property.area} />
            <DetailPill icon={<FaBath />} text={property.bath} />
            <DetailPill icon={<FaCar />} text={property.car} />
            </div>

            {/* BUTTON */}
            <div className="mt-auto pt-8 ml-5 sm:ml-10">
              <button className="bg-[#b28a4a] text-white font-semibold tracking-[0.1em] px-15 sm:px-35 py-3 rounded-full text-sm sm:text-lg hover:opacity-90 transition cursor-pointer">
                Details
              </button>
            </div>

            {/* PRICE */}
            <div className="mt-auto pt-12">
              <span className="text-[#2f3540] rounded-full text-2xl">
                Price : {property.price}
              </span>
            </div>

          </div>
        </div>

      </div>

    </>
  );
}
