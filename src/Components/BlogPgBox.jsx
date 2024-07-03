import React from "react";
import { FaLayerGroup } from "react-icons/fa6";
import Button from "./Button";

const BlogPgBox = ({img,title}) => {
  return (
    <div className="  w-full">
      <img className=" w-[100%]" src={img} alt="" />
      <i className=" flex items-center gap-2 text-[14px] my-3 text-[#ff3232]">
        <FaLayerGroup />
       <p className=" text-[#000]">By <b> Admin</b> | March 11, 2022 | Yoga</p> 
      </i>
      <h3 className=" text-[25px] font-bold mb-3">{title}</h3>
      <p className=" text-[12px] text-[#6d6d6d] font-medium mb-3">Authoritatively disseminate multimedia based total linkage through <br />market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary <br />manufacture Appropriately foster fullresearched innovation rather than backend supply. when an <br />unknown printer took a galley.</p>

      <Button text={"purchase now"} color={"text-white"} bg={"bg-[#ff3232]"}/>
    </div>
  );
};

export default BlogPgBox;
