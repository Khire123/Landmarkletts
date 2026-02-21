import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import img1 from "../assets/ourservice_img1.png";
import img2 from "../assets/ourservice_img2.png";
import img3 from "../assets/ourservice_img3.png";
import img4 from "../assets/ourservice_img4.png";
import img5 from "../assets/ourservice_img5.png";

const services = [
  { title: "Full Property Management & Rent Collection", image: img2 },
  { title: "Property Sales & Marketing", image: img3 },
  { title: "Property Valuation & Market Appraisal", image: img4 },
  { title: "Landlord Support & Investment Advisory", image: img5 },
  { title: "Property Letting & Tenant Referencing", image: img1 },
];

const Services = () => {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState("idle");
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const total = services.length;

  useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 1024);
  handleResize(); // Run once on mount
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {

      // Step 1: Hide right instantly
      setStage("hideRight");

      setTimeout(() => {
        // Step 2: Start movement + width grow
        setStage("move");
      }, 100);

      setTimeout(() => {
        // Step 3: Reset
        setIndex((prev) => (prev + 1) % total);
        setStage("idle");
      }, 900);

    }, 4000);

    return () => clearInterval(interval);
  }, [paused, total]);

  const leftCard = services[index];
  const rightCard = services[(index + 1) % total];
  const nextRight = services[(index + 2) % total];

  return (
    <section className="w-full bg-[#f4f1ea] py-10 px-6 lg:px-16 overflow-hidden font-[prompt]">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 mb-12">

        <h1 className="text-4xl lg:text-[120px] leading-[0.9] font-serif text-black sm:-mt-10">
          Our <br />
          Services
        </h1>

        <div className="max-w-lg flex flex-col gap-6">

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Comprehensive property services designed to simplify letting, management, 
          and sales — delivered with expertise, integrity, and results-driven strategies.
        </p>

        {/* ---- BUTTON ---- */}
        <button className="group flex items-center justify-between border-2 border-gray-500 rounded-full px-6 py-3 w-[260px] sm:w-[300px] hover:bg-[#b28a4a] hover:border-black transition">

          <span className="text-black text-sm sm:text-base">
            See Our Services
          </span>

          {/* ICON CIRCLE */}
          <span className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 group-hover:bg-black transition">

            <FiArrowUpRight className="text-black group-hover:text-white transition text-3xl" />

          </span>

        </button>

      </div>


      </div>

      <div
        className="relative max-w-[1300px] mx-auto h-[560px] mt-20"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div
          className="absolute top-0 left-0 h-full rounded-[40px] overflow-hidden shadow-2xl"
          style={{
            width: isMobile ? "100%" : "68%",
            opacity: stage === "move" ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >

          {/* IMAGE */}
          <img
            src={leftCard.image}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* TOP RIGHT ICON */}
            <div className="absolute top-6 right-6 z-20">

              <button className="w-12 h-12 rounded-full border border-black/40 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-black hover:text-white hover:text-white transition">

                <FiArrowUpRight className="text-black hover:text-white transition text-3xl" />

              </button>

            </div>


          {/* TEXT */}
          <div className="absolute bottom-8 left-8 right-8">

            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium leading-snug">
              {leftCard.title}
            </h2>

          </div>

        </div>


        <div
        className="hidden sm:block absolute top-0 h-full rounded-[40px] overflow-hidden shadow-2xl"
        style={{
          left: stage === "move" ? "0%" : "72%",
          width: stage === "move" ? "68%" : "28%",
          opacity: stage === "hideRight" ? 0 : 1,
          transition:
            stage === "move"
              ? "left 0.8s cubic-bezier(0.4,0,0.2,1), width 0.8s cubic-bezier(0.4,0,0.2,1)"
              : "opacity 0.1s linear",
        }}
      >

        <img
          src={rightCard.image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* TOP RIGHT ICON */}
          <div className="absolute top-4 right-4 z-20">

            <button className="w-10 h-10 rounded-full border border-black/40 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-black hover:text-white transition">

              <FiArrowUpRight className="text-black hover:text-white text-2xl" />

            </button>

          </div>


        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-sm sm:text-lg font-medium leading-snug">
            {rightCard.title}
          </h3>
        </div>

      </div>


        {/* Only show the third peeking card on Desktop */}
        {!isMobile && stage === "move" && (
          <div
            className="absolute top-0 h-full w-[28%] rounded-[40px] overflow-hidden shadow-2xl"
            style={{
              left: "100%",
              animation: "slideIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards",
            }}
          >
            <img src={nextRight.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}


      </div>

      {/* -------- CAROUSEL DOTS -------- */}
      <div className="flex justify-center mt-10 gap-3">

        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setStage("idle");
            }}
            className={`
              transition-all duration-300 rounded-full
              ${
                index === i
                  ? "w-8 h-2 bg-black"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
              }
            `}
          />
        ))}

      </div>

    </section>
  );
};

export default Services;
