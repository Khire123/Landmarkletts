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
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState("idle");
  const [paused, setPaused] = useState(false);

  const total = services.length;

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
    <section className="w-full bg-[#EEEEEE]/36 py-10 px-6 lg:px-16 overflow-hidden">

      <div
        className="relative max-w-[1300px] mx-auto h-[560px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* LEFT CARD */}
        <div
          className="absolute top-0 left-0 h-full rounded-[40px] overflow-hidden shadow-2xl"
          style={{
            width: "68%",
            opacity: stage === "move" ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <img
            src={leftCard.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CARD (MOVE + WIDTH GROW) */}
        <div
          className="absolute top-0 h-full rounded-[40px] overflow-hidden shadow-2xl"
          style={{
            left:
              stage === "move"
                ? "0%"
                : "72%",
            width:
              stage === "move"
                ? "68%"
                : "28%",
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
        </div>

        {/* NEW RIGHT CARD */}
        {/* NEW RIGHT CARD */}
        {stage === "move" && (
          <div
            className="absolute top-0 h-full w-[28%] rounded-[40px] overflow-hidden shadow-2xl"
            style={{
              left: "100%",
              animation: "slideIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards",
            }}
          >
            <img
              src={nextRight.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}


      </div>
    </section>
  );
};

export default Services;
