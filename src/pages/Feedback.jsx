import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."`,
    name: "Name Surname",
    position: "Position, Company name",
    highlight: true,
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."`,
    name: "Name Surname",
    position: "Position, Company name",
  },
];

const Feedback = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Top Text */}
        <p className="text-sm text-gray-500 mb-3">
          Real Feedback from Real Users
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-medium text-[#2E3540]">

          What <span className="underline decoration-[#2E3540]">Our Clients</span> Are Saying
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our clients have experienced remarkable improvements in their project management and overall productivity.
        </p>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 items-stretch">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-left transition duration-300 ${
                item.highlight
                  ? "bg-[#2E3540] text-white shadow-xl"
                  : "bg-gray-100 text-[#2E3540]"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Feedback Text */}
              <p className={`text-sm leading-relaxed mb-6 ${
                item.highlight ? "text-gray-200" : "text-gray-700"
              }`}>
                {item.text}
              </p>

              {/* Name */}
              <h4 className="font-semibold text-sm">
                {item.name}
              </h4>

              {/* Position */}
              <p className={`text-xs mt-1 ${
                item.highlight ? "text-gray-300" : "text-gray-500"
              }`}>
                {item.position}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feedback;
