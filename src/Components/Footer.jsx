import React from "react";
import logo from "../assets/logo/logo-footer.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" w-full flex flex-col sm:flex-row  sm:justify-evenly items-center my-10">
      <div className=" w-1/3 flex flex-col gap-3">
        <img className=" w-[10rem]" src={logo} alt="" />
        <p className=" text-[14px] my-3 font-medium text-[#6d6d6d]">
          Take your health and body to the next level with our comprehensive{" "}
          <br />
          program designed to help you reach your fitness goals.
        </p>
        <div className="icons flex gap-4 text-[1.6rem] mb-3 ">
          <FaLinkedinIn />
          <FaGithub />
          <FaInstagram />
          <FaXTwitter />
        </div>
        <p className=" text-[16px] max-w-3xl font-medium text-[#6d6d6d]">
          Privacy Policy | © 2024 Gymate <br />
          Design by RadiusTheme
        </p>
      </div>
      <div className=" my-5 flex flex-col gap-3 relative">
        <h4 className=" font-bold text-[1.5rem]">Our Classes</h4>
        <span className=" w-[5rem] h-[5px] bg-[#ff3232] top-8 rounded-lg absolute"></span>
        <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
          Fitness Classes
        </p>
        <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
          Aerobics Classes
        </p>
        <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
          Power Yoga
        </p>
        <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
          Learn Machines
        </p>
        <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
          Full-body Strength
        </p>
      </div>
      <div className="flex flex-col gap-3 relative">
        <h4 className="font-bold text-[1.5rem]">Working Hours</h4>
        <span className=" w-[5rem] h-[5px] bg-[#ff3232] top-8 rounded-lg absolute"></span>
        <p className="text-[16px]  text-[#646464] font-bold">
          Monday - Friday:
        </p>
        <p className="text-[16px] text-[#646464] font-medium">
          7:00am - 21:00pm
        </p>
        <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
        <p className="text-[16px] text-[#646464] font-medium">
          7:00am - 19:00pm
        </p>
        <p className="text-[16px] text-[#646464] font-bold ">Sunday - Closed</p>
      </div>
    </footer>
  );
};

export default Footer;
