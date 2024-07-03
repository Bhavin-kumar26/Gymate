import React from "react";
import PagesHeader from "../Components/PagesHeader";
import Button from "../Components/Button";
import titlebg from "../assets/pricing/titlebg.svg";
import wind from "../assets/who-we-are/wind.png";
import run from "../assets/who-we-are/girl-run.png";
import runletter from "../assets/who-we-are/girl-side-text.png";
import girlbg from "../assets/who-we-are/girl-redbg.svg";
import Footer from "../Components/Footer";
import img1 from "../assets/AboutPage/3.jpg";
import img2 from "../assets/AboutPage/4.jpg";
import target from "../assets/AboutPage/target.png";
import mountain from "../assets/AboutPage/mountain.png";
const AboutPg = () => {
  return (
    <section className=" abt-pg w-full flex flex-col  ">
      <PagesHeader text={"About Us"} />
      <div className=" w-full h-auto flex items-center justify-center  mt-10  text-center px-7 lg:text-left">
        <div className=" flex justify-center items-center  flex-col relative lg:items-start ">
          <p className=" z-10 font-bold text-white   mb-6">WHO WE ARE</p>
          <img className=" absolute -top-1 lg:-left-8  " src={titlebg} alt="" />
          <h3 className=" font-bold text-[30px] mb-4">
            We Will Give You Strength and Health
          </h3>
          <p className=" font-normal text-[15px] text-[#6d6d6d] max-w-xl mb-5">
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals
          </p>
          <Button
            text={"contact us"}
            bg={"bg-[#ff3232]"}
            color={"text-white"}
          />
        </div>
        <div className="hidden relative w-[30%]  pl-5 lg:flex justify-center items-center gap-16">
          <img className=" w-[15%] h-auto" src={runletter} alt="" />
          <img className=" w-[51%] h-auto" src={girlbg} alt="" />

          <img
            className=" absolute w-[90%] h-auto top-0 left-15"
            src={run}
            alt=""
          />
          <img
            className=" w-[15%] absolute  right-14 top-30 top-[10.5rem]"
            src={wind}
            alt=""
          />
        </div>
      </div>
      <div className=" flex flex-col w-full text-center md:mt-20">
        <div className=" flex flex-col md:flex-row justify-center items-center ">
          <div className=" h-[23rem] p-7 flex flex-col justify-center items-center ">
            <img className=" w-[5rem]" src={target} alt="" />
            <h4 className=" text-[22px] font-bold my-3 ">Our History</h4>
            <p className=" text-[12px] font-normal text-[#6d6d6d]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Asperiores molestias, eaque deserunt voluptate animi vel similique{" "}
              <br />
              porro qui commodi cumque!
            </p>
          </div>
          <img className=" rounded-md w-[24rem] h-[23rem]" src={img1} alt="" />
        </div>
        <div className=" flex flex-col-reverse md:flex-row justify-center items-center md:gap-10 ">
          <img className=" rounded-md w-[24rem] h-[23rem]" src={img2} alt="" />
          <div className=" h-[23rem] p-7 flex flex-col justify-center items-center ">
            <img className=" w-[5rem]" src={mountain} alt="" />
            <h4 className=" text-[22px] font-bold my-3 ">Our History</h4>
            <p className=" text-[12px] font-normal text-[#6d6d6d]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Asperiores molestias, eaque deserunt voluptate animi vel similique{" "}
              <br />
              porro qui commodi cumque!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutPg;
