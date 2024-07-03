import React from "react";
// import "../index.css"
import { FaArrowRight } from "react-icons/fa6";

const Button = ({color,bg,text,border,hover}) => {
  return (
    <div className={`Main-button gap-3 relative w-[13rem] h-[3.5rem] ${bg} ${color}
       flex items-center justify-center cursor-pointer font-bold tracking-wider text-[16px] uppercase hover:${hover}`}>
      {text}
      <FaArrowRight />
    </div>
  );
};

export default Button;
