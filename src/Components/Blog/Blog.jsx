import React from "react";
import BlogBox from "./BlogBox";
import titlebg from "../../assets/pricing/titlebg.svg";

const Blog = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center text-center relative my-10 px-10 lg:px-20">
       <div className=" flex justify-center items-center flex-col text-center">
        <p className=" z-10 text-white font-semibold my-6">LATEST BLOG</p>
        <img className=" absolute top-[1rem]" src={titlebg} alt="" />
        <h3 className=" text-[3rem] font-bold"> Our Recent News</h3>
        <p className=" font-light text-[#6d6d6d]">
        Gymat an unknown printer took a galley of type and scrambled <br /> make a 
          type specimen book
        </p>
      </div>
      <div className=" flex  gap-7 flex-col  justify-center lg:flex-row">
        <BlogBox
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, similique."
          }
        />
        <BlogBox
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, similique."
          }
        />
        <BlogBox
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, similique.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, similique."
          }
        />
      </div>
    </section>
  );
};

export default Blog;
