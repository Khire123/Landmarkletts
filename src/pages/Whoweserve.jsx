import React from "react";
import { Users, Building2, TrendingUp, Home, Briefcase } from "lucide-react";

const data = [
  {
    icon: <Building2 size={26} />,
    title: "Private Landlords",
    desc: "Maximise your rental income with our full property management service. From tenant sourcing to maintenance — we handle it all.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Property Investors",
    desc: "Identify high-yield opportunities and build a profitable portfolio with market insights and end-to-end support.",
  },
  {
    icon: <Users size={26} />,
    title: "Tenants",
    desc: "Find your perfect home with curated listings and responsive support. Renting made simple and stress-free.",
  },
  {
    icon: <Home size={26} />,
    title: "Home Buyers & Sellers",
    desc: "Whether buying your dream home or selling for the best price, our experts guide you through every step.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Small Property Developers",
    desc: "From planning to sale, we partner with developers to market new builds and deliver results on every project.",
  },
];

const Card = ({ item, className = "" }) => {
  return (
    <div
      className={`
        relative group h-full
        bg-white rounded-3xl p-8
        border border-[#b28a4a]/10
        transition-all duration-500 ease-out
        hover:shadow-[0_20px_50px_rgba(178,138,74,0.15)]
        hover:border-[#b28a4a]/50
        hover:-translate-y-1
        flex flex-col
        ${className}
      `}
    >
      {/* --- UPDATED GRADIENT: Warm Gold/Ivory Glow --- */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#b28a4a]/[0.3] via-transparent to-[#f4f1ea] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" 
      />

      <div className="relative z-10">
        {/* --- UPDATED ICON: Matches the b28a4a Gold --- */}
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#b28a4a]/10 text-[#b28a4a] mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#b28a4a] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#b28a4a]/30">
          {item.icon}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">
          {item.title}
        </h3>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
          {item.desc}
        </p>
      </div>

      {/* Decorative Arrow */}
      <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
        <span className="text-xs font-bold text-[#b28a4a] uppercase tracking-widest flex items-center gap-2">
          Learn More <span className="text-lg">→</span>
        </span>
      </div>
    </div>
  );
};

const Whoweserve = () => {
  return (
    <section className="w-full bg-[#f4f1ea] py-24 px-6 font-[prompt] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-[#b28a4a] text-white text-[15px] font-bold tracking-[0.2em] uppercase mb-6">
            Who We Serve
          </span>
          
          <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-[1.1] max-w-4xl">
            Tailored solutions for{" "}
            <span
              className="italic font-serif"
              style={{ 
                WebkitTextStroke: "1px #b28a4a", 
                color: "transparent",
                padding: "0 4px"
              }}
            >
              every
            </span>{" "}
            property need.
          </h1>

          <p className="text-gray-500 mt-8 max-w-xl text-lg font-light leading-relaxed">
            No matter where you are in your property journey, we have the
            expertise to help you succeed.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          
          {/* Row 1 */}
          <div className="lg:col-span-2">
            <Card item={data[0]} />
          </div>
          <div className="lg:col-span-2">
            <Card item={data[1]} />
          </div>
          <div className="lg:col-span-2">
            <Card item={data[2]} />
          </div>

          {/* Row 2 - Centered on large screens by using empty spacers or span math */}
          {/* We make the last two cards wider to fill the space elegantly */}
          <div className="lg:col-start-2 lg:col-span-2">
            <Card item={data[3]} />
          </div>
          <div className="lg:col-span-2">
            <Card item={data[4]} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Whoweserve;