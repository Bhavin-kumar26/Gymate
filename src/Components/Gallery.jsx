import React from "react";
import titlebg from "../assets/pricing/titlebg.svg";

const Gallery = () => {
  return (
    <section className=" hidden my-16 w-full h-auto text-center lg:flex flex-col justify-center items-center  relative">
      <div className=" flex flex-col justify-center items-center">
        <p className=" z-10 font-semibold mb-7 text-white">GYMAT GALLERY</p>
        <img className=" absolute -top-2" src={titlebg} alt="" />
        <h3 className=" font-light text-[15px] max-w-3xl">
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture. Attracts talents and showcases company's work atmosphere.
        </h3>
      </div>

      <div className="gallery-grid py-16 w-[80%] h-auto relative ">
        <div id="item-0"></div>
        <div id="item-1"></div>
        <div id="item-2"></div>
        <div id="item-3"></div>
        <div id="item-4"></div>
      </div>
    </section>
  );
};

export default Gallery;
