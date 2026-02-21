import React from "react";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import ContactImage from "../assets/Contact.png"; 

const Contact = () => {
  const cards = [
    { icon: Phone, title: "Call Us", main: "+44 20 7946 0958", sub: "Mon–Fri, 9am–6pm" },
    { icon: Mail, title: "Email Us", main: "hello@youragency.co.uk", sub: "We reply within 24 hours" },
    { icon: MapPin, title: "Visit Us", main: "42 King Street, London", sub: "By appointment only" },
    { icon: Clock, title: "Working Hours", main: "Mon – Fri: 9:00 – 18:00", sub: "Sat: 10:00 – 14:00" },
  ];

  return (
    <section className="w-full bg-[#f4f1ea] py-24 px-6 md:px-16 font-[prompt]">
      {/* HEADING SECTION */}
      <div className="text-center mb-20">
        <span className="text-white text-[12px] font-bold tracking-[0.3em] uppercase bg-[#b28a4a] px-6 py-2 rounded-full shadow-sm">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
          Let’s Start a <span className="text-[#b28a4a]">Conversation</span>
        </h1>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          Whether you're buying, selling, or investing — we're here to help you
          make confident property decisions.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {/* LEFT COLUMN: FORM */}
        <div className="lg:col-span-2 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(178,138,74,0.08)] p-10 md:p-14 relative overflow-hidden border border-[#b28a4a]/10">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-[#2E3540]">Send Us a Message</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all text-gray-700"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all text-gray-700"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all text-gray-700"
              />
              <input
                type="text"
                placeholder="Property Inquiry Type"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all text-gray-700"
              />
              <textarea
                rows="5"
                placeholder="Tell us about your property goals..."
                className="w-full md:col-span-2 bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all resize-none text-gray-700"
              />
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-[#b28a4a] hover:bg-[#9a763d] text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#b28a4a]/20 active:scale-95"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* REFINED ILLUSTRATION PLACEMENT */}
          <img
            src={ContactImage}
            alt=""
            className="hidden xl:block absolute -bottom-30 -right-20 w-[550px]  pointer-events-none"
          />
        </div>

        {/* RIGHT COLUMN: CARDS */}
        <div className="flex flex-col gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 flex items-center gap-5 border border-[#b28a4a]/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#b28a4a]/30"
            >
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#b28a4a]/10 text-[#b28a4a] group-hover:bg-[#b28a4a] group-hover:text-white transition-all duration-300">
                <item.icon size={26} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                  {item.title}
                </p>
                <p className="font-bold text-[#2E3540] text-sm md:text-base">
                  {item.main}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 font-light">{item.sub}</p>
              </div>
            </div>
          ))}

          {/* URGENT CTA CARD: Now in Brand Charcoal */}
          <div className="bg-[#2E3540] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <p className="font-bold text-lg mb-2">Need urgent help?</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Book a free 15-minute consultation with one of our property experts.
              </p>
              <button className="flex items-center gap-2 font-bold text-[#b28a4a] text-xs uppercase tracking-widest hover:gap-4 transition-all group-hover:text-white">
                Book Now <ArrowRight size={16} />
              </button>
            </div>
            {/* Gold Glow Accent */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#b28a4a]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="rounded-[32px] overflow-hidden shadow-2xl border-[12px] border-white">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207917!2d-0.093496023369528!3d51.51494727181515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb4df797825%3A0xe67531776510368c!2s42%20King%20St%2C%20London%20EC2V%208AS!5e0!3m2!1sen!2suk!4v1709220000000!5m2!1sen!2suk"
            width="100%"
            height="450"
            style={{ filter: "grayscale(0.6) contrast(1.1) brightness(0.9)" }}
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;