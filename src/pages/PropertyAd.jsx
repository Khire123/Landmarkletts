import React, { useState, useEffect } from "react";
import PropertyAdCard from "../components/PropertyAdUi";

import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function PropertyAd() {

  const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds

  /* -------- PROPERTIES DATA -------- */
  const properties = [
  {
    name: "The Kensington Villa",
    location: "Kensington, London",
    bed: "4 Bedrooms",
    bath: "2 Bathroom",
    car: "2 Cars",
    area: "3,200 sq ft",
    price: "£1,250,000",
    images: [thumb1, thumb2, thumb3],
    thumbs: [thumb1, thumb2, thumb3],
  },

  {
    name: "Palm Luxury Estate",
    location: "Palm Jumeirah, Dubai",
    bed: "5 Bedrooms",
    bath: "4 Bathroom",
    car: "3 Cars",
    area: "4,500 sq ft",
    price: "£2,100,000",
    images: [thumb2, thumb3, thumb1],
    thumbs: [thumb2, thumb3, thumb1],
  },

  {
    name: "Skyline Penthouse",
    location: "Manhattan, New York",
    bed: "3 Bedrooms",
    bath: "3 Bathroom",
    car: "2 Cars",
    area: "2,100 sq ft",
    price: "£1,800,000",
    images: [thumb3, thumb1, thumb2],
    thumbs: [thumb3, thumb1, thumb2],
  },
];


  const [index, setIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(0);

  /* -------- ARROW FUNCTIONS -------- */
  const next = () => {
    setIndex((prev) => (prev + 1) % properties.length);
    setActiveImg(0);
  };

  const prev = () => {
    setIndex(
      (prev) =>
        (prev - 1 + properties.length) %
        properties.length
    );
    setActiveImg(0);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % properties.length);
    setActiveImg(0);
  }, AUTO_SLIDE_INTERVAL);

  return () => clearInterval(interval);
}, [properties.length]);

  function Stat({ number, label, border }) {
    return (
      <div
        className={`flex flex-col items-center gap-2 px-6 py-5 sm:py-0 ${
          border ? "md:border-r md:border-gray-500" : ""
        }`}
      >
        <h4 className="text-3xl sm:text-4xl font-semibold">
          {number}
        </h4>
        <p className="text-gray-500 text-sm">{label}</p>
      </div>
    );
  }
  return (
    <section className="w-full bg-[#EEEEEE]/36 py-16 px-6 md:px-12 lg:px-20 font-[prompt]">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 mb-12">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight max-w-3xl">
          Your Lifestyle Has Evolved. <br />
          Has Your Home?
        </h2>

        <p className="max-w-md text-gray-600 text-sm sm:text-base leading-relaxed">
          Each listing offers unique features, exceptional quality,
          and prime locations
        </p>

      </div>

      {/* ================= SLIDER WRAPPER ================= */}
      <div className="max-w-7xl mx-auto relative overflow-hidden">

        {/* SLIDING TRACK */}
       <div
        className="flex transition-transform duration-700 ease-in-out -mx-6"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >

          {properties.map((property, i) => (
            <div key={i} className="min-w-full px-6">

              <PropertyAdCard
                property={property}
                activeImg={activeImg}
                setActiveImg={setActiveImg}
              />


            </div>
          ))}

        </div>

        {/* -------- ARROWS -------- */}
        <div
          className="
            absolute
            bottom-[10px]
            sm:bottom-[50px]
            right-[2px]
            sm:right-[20px]
            flex gap-4 z-20
          "
        >

          <button
            onClick={prev}
            className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-black flex items-center justify-center bg-white/80 backdrop-blur hover:bg-black hover:text-white transition"
          >
            <FiArrowLeft />
          </button>

          <button
            onClick={next}
            className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition"
          >
            <FiArrowRight />
          </button>

        </div>
      </div>

              {/* -------- DOTS -------- */}
<div className="flex justify-center mt-10 gap-3">

  {properties.map((_, i) => (
    <button
      key={i}
      onClick={() => {
        setIndex(i);
        setActiveImg(0);
      }}
      className={`
        transition-all duration-300
        ${
          index === i
            ? "w-6 h-2 bg-black"
            : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
        }
        rounded-full
      `}
    />
  ))}

</div>

      {/* ================= STATS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 mt-20 sm:mt-16 text-center">

        <Stat number="100%" label="Satisfactions Clients" border />
        <Stat number="500+" label="Property sells" border />
        <Stat number="150+" label="Countries & Cities" border />
        <Stat number="2,00+" label="Positive reviews" />

      </div>

    </section>
  );
}
