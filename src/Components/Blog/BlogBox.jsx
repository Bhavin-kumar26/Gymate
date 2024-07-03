import React from "react";
import { FaArrowRight } from "react-icons/fa";
const BlogBox = ({text}) => {
  return (
    <div className=" bg-white  h-[40vh] flex flex-col justify-evenly items-start shadow-2xl my-10 p-4">
      <h3 className=" text-[15px] font-medium border-[1px] rounded-full w-fit px-4 py-1 border-[#323232]">22.03.24</h3>
      <h2 className=" text-[20px] font-bold ">Yoga For Everyone in 2023</h2>
      <p className=" text-[14px]  text-[#6d6d6d] max-w-2xl">
       {text}
      </p>
      <button className=" uppercase bg-[#ff3232] p-2 text-white font-semibold flex justify-center items-center gap-3">Read more   <FaArrowRight /></button>
    </div>
  );
};

export default BlogBox;
