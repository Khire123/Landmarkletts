import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Ad from "./pages/PropertyAd";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Whoweserve from "./pages/Whoweserve";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Tenant from "./pages/Tenant";
import Collection from "./pages/Collection";
import Marketing from "./pages/MArketing";
import Valuation from "./pages/Valuation";
import Advisory from "./pages/Advisory";
import DetailAbtUs from "./pages/DetailAboutUs";
import VillaDetails from "./pages/VillaPropertyDetail"; 
import ApartmentDetails from "./pages/ApartmentPropertyDetail";
import BeachDetails from "./pages/BeachPropertyDetail";

import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/Privacy&Policy";

/* ✅ ADD THIS IMPORT */
import WhatsAppWidget from "./components/WhatsAppWidget";

const HomeStack = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "services") {
      const section = document.getElementById("services");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <Home />
      <Ad />
      <AboutUs />
      <Services />
      <Whoweserve />
      <Feedback />
      <Contact />
    </>
  );
};

// Main Content
const MainContent = () => {
  const location = useLocation();
  const hideFooterPaths = ["/privacy-policy", "/terms"];
  
  let footerElement = <Footer />;
  if (hideFooterPaths.includes(location.pathname)) {
    footerElement = null;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeStack />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/valuation" element={<Valuation />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/about" element={<DetailAbtUs />} />
        <Route path="/villa-details" element={<VillaDetails />} />
        <Route path="/apartment-details" element={<ApartmentDetails />} />
        <Route path="/beach-details" element={<BeachDetails />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {footerElement}

      {/* ✅ ADDED - GLOBAL WHATSAPP */}
      <WhatsAppWidget />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;