import React from "react";

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
  Phone,
  Mail,
  Star,
  MapPin,
  Bed,
  CheckCircle
} from "lucide-react";

import heroImage from "../assets/property-pool.jpg";
import hero from "../assets/property-pool.jpg";
import interior1 from "../assets/property-interior-1.jpg";
import interior2 from "../assets/property-interior-2.jpg";
import interior3 from "../assets/property-interior-3.jpg";
import pool from "../assets/property-pool.jpg";
import agentPhoto from "../assets/agent-photo.jpg";

import similar1 from "../assets/similar-1.jpg";
import similar2 from "../assets/similar-2.jpg";
import similar3 from "../assets/similar-3.jpg";

export default function BeachPropertyDetail() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-10 py-6">

{/* ================= HERO SECTION ================= */}

<section className="relative w-full rounded-3xl overflow-hidden">

<img
src={heroImage}
alt="Beachfront Villa"
className="w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[760px] object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

<div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-3">

<button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 rounded-full shadow hover:scale-105 transition">
<Heart size={18}/>
</button>

<button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 rounded-full shadow hover:scale-105 transition">
<Share2 size={18}/>
</button>

</div>

<div className="absolute bottom-12 left-5 sm:left-10 text-white max-w-xl md:max-w-2xl">

<p className="uppercase tracking-widest text-xs sm:text-sm text-gray-200 mb-2 sm:mb-4">
Beachfront Estate
</p>

<h1 className="font-serif leading-tight font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
Luxury Living
<br className="hidden sm:block"/>
by the Ocean
</h1>

<p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md sm:max-w-lg">
Wake up to breathtaking ocean views and enjoy private beach access in this stunning coastal residence.
</p>

</div>

</section>

{/* ================= PROPERTY INFO SECTION ================= */}

<section className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-[#f6f3ed] rounded-2xl p-6 sm:p-8">

<div className="flex items-center gap-3 mb-4">
<span className="bg-[#c79b5d] text-white text-xs px-3 py-1 rounded-full tracking-wider">
FOR SALE
</span>

<span className="text-gray-600 text-sm tracking-wider">
BEACH HOUSE
</span>
</div>

<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">
Malibu Oceanfront Villa
</h2>

<p className="text-gray-600 mb-6">
📍 Malibu Beach, California
</p>

<div className="flex flex-wrap gap-3 mb-8">

<div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">
5 Bedrooms
</div>

<div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">
4 Bathroom
</div>

<div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">
4,500 sq ft
</div>

<div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">
3 Cars
</div>

<div className="bg-white rounded-full px-4 py-2 text-sm shadow-sm">
Built 2021
</div>

</div>

<div className="flex flex-wrap gap-4">

<button className="bg-[#c79b5d] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
Contact Agent
</button>

<button className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
Schedule Viewing
</button>

</div>

</div>

{/* PRICE CARD */}

<div className="bg-[#f6f3ed] rounded-2xl p-6 sm:p-8">

<p className="text-gray-500 uppercase text-sm tracking-wider mb-2">
Asking Price
</p>

<h3 className="text-3xl sm:text-4xl font-semibold text-[#c79b5d] mb-6">
£3,800,000
</h3>

<div className="flex justify-between border-t border-gray-300 py-4 text-sm">
<span className="text-gray-600">Mortgage Estimate</span>
<span className="font-medium">£10,200/mo</span>
</div>

<div className="flex justify-between border-t border-gray-300 py-4 text-sm">
<span className="text-gray-600">Property Tax</span>
<span className="font-medium">£6,300/yr</span>
</div>

<div className="flex justify-between border-t border-gray-300 py-4 text-sm">
<span className="text-gray-600">Monthly Payment</span>
<span className="font-medium">£11,500/mo</span>
</div>

</div>

</section>

{/* ================= PROPERTY OVERVIEW ================= */}

<section className="max-w-7xl mx-auto mt-10">

<div className="bg-[#f6f3ed] rounded-2xl p-6 sm:p-8 lg:p-10">

<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
Beach Property Overview
</h2>

<div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">

<p>
Situated along the pristine coastline of Malibu, this oceanfront villa offers uninterrupted views of the Pacific Ocean and direct access to a private beach.
</p>

<p>
The residence features expansive glass walls, contemporary architecture, and open living spaces designed to embrace natural light and ocean breezes.
</p>

<p>
Luxury amenities include a private infinity pool, beachfront terrace, spa-inspired bathrooms, and a chef's kitchen ideal for entertaining guests.
</p>

<p>
Just minutes away from Malibu’s finest restaurants, shopping destinations, and scenic coastal drives, this home delivers the ultimate seaside lifestyle.
</p>

</div>

</div>

</section>


{/* ================= PREMIUM AMENITIES SECTION ================= */}

      <section className="max-w-7xl mx-auto mt-16">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">
            Premium Amenities
          </h2>

          <p className="text-gray-500 text-sm sm:text-base">
            Every detail designed for exceptional living
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Amenity Card */}
          <div className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            {/* Icon Circle */}
            <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
              <Waves className="text-white" size={22} />
            </div>

            {/* Amenity Title */}
            <p className="font-medium">Swimming Pool</p>
          </div>

          {/* Private Garden */}
          <div className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
              <TreePine className="text-white" size={22} />
            </div>

            <p className="font-medium">Private Garden</p>
          </div>

          {/* Smart Home */}
          <div className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
              <Wifi className="text-white" size={22} />
            </div>

            <p className="font-medium">Smart Home</p>
          </div>

          {/* Security System */}
          <div className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
              <Shield className="text-white" size={22} />
            </div>

            <p className="font-medium">Security System</p>
          </div>

          {/* Private Gym */}
          <div className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
              <Dumbbell className="text-white" size={22} />
            </div>

            <p className="font-medium">Private Gym</p>
          </div>

          {/* Home Office */}
          <div className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
              <Monitor className="text-white" size={22} />
            </div>

            <p className="font-medium">Home Office</p>
          </div>

          {/* Balcony */}
          <div className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
              <Sun className="text-white" size={22} />
            </div>

            <p className="font-medium">Balcony</p>
          </div>

          {/* Air Conditioning */}
          <div className="bg-[#f6f3ed] rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-[#c79b5d] rounded-full flex items-center justify-center mb-4">
              <Wind className="text-white" size={22} />
            </div>

            <p className="font-medium">Air Conditioning</p>
          </div>
        </div>
      </section>
      {/* ================= END PREMIUM AMENITIES SECTION ================= */}

      {/* ================= PROPERTY GALLERY SECTION ================= */}

