import React from "react";

const DiagonalImage = ({
  src,
  alt = "image",
  height = "h-[280px] sm:h-[450px] md:h-auto",
}) => {
  return (
    <div className={`w-full md:w-1/2 ${height} relative`}>
      <div className="relative h-full w-full overflow-hidden diagonal-image-shape">
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
