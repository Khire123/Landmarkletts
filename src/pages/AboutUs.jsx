import React from "react";
import bgAbout from "../assets/bgAbout.png";

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f1f1f1] overflow-hidden">

      <div className="flex flex-col md:flex-row min-h-screen">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-0">
          <div>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] leading-[0.9] font-serif text-black">
              ABOUT <br /> US
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.8] max-w-xl mt-8 md:mt-10">
              At LandMark Letts, we help clients buy and sell homes with confidence.
              With strong market knowledge, honest guidance, and a commitment to
              results, we make every transaction smooth and stress-free.
            </p>

            {/* TAGLINE */}
            <div className="mt-10 md:mt-14">
              <div className="bg-[#2f3640] text-white text-xs sm:text-sm px-6 sm:px-8 py-2.5 rounded-full shadow-lg inline-flex items-center">
                <span>
                  Your goals are our priority — and your success is our mission.
                </span>
                <span className="ml-4 w-2.5 h-2.5 bg-white rounded-full"></span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-auto relative">
          <div className="relative h-full w-full overflow-hidden md:diagonal-shape">
            <img
              src={bgAbout}
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* FLOATING GLASS BUTTON — ORIGINAL STYLE */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-6 sm:right-12 md:right-24">
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