<section className="max-w-7xl mx-auto mt-20">

  {/* Section Header */}
  <div className="text-center mb-12">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">
      Property Gallery
    </h2>

    <p className="text-gray-500 text-sm sm:text-base">
      Explore every corner of this magnificent residence
    </p>
  </div>


  {/* Gallery Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* Large Image (Left) */}
    <div className="lg:col-span-2">
      <img
        src={hero}
        alt="property exterior"
        className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl"
      />
    </div>


    {/* Right Column */}
    <div className="grid grid-rows-2 gap-6">

      {/* Interior Living Room */}
      <img
        src={interior1}
        alt="living room"
        className="w-full h-[200px] sm:h-[240px] lg:h-[250px] object-cover rounded-2xl"
      />

      {/* Kitchen */}
      <img
        src={interior2}
        alt="kitchen"
        className="w-full h-[200px] sm:h-[240px] lg:h-[250px] object-cover rounded-2xl"
      />

    </div>


    {/* Bottom Left Image */}
    <img
      src={interior3}
      alt="bedroom"
      className="w-full h-[220px] sm:h-[260px] object-cover rounded-2xl"
    />


    {/* Bottom Right Image */}
    <img
      src={pool}
      alt="pool"
      className="w-full h-[220px] sm:h-[260px] object-cover rounded-2xl"
    />

  </div>

</section>

{/* ================= END PROPERTY GALLERY SECTION ================= */}



{/* ================= PROPERTY LOCATION SECTION ================= */}

<section className="max-w-7xl mx-auto mt-20">

  {/* Section Header */}
  <div className="text-center mb-10">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
      Property Location
    </h2>

    <p className="text-gray-500 mt-2">
      South Kensington, London
    </p>
  </div>


  {/* Location Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    {/* Google Map */}
    <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-sm">

      {/* Google Maps iframe */}
      <iframe
        title="South Kensington Map"
        src="https://www.google.com/maps?q=South+Kensington+London&output=embed"
        className="w-full h-[350px] sm:h-[420px] lg:h-[450px] border-0"
        loading="lazy"
      ></iframe>

    </div>


    {/* Nearby Amenities */}
    <div>

      <h3 className="text-lg font-semibold mb-6">
        Nearby Amenities
      </h3>


{/* ================= NEARBY AMENITIES ================= */}

