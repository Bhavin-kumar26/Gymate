import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutPg from "./Pages/AboutPg";
import SchedulePg from "./Pages/SchedulePg";
import GalleryPg from "./Pages/GalleryPg";
import BlogPg from "./Pages/BlogPg";
import ContactPg from "./Pages/ContactPg";
import PricingPg from "./Pages/PricingPg";
import Classes from "./Pages/Classes";



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutpg" element={<AboutPg />} />
        <Route path="schedulepg" element={<SchedulePg />} />
        <Route path="gallerypg" element={<GalleryPg />} />
        <Route path="blogpg" element={<BlogPg />} />
        <Route path="contactpg" element={<ContactPg />} />
        <Route path="pricingpg" element={<PricingPg />} />
        <Route path="classpg" element={<Classes />} />
      </Routes>

    </div>
  );
};

export default App;
