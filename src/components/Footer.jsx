import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Changed to HashLink for section scrolling
import { createClient } from "@supabase/supabase-js";

// SECURE INITIALIZATION
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'loading', 'success', 'exists', 'error'

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // 1. Check if email already exists
    const { data: existing } = await supabase
      .from("newsletter")
      .select("email")
      .eq("email", email)
      .single();

    if (existing) {
      setStatus("exists");
      setTimeout(() => setStatus(null), 4000);
      return;
    }

    // 2. Insert new email
    const { error } = await supabase.from("newsletter").insert([{ email }]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
    }

    // Reset message after 4 seconds
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <footer className="relative bg-[#f4f1ea] border-t border-[#e2ddd3]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-serif font-semibold text-[#1c1c1c]">LandMark Letts</h2>
          <p className="text-[#b28a4a] mt-3 font-medium">Luxury Homes. Trusted Guidance.</p>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            A premier property consultancy delivering bespoke real estate solutions for discerning clients since 2007.
          </p>
        </div>

        {/* Quick Links - Updated with HashLink and root paths */}
        <div>
          <h4 className="font-semibold mb-5 text-[#1c1c1c]">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              { name: "Home", href: "/#" },
              { name: "Listing", href: "/#listing" },
              { name: "About Us", href: "/#about" },
              { name: "Our Services", href: "/#services" },
              { name: "Who We Serve", href: "/#serve" },
              { name: "Contact", href: "/#contact" },
            ].map((item, i) => (
              <li key={i}>
                <HashLink 
                  smooth 
                  to={item.href} 
                  className="hover:text-[#b28a4a] transition cursor-pointer"
                >
                  {item.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-5 text-[#1c1c1c]">Our Services</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-[#b28a4a] transition cursor-pointer"><Link to="/collection">Full Property Management & Rent Collection</Link></li>
            <li className="hover:text-[#b28a4a] transition cursor-pointer"><Link to="/marketing">Property Sales & Marketing</Link></li>
            <li className="hover:text-[#b28a4a] transition cursor-pointer"><Link to="/valuation">Property Valuation & Market Appraisal</Link></li>
            <li className="hover:text-[#b28a4a] transition cursor-pointer"><Link to="/advisory">Landlord Support & Investment Advisory</Link></li>
            <li className="hover:text-[#b28a4a] transition cursor-pointer"><Link to="/tenant">Property Letting & Tenant Referencing</Link></li>
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="font-semibold mb-5 text-[#1c1c1c]">Contact Us</h4>
          <div className="space-y-4 text-sm text-gray-600 mb-6">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#b28a4a] mt-1" />
              <p>Jhumat House, 160 London Rd, Barking IG11 8BB, UK</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#b28a4a]" />
              <p>020 3633 9443</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#b28a4a]" />
              <p>contact@landmarkletts.co.uk</p>
            </div>
          </div>

          {/* Glass Newsletter Card */}
          <div className="lg:p-6 p-4 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/50 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <h5 className="font-semibold text-[#1c1c1c] mb-2">Stay Updated</h5>
            <p className="text-xs text-gray-500 mb-4">Get latest property updates</p>

            <form onSubmit={handleNewsletterSubmit} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-5 py-3 text-sm bg-white/80 border border-gray-300 rounded-xl focus:outline-none focus:border-[#b28a4a]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="absolute right-1 h-[75%] px-4 bg-[#b28a4a] text-white rounded-xl hover:bg-[#9d773f] transition shadow-md disabled:opacity-50"
              >
                <FaArrowRight className="text-sm" />
              </button>
            </form>

            {/* Status Messages */}
            <div className="mt-3 text-[11px] font-medium">
              {status === "success" && <p className="text-green-600 animate-pulse">Email registered successfully!</p>}
              {status === "exists" && <p className="text-[#b28a4a]">This email is already registered.</p>}
              {status === "error" && <p className="text-red-500">Something went wrong. Try again.</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e2ddd3]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2026 LandMark Letts. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-[#b28a4a]">Privacy Policy</Link>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <Link to="/terms" className="hover:text-[#b28a4a]">Terms & Conditions</Link>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>Created by <a href="https://krewlancer.com/" target="_blank" rel="noopener noreferrer" className="text-[#b28a4a] font-medium hover:underline">Krewlancer</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;