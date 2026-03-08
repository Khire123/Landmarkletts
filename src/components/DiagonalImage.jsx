// import React from "react";

// const DiagonalImage = ({
//   src,
//   alt = "image",
//   slope = 60, // Adjusted default: 60% is a very aggressive cut!
// }) => {
//   // We define the clipPath as a string for use in the style object
//   const diagonalPath = `polygon(${slope}% 0, 100% 0, 100% 100%, 0% 100%)`;

//   return (
//     <div className="w-full md:w-1/2 relative">
//       <div
//         className="relative w-full overflow-hidden transition-all duration-300"
//         style={{
//           // Use CSS variables or conditional logic for the style object
//           height: "var(--image-height)",
//           clipPath: "var(--image-clip)",
//         }}
//       >
//         {/* We use a small CSS-in-JS trick here to handle the media query 
//           without needing a separate .css file 
//         */}
//         <style jsx>{`
//           div {
//             --image-height: 300px;
//             --image-clip: none;
//           }
//           @media (min-width: 768px) {
//             div {
//               --image-height: 600px;
//               --image-clip: ${diagonalPath};
//             }
//           }
//         `}</style>

//         <img
//           src={src}
//           alt={alt}
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default DiagonalImage;

import React from "react";

const DiagonalImage = ({ src, alt = "image", slope = 60 }) => {
  const diagonalPath = `polygon(${slope}% 0, 100% 0, 100% 100%, 0% 100%)`;

  return (
    <div className="w-full relative">
      <div
        className="relative w-full hh-[320px] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] overflow-hidden"
        style={{ clipPath: "none" }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover md:[clip-path:polygon(60%_0,100%_0,100%_100%,0%_100%)]"
        />
      </div>
    </div>
  );
};

export default DiagonalImage;