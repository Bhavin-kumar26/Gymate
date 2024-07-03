import React from "react";
import ProgressionImg from "../assets/who-we-are/progresion.png";
import WorkoutImg from "../assets/who-we-are/workout.png";
import NutritionImg from "../assets/who-we-are/nutritions.png";

const AboutUsCards = () => {
  const cardList = [
    {
      img: ProgressionImg,
      title: "Progression",
      description:
        "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
    },
    {
      img: WorkoutImg,
      title: "Workout",
      description:
        " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
    },
    {
      img: NutritionImg,
      title: "Nutritions",
      description:
        "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
    },
  ];

  return <>
    {
        cardList.map((item,index)=>(
            <div key={index} className=" w-full flex flex-col min-h-[330px] shadow-2xl justify-center items-center mt-10 rounded-tl-[40px] rounded-br-[40px] py-10 px-10 bg-white md:min-h-[260px] xl:min-h-[250px] cursor-pointer">
                <img className=" w-[80px]" src={item.img} alt={item.title} />
                <h2 className=" uppercase font-bold text-[23px] my-3 tracking-wider">{item.title}</h2>
                <p className=" text-center text-[16px] font-medium">{item.description}</p>
            </div>
        ))
    }
  </>;
};

export default AboutUsCards;
