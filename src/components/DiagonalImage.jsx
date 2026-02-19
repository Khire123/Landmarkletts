import React from "react";

const DiagonalImage = ({
  src,
  alt = "image",
  height = "600px",
  slope = 60, // controls how deep the top-left cut is (5–30 works well)
}) => {

  const clipPath = `polygon(${slope}% 0, 100% 0, 100% 100%, 0% 100%)`;

  return (
    <div className="w-full md:w-1/2 relative">
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: height,
          clipPath: clipPath,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DiagonalImage;
