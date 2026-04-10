import React, { useState } from "react";
import {
  Heart,
  Share2,
  Waves,
  TreePine,
  Wifi,
  Shield,
  Dumbbell,
  Monitor,
  Sun,
  Wind,
  GraduationCap,
  Building2,
  Train,
  UtensilsCrossed,
  MapPin,
  Bed,
  CheckCircle,
} from "lucide-react";

// Asset Imports
import heroImage from "../assets/similar-2.jpg";
import hero from "../assets/similar-2.jpg";
import interior1 from "../assets/property-interior-1.jpg";
import interior2 from "../assets/property-interior-2.jpg";
import interior3 from "../assets/property-interior-3.jpg";
import pool from "../assets/property-pool.jpg";
import similar1 from "../assets/similar-1.jpg";
import similar2 from "../assets/similar-2.jpg";
import similar3 from "../assets/similar-3.jpg";

// Component Import
import ScheduleViewingModal from "../components/ScheduleViewingModal";

export default function ApartmentPropertyDetail() {
  const [mainImage, setMainImage] = useState(heroImage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppContact = () => {
    const phoneNumber = "917039376721";
    const message = "Hi, I am interested in Palm Luxury Apartment. Please share more details.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full px-3 sm:px-6 lg:px-10 py-6">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full rounded-3xl overflow-hidden">
        <img
          src={mainImage}
          alt="Luxury Apartment"
          className="w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[760px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Share Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-3">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Luxury Apartment",
                  text: "Check out this amazing property!",
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
              }
            }}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 rounded-full shadow hover:scale-105 transition"
          >
            <Share2 size={18} />
          </button>
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-12 left-5 sm:left-10 text-white max-w-xl md:max-w-2xl">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-200 mb-2 sm:mb-4">
            Premium Apartment
          </p>
          <h1 className="font-serif leading-tight font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
            Luxury Living <br className="hidden sm:block" /> in the City Skyline
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md sm:max-w-lg">
            Experience modern apartment living with panoramic skyline views and world-class amenities.
          </p>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex gap-2 sm:gap-4">
          <img
            src={heroImage}
            onClick={() => setMainImage(heroImage)}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-xl border border-white/40 cursor-pointer hover:scale-105 transition"
          />
          <img
            src={interior1}
            onClick={() => setMainImage(interior1)}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-xl border border-white/40 cursor-pointer hover:scale-105 transition"
          />
          <img
            src={pool}
            onClick={() => setMainImage(pool)}
            className="hidden sm:block w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl border border-white/40 cursor-pointer hover:scale-105 transition"
          />
        </div>
      </section>

      {/* ================= PROPERTY INFO & PRICE SECTION ================= */}
      <section className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-2 bg-[#f6f3ed] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#c79b5d] text-white text-xs px-3 py-1 rounded-full tracking-wider">FOR SALE</span>
            <span className="text-gray-600 text-sm tracking-wider">APARTMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">Palm Luxury Apartment</h2>
          <p className="text-gray-600 mb-6">📍 Palm Jumeirah, Dubai</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">3 Bedrooms</div>
            <div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">3 Bathroom</div>
            <div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">2,100 sq ft</div>
            <div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">2 Cars</div>
            <div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">Built 2023</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleWhatsAppContact}
              className="bg-[#c79b5d] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Contact Agent
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Schedule Viewing
            </button>
          </div>
        </div>

        {/* Right Column: Price Card */}
        <div className="bg-[#f6f3ed] rounded-2xl p-6 sm:p-8">
          <p className="text-gray-500 uppercase text-sm tracking-wider mb-2">Asking Price</p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#c79b5d] mb-6">£2,100,000</h3>

          <div className="flex justify-between border-t border-gray-300 py-4 text-sm">
            <span className="text-gray-600">Mortgage Estimate</span>
            <span className="font-medium">£6,200/mo</span>
          </div>
          <div className="flex justify-between border-t border-gray-300 py-4 text-sm">
            <span className="text-gray-600">Property Tax</span>
            <span className="font-medium">£4,500/yr</span>
          </div>
          <div className="flex justify-between border-t border-gray-300 py-4 text-sm">
            <span className="text-gray-600">Monthly Payment</span>
            <span className="font-medium">£6,950/mo</span>
          </div>
        </div>
      </section>

      {/* ================= PROPERTY OVERVIEW ================= */}
      <section className="max-w-7xl mx-auto mt-10">
        <div className="bg-[#f6f3ed] rounded-2xl p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">Apartment Overview</h2>
          <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>Located in the prestigious Palm Jumeirah, this luxury apartment offers unmatched views of the Arabian Gulf and Dubai skyline.</p>
            <p>The apartment features contemporary interiors, floor-to-ceiling windows, and an open-plan living area designed for modern lifestyles.</p>
            <p>Residents enjoy private beach access, infinity pools, luxury gyms, and exclusive concierge services.</p>
            <p>With world-class restaurants, shopping destinations, and vibrant nightlife nearby, the property offers the ultimate urban lifestyle.</p>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM AMENITIES ================= */}
      <section className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">Premium Amenities</h2>
          <p className="text-gray-500">Every detail designed for exceptional living</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: Waves, label: "Swimming Pool" },
            { Icon: TreePine, label: "Private Garden" },
            { Icon: Wifi, label: "Smart Home" },
            { Icon: Shield, label: "Security System" },
            { Icon: Dumbbell, label: "Private Gym" },
            { Icon: Monitor, label: "Home Office" },
            { Icon: Sun, label: "Balcony" },
            { Icon: Wind, label: "Air Conditioning" },
          ].map((item, index) => (
            <div key={index} className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
                <item.Icon className="text-white" size={22} />
              </div>
              <p className="font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROPERTY GALLERY ================= */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">Property Gallery</h2>
          <p className="text-gray-500">Explore every corner of this magnificent residence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <img src={hero} className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl" alt="Exterior" />
          </div>
          <div className="grid grid-rows-2 gap-6">
            <img src={interior1} className="w-full h-full object-cover rounded-2xl" alt="Interior 1" />
            <img src={interior2} className="w-full h-full object-cover rounded-2xl" alt="Interior 2" />
          </div>
          <img src={interior3} className="w-full h-[220px] sm:h-[260px] object-cover rounded-2xl" alt="Bedroom" />
          <img src={pool} className="w-full h-[220px] sm:h-[260px] object-cover rounded-2xl" alt="Pool" />
          <img src={similar1} className="w-full h-[220px] sm:h-[260px] object-cover rounded-2xl" alt="Living Room" />
        </div>
      </section>

      {/* ================= LOCATION SECTION ================= */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Property Location</h2>
          <p className="text-gray-500 mt-2">South Kensington, London</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423056448!2d-0.1758!3d51.4938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876056ea0800001%3A0x6b4f73752e000000!2sSouth%20Kensington!5e0!3m2!1sen!2suk!4v1650000000000"
              className="w-full h-[350px] sm:h-[420px] lg:h-[450px] border-0"
              loading="lazy"
            ></iframe>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Nearby Amenities</h3>
            {[
              { Icon: GraduationCap, title: "Westminster Academy", dist: "0.5 miles" },
              { Icon: Building2, title: "Royal London Hospital", dist: "1.2 miles" },
              { Icon: Train, title: "South Kensington Station", dist: "0.3 miles" },
              { Icon: UtensilsCrossed, title: "The Ivy Chelsea", dist: "0.4 miles" }
            ].map((loc, index) => (
              <div key={index} className="bg-[#f6f3ed] rounded-xl p-4 flex items-center gap-4 border border-[#e6e1d8]">
                <div className="w-12 h-12 rounded-full bg-[#efe7db] flex items-center justify-center">
                  <loc.Icon className="text-[#c79b5d]" size={22} />
                </div>
                <div>
                  <p className="font-medium text-sm">{loc.title}</p>
                  <p className="text-xs text-gray-500">{loc.dist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIMILAR PROPERTIES ================= */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Similar Properties</h2>
          <p className="text-gray-500 mt-2">You might also be interested in</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: similar1, title: "Sky Penthouse", price: "£2,850,000", loc: "Canary Wharf", beds: "4" },
            { img: similar2, title: "The Mayfair Residence", price: "£1,750,000", loc: "Mayfair", beds: "3" },
            { img: similar3, title: "Cotswolds Manor", price: "£3,200,000", loc: "Gloucestershire", beds: "6" }
          ].map((property, idx) => (
            <div key={idx} className="bg-[#f6f3ed] rounded-2xl overflow-hidden border border-[#e6e1d8] hover:shadow-lg transition">
              <div className="relative">
                <img src={property.img} className="w-full h-[220px] object-cover" alt={property.title} />
                <span className="absolute top-3 left-3 bg-[#c79b5d] text-white text-xs px-3 py-1 rounded-full">FOR SALE</span>
              </div>
              <div className="p-5">
                <p className="text-[#c79b5d] font-semibold mb-1">{property.price}</p>
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin size={16} /> {property.loc}
                </div>
                <div className="inline-flex items-center gap-2 bg-[#efe7db] px-3 py-1 rounded-full text-sm text-gray-700 mb-5">
                  <Bed size={16} className="text-[#c79b5d]" />{property.beds} Beds
                </div>
                <button className="w-full border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-100 transition">Quick View</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUSTED CLIENTS SECTION ================= */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="bg-gradient-to-r from-[#c79b5d] to-[#d6ad72] rounded-3xl px-6 sm:px-10 lg:px-16 py-12 text-white text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-10">Trusted by Discerning Clients Worldwide</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { val: "100%", label: "Client Satisfaction" },
              { val: "500+", label: "Properties Sold" },
              { val: "150+", label: "Cities & Countries" },
              { val: "200+", label: "Positive Reviews" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <CheckCircle size={22} className="text-white/90" />
                <h3 className="text-2xl sm:text-3xl font-semibold">{stat.val}</h3>
                <p className="text-sm text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <ScheduleViewingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        propertyName="Palm Luxury Apartment" 
      />
    </div>
  );
}