import React, { useState } from "react";
import main1 from "../assets/thumb1.png";   // Big images
import main2 from "../assets/thumb2.png";
import main3 from "../assets/thumb3.png";

import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";

import curve from "../assets/curve.png";
import { FiArrowLeft, FiArrowRight, FiHome, FiMapPin, FiTag } from "react-icons/fi";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";


export default function PropertyAd() {

  /* ---------------- IMAGE GALLERY STATE ---------------- */
  const images = [thumb1, thumb2, thumb3];
  const thumbs = [thumb1, thumb2, thumb3];

  const [activeImg, setActiveImg] = useState(0);

  /* ----------------------------------------------------- */

  function DetailPill({ icon, text }) {
  return (
    <div className="flex items-center gap-3 border border-gray-400 px-5 py-3 rounded-full bg-white/40 backdrop-blur-sm text-sm sm:text-base">

      <span className="text-lg">
        {icon}
      </span>

      <span>{text}</span>

    </div>
  );
}


  return (
    <section className="w-full bg-[#EEEEEE]/36 py-16 px-6 md:px-12 lg:px-20 font-[prompt]">

      {/* ================= TOP HEADING ================= */}
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

      {/* ================= IMAGE + DETAILS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* -------- LEFT : BIG IMAGE + THUMBS -------- */}
        <div className="relative rounded-3xl overflow-hidden">

          {/* BIG IMAGE */}
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

        {/* -------- RIGHT : PROPERTY DETAILS -------- */}
        <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[420px] w-full">

          {/* CURVE BACKGROUND IMAGE (FULL CARD) */}
          <img
            src={curve}
            alt="Property Details Background"
            className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
          />

          <div className="relative z-10 flex flex-col h-full p-8 pr-0 pt-12">

        {/* ---------- HEADER ROW ---------- */}
        <div className="flex items-center">

            <h3 className="text-2xl font-semibold">
            Property Details
            </h3>

            {/* Status Badge */}
            <div className="flex items-center gap-2 bg-[#2f3540] text-white px-4 py-1.5 rounded-tl-full rounded-bl-full text-sm ml-auto">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            For Sale
            </div>

        </div>


        {/* ---------- DETAILS PILLS ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mr-6">

            <DetailPill icon={<FiHome />} text="The Kensington Villa" />
            <DetailPill icon={<FiMapPin />} text="Kensington, London" />
            <DetailPill icon={<FaBed />} text="4 Bedrooms" />
            <DetailPill icon={<TbRulerMeasure />} text="3,200 sq ft" />
            <DetailPill icon={<FaBath />} text="2 Bathroom" />
            <DetailPill icon={<FaCar />} text="2 Cars" />
        </div>


        {/* ---------- CTA BUTTON ---------- */}
        <div className="mt-auto pt-8 ml-10">
            <button className="bg-[#2f3540] text-white px-35 py-3 rounded-full text-lg hover:opacity-90 transition cursor-pointer">
            Details
            </button>
        </div>

        <div className="mt-auto pt-10">
            <span className="text-[#2f3540] rounded-full text-2xl over:opacity-90 transition">
            Price : £1,250,000
            </span>
        </div>


        {/* ---------- ARROWS (POSITIONED IN CURVE) ---------- */}
        <div className="absolute bottom-4 right-6 flex gap-4">

            <button
            onClick={() =>
                setActiveImg(
                (prev) => (prev - 1 + images.length) % images.length
                )
            }
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white/80 backdrop-blur hover:bg-black hover:text-white transition cursor-pointer"
            >
            <FiArrowLeft />
            </button>

            <button
            onClick={() =>
                setActiveImg((prev) => (prev + 1) % images.length)
            }
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition cursor-pointer"
            >
            <FiArrowRight />
            </button>

        </div>

        </div>

        </div>

      </div>

      {/* ================= BOTTOM STATS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 mt-16 text-center">

        <Stat number="100%" label="Satisfactions Clients" border />
        <Stat number="500+" label="Property sells" border />
        <Stat number="150+" label="Countries & Cities" border />
        <Stat number="2,00+" label="Positive reviews" />

        </div>
    </section>
  );
}


/* ================= REUSABLE STAT ================= */
function Stat({ number, label, border }) {
  return (
    <div
      className={`
        flex flex-col items-center gap-2 px-6 py-0
        ${border ? "md:border-r md:border-gray-500" : ""}
      `}
    >

      <h4 className="text-3xl sm:text-4xl font-semibold">
        {number}
      </h4>

      <p className="text-gray-500 text-sm">
        {label}
      </p>

    </div>
  );
}

