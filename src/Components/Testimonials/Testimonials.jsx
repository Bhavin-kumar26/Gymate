import React from "react";
import TestimonialsBox from "./TestimonialsBox";
// import "react-slideshow-image/dist";
// import { Fade } from "react-slideshow-image";
import titlebg from "../../assets/pricing/titlebg.svg";
import logo1 from "../../assets/testimonials/logo1.png";
import logo2 from "../../assets/testimonials/logo2.png";
import logo3 from "../../assets/testimonials/logo3.png";
import logo4 from "../../assets/testimonials/logo4.png";
import logo5 from "../../assets/testimonials/logo5.png";
import testi1 from "../../assets/testimonials/testimonial-new.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className=" mt-10 flex w-full flex-col items-center relative">
      <p className=" uppercase text-[20px] z-10 text-white font-semibold mb-[7rem]">
        {" "}
        testimonials
      </p>
      <img className=" absolute -top-1 w-[15rem]" src={titlebg} alt="" />

      <div className=" relative bg-black h-[370px]  w-[70%]">
        <div className=" flex w-full h-auto  lg:justify-end  ">
          <img
            className=" h-[93vh] object-contain hidden lg:block  z-30 lg:-bottom-[11.6rem] left-[0rem] rounded-tr-[100%] absolute  lg:w-[20rem] xl:-top-[11.7rem] "
            src={testi1}
            alt=""
          />

          <div className=" lg:w-[60%]  ">
            <TestimonialsBox
              text={`“I've been a member of Gymate for the past 6 months and it has been
            an amazing experience The trainers are knowledgeable and
            supportive, the equipment is top-notch, and the community of members
            is friendly and encouraging” `}
              name={"john"}
              job={"devloper"}
            />
          </div>
        </div>
        <div className=" absolute z-40 bottom-4 right-10 flex gap-4">
          <button
            title="left"
            style={{ transition: "all 0.2s" }}
            className="py-2 px-4 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
          >
            {/* <i className="fa-solid fa-arrow-left"></i> */}
            <FaArrowLeft />
          </button>
          <button
            title="right"
            style={{ transition: "all 0.2s" }}
            className="py-2 px-4 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
          >
            {/* <i className="fa-solid fa-arrow-right"></i> */}
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap gap-10 justify-center mt-10 items-center px-10">
        <img
          style={{ transition: "all 0.7s" }}
          className=" hover:invert scale-[0.9] "
          src={logo1}
          alt=""
        />
        <img
          style={{ transition: "all 0.7s" }}
          className=" hover:invert scale-[0.9] "
          src={logo2}
          alt=""
        />
        <img
          style={{ transition: "all 0.7s" }}
          className=" hover:invert scale-[0.9] "
          src={logo3}
          alt=""
        />
        <img
          style={{ transition: "all 0.7s" }}
          className=" hover:invert scale-[0.9] "
          src={logo4}
          alt=""
        />
        <img
          style={{ transition: "all 0.7s" }}
          className=" hover:invert scale-[0.9] "
          src={logo5}
          alt=""
        />
      </div>
    </div>
  );
};

export default Testimonials;
