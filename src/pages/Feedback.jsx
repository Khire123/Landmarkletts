import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { text: `"Lorem ipsum 1..."`, name: "Name 1", position: "CEO, Tech", rating: 5 },
  { text: `"Lorem ipsum 2..."`, name: "Name 2", position: "Manager, Creative", rating: 3 },
  { text: `"Lorem ipsum 3..."`, name: "Name 3", position: "Dev, Soft", rating: 4 },
  { text: `"Lorem ipsum 4..."`, name: "Name 4", position: "HR, People", rating: 2 },
  { text: `"Lorem ipsum 5..."`, name: "Name 5", position: "Lead, Design", rating: 5 },
];

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Feedback = () => {
  const [index, setIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [viewMode, setViewMode] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      // Laptop is 1024px+
      if (window.innerWidth < 1024) setViewMode("mobile"); 
      else setViewMode("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Jump back to the middle set for seamless looping
    if (index === testimonials.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(testimonials.length);
      }, 700);
    }
    if (index === testimonials.length - 1) {
       setTimeout(() => {
        setIsTransitioning(false);
        setIndex(testimonials.length * 2 - 1);
      }, 700);
    }
  }, [index]);

  const realIndex = index % testimonials.length;

  const handleDotClick = (i) => {
    setIsTransitioning(true);
    setIndex(testimonials.length + i);
  };

  const getTransform = () => {
    if (viewMode === "mobile") {
      // Mobile/Tablet: Single card takes 100% of container. 
      // Slide exactly by 100% * index.
      return `translateX(-${index * 100}%)`;
    } else {
      // Desktop: 3 cards. To center the 'active' card, 
      // we shift the whole row by 1 card width (33.33%)
      return `translateX(-${(index - 1) * 33.3333}%)`;
    }
  };

  return (
    <section className="relative w-full py-20 bg-[#f4f1ea] overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-medium text-[#2E3540] mb-12 px-4">
          What <span className="underline decoration-orange-500 underline-offset-4">Our Clients</span> Are Saying
        </h2>

        {/* Wrapper constraints:
           mx-auto + max-w-6xl ensures the carousel doesn't span the whole screen on ultrawide monitors.
           overflow-hidden ensures we only see 1 card on mobile or 3 on desktop.
        */}
        <div className="max-w-6xl mx-auto overflow-hidden px-4 md:px-0">
          <div className="relative h-[450px] md:h-[420px] flex items-center">
            <div
              className={`flex w-full h-full items-center ${
                isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{ transform: getTransform() }}
            >
              {extendedTestimonials.map((item, i) => {
                const isCenter = i === index;

                return (
                  <div 
                    key={i} 
                    className="w-full lg:w-1/3 flex-shrink-0 px-4 flex justify-center items-center"
                  >
                    <div
                      className={`w-full rounded-2xl text-left transition-all duration-500 transform flex flex-col justify-between ${
                        isCenter
                          ? "bg-[#2E3540] text-white shadow-2xl scale-100 lg:scale-110 z-20 py-10 px-8"
                          : "bg-white text-[#2E3540] scale-90 opacity-40 lg:opacity-60 shadow-sm py-8 px-8 z-10"
                      }`}
                    >
                      <div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={16}
                              className={j < item.rating ? "fill-orange-500 text-orange-500" : "fill-gray-300 text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className={`text-sm leading-relaxed mb-8 line-clamp-4 ${isCenter ? "text-gray-200" : "text-gray-600"}`}>
                          {item.text}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className={`text-xs mt-1 ${isCenter ? "text-gray-400" : "text-gray-500"}`}>
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-4 items-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`transition-all duration-500 ease-in-out rounded-full ${
              i === realIndex ? "w-8 h-2 bg-black" : "w-2 h-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Feedback;