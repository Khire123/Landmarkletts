import React, { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { 
    text: "I was honestly nervous about buying my first home, but the entire process was made simple and stress-free. The website listings were accurate, and the agent guided us at every step until registration day.", 
    name: "Rahul Patil", 
    position: "Home Buyer", 
    rating: 5 
  },
  { 
    text: "We sold our flat within 3 weeks! The property photos, pricing strategy, and constant follow-ups made a huge difference. Highly professional and transparent service.", 
    name: "Neha Sharma", 
    position: "Property Seller", 
    rating: 4
  },
  { 
    text: "What I liked the most was the honest advice. They didn’t just push expensive properties but actually understood our budget and needs. The website filters made searching very easy.", 
    name: "Imran Shaikh", 
    position: "Apartment Buyer", 
    rating: 4 
  },
  { 
    text: "As an NRI investor, I needed someone trustworthy. The virtual tours and clear documentation support helped me close the deal without even visiting India. Truly reliable team.", 
    name: "Farah Khan", 
    position: "NRI Investor", 
    rating: 5
  },
  { 
    text: "From property visits to loan assistance, everything was handled smoothly. Communication was always clear and quick. I would definitely recommend them to my friends and family.", 
    name: "Vikram Desai", 
    position: "First-Time Home Buyer", 
    rating: 5 
  },
];

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Feedback = () => {
  const [index, setIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [viewMode, setViewMode] = useState("desktop");
  const [paused, setPaused] = useState(false);

  // Swipe refs
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setViewMode("mobile"); 
      else setViewMode("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic with Pause check
  useEffect(() => {
    if (paused) return; // Stop interval if hovered or touched

    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, index]);

  useEffect(() => {
    // Infinite loop jump-back logic
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

  const handleNext = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  const handleDotClick = (i) => {
    setIsTransitioning(true);
    setIndex(testimonials.length + i);
  };

  // --- Swipe Handlers ---
  const onTouchStart = (e) => {
    setPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    setPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getTransform = () => {
    if (viewMode === "mobile") {
      return `translateX(-${index * 100}%)`;
    } else {
      return `translateX(-${(index - 1) * 33.3333}%)`;
    }
  };

  const realIndex = index % testimonials.length;

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
          What{" "} 
          <span
            className="italic font-serif"
            style={{ 
              WebkitTextStroke: "1px #b28a4a", 
              color: "transparent",
              padding: "0 4px"
            }}
          >Our Clients</span>{" "} 
          Are Saying
        </h2>

        <div 
          className="max-w-6xl mx-auto overflow-hidden px-4 md:px-0 touch-pan-y"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
                      className={`w-full rounded-2xl text-left transition-all duration-500 transform flex flex-col justify-between select-none ${
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

      {/* -------- DOTS -------- */}
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