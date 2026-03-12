import React, { useState, useEffect, useRef } from "react";
import PropertyAdCard from "../components/PropertyAdUi";

import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// --- UPDATED STAT COMPONENT WITH COUNTER ANIMATION ---
function Stat({ number, label, border, startAnimate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimate) return;

    // Clean the string (e.g., "2,00+" becomes 200, "100%" becomes 100)
    const target = parseInt(number.replace(/[,%+\s]/g, ""), 10);
    const duration = 2000; // Animation lasts 2 seconds
    const frameRate = 1000 / 60; // 60 frames per second
    const totalFrames = duration / frameRate;
    const increment = target / totalFrames;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [number, startAnimate]);

  // Add back the symbols (+, %, etc.)
  const formattedDisplay = () => {
    const value = count.toLocaleString();
    if (number.includes("%")) return `${value}%`;
    if (number.includes("+")) return `${value}+`;
    return value;
  };

  return (
    <div className={`flex flex-col items-center gap-2 px-6 py-5 sm:py-0 ${border ? "md:border-r md:border-gray-500" : ""}`}>
      <h4 className="text-3xl sm:text-4xl font-semibold">{formattedDisplay()}</h4>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}

export default function PropertyAd() {
  const AUTO_SLIDE_INTERVAL = 4000;
  const RESUME_DELAY = 5000;

  const properties = [
    {
      name: "The Kensington Villa",
      location: "Kensington, London",
      bed: "4 Bedrooms",
      bath: "2 Bathroom",
      car: "2 Cars",
      area: "3,200 sq ft",
      price: "£1,250,000",
      link: "/villa-details",
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
      link: "/apartment-details",
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
      link: "/beach-details",
      images: [thumb3, thumb1, thumb2],
      thumbs: [thumb3, thumb1, thumb2],
    },
  ];

  const [index, setIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [startAnimate, setStartAnimate] = useState(false); // To trigger stats
  
  const resumeTimerRef = useRef(null);
  const statsRef = useRef(null); // Reference for intersection observer

  // Handle Scroll detection for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % properties.length);
    setActiveImg(0);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + properties.length) % properties.length);
    setActiveImg(0);
  };

  const handleInteraction = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        next();
      }, AUTO_SLIDE_INTERVAL);
    }
    return () => {
      if (interval) clearInterval(interval);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [isPaused, index]); 

  return (
    <section id="listing" className="w-full bg-[#f4f1ea] py-16 px-6 md:px-12 lg:px-20 font-[prompt]">
      {/* HEADING */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight max-w-3xl">
          Your Lifestyle Has Evolved. <br /> Has Your Home?
        </h2>
        <p className="max-w-md text-gray-600 text-sm sm:text-base leading-relaxed">
          Each listing offers unique features, exceptional quality, and prime locations
        </p>
      </div>

      {/* SLIDER WRAPPER */}
      <div 
        className="max-w-7xl mx-auto relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)} 
        onTouchEnd={handleInteraction}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {properties.map((property, i) => (
              <div key={i} className="min-w-full">
                <PropertyAdCard
                  property={property}
                  activeImg={activeImg}
                  setActiveImg={(imgIndex) => {
                    setActiveImg(imgIndex);
                    handleInteraction();
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <div className="absolute bottom-[70px] right-[2px] sm:bottom-[80px] sm:right-[30px] lg:bottom-[85px] lg:right-[30px] flex gap-3 z-30">
          <button
            onClick={(e) => { e.stopPropagation(); prev(); handleInteraction(); }}
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm hover:border-[#b28a4a] hover:bg-[#b28a4a] hover:text-white transition-all cursor-pointer"
          >
            <FiArrowLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); handleInteraction(); }}
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm hover:border-[#b28a4a] hover:bg-[#b28a4a] hover:text-white transition-all cursor-pointer"
          >
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-3">
        {properties.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setActiveImg(0); handleInteraction(); }}
            className={`transition-all duration-300 rounded-full ${index === i ? "w-6 h-2 bg-black" : "w-2 h-2 bg-gray-400 hover:bg-gray-600"}`}
          />
        ))}
      </div>

      {/* STATS SECTION */}
      <div 
        ref={statsRef}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 mt-20 sm:mt-16 text-center"
      >
        <Stat number="100%" label="Satisfactions Clients" border startAnimate={startAnimate} />
        <Stat number="500+" label="Property sells" border startAnimate={startAnimate} />
        <Stat number="150+" label="Countries & Cities" border startAnimate={startAnimate} />
        <Stat number="2,00+" label="Positive reviews" startAnimate={startAnimate} />
      </div>
    </section>
  );
}