<div className="flex flex-col gap-4">

  {/* Westminster Academy */}
  <div className="bg-[#f6f3ed] rounded-xl p-4 flex items-center gap-4 border border-[#e6e1d8]">

    <div className="w-12 h-12 rounded-full bg-[#efe7db] flex items-center justify-center">
      <GraduationCap className="text-[#c79b5d]" size={22} />
    </div>

    <div>
      <p className="font-medium text-sm">
        Westminster Academy
      </p>
      <p className="text-xs text-gray-500">
        0.5 miles
      </p>
    </div>

  </div>


  {/* Royal London Hospital */}
  <div className="bg-[#f6f3ed] rounded-xl p-4 flex items-center gap-4 border border-[#e6e1d8]">

    <div className="w-12 h-12 rounded-full bg-[#efe7db] flex items-center justify-center">
      <Building2 className="text-[#c79b5d]" size={22} />
    </div>

    <div>
      <p className="font-medium text-sm">
        Royal London Hospital
      </p>
      <p className="text-xs text-gray-500">
        1.2 miles
      </p>
    </div>

  </div>


  {/* South Kensington Station */}
  <div className="bg-[#f6f3ed] rounded-xl p-4 flex items-center gap-4 border border-[#e6e1d8]">

    <div className="w-12 h-12 rounded-full bg-[#efe7db] flex items-center justify-center">
      <Train className="text-[#c79b5d]" size={22} />
    </div>

    <div>
      <p className="font-medium text-sm">
        South Kensington Station
      </p>
      <p className="text-xs text-gray-500">
        0.3 miles
      </p>
    </div>

  </div>


  {/* The Ivy Chelsea */}
  <div className="bg-[#f6f3ed] rounded-xl p-4 flex items-center gap-4 border border-[#e6e1d8]">

    <div className="w-12 h-12 rounded-full bg-[#efe7db] flex items-center justify-center">
      <UtensilsCrossed className="text-[#c79b5d]" size={22} />
    </div>

    <div>
      <p className="font-medium text-sm">
        The Ivy Chelsea
      </p>
      <p className="text-xs text-gray-500">
        0.4 miles
      </p>
    </div>

  </div>

</div>

    </div>

  </div>

</section>

{/* ================= END PROPERTY LOCATION SECTION ================= */}   

{/* ================= AGENT CONTACT SECTION ================= */}

