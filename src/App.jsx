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
/* 
  This stack makes everything appear in ONE scroll page.
  Home → Ad → AboutUs
*/
const HomeStack = () => {
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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
