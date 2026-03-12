// import React from "react";
// import bgAbout from "../assets/bgAbout.png";
// import DiagonalImage from "../components/DiagonalImage";
// import { Link } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-[#f4f1ea] font[prompt] overflow-hidden">

//       <div className="flex flex-col md:flex-row min-h-screen">

//         {/* LEFT CONTENT */}
//         <div className="w-full md:w-1/2 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-0">
//           <div>

//             {/* HEADING */}
//             <h1 className="text-4xl sm:text-[100px] lg:text-[120px] leading-[0.9] font-serif text-black sm:-mt-50">
//               ABOUT <br /> US
//             </h1>

//             {/* DESCRIPTION */}
//             <p className="sm:absolute text-black-900 text-bold text-sm sm:text-base md:text-xl leading-[1.8] max-w-md sm:max-w-sm lg:max-w-md mt-8 md:-mt-20 lg:ml-60 sm:ml-35 z-10">
//               At LandMark Letts, we help clients buy and sell homes with confidence.
//               With strong market knowledge, honest guidance, and a commitment to
//               results, we make every transaction smooth and stress-free.
//             </p>

//             {/* TAGLINE */}
//             <div className="absolute md:relative mt-75 md:mt-60 -ml-6 sm:-ml-10 md:-ml-16 lg:-ml-24 z-10">
//             <div className="bg-[#b28a4a] text-white font-semibold text-[10px] sm:text-sm px-6 sm:px-8 py-2.5 rounded-br-full rounded-tr-full shadow-lg inline-flex items-center">
//               <span>
//                 Your goals are our priority — and your success is our mission.
//               </span>
//               <span className="ml-4 w-2.5 h-2.5 bg-white rounded-full"></span>
//             </div>
//           </div>

//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <DiagonalImage src={bgAbout} alt="About Us" />

//       </div>

//       {/* FLOATING GLASS BUTTON — ORIGINAL STYLE */}
//       {/* <div className="absolute bottom-60 md:bottom-36 md:bottom-48 right-6 sm:right-12 md:right-24">

//         <button
//           className="
//             px-5 py-2 sm:px-10 sm:py-3 rounded-full
//             bg-white/40 backdrop-blur-lg
//             border border-white/50
//             text-black font-medium
//             shadow-2xl
//             hover:bg-[#b28a4a]
//             hover:border-[#b28a4a]
//             hover:text-white
//             transition duration-300
//             text-xs
//             sm:text-base
//           "
//         >
//           View More
//         </button>
//       </div> */}
//       <div className="absolute bottom-60 md:bottom-36 right-6 sm:right-12 md:right-24">
//   <Link
//     to="/about"
//     className="
//       px-5 py-2 sm:px-10 sm:py-3 rounded-full
//       bg-white/40 backdrop-blur-lg
//       border border-white/50
//       text-black font-medium
//       shadow-2xl
//       hover:bg-[#b28a4a]
//       hover:border-[#b28a4a]
//       hover:text-white
//       transition duration-300
//       text-xs
//       sm:text-base
//     "
//   >
//     View More
//   </Link>
// </div>
//     </section>
//   );
// };

// export default AboutUs;
// import React from "react";
// import bgAbout from "../assets/bgAbout.png";
// import DiagonalImage from "../components/DiagonalImage";
// import { Link } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-[#f4f1ea] font-[prompt] overflow-hidden">

//       <div className="flex flex-col md:flex-row min-h-screen">

//         {/* LEFT CONTENT */}
//         <div className="w-full md:w-[60%] lg:w-1/2 flex items-start px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-0 relative">

//           <div className="relative w-full">

//             {/* HEADING */}
//             <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[120px] leading-[0.9] font-serif text-black">
//               ABOUT <br /> US
//             </h1>

//             {/* DESCRIPTION */}
//             <p className="
//             text-black text-sm md:text-lg lg:text-xl
//             leading-[1.8]
//             max-w-md md:max-w-lg lg:max-w-xl
//             mt-6 md:mt-8
//             xl:absolute xl:left-[12vw] xl:top-[140px]
//             z-10
//             ">
//               At LandMark Letts, we help clients buy and sell homes with confidence.
//               With strong market knowledge, honest guidance, and a commitment to
//               results, we make every transaction smooth and stress-free.
//             </p>

