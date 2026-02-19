import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
];

const Feedback = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#f9fafb]">

      {/* 🔳 Fade Center Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />

      {/* 🔼 Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-medium text-[#2E3540]">
          What <span className="underline">Our Clients</span> Are Saying
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative mt-0 overflow-x-hidden overflow-y-visible py-10 h-[420px] flex items-center">

          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100 / 3}%)`,
            }}
          >
            {testimonials.map((item, i) => {
              const middleIndex = (index + 1) % testimonials.length;

              return (
                <div key={i} className="w-1/3 flex-shrink-0 px-4">
                  <div
                    className={`rounded-2xl text-left transition-all duration-500 transform flex flex-col justify-between ${
                      i === middleIndex
                        ? "bg-[#2E3540] text-white shadow-lg scale-110 py-8 px-10 z-10"
                        : "bg-white text-[#2E3540] scale-90 py-6 px-6 opacity-80 shadow-sm"
                    }`}
                  >

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          className="fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        i === middleIndex
                          ? "text-gray-200"
                          : "text-gray-700"
                      }`}
                    >
                      {item.text}
                    </p>

                    {/* Name */}
                    <h4 className="font-semibold text-sm">
                      {item.name}
                    </h4>

                    {/* Position */}
                    <p
                      className={`text-xs mt-1 ${
                        i === middleIndex
                          ? "text-gray-300"
                          : "text-gray-500"
                      }`}
                    >
                      {item.position}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feedback;
