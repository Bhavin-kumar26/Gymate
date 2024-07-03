import React from "react";
import titlebg from "../assets/pricing/titlebg.svg";

const Features = () => {
  return (
    <section className=" w-full mt-16 flex justify-center">
      <div className="container ">
        <div className=" flex flex-col  relative items-center text-center">
          <p className=" font-bold z-10 text-white">OUR FEATURED CLASS</p>
          <img className=" w-[17rem] absolute -top-3" src={titlebg} alt="img" />
          <h2 className=" my-5 text-[2.4rem] font-bold">
            We Are Offering Best Flexible Classes
          </h2>
        </div>
        <div className=" px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
          <div className=" relative div1 rounded w-full h-[20rem] my-6 bg-blue-300 overflow-hidden">
            <div className="background bg-1 "></div>
            <div className=" sidediv absolute text-white w-[140px] h-[65px] rounded-r-full rotate-[30deg]  top-[5rem] -left-12 hover:bg-white cursor-pointer"></div>
            <div className=" absolute top-[12rem] flex flex-col items-start w-full p-4 h-full ">
              <p className="text-white text-[2rem] font-bold">Cycling</p>
              <p className="text-white text-[16px] bg-[#FF0336] mt-3 py-1 px-5">
                Wednesday: 9:00am-10:00am
              </p>
            </div>
          </div>
          <div className=" relative div2 rounded w-full h-[20rem] my-6 bg-blue-300 overflow-hidden">
            <div className="background bg-2 "></div>
            <div className=" sidediv divimg absolute text-white w-[140px] h-[65px] rounded-r-full rotate-[30deg]  top-[5rem] -left-12 hover:bg-white cursor-pointer"></div>
            <div className=" absolute top-[12rem] flex flex-col items-start w-full p-4 h-full ">
              <p className="text-white text-[2rem] font-bold">Karate</p>
              <p className="text-white text-[16px] bg-[#FF0336] mt-3 py-1 px-5">
                Friday: 10:00am-11:00am
              </p>
            </div>
          </div>
          <div className=" relative div3 rounded w-full h-[20rem] my-6 bg-blue-300 overflow-hidden">
            <div className="background bg-3 "></div>
            <div className=" sidediv divimg1 absolute text-white w-[140px] h-[65px] rounded-r-full rotate-[30deg]  top-[5rem] -left-12 hover:bg-white cursor-pointer"></div>
            <div className=" absolute top-[12rem] flex flex-col items-start w-full p-4 h-full ">
              <p className="text-white text-[2rem] font-bold">MMA</p>
              <p className="text-white text-[16px] bg-[#FF0336] mt-3 py-1 px-5">
                Saturday: 9:00am-10:00am
              </p>
            </div>
          </div>
          <div className=" relative div4 rounded w-full h-[20rem] my-6 bg-blue-300 overflow-hidden">
            <div className="background bg-4 "></div>
            <div className=" sidediv divimg2 absolute text-white w-[140px] h-[65px] rounded-r-full rotate-[30deg]  top-[5rem] -left-12 hover:bg-white cursor-pointer"></div>
            <div className=" absolute top-[12rem] flex flex-col items-start w-full p-4 h-full ">
              <p className="text-white text-[2rem] font-bold">Power Lift</p>
              <p className="text-white text-[16px] bg-[#FF0336] mt-3 py-1 px-5">
                Friday: 1:00pm-2:00pm
              </p>
            </div>
          </div>
          <div className=" relative div5 rounded w-full h-[20rem] my-6 bg-blue-300 overflow-hidden">
            <div className="background bg-5 "></div>
            <div className=" sidediv  divimg3 absolute text-white w-[140px] h-[65px] rounded-r-full rotate-[30deg]  top-[5rem] -left-12 hover:bg-white cursor-pointer"></div>
            <div className=" absolute top-[12rem] flex flex-col items-start w-full p-4 h-full ">
              <p className="text-white text-[2rem] font-bold">Yoga</p>
              <p className="text-white text-[16px] bg-[#FF0336] mt-3 py-1 px-5">
                Sunday: 6:00pm-7:00pm
              </p>
            </div>
          </div>
          <div className=" relative div6 rounded w-full h-[20rem] my-6 bg-blue-300 overflow-hidden">
            <div className="background bg-6 "></div>
            <div className=" sidediv divimg4 absolute text-white w-[140px] h-[65px] rounded-r-full rotate-[30deg]  top-[5rem] -left-12 hover:bg-white cursor-pointer"></div>
            <div className=" absolute top-[12rem] flex flex-col items-start w-full p-4 h-full ">
              <p className="text-white text-[2rem] font-bold">Cardio</p>
              <p className="text-white text-[16px] bg-[#FF0336] mt-3 py-1 px-5">
                Monday: 4:00pm-5:00pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
