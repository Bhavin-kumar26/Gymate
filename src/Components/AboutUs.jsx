import React from "react";
import AboutUsCards from "./AboutUsCards";
import titlebg from "../assets/pricing/titlebg.svg";
import weight from "../assets/who-we-are/weightlifter.png";
import equipment from "../assets/who-we-are/equpments.png";
import gym from "../assets/who-we-are/gym.png";
import wind from "../assets/who-we-are/wind.png";
import run from "../assets/who-we-are/girl-run.png";
import runletter from "../assets/who-we-are/girl-side-text.png";
import girlbg from "../assets/who-we-are/girl-redbg.svg";
import Button from "./Button";
const AboutUs = () => {
  return (
    <section className="about-section flex justify-center pb-10">
      <div className=" container">
        <div className=" -mt-20  mb-20 flex flex-col lg:flex-row gap-10 px-10 xl:px-20">
          <AboutUsCards />
        </div>
        <div className=" flex justify-between items-center">
          <div className=" relative px-4 flex justify-center items-center flex-col text-center lg:items-start lg:text-start lg:w-[60%] ">
            <p className=" z-10 font-semibold text-white">WHO WE ARE</p>
            <img className=" absolute -top-1 lg:-left-4" src={titlebg} alt="img" />
            <h1 className=" mt-5 font-bold leading-[3rem] my-3 text-[35px]">
              Take Your Health And Body To Next Level
            </h1>
            <p className=" font-light mb-6 text-[16px]">
              Take your health and body to the next level with our comprehensive{" "}
              <br />
              program designed to help you reach your fitness goals.
            </p>
            <div className=" w-full sm:flex p-5 md:px-10 justify-between items-center ">
              <div className=" flex flex-col sm:border-r-2 border-[#cecccc] sm:pr-5 items-center mt-3">
                <img className=" w-[4.5rem] mb-6 h-auto" src={weight} alt="" />
                <h3 className=" uppercase leading-snug font-bold text-[20px]  text-center">
                  PROFESSIONAL <br /> TRAINERS
                </h3>
              </div>
              <div className=" sm:border-r-2 border-[#cecccc] sm:pr-10 flex flex-col items-center my-8">
                <img
                  className=" w-[4.5rem] mb-6 h-auto"
                  src={equipment}
                  alt=""
                />
                <h3 className=" uppercase leading-snug font-bold text-[20px] text-center">
                  {" "}
                  modern <br /> equipments
                </h3>
              </div>
              <div className=" flex flex-col items-center my-3">
                <img className=" w-[4.5rem] mb-6 h-auto" src={gym} alt="" />
                <h3 className=" uppercase leading-snug font-bold text-[20px] text-center">
                  {" "}
                  fancy gym <br />
                  machines
                </h3>
              </div>
            </div>

            <div className=" my-9">
              <Button
                color={"text-white"}
                bg={"bg-black"}
                text={"take a tour"}
                
                hover={"bg-[#ff3232]"}
              />
            </div>
          </div>
          <div className="hidden relative w-[40%]  pl-5 lg:flex justify-center items-center gap-16">
            <img className=" w-[17%] h-auto" src={runletter} alt="" />
            <img className=" w-[51%] h-auto" src={girlbg} alt="" />

            <img className=" absolute w-[90%] h-auto top-0 left-15" src={run} alt="" />
            <img className=" w-[15%] absolute  right-14 top-30 top-[10.5rem]" src={wind} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
