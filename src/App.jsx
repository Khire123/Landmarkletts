import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Ad from "./pages/PropertyAd";


const HomeStack = () => (
  <>
    <Home />
    <Ad />
  </>
);
//inside const Homestack if needed ->  <Waves />
const Layout = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeStack />} />
      </Routes>
    </>
  );
};

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
function App() {
  return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
  );
}

export default App;