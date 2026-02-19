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

const Card = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 text-left h-full">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
        {item.icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
};

const Whoweserve = () => {
  return (
    <section className="w-full bg-gradient-to-br bg-[#EEEEEE]/36 font[prompt] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small Heading */}
        <p className="text-sm tracking-widest text-[#34495E] font-semibold mb-4">
          WHO WE SERVE
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Tailored solutions for{" "}
          <span className="text-[#1F2A44] text-600">every</span> property need.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          No matter where you are in your property journey, we have the expertise to help you succeed.
        </p>

        {/* Cards Section */}
        <div className="mt-16 space-y-8">

          {/* First Row - 3 Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {data.slice(0, 3).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {data.slice(3, 5).map((item, index) => (
              <div className="w-full md:w-[31%]" key={index}>
                <Card item={item} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Whoweserve;
