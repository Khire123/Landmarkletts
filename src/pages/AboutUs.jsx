import React from "react";
import bgAbout from "../assets/bgAbout.png";
import DiagonalImage from "../components/DiagonalImage";


const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#EEEEEE]/36 font[prompt] overflow-hidden">

      <div className="flex flex-col md:flex-row min-h-screen">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-0">
          <div>

            {/* HEADING */}
            <h1 className="text-4xl lg:text-[120px] leading-[0.9] font-serif text-black sm:-mt-50">
              ABOUT <br /> US
            </h1>

            {/* DESCRIPTION */}
            <p className="sm:absolute text-black-900 text-bold text-sm sm:text-base md:text-xl leading-[1.8] max-w-md mt-8 md:-mt-20 md:ml-60 z-10">
              At LandMark Letts, we help clients buy and sell homes with confidence.
              With strong market knowledge, honest guidance, and a commitment to
              results, we make every transaction smooth and stress-free.
            </p>

            {/* TAGLINE */}
            <div className="mt-10 md:mt-60 -ml-6 sm:-ml-10 md:-ml-16 lg:-ml-24">
              <div className="bg-[#2f3640] text-white text-xs sm:text-sm px-6 sm:px-8 py-2.5 rounded-br-full rounded-tr-full shadow-lg inline-flex items-center">
                <span>
                  Your goals are our priority — and your success is our mission.
                </span>
                <span className="ml-4 w-2.5 h-2.5 bg-white rounded-full"></span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <DiagonalImage src={bgAbout} alt="About Us" />

      </div>

      {/* FLOATING GLASS BUTTON — ORIGINAL STYLE */}
      <div className="absolute bottom-24 sm:bottom-36 md:bottom-48 right-6 sm:right-12 md:right-24">

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
