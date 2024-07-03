import React, { useState } from "react";

import Button from "../Button";
const PricingBox = ({img,price,lvl}) => {
  return (
    
    <div>
      <div className="  shadow-2xl rounded-md my-10  bg-white relative pb-12 ">
        <img style={{transition:"all 0.6s"}} className=" w-full rounded-md grayscale hover:grayscale-0" src={img} alt="" />
        <div className=" bg-white w-[16rem] text-center p-3 absolute top-[12.6rem] rounded right-[4rem] font-bold text-[22px]">{lvl}</div>
        <div className=" w-full flex flex-col items-center mt-5 ">
          <h1 className=" text-[#6d6d6d]   ">
            <span className="text-[33px] absolute left-[4rem]">₹</span>
            <span className=" font-bold text-black  text-[3rem] mx-3">{price}</span>
            <span className=" text-[22px]">P/M</span>
          </h1>
          <div className="mt-4  text-[16px] font-medium text-center gap-8 text-[#646464] flex flex-col items-center">
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
            <Button text={"purchase now"} bg={"bg-[#ff3232]"}color={"text-white"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
