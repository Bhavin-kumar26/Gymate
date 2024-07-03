import React from "react";
import TrainerCards from "./TrainerCards";
import Trainer1 from "../../assets/trainers/trainer1.png";
import Trainer2 from "../../assets/trainers/trainer2.png";
import Trainer3 from "../../assets/trainers/trainer3.png";
import titlebg from "../../assets/pricing/titlebg.svg";

const Trainers = () => {
  const trainers = [
    { img: Trainer1, name: "John Lewis", job: "Yoga Trainer" },
    { img: Trainer2, name: "Jonathan Doe", job: "Crossfit Trainer" },
    { img: Trainer3, name: "Ana June", job: "Personal Trainer" },
  ];
  return (
    <div className=" trainiebg relative  w-full h-auto py-7 px-10">
      <div className=" flex flex-col justify-center items-center text-center relative">
        <p className=" z-10 text-white mb-5 font-semibold">GYM TRAINERS</p>
        <img className=" absolute -top-1" src={titlebg} alt="" />
        <h3 className=" font-bold text-[2rem] mb-5">Team Of Expert Coaches</h3>
        <p className=" font-normal text-[1.2rem]">
          Expert team of coaches helps you succeed in any goal, personalized
          <br /> guidance and motivation provided!
        </p>
      </div>
      <div className=" flex  justify-center items-center lg:gap-10 flex-wrap lg:flex-row">
        {trainers.map((item, index) => (
          <TrainerCards key={index} img={item.img} name={item.name} job={item.job} />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
