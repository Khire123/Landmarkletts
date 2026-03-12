import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const navRef = useRef(null);
  const navigate = useNavigate();

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "services", title: "Website Services" },
    { id: "content", title: "Content Accuracy" },
    { id: "ai", title: "AI Images" },
    { id: "listings", title: "Property Listings" },
    { id: "liability", title: "Liability" },
    { id: "privacy", title: "Privacy" },
    { id: "changes", title: "Changes" },
  ];

  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fixed Intersection Observer logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -85% 0px", // Precise trigger zone
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll the mobile pill nav centering logic
  useEffect(() => {
    const activeItem = navRef.current?.querySelector(`[data-id="${activeSection}"]`);
    if (activeItem && navRef.current) {
      const nav = navRef.current;
      const scrollLeft = activeItem.offsetLeft - nav.offsetWidth / 2 + activeItem.offsetWidth / 2;
      nav.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeSection]);

  // Scroll Function - No URL Hash
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="w-full min-h-screen bg-[#FAF9F6] text-[#1a1a1a] selection:bg-[#b28a4a]/20">
      
      {/* LUXE HERO SECTION */}
      <div className="relative w-full h-[50vh] flex flex-col justify-center items-center overflow-hidden bg-[#1a1a1a]">
        
        {/* PREMIUM BACK BUTTON */}
        <button 
          onClick={handleBack}
          className="absolute top-8 left-6 md:top-12 md:left-12 z-20 group flex items-center gap-3 text-white/60 hover:text-[#b28a4a] transition-all duration-500"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#b28a4a] group-hover:scale-110 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            Back
          </span>
        </button>

        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#b28a4a]/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 text-center px-6">
          <span className="text-[#b28a4a] uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Legal Documentation
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-light mb-6">
            Terms & <span className="italic">Conditions</span>
          </h1>
          <div className="w-20 h-[1px] bg-[#b28a4a] mx-auto opacity-60" />
        </div>
      </div>

      {/* MOBILE FLOATING NAV */}
      <div className="lg:hidden sticky top-4 z-[50] px-4 py-2 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-full pointer-events-auto overflow-hidden">
          <div 
            ref={navRef}
            className="flex items-center gap-6 overflow-x-auto px-6 py-4 no-scrollbar scroll-smooth"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                data-id={s.id}
                className={`whitespace-nowrap text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === s.id ? "text-[#b28a4a]" : "text-gray-400"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="px-8 pb-3">
             <div className="h-[2px] w-full bg-gray-100 relative rounded-full">
                <div 
                  className="absolute h-full bg-[#b28a4a] transition-all duration-500 rounded-full"
                  style={{ 
                    width: `${100 / sections.length}%`, 
                    left: `${(sections.findIndex(s => s.id === activeSection) * 100) / sections.length}%` 
                  }}
                />
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          
          {/* DESKTOP NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-8">
                On this page
              </h3>
              <nav className="flex flex-col space-y-4">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`group flex items-center gap-4 text-sm transition-all text-left ${
                      activeSection === s.id ? "text-[#b28a4a] font-medium" : "text-gray-500 hover:text-black"
                    }`}
                  >
                    <span className={`h-[1px] transition-all duration-300 ${
                      activeSection === s.id ? "w-8 bg-[#b28a4a]" : "w-0 bg-gray-300 group-hover:w-4"
                    }`} />
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <article className="space-y-24">
            {sections.map((s, index) => (
              <div key={s.id} id={s.id} className="scroll-mt-36 group">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[#b28a4a] font-serif text-2xl italic">0{index + 1}</span>
                  <h2 className="text-3xl font-serif font-medium">{s.title}</h2>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg border-l border-gray-100 pl-8 group-hover:border-[#b28a4a] transition-colors duration-500">
                  {s.id === "intro" && (
                    <>
                      <p>Welcome to <strong>Landmark Letts</strong>. These Terms & Conditions govern your use of our website and services related to property letting, management, sales, and real estate consultancy.</p>
                      <p>By accessing this website, you agree to comply with these Terms. If you disagree with any part of the terms, you should discontinue using this website.</p>
                    </>
                  )}
                  {s.id === "services" && <p>This website provides information regarding rental properties, property investment opportunities, real estate consultancy, and property management services.</p>}
                  {s.id === "content" && <p>While we strive to ensure that all information presented on the website is accurate and updated, we do not guarantee completeness or reliability. Property details and pricing may change without prior notice.</p>}
                  {s.id === "ai" && <p className="italic">Some images displayed on this website may be AI-generated or digitally enhanced for visual presentation purposes. These images may not represent the exact appearance of properties.</p>}
                  {s.id === "listings" && <p>Property listings displayed on this website are subject to availability and may be updated, modified, or removed without prior notice.</p>}
                  {s.id === "liability" && <p>Landmark Letts shall not be held liable for any direct or indirect damages resulting from the use of this website or reliance on any information presented.</p>}
                  {s.id === "privacy" && <p>Any personal information submitted through this website will be handled in accordance with our Privacy Policy.</p>}
                  {s.id === "changes" && <p>We reserve the right to update these Terms at any time. Continued use of the website indicates acceptance of updated terms.</p>}
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>

      <footer className="w-full py-12 border-t border-gray-200 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Last Updated: March 2026 • Landmark Letts
        </p>
      </footer>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default TermsConditions;