//           </div>

//         </div>

//         {/* RIGHT IMAGE */}
//       <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex justify-end h-full">


//           <DiagonalImage
//           src={bgAbout}
//           alt="About Us"
//           className="w-full h-full"
//         />

//           {/* BUTTON */}
//           <div className="absolute bottom-36 right-6 sm:right-12 md:right-24 z-20">
//             <Link
//               to="/about"
//               className="
//                 px-6 py-2 sm:px-10 sm:py-3 rounded-full
//                 bg-white/40 backdrop-blur-lg
//                 border border-white/50
//                 text-black font-medium
//                 shadow-2xl
//                 hover:bg-[#b28a4a]
//                 hover:border-[#b28a4a]
//                 hover:text-white
//                 transition duration-300
//                 text-xs sm:text-base
//               "
//             >
//               View More
//             </Link>
//           </div>

//         </div>

//       </div>

//       {/* GOLD TAGLINE BAR */}
//       <div className="absolute bottom-[12%] md:bottom-48 left-0 z-20">

//         <div className="
//         bg-[#b28a4a] text-white font-semibold
//         text-[9px] sm:text-sm
//         px-3 sm:px-8
//         py-1.5 sm:py-3
//         max-w-[85%] sm:max-w-none
//         rounded-tr-full rounded-br-full
//         shadow-lg inline-flex items-center
//       ">
//           <span>
//             Your goals are our priority — and your success is our mission.
//           </span>

//           <span className="ml-2 sm:ml-4 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full flex-shrink-0"></span>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default AboutUs;


import React from "react";
import bgAbout from "../assets/bgAbout.png";
import DiagonalImage from "../components/DiagonalImage";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f4f1ea] font-[prompt] overflow-hidden">

      <div className="flex flex-col md:flex-row min-h-screen">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[60%] lg:w-1/2 flex items-start px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-0 relative">

          <div className="relative w-full">

            {/* HEADING */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[120px] leading-[0.9] font-serif text-black">
              ABOUT <br /> US
            </h1>

            {/* DESCRIPTION */}
            <p className="
            text-black text-sm md:text-lg lg:text-xl
            leading-[1.8]
            max-w-md md:max-w-lg lg:max-w-xl
            mt-6 md:mt-8
            xl:absolute xl:left-[12vw] xl:top-[140px]
            z-10
            ">
              At LandMark Letts, we help clients buy and sell homes with confidence.
              With strong market knowledge, honest guidance, and a commitment to
              results, we make every transaction smooth and stress-free.
            </p>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 relative mt-10 md:mt-0 flex justify-end h-full">

          <DiagonalImage
            src={bgAbout}
            alt="About Us"
            className="w-full h-full"
          />

          {/* BUTTON */}
          <div className="absolute bottom-36 right-6 sm:right-12 md:right-24 z-20">
            <Link
              to="/about"
              className="
                px-6 py-2 sm:px-10 sm:py-3 rounded-full
                bg-white/40 backdrop-blur-lg
                border border-white/50
                text-black font-medium
                shadow-2xl
                hover:bg-[#b28a4a]
                hover:border-[#b28a4a]
                hover:text-white
                transition duration-300
                text-xs sm:text-base
              "
            >
              View More
            </Link>
          </div>

        </div>

      </div>

      {/* GOLD TAGLINE BAR */}
      <div className="absolute bottom-[18%] left-0 z-30 w-full">

        <div className="
        bg-[#b28a4a] text-white font-semibold
        text-[9px] sm:text-sm
        px-3 sm:px-8
        py-1.5 sm:py-3
        max-w-[85%] sm:max-w-none
        rounded-tr-full rounded-br-full
        shadow-lg inline-flex items-center
      ">
          <span>
            Your goals are our priority — and your success is our mission.
          </span>

          <span className="ml-2 sm:ml-4 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full flex-shrink-0"></span>

        </div>

      </div>

    </section>
  );
};

export default AboutUs;