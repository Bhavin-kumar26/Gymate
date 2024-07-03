import React from "react";

const Tabs = ({ classn, time, trainer }) => {
 
  return (
    <div className=" w-full sm:px-[1rem]  rounded-md ">
      <div className=" gap-5 bg-[#f2f2f2] py-5 px-10  mb-5">
        <div className=" w-full md:gap-16 gap-5   grid sm:grid-cols-4 text-[14px] text-[#6a6a6a]">
          <div>
            <h2>Class Name</h2>
            <h3 className=" text-[18px] font-bold">{classn}</h3>
          </div>
          <div>
            <h2>Time</h2>
            <h3 className=" text-[18px] font-bold">{time}</h3>
          </div>
          <div>
            <h2>Trainer</h2>
            <h3 className=" text-[18px] font-bold">{trainer}</h3>
          </div>
          <button
            style={{ transition: "0.5s" }}
            className=" bg-[#555555] hover:bg-[#ff3232] text-white w-fit px-2 font-medium py-1 rounded-xl"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
