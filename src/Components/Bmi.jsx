import React, { useState } from "react";
import bgimg from "../assets/bmi/background.jpg";
const Bmi = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [res, setRes] = useState();
  const [detail, setDetail] = useState();

  function handleWeight(e) {
    setWeight(e.target.value);
  }
  function handleHeight(e) {
    setHeight(e.target.value);
  }
  function calculate() {
    const heightSquare = height * height;
    let result = Math.round(weight / heightSquare);
    // console.log(Math.round(weight/heightSquare));
    setRes(result)
    // if (result > 0) {
    //   setRes((weight / heightSquare) * 10000);
    // } else {
    //   setRes(result);
    // }
    if (result < 18.5) {
      setDetail("UNDER WEIGHT");
    } else if (result < 25) {
      setDetail("NORMAL WEIGHT");
    } else if (result < 30) {
      setDetail("PRE OBESITY");
    } else {
      setDetail("OVER WEIGHT");
    }
  }

  // console.log(weight, height, res);

  return (
    <section className=" bmi-bg text-white p-12 my-10 xl:px-32">
      <div>
        <h2 className=" text-[2rem] font-bold">
          Let's Calculate Your <span className=" text-[#ff3232]">BMI</span>{" "}
        </h2>
        <p className=" text-[#a1a1a1] font-light my-6">
          Easily determine your body mass index with our accurate <br />{" "}
          calculation tool.
        </p>
        <form action="" className=" mb-5 flex gap-5 flex-col sm:flex-row ">
          <div className=" flex flex-col gap-3">
            <input
              className=" bg-transparent border-2  border-[#868686] p-2"
              type="text"
              placeholder="Weight/kg"
              onChange={handleWeight}
            />
            <label>Your BMI is : {res}</label>
          </div>
          <div className=" flex flex-col gap-3">
            <input
              className=" bg-transparent border-2  border-[#868686] p-2"
              type="text"
              placeholder="Height/m"
            
              onChange={handleHeight}
            />
            <label>You are  : {detail}</label>
          </div>
        </form>
        <button
          onClick={calculate}
          className=" uppercase bg-[#323232] p-2 hover:bg-[#ff3232] font-semibold text-[15px]"
        >
          {" "}
          calculate
        </button>
      </div>
    </section>
  );
};

export default Bmi;
