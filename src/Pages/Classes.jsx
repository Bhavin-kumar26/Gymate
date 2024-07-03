import React, { useState } from "react";
import PagesHeader from "../Components/PagesHeader";
import ClassBox from "../Components/ClassBox";
import Footer from "../Components/Footer";

const Classes = () => {

  const [load, setLoad] = useState(false)

  const loadMore = ()=>{
    setLoad(!load)
  }

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <PagesHeader text={"Classes"} />
      {
      load ? <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[2rem] md:px-[5rem] lg:px-[6rem] xl:px-[16rem] mt-10 gap-10 ">
      <ClassBox
        bgImg="cycling-bg"
        title="Cycling"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="meditaion-bg"
        title="Meditation"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="mma-bg"
        title="Mma"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="karate-bg"
        title="Karate"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="powerlift-bg"
        title="Power Lifting"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="workout-bg"
        title="Workout"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="crossfit-bg"
        title="Crossfit"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="running-bg"
        title="Running"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />    
       <ClassBox
        bgImg="cycling-bg"
        title="Cycling"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="meditaion-bg"
        title="Meditation"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      />
      <ClassBox
        bgImg="mma-bg"
        title="Mma"
        trainer="Dorian Yate"
        date="Wed: 9:00 am"
      /> 
    </div> :<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[2rem] md:px-[5rem] lg:px-[6rem] xl:px-[16rem] mt-10 gap-10 ">
        <ClassBox
          bgImg="cycling-bg"
          title="Cycling"
          trainer="Dorian Yate"
          date="Wed: 9:00 am"
        />
        <ClassBox
          bgImg="meditaion-bg"
          title="Meditation"
          trainer="Dorian Yate"
          date="Wed: 9:00 am"
        />
        <ClassBox
          bgImg="mma-bg"
          title="Mma"
          trainer="Dorian Yate"
          date="Wed: 9:00 am"
        />
        <ClassBox
          bgImg="karate-bg"
          title="Karate"
          trainer="Dorian Yate"
          date="Wed: 9:00 am"
        />
        <ClassBox
          bgImg="powerlift-bg"
          title="Power Lifting"
          trainer="Dorian Yate"
          date="Wed: 9:00 am"
        />
        <ClassBox
          bgImg="workout-bg"
          title="Workout"
          trainer="Dorian Yate"
          date="Wed: 9:00 am"
        />
        <ClassBox
          bgImg="crossfit-bg"
          title="Crossfit"
          trainer="Dorian Yate"
          date="Wed: 9:00 am"
        />
        <ClassBox
          bgImg="running-bg"
          title="Running"
          trainer="Dorian Yate"
          date="Wed: 9:00 am"
        />     
      </div>
      }
      

      

      <div className=" flex justify-center">
        <button
          className="text-[1rem] text-white bg-slate-600 px-10 py-4 font-medium uppercase shadow-2xl my-14 "
          onClick={() => {
            loadMore();
            goTop();
          }}
        >
          {load ? "show less" : "show more"}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Classes;
