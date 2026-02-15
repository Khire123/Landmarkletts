import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Ad from "./pages/PropertyAd";
import AboutUs from "./pages/AboutUs";

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
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Landing Page (Scroll Page) */}
        <Route path="/" element={<HomeStack />} />

        {/* Optional: If later you want standalone About page,
            you can uncomment below */}
        {/* <Route path="/about" element={<AboutUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
