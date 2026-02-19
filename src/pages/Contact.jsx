import React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

import ContactImage from "../assets/Contact.png"; // adjust path if needed

const Contact = () => {
  const cards = [
    {
      icon: Phone,
      title: "Call Us",
      main: "+44 20 7946 0958",
      sub: "Mon–Fri, 9am–6pm",
    },
    {
      icon: Mail,
      title: "Email Us",
      main: "hello@youragency.co.uk",
      sub: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      main: "42 King Street, London EC2V 8AT",
      sub: "By appointment only",
    },
    {
      icon: Clock,
      title: "Working Hours",
      main: "Mon – Fri: 9:00 – 18:00",
      sub: "Sat: 10:00 – 14:00",
    },
  ];

  return (
    <section className="w-full bg-[#EEEEEE]/36 py-24 px-6 md:px-16">
      {/* HEADING */}
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">
          Get In Touch
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Let’s Start a <span className="text-blue-600">Conversation</span>
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Whether you're buying, selling, or investing — we're here to help you
          make confident property decisions.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* LEFT FORM */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8 relative overflow-hidden">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Phone no."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Property enquiry"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Tell us about your property goals..."
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>

          {/* Decorative Bottom Right Image */}
          <img
            src={ContactImage}
            alt="Contact Illustration"
            className="
    absolute
    -bottom-
    right-0
    left-62
    w-[700px]
    max-w-none
    opacity-90
    pointer-events-none
  "
          />
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-6">
          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md p-6 flex gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="
  w-12 h-12
  flex items-center justify-center
  rounded-xl
  bg-blue-100
  text-blue-600
  transition-all duration-300
  group-hover:bg-gradient-to-br
  group-hover:from-blue-600
  group-hover:to-blue-500
  group-hover:text-white
"
                >
                  <Icon size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 transition-all duration-300 group-hover:text-blue-600">
                    {item.title}
                  </p>
                  <p className="font-semibold text-gray-800">{item.main}</p>
                  <p className="text-sm text-gray-500">{item.sub}</p>
                </div>
              </div>
            );
          })}

          <div className="group bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <p className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition duration-300">
              Need urgent help?
            </p>
            <p className="text-sm text-gray-500 mb-3">
              Book a free 15-minute consultation with one of our property
              experts.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Book Now →
            </button>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=42+King+Street+London+EC2V+8AT&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
