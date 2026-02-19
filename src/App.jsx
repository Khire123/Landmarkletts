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
      </Routes>

      {/* Footer will appear on all routes */}
      <Footer />
    </BrowserRouter>
  );
}


export default App;
