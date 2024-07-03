import React from "react";
import Hero from './Hero'
import AboutUs from "./AboutUs";
import Features from "./Features";
import ChooseUs from "./ChooseUs";
import Trainers from "./Trainers/Trainers";
import Testimonials from "./Testimonials/Testimonials";
import Gallery from "./Gallery";
import Bmi from "./Bmi";
import Pricing from "./Pricing/Pricing";
import Blog from "./Blog/Blog";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <Bmi />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
