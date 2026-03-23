import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, CheckCircle2, X } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import ContactImage from "../assets/Contact.png";

// SECURE INITIALIZATION
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Separate Success States
  const [submitted, setSubmitted] = useState(false); // For Main Contact Form
  const [bookingSubmitted, setBookingSubmitted] = useState(false); // For Booking Modal

  // 1. Main Form State
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    message: "",
  });

  // 2. Booking Modal State
  const [bookingData, setBookingData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_type: "",
    description: "",
  });

  const services = [
    "Full Property Management & Rent Collection",
    "Property Sales & Marketing",
    "Property Valuation & Market Appraisal",
    "Landlord Support & Investment Advisory",
    "Property Letting & Tenant Referencing",
  ];

  const cards = [
    { icon: Phone, title: "Call Us", main: "020 3633 9443", sub: "Mon–Fri, 10am–6pm" },
    { icon: Mail, title: "Email Us", main: "landmarkletts@gmail.com", sub: "We reply within 24 hours" },
    { icon: MapPin, title: "Visit Us", main: "Jhumat House, London Rd, IG11 8BB", sub: "By appointment only" },
    { icon: Clock, title: "Working Hours", main: "Mon – Fri: 9:00 – 18:00", sub: "Sat/Sun: closed" },
  ];

  // Handlers for Main Form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contacts").insert([formData]);
    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      setSubmitted(true);
      setFormData({ full_name: "", email: "", phone: "", inquiry_type: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
    setLoading(false);
  };

  // Handlers for Booking Modal
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.from("bookings").insert([bookingData]);
    
    if (error) {
      alert(`Booking Error: ${error.message}`);
    } else {
      // 1. Show success inside the modal only
      setBookingSubmitted(true);
      
      // 2. Clear the data
      setBookingData({ full_name: "", email: "", phone: "", service_type: "", description: "" });
      
      // 3. Close the modal automatically after 3 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        setBookingSubmitted(false);
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="w-full bg-[#f4f1ea] py-24 px-6 md:px-16 font-[prompt] relative">
      
      {/* --- BOOKING MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="bg-[#2E3540] p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Book a Consultation</h3>
                <p className="text-[#b28a4a] text-xs uppercase tracking-widest mt-1">Free 15-minute Session</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              {bookingSubmitted ? (
                /* SUCCESS VIEW INSIDE MODAL */
                <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in slide-in-from-bottom-4">
                  <div className="w-20 h-20 bg-[#b28a4a]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={48} className="text-[#b28a4a] animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-500 leading-relaxed">
                    We've sent a confirmation to your email. <br/>
                    Our team will call you shortly.
                  </p>
                </div>
              ) : (
                /* THE BOOKING FORM */
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <input
                    type="text" name="full_name" required placeholder="Full Name"
                    value={bookingData.full_name} onChange={handleBookingChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-[#b28a4a]/20"
                  />
                  <input
                    type="email" name="email" required placeholder="Email Address"
                    value={bookingData.email} onChange={handleBookingChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-[#b28a4a]/20"
                  />
                  <input
                    type="tel" name="phone" required placeholder="Phone Number"
                    value={bookingData.phone} onChange={handleBookingChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-[#b28a4a]/20"
                  />
                  <select
                    name="service_type" required
                    value={bookingData.service_type} onChange={handleBookingChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 text-gray-600"
                  >
                    <option value="">Select a Service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <textarea
                    name="description" required rows="3" placeholder="Tell us about your property goals..."
                    value={bookingData.description} onChange={handleBookingChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 resize-none"
                  />
                  <button
                    type="submit" disabled={loading}
                    className="w-full bg-[#b28a4a] text-white py-4 rounded-xl font-bold hover:bg-[#9a763d] transition-all shadow-lg active:scale-95"
                  >
                    {loading ? "Booking..." : "Confirm Booking"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- PAGE HEADER --- */}
      <div className="text-center mb-20">
        <span className="text-white text-[12px] font-bold tracking-[0.3em] uppercase bg-[#b28a4a] px-6 py-2 rounded-full shadow-sm">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
          Let’s Start a <span className="text-[#b28a4a]">Conversation</span>
        </h1>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          Whether you're buying, selling, or investing — we're here to help you make confident property decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* --- MAIN CONTACT FORM --- */}
        <div className="lg:col-span-2 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(178,138,74,0.08)] p-10 md:p-14 relative overflow-hidden border border-[#b28a4a]/10">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-[#2E3540]">
              {submitted ? "Message Received!" : "Send Us a Message"}
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 size={60} className="text-[#b28a4a] mb-4 animate-bounce" />
                <p className="text-xl font-medium text-gray-700">Thank you! Your message has been sent successfully.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-[#b28a4a] font-bold underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text" name="full_name" required value={formData.full_name} onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all text-gray-700"
                />
                <input
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all text-gray-700"
                />
                <input
                  type="text" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all text-gray-700"
                />
                <input
                  type="text" name="inquiry_type" value={formData.inquiry_type} onChange={handleChange}
                  placeholder="Property Inquiry Type"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all text-gray-700"
                />
                <textarea
                  name="message" required rows="5" value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your property goals..."
                  className="w-full md:col-span-2 bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#b28a4a]/20 focus:bg-white transition-all resize-none text-gray-700"
                />
                <div className="md:col-span-2">
                  <button
                    type="submit" disabled={loading}
                    className="group flex items-center gap-3 bg-[#b28a4a] hover:bg-[#9a763d] text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#b28a4a]/20 active:scale-95 disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </div>
              </form>
            )}
          </div>
          <img src={ContactImage} alt="" className="hidden xl:block absolute -bottom-30 -right-20 w-[550px] pointer-events-none" />
        </div>

        {/* --- INFO CARDS --- */}
        <div className="flex flex-col gap-6">
          {cards.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 flex items-center gap-5 border border-[#b28a4a]/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#b28a4a]/30">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#b28a4a]/10 text-[#b28a4a] group-hover:bg-[#b28a4a] group-hover:text-white transition-all duration-300">
                <item.icon size={26} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{item.title}</p>
                <p className="font-bold text-[#2E3540] text-sm md:text-base">{item.main}</p>
                <p className="text-xs text-gray-500 mt-0.5 font-light">{item.sub}</p>
              </div>
            </div>
          ))}

          {/* BOOK NOW CARD */}
          <div className="bg-[#2E3540] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <p className="font-bold text-lg mb-2">Need urgent help?</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Book a free 15-minute consultation with one of our property experts.</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 font-bold text-[#b28a4a] text-xs uppercase tracking-widest hover:gap-4 transition-all group-hover:text-white"
              >
                Book Now <ArrowRight size={16} />
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#b28a4a]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;