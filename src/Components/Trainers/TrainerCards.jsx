import React, { useState } from "react";
import Trainer1 from "../../assets/trainers/trainer1.png";
import curve from "../../assets/trainers/shape.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const TrainerCards = ({ img, name, job }) => {
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(true);
  }

  function handleHoverRemove() {
    setHover(false);
  }
  // console.log(hover);
  return (
    <div className=" flex justify-center my-10 trainerdiv px-5">
      <div className=" relative trainerdiv1 w-[290px] h-[405px] flex justify-center items-center flex-col">
        <img
          style={{ transition: "all 0.5s" }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverRemove}
          className={` cursor-pointer w-[14rem] z-10 grayscale ${hover ? "grayscale-0" : ""}`}
          src={img}
          alt=""
        />
        <img className=" absolute z-20 top-[15.7rem] " src={curve} alt="" />
        <div className="absolute z-20 text-[1rem] top-[16rem] font-bold">
          <FaChevronUp />
        </div>
        <div className=" trainerdiv2 absolute w-[100%] h-[8rem] rounded z-20 bottom-0 bg-white shadow-2xl flex flex-col justify-center items-center cursor-pointer">
          <h4 className=" font-bold text-[22px]">{name}</h4>
          <p className=" font-medium text-[15px] my-2">{job}</p>
          <div className=" flex gap-4">
            <FaLinkedinIn />
            <FaGithub />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCards;
