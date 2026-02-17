import React, { useEffect, useState } from "react";

import img1 from "../assets/ourservice_img1.png";
import img2 from "../assets/ourservice_img2.png";
import img3 from "../assets/ourservice_img3.png";
import img4 from "../assets/ourservice_img4.png";
import img5 from "../assets/ourservice_img5.png";

const services = [
  { title: "Full Property Management & Rent Collection", image: img1 },
  { title: "Property Sales & Marketing", image: img2 },
  { title: "Tenant Referencing", image: img3 },
  { title: "Investment Advisory", image: img4 },
  { title: "Luxury Property Advisory", image: img5 },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = services.length;

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, total]);

  const leftCard = services[current];
  const rightCard = services[(current + 1) % total];

  return (
    <section className="w-full bg-[#eaeaea] py-20 px-6 lg:px-16 overflow-hidden">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
        <h1 className="text-[60px] lg:text-[90px] leading-[0.9] font-serif uppercase">
          Our <br /> Services
        </h1>

        <div className="max-w-md">
          <p className="text-gray-600 mb-8 text-lg">
            Comprehensive property services designed to simplify letting,
            management, and sales — delivered with expertise, integrity,
            and results-driven strategies.
          </p>
          <button className="flex items-center gap-3 border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all font-medium">
            See Our Services ↗
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        className="relative w-full max-w-[1350px] mx-auto flex gap-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* LEFT BIG CARD */}
        <div
          key={current}
          className="relative flex-[2.8] h-[580px] rounded-[42px] overflow-hidden shadow-2xl transition-all duration-1000"
          style={{
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        >
          <img
            src={leftCard.image}
            alt={leftCard.title}
            className="w-full h-full object-cover transition-transform duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-12 left-12 right-12">
            <h3 className="text-white text-4xl font-semibold leading-tight">
              {leftCard.title}
            </h3>
          </div>

          <div className="absolute top-8 right-8 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <span className="text-2xl text-black">↗</span>
          </div>
        </div>

        {/* RIGHT SMALL CARD */}
        <div
          key={(current + 1) % total}
          className="relative flex-[0.8] h-[580px] rounded-[42px] overflow-hidden shadow-2xl transition-all duration-1000"
          style={{
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        >
          <img
            src={rightCard.image}
            alt={rightCard.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-12 left-8 right-8">
            <h3 className="text-white text-lg font-medium leading-tight">
              {rightCard.title}
            </h3>
          </div>

          <div className="absolute top-8 right-8 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <span className="text-2xl text-black">↗</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;