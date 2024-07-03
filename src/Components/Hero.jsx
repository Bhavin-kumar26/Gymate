import React from "react";
import Button from "./Button";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import titlebg from "../assets/pricing/titlebg.svg";

const Hero = () => {
  return (
    <section className="hero-section w-full h-[110vh]  text-white flex justify-between items-center">
      <div className="container-tab flex justify-end items-center">
         <div className=" absolute left-[5rem] sm:right-0 text-center items-center text-white lg:left-[14rem] xl:left-[22rem] p-4 flex flex-col gap-5">
          <p className=" uppercase relative z-10 text-black w-52 font-bold">
            FIND YOUR ENERGY
          </p>
          <img
            src={titlebg}
            className="titlr absolute top-1 lg:-right-[22] w-[250px]"
            alt=""
          />
          <h1 className=" font-extrabold text-[33px] sm:text-[45px] lg:text-[50px] tracking-wider">
            MAKE YOUR BODY <br />
            <span className=" font-medium">FIT & PERFECT</span>
          </h1>
          <Button text={"our classes"} bg={"bg-white"} color={"text-black"}  />
        </div> 
      </div>
      <div className="hidden absolute md:-right-[4rem] md:flex flex-row-reverse items-center gap-5 -rotate-90">
        <h3 className=" uppercase font-bold text-[18px]">share</h3>
        <span className=" block w-[50px] h-[3px] rounded-lg bg-[#FF0336]"></span>
        <div className=" flex gap-4 text-[25px] ">
          <FaLinkedinIn  style={{transition:"0.5s"}}  className=" hover:text-[#ff3232]" />
          <FaGithub style={{transition:"0.5s"}}  className=" hover:text-[#ff3232]" />
          <FaInstagram  style={{transition:"0.5s"}} className=" hover:text-[#ff3232]"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
