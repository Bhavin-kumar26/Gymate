import React from "react";
import PricingBox from "./PricingBox";
import bg1 from "../../assets/pricing/img1.jpg";
import bg2 from "../../assets/pricing/img2.jpg";
import bg3 from "../../assets/pricing/img3.jpg";
import titlebg from "../../assets/pricing/titlebg.svg";

const Pricing = () => {
  return (
    <section className=" w-full pricingbg py-16 flex flex-col relative">
      <div className=" flex justify-center items-center flex-col text-center">
        <p className=" z-10 text-white font-semibold my-6">PRICING CHART</p>
        <img className=" absolute top-[5rem]" src={titlebg} alt="" />
        <h3 className=" text-[3rem] font-bold"> Exclusive Pricing Plan</h3>
        <p className=" font-light text-[#6d6d6d]">
          Gymat an unknown printer took a galley of type and scrambled <br />
          make a type specimen book.
        </p>
      </div>
      <div className=" flex gap-7 flex-wrap justify-center">
        <PricingBox img={bg1} lvl={"Beginner"} price={"4000"} />
        <PricingBox img={bg2} lvl={"Intermediate"} price={"6000"} />
        <PricingBox img={bg3} lvl={"Advance"} price={"8000"} />
      </div>
    </section>
  );
};

export default Pricing;
