import React from "react";
import quotes from "../../assets/testimonials/quotes.png";
import shape from "../../assets/testimonials/testimonial-shape.svg";

const TestimonialsBox = ({ text, name, job }) => {
  return (
    <div className=" flex justify-center relative ">
      <div className=" w-[100%] h-[20rem]  flex justify-end items-center bg-black text-white px-5  ">
        <div className=" flex flex-col ">
          <img className=" w-16 mb-4" src={quotes} alt="" />
          <p className=" font-light mb-4 italic max-w-3xl">
            {/* “I've been a member of Gymate for the past 6 months and it has been
            an amazing experience. The trainers are knowledgeable and
            supportive, the equipment is top-notch, and the community of members
            is friendly and encouraging.” */}
            {text}
          </p>
          <h3 className=" mb-1 font-bold text-[20px]">{name}</h3>
          <h5 className=" font-extralight text-[15px]">{job}</h5>
          <img
            className=" absolute -bottom-10 right-[3rem] w-[14rem] opacity-40 invert"
            src={shape}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBox;
