import React from "react";

const DiagonalImage = ({ src, alt }) => {
  return (
    <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
      <div className="relative h-full w-full diagonal-shape overflow-hidden">
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
