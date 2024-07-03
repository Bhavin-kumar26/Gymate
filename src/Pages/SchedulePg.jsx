import React, { useState } from "react";
import PagesHeader from "../Components/PagesHeader";
import Tabs from "./Tabs";
import Footer from "../Components/Footer";

const SchedulePg = () => {
  const tabs = [
    {
      day: "Monday",
      content: (
        <div>
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
        </div>
      ),
    },
    {
      day: "Tuesday",
      content: (
        <div>
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
        </div>
      ),
    },
    {
      day: "Wednesday",
      content: (
        <div>
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
        </div>
      ),
    },
    {
      day: "Thursday",
      content: (
        <div>
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
        </div>
      ),
    },
    {
      day: "Friday",
      content: (
        <div>
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
        </div>
      ),
    },
    {
      day: "Saturday",
      content: (
        <div>
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
        </div>
      ),
    },
    {
      day: "Sunday",
      content: (
        <div>
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
          <Tabs
            classn={"Fitness"}
            time={"9:00 am - 10:00am"}
            trainer={"David"}
          />
        </div>
      ),
    },
  ];
  const [indexValue, setIndexValue] = useState(0);
  function handleChange(index) {
    // console.log(index);
    setIndexValue(index);
  }

  return (
    <div className=" ">
      <PagesHeader text={"Schedule by Day"} />
      <div className=" flex justify-center   flex-wrap ">
        {tabs.map((item, index) => (
          <div
            onClick={() => handleChange(index)}
            key={index}
            className=" mt-10 mb-4  flex  items-center gap-10 justify-center"
          >
            <span
              className={` ${
                indexValue == index ? "bg-[#ff3232]" : " bg-transparent"
              }
            ${indexValue == index ? "text-[#ffffff]" : " text-[#000000]"}
             
            hover:bg-[#ff3232] hover:text-white border-2 cursor-pointer text-black font-semibold p-2 px-3 rounded-full`}
            >
              {item.day}
            </span>
            <h2>{}</h2>
          </div>
        ))}
      </div>
      <div className=" w-full flex justify-center">
        {tabs[indexValue] && tabs[indexValue].content}
      </div>

      <Footer />
    </div>
  );
};

export default SchedulePg;