<section className="max-w-7xl mx-auto mt-20">

  {/* Card Container */}
  <div className="bg-[#f6f3ed] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-[#e6e1d8]">

    {/* Agent Photo */}
    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
      <img
        src={agentPhoto}
        alt="Agent"
        className="w-full h-full object-cover"
      />
    </div>


    {/* Agent Details */}
    <div className="flex flex-col flex-1 text-center md:text-left">

      {/* Name */}
      <h3 className="text-xl sm:text-2xl font-semibold">
        James Harrison
      </h3>

      {/* Position */}
      <p className="text-[#c79b5d] text-sm mb-3">
        Senior Property Consultant
      </p>


      {/* Contact Info Row */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">

        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-[#c79b5d]" />
          <span>+44 20 7946 0958</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-[#c79b5d]" />
          <span>james@prestige-estates.co.uk</span>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2">
          <Star size={16} className="text-[#c79b5d]" />
          <span>15 Years Experience</span>
        </div>

      </div>


      {/* Contact Button */}
      <button className="bg-[#c79b5d] text-white px-6 py-3 rounded-full w-fit hover:opacity-90 transition flex items-center gap-2 mx-auto md:mx-0">

        <Phone size={18} />

        Contact Agent

      </button>

    </div>

  </div>

</section>

{/* ================= END AGENT CONTACT SECTION ================= */}

{/* ================= SIMILAR PROPERTIES SECTION ================= */}

<section className="max-w-7xl mx-auto mt-20">

  {/* Section Title */}
  <div className="text-center mb-12">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
      Similar Properties
    </h2>

    <p className="text-gray-500 mt-2">
      You might also be interested in
    </p>
  </div>


  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


    {/* ===== CARD 1 ===== */}
    <div className="bg-[#f6f3ed] rounded-2xl overflow-hidden border border-[#e6e1d8] hover:shadow-lg transition">

      {/* Image */}
      <div className="relative">
        <img
          src={similar1}
          alt="Sky Penthouse"
          className="w-full h-[220px] object-cover"
        />

        {/* Sale Badge */}
        <span className="absolute top-3 left-3 bg-[#c79b5d] text-white text-xs px-3 py-1 rounded-full">
          FOR SALE
        </span>
      </div>


      {/* Content */}
      <div className="p-5">

        {/* Price */}
        <p className="text-[#c79b5d] font-semibold mb-1">
          £2,850,000
        </p>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2">
          Sky Penthouse
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <MapPin size={16} className="text-gray-400" />
          Canary Wharf, London
        </div>

        {/* Beds */}
        <div className="inline-flex items-center gap-2 bg-[#efe7db] px-3 py-1 rounded-full text-sm text-gray-700 mb-5">
          <Bed size={16} className="text-[#c79b5d]" />
          4 Beds
        </div>

        {/* Button */}
        <button className="w-full border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-100 transition">
          Quick View
        </button>

      </div>

    </div>



    {/* ===== CARD 2 ===== */}
    <div className="bg-[#f6f3ed] rounded-2xl overflow-hidden border border-[#e6e1d8] hover:shadow-lg transition">

      <div className="relative">
        <img
          src={similar2}
          alt="Mayfair Residence"
          className="w-full h-[220px] object-cover"
        />

        <span className="absolute top-3 left-3 bg-[#c79b5d] text-white text-xs px-3 py-1 rounded-full">
          FOR SALE
        </span>
      </div>

      <div className="p-5">

        <p className="text-[#c79b5d] font-semibold mb-1">
          £1,750,000
        </p>

        <h3 className="font-semibold text-lg mb-2">
          The Mayfair Residence
        </h3>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <MapPin size={16} className="text-gray-400" />
          Mayfair, London
        </div>

        <div className="inline-flex items-center gap-2 bg-[#efe7db] px-3 py-1 rounded-full text-sm text-gray-700 mb-5">
          <Bed size={16} className="text-[#c79b5d]" />
          3 Beds
        </div>

        <button className="w-full border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-100 transition">
          Quick View
        </button>

      </div>

    </div>



    {/* ===== CARD 3 ===== */}
    <div className="bg-[#f6f3ed] rounded-2xl overflow-hidden border border-[#e6e1d8] hover:shadow-lg transition">

      <div className="relative">
        <img
          src={similar3}
          alt="Cotswolds Manor"
          className="w-full h-[220px] object-cover"
        />

        <span className="absolute top-3 left-3 bg-[#c79b5d] text-white text-xs px-3 py-1 rounded-full">
          FOR SALE
        </span>
      </div>

      <div className="p-5">

        <p className="text-[#c79b5d] font-semibold mb-1">
          £3,200,000
        </p>

        <h3 className="font-semibold text-lg mb-2">
          Cotswolds Manor
        </h3>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
          <MapPin size={16} className="text-gray-400" />
          Gloucestershire
        </div>

        <div className="inline-flex items-center gap-2 bg-[#efe7db] px-3 py-1 rounded-full text-sm text-gray-700 mb-5">
          <Bed size={16} className="text-[#c79b5d]" />
          6 Beds
        </div>

        <button className="w-full border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-100 transition">
          Quick View
        </button>

      </div>

    </div>


  </div>

</section>

{/* ================= END SIMILAR PROPERTIES SECTION ================= */}
{/* ================= TRUSTED CLIENTS SECTION ================= */}

<section className="max-w-7xl mx-auto mt-20">

  {/* Gold Background Container */}
  <div className="bg-gradient-to-r from-[#c79b5d] to-[#d6ad72] rounded-3xl px-6 sm:px-10 lg:px-16 py-12 text-white text-center">

    {/* Heading */}
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-10">
      Trusted by Discerning Clients Worldwide
    </h2>


    {/* Stats Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">

      {/* Stat 1 */}
      <div className="flex flex-col items-center gap-2">
        <CheckCircle size={22} className="text-white/90" />
        <h3 className="text-2xl sm:text-3xl font-semibold">100%</h3>
        <p className="text-sm text-white/90">
          Client Satisfaction
        </p>
      </div>


      {/* Stat 2 */}
      <div className="flex flex-col items-center gap-2">
        <CheckCircle size={22} className="text-white/90" />
        <h3 className="text-2xl sm:text-3xl font-semibold">500+</h3>
        <p className="text-sm text-white/90">
          Properties Sold
        </p>
      </div>


      {/* Stat 3 */}
      <div className="flex flex-col items-center gap-2">
        <CheckCircle size={22} className="text-white/90" />
        <h3 className="text-2xl sm:text-3xl font-semibold">150+</h3>
        <p className="text-sm text-white/90">
          Cities & Countries
        </p>
      </div>


      {/* Stat 4 */}
      <div className="flex flex-col items-center gap-2">
        <CheckCircle size={22} className="text-white/90" />
        <h3 className="text-2xl sm:text-3xl font-semibold">200+</h3>
        <p className="text-sm text-white/90">
          Positive Reviews
        </p>
      </div>

    </div>

  </div>

</section>

{/* ================= END TRUSTED CLIENTS SECTION ================= */}

</div>
  );
}