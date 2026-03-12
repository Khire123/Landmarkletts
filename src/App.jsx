import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import VillaDetails from "./pages/VillaPropertyDetail"; 
import ApartmentDetails from "./pages/ApartmentPropertyDetail";
import BeachDetails from "./pages/BeachPropertyDetail";

import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/Privacy&Policy";
/* 
  This stack makes everything appear in ONE scroll page.
  Home → Ad → AboutUs
*/

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
function App() {
  return (
    <BrowserRouter>
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

      <Footer />
    </BrowserRouter>
  );
}

export default App;
