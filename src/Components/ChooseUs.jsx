import React from "react";
import gympic from "../assets/choose-us/main-img.png";
import playpic from "../assets/choose-us/play.png";
import TrainingIcon from "../assets/choose-us/training.png";
import EquipmentsIcon from "../assets/choose-us/bench-press.png";
import BagIcon from "../assets/choose-us/gym-bag.png";
import BottleIcon from "../assets/choose-us/bottle-of-water.png";
import titlebg from "../assets/pricing/titlebg.svg";
import Button from "./Button";

const ChooseUs = () => {
  return (
    <section className=" choose w-full h-auto flex flex-col items-center lg:flex-row px-5 xl:px-40 py-12 lg:gap-10 xl:gap-20  ">
      <div className=" relative lg:w-1/2 h-full flex gap-6 items-center  mb-6">
        <div className=" hidden lg:block absolute  bottom-1 left-10 rounded w-[4px] h-[16rem] bg-[#ff0336]"></div>
        <div className=" relative w-full  h-auto flex justify-center">
          <img
            className="ml-6  w-[80%] lg:w-[80%] h-auto"
            src={gympic}
            alt=""
          />
          <div className=" cursor-pointer absolute top-[40%] left-[40%] p-2 bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full">
            <img className="  w-[40%] " src={playpic} alt="" />
          </div>
          <div className="hidden lg:block  absolute top-20 right-0 w-[10px] h-[75%] -rotate-6 bg-[#ff0336]"></div>
        </div>
      </div>

      <div className=" text-white flex lg:w-1/2 flex-col px-10">
        <div className=" relative flex flex-col justify-center items-center text-center">
          <p className="  my-5 text-white font-semibold z-10">WHY CHOOSE US</p>
          <img className=" absolute top-4 -left-15" src={titlebg} alt="" />
          <h3 className=" text-[2rem] leading-[3rem] font-bold">
            We Can Give A Shape Of Your Body Here!
          </h3>
          <p className=" text-[15px] text-[#b4b4b4] mt-5">
            At <b>GymSpace</b>, we are dedicated to helping you achieve the body
            of your dreams. Our expert trainers and nutritionists will work with
            you to create a personalized fitness and nutrition plan that helps
            you reach your specific goals.
          </p>
          <div className=" my-5 mb-10 flex flex-col sm:grid grid-cols-2 gap-10">
            <div className="flex items-center gap-6">
              <img
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[4.5rem] rounded-full p-4"
                src={TrainingIcon}
                alt="icon"
              />
              <p className="text-white font-bold text-[18px] max-w-[150px]">
                Free Fitness Training
              </p>
            </div>
            <div className="flex items-center gap-6 ">
              <img
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[4.5rem] rounded-full p-4"
                src={EquipmentsIcon}
                alt="icon"
              />
              <p className="text-white font-bold text-[18px] max-w-[150px]">
                Modern Gym Equipments
              </p>
            </div>

            <div className="flex items-center gap-6">
              <img
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[4.5rem] rounded-full p-4"
                src={BagIcon}
                alt="icon"
              />
              <p className="text-white font-bold text-[18px] max-w-[150px]">
                Gym Bag Equipments
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[4.5rem] rounded-full p-4"
                src={BottleIcon}
                alt="icon"
              />
              <p className="text-white font-bold text-[18px] max-w-[150px]">
                Fresh Bottle Watter
              </p>
            </div>
          </div>
           <Button
          text={"our classes"}
          bg={`bg-[#595959]`}
          color={`!text-white`}
          hover={"bg-[#ff3232]"}
        />  
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
