import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import heroImage from "../assets/hero-property.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Award, Users, ShieldCheck, Star } from "lucide-react";
// import { Eye, Target } from "lucide-react";
// import { MessageSquare, Eye, MapPinned, UserCheck } from "lucide-react";
import {
  Award,
  Users,
  ShieldCheck,
  Star,
  Eye,
  Heart,
  Shield,
  Compass,
  Target,Phone, Home, MessageCircle,
  MessageSquare,
  MapPinned,
  UserCheck
} from "lucide-react";



const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};
const achievements = [
  {
    icon: Award,
    year: "2021",
    title: "Company Founded",
    desc: "Established as a Private Limited Company with a vision to transform property services in the UK.",
  },
  {
    icon: Users,
    year: "2022",
    title: "Growing Landlord Network",
    desc: "Successfully built a strong network of landlords and tenants through trust and consistent service quality.",
  },
  {
    icon: ShieldCheck,
    year: "2023",
    title: "High Tenant Retention",
    desc: "Achieved an exceptional tenant retention rate, reflecting our commitment to tenant satisfaction.",
  },
  {
    icon: Star,
    year: "2024–Present",
    title: "Trusted Local Provider",
    desc: "Recognised as a trusted local property service provider with multiple successful residential lettings.",
  },
];
const reasons = [
  {
    icon: MessageSquare,
    title: "Professional Property Advice",
    desc: "Expert guidance grounded in real market insight, helping you make confident property decisions.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "No hidden fees, no surprises. We keep you informed at every step of the property journey.",
  },
  {
    icon: MapPinned,
    title: "Strong Local Market Knowledge",
    desc: "Deep understanding of UK property markets ensures accurate valuations and strategic positioning.",
  },
  {
    icon: UserCheck,
    title: "Reliable Tenant Management",
    desc: "Rigorous tenant screening, proactive communication, and ongoing support for lasting tenancies.",
  },
];
const pillars = [
  {
    icon: Heart,
    title: "Customer-First Approach",
    desc: "Every decision we make starts with one question: how does this benefit our clients? Your satisfaction is our measure of success.",
  },
  {
    icon: Shield,
    title: "Reliable Property Services",
    desc: "Consistency you can count on. From the first viewing to the final handover, we deliver dependable service at every touchpoint.",
  },
  {
    icon: Compass,
    title: "Local Market Expertise",
    desc: "Our in-depth knowledge of UK property markets means you always receive accurate, well-informed counsel.",
  },
];
export default function AboutUs() {
    const navigate = useNavigate();

const goToServices = () => {
  navigate("/", { state: { scrollTo: "services" } });
};
    useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <>
{/* HERO SECTION */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroImage})` }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="inline-block mb-6">
        <span className="text-[#b28a4a] text-sm tracking-[0.3em] uppercase border border-[#b28a4a]/40 px-6 py-2 rounded-full">
          Established 2021
        </span>
      </div>
    </motion.div>


    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-serif"
    >
      Trusted Property
      <br />
      <span className="text-[#b28a4a] italic">Excellence</span> in the UK
    </motion.h1>


    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
    >
      With over five years of industry experience, we deliver reliable,
      transparent, and professional real estate services — from lettings and
      management to sales and consultancy.
    </motion.p>


    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >

      {/* Gold Button */}
<button
  onClick={goToServices}
  className="px-8 py-4 text-black font-semibold rounded-sm text-sm uppercase tracking-wide transition"
  style={{
    background: "linear-gradient(135deg,#a57a2b,#b28a4a,#d6b66e)"
  }}
>
  Explore Our Services
</button>

      {/* Outline Button */}
      <a
        href="#story"
        className="border border-white/30 text-white px-8 py-4 rounded-sm text-sm uppercase tracking-wide hover:bg-white/10 transition"
      >
        Our Story
      </a>

    </motion.div>

  </div>


  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2"
  >

    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-1.5 h-1.5 bg-[#b28a4a] rounded-full mt-2"
      />

    </div>

  </motion.div>

</section>

{/* STORY SECTION */}
<section id="story" className="py-24 md:py-32 bg-[#faf7f2]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-[#b28a4a] text-sm tracking-[0.3em] uppercase">
          Our Story
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-8 leading-tight font-serif">
          A Journey Built on
          <br />
          <span className="text-[#b28a4a] italic">Trust & Integrity</span>
        </h2>

        <div className="space-y-5 text-gray-600 leading-relaxed text-base">

          <p>
            Founded in 2021, our company was born from a simple yet powerful
            conviction: every landlord deserves a partner who treats their
            property as their own, and every tenant deserves a home they can
            truly rely on.
          </p>

          <p>
            What began as a small, dedicated letting agency has grown into a
            comprehensive property services company covering lettings,
            management, sales, and consultancy across the United Kingdom.
          </p>

          <p>
            Our team brings over five years of hands-on experience in the
            real estate industry. We've built lasting relationships with
            landlords and tenants alike — relationships rooted in honest
            communication, transparent processes, and a genuine commitment
            to excellence.
          </p>

        </div>
      </motion.div>


      {/* RIGHT CARD */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >

        <div className="bg-[#efe7d8] rounded-sm p-12 md:p-16 shadow-lg">

          <Building2
            className="text-[#b28a4a] mb-6"
            size={48}
            strokeWidth={1}
          />

          <blockquote className="text-2xl md:text-3xl text-gray-900 italic leading-relaxed font-serif">
            "We don't just manage properties — we build trust, one home at a
            time."
          </blockquote>

          <div className="mt-8 w-16 h-[2px] bg-[#b28a4a]" />

          <p className="mt-4 text-sm text-gray-500 tracking-wide uppercase">
            Our Founding Principle
          </p>

        </div>

        {/* GOLD BORDER EFFECT */}
        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#b28a4a]/20 rounded-sm -z-10" />

      </motion.div>

    </div>
  </div>
</section>
{/* STATS SECTION */}
<section className="py-20 bg-gradient-to-r from-[#0f3d33] via-[#1c5c4d] to-[#2f7a68]">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

      {[
        { value: 5, suffix: "+", label: "Years Industry Experience" },
        { value: 100, suffix: "+", label: "Properties Successfully Let" },
        { value: 200, suffix: "+", label: "Landlords & Tenants Network" },
        { value: 95, suffix: "%", label: "Tenant Retention Rate" },
      ].map((stat, i) => (

        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="text-center"
        >

          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#b28a4a] mb-3 font-serif">

            <AnimatedCounter
            target={stat.value}
            suffix={stat.suffix}
            />

          </div>

          <p className="text-sm md:text-base text-white/70 tracking-wide">
            {stat.label}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* ACHIEVEMENTS SECTION */}
<section className="py-24 md:py-32 bg-[#faf7f2]">

  <div className="max-w-6xl mx-auto px-6">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      <span className="text-[#b28a4a] text-sm tracking-[0.3em] uppercase">
        Milestones
      </span>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 font-serif">
        Our Journey So Far
      </h2>

    </motion.div>


    <div className="relative">

      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300" />

      <div className="space-y-12 md:space-y-0">

        {achievements.map((a, i) => (

          <motion.div
            key={a.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`md:flex items-center md:mb-16 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >

            {/* TEXT SIDE */}
            <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>

              <span className="text-[#b28a4a] text-lg font-semibold">
                {a.year}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                {a.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {a.desc}
              </p>

            </div>


            {/* ICON */}
            <div className="hidden md:flex items-center justify-center relative z-10">

              <div className="w-12 h-12 rounded-full bg-[#b28a4a]/10 border-2 border-[#b28a4a] flex items-center justify-center">

                <a.icon
                  className="text-[#b28a4a]"
                  size={20}
                  strokeWidth={1.5}
                />

              </div>

            </div>


            <div className="md:w-1/2" />

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>
{/* VISION & MISSION SECTION */}
<section className="py-24 md:py-32 bg-[#faf7f2]">

  <div className="max-w-6xl mx-auto px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      <span className="text-[#b28a4a] text-sm tracking-[0.3em] uppercase">
        What Drives Us
      </span>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 font-serif">
        Vision & Mission
      </h2>

    </motion.div>


    <div className="grid md:grid-cols-2 gap-8">

      {/* VISION CARD */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 md:p-12 rounded-sm border border-gray-200 relative overflow-hidden shadow-sm"
      >

        <div
          className="absolute top-0 left-0 w-full h-[4px]"
          style={{
            background: "linear-gradient(135deg,#a57a2b,#b28a4a,#d6b66e)"
          }}
        />

        <Eye className="text-[#b28a4a] mb-6" size={40} strokeWidth={1} />

        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
          Our Vision
        </h3>

        <p className="text-gray-600 leading-relaxed">
          To become a trusted and leading property letting and sales company
          in the UK by delivering reliable, transparent, and professional
          real estate services that set the standard for the industry.
        </p>

      </motion.div>


      {/* MISSION CARD */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="bg-white p-10 md:p-12 rounded-sm border border-gray-200 relative overflow-hidden shadow-sm"
      >

        <div
          className="absolute top-0 left-0 w-full h-[4px]"
          style={{
            background: "linear-gradient(135deg,#0f3d33,#1c5c4d,#2f7a68)"
          }}
        />

        <Target className="text-[#b28a4a] mb-6" size={40} strokeWidth={1} />

        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
          Our Mission
        </h3>

        <p className="text-gray-600 leading-relaxed">
          To provide landlords, tenants, and property buyers with honest
          guidance, efficient property solutions, and excellent customer
          service — making every property journey seamless and rewarding.
        </p>

      </motion.div>

    </div>

  </div>

</section>
{/* WHY CHOOSE US SECTION */}
<section className="py-24 md:py-32 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      <span className="text-[#b28a4a] text-sm tracking-[0.3em] uppercase">
        The Difference
      </span>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 font-serif">
        Why Choose Us
      </h2>

    </motion.div>


    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">

      {reasons.map((r, i) => (

        <motion.div
          key={r.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="flex gap-5"
        >

          {/* ICON */}
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#b28a4a]/10 flex items-center justify-center">

            <r.icon
              className="text-[#b28a4a]"
              size={24}
              strokeWidth={1.5}
            />

          </div>


          {/* TEXT */}
          <div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">
              {r.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {r.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* TRUST SECTION */}
<section className="py-24 md:py-32 bg-gradient-to-r from-[#0f3d33] via-[#1c5c4d] to-[#2f7a68]">

  <div className="max-w-6xl mx-auto px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      <span className="text-[#b28a4a] text-sm tracking-[0.3em] uppercase">
        Our Promise
      </span>

      <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 font-serif">
        Trust & Credibility
      </h2>

      <p className="text-white/70 mt-4 max-w-2xl mx-auto">
        Built on years of honest dealings, our reputation speaks for itself.
      </p>

    </motion.div>


    <div className="grid md:grid-cols-3 gap-8">

      {pillars.map((p, i) => (

        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="text-center"
        >

          {/* ICON */}
          <div className="w-16 h-16 rounded-full border border-[#b28a4a]/40 flex items-center justify-center mx-auto mb-6">

            <p.icon
              className="text-[#b28a4a]"
              size={28}
              strokeWidth={1.5}
            />

          </div>


          {/* TITLE */}
          <h3 className="text-xl font-semibold text-white mb-3 font-serif">
            {p.title}
          </h3>


          {/* DESCRIPTION */}
          <p className="text-white/70 text-sm leading-relaxed">
            {p.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* CTA SECTION */}
<section className="py-24 md:py-32 bg-[#faf7f2]">

  <div className="max-w-4xl mx-auto px-6 text-center">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >

      <span className="text-[#b28a4a] text-sm tracking-[0.3em] uppercase">
        Get Started
      </span>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 font-serif">
        Ready to Find Your
        <br />
        <span className="text-[#b28a4a] italic">Perfect Property?</span>
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Whether you're a landlord seeking reliable management, a tenant
        looking for your next home, or an investor exploring opportunities —
        we're here to help.
      </p>

    </motion.div>


    {/* CTA CARDS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="grid sm:grid-cols-3 gap-6"
    >

      {/* CONTACT */}
      <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#b28a4a]/40 transition-colors shadow-sm cursor-pointer">

        <Phone
          className="text-[#b28a4a] mx-auto mb-4"
          size={28}
          strokeWidth={1.5}
        />

        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">
          Contact Us
        </h3>

        <p className="text-gray-600 text-sm">
          Reach out for enquiries and expert advice.
        </p>

      </div>


      {/* VIEW PROPERTIES */}
      <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#b28a4a]/40 transition-colors shadow-sm cursor-pointer">

        <Home
          className="text-[#b28a4a] mx-auto mb-4"
          size={28}
          strokeWidth={1.5}
        />

        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">
          View Properties
        </h3>

        <p className="text-gray-600 text-sm">
          Browse our curated selection of available properties.
        </p>

      </div>


      {/* CONSULTATION */}
      <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#b28a4a]/40 transition-colors shadow-sm cursor-pointer">

        <MessageCircle
          className="text-[#b28a4a] mx-auto mb-4"
          size={28}
          strokeWidth={1.5}
        />

        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-serif">
          Free Consultation
        </h3>

        <p className="text-gray-600 text-sm">
          Get personalised property guidance at no cost.
        </p>

      </div>

    </motion.div>

  </div>

</section>
    </>
  );
}