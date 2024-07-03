import React from "react";
import Button from "./Button";
import { RiContactsLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";

const ClassBox = ({ bgImg, title, trainer, date }) => {
  return (
    <>
      <div
        className={`${bgImg}  rounded-3xl shadow-2xl flex flex-col h-[25rem] relative p-5`}
      >
        <span className="bg-[#0000004a] rounded-3xl w-full h-full absolute top-0 left-0"></span>

        <div className="flex flex-col align-text-bottom h-full w-full z-[2] justify-end">
          <p className="text-white font-bold text-[1.7rem] ">{title}</p>

          <span className="bg-[#ff0336] w-[50px] h-[4px]"></span>

          <div className="flex gap-6 mb-8 mt-6 text-[#ffffffe1] text-[0.8rem] font-medium">
            <p className=" flex justify-center items-center gap-1">
              <RiContactsLine />
              {trainer}
            </p>
            <p  className=" flex justify-center items-center gap-1">
              <IoTimeOutline />
              {date}
            </p>
          </div>

          <Button text={"join now"} color={"text-black"} bg={"bg-[#fff]"} />
        </div>
      </div>
    </>
  );
};

export default ClassBox;
