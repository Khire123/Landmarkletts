import React from "react";
import bgAbout from "../assets/bgAbout.png";

const AboutUs = () => {
  return (
    <section className="relative w-screen h-screen bg-[#f1f1f1] overflow-hidden flex items-center">
      {/* LEFT CONTENT */}
      <div className="relative z-10 w-[50%] pl-24">
        <h1 className="text-[95px] leading-[0.9] font-serif text-black">
          ABOUT <br /> US
        </h1>

        <p className="text-gray-700 text-[18px] leading-[1.8] max-w-[520px] mt-10">
          At LandMark Letts, we help clients buy and sell homes with confidence.
          With strong market knowledge, honest guidance, and a commitment to
          results, we make every transaction smooth and stress-free.
        </p>

        {/* TAGLINE */}
        <div className="mt-16">
          <div className="bg-[#2f3640] text-white text-[14px] px-10 py-2.5 rounded-full shadow-lg inline-flex items-center">
            <span className="tracking-wide">
              Your goals are our priority — and your success is our mission.
            </span>
            <span className="ml-4 w-2.5 h-2.5 bg-white rounded-full"></span>
          </div>
        </div>
      </div>

      {/* FULL HEIGHT DIAGONAL IMAGE */}
      <div className="absolute right-0 top-0 h-full w-[55%]">
        <div className="relative h-full w-full overflow-hidden diagonal-shape">
          <img
            src={bgAbout}
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* GLASS BUTTON */}
      <div className="absolute bottom-16 right-24">
        <button
          className="
          px-10 py-3 rounded-full
          bg-white/40 backdrop-blur-lg
          border border-white/50
          text-black font-medium
          shadow-2xl
          hover:bg-white/60
          transition duration-300
        "
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
