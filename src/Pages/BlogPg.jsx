import React from "react";
import PagesHeader from "../Components/PagesHeader";
import BlogPgBox from "../Components/BlogPgBox";
import img1 from "../assets/blogpage/1.jpg";
import img2 from "../assets/blogpage/2.jpg";
import img3 from "../assets/blogpage/3.jpg";
import img4 from "../assets/blogpage/4.jpg";
import img5 from "../assets/blogpage/5.jpg";
import img6 from "../assets/blogpage/6.jpg";
import img7 from "../assets/blogpage/7.jpg";
import side from "../assets/blogpage/sidebarimg.jpeg";
import Footer from "../Components/Footer";
import { IoSearch } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const BlogPg = () => {
  return (
    <div className=" w-full">
      <PagesHeader text={"Blog"} />
      <div className=" w-full flex flex-col md:flex-row  justify-center  gap-10 px-10 xl:px-[15rem] py-5  mt-12  ">
        <div className=" w-[100%] md:w-[60%]  flex flex-col justify-center items-center gap-5">
          <BlogPgBox img={img1} title={"Yoga For Everyone in 2022"} />
          <BlogPgBox
            img={img2}
            title={"Getting Back Into CrossFit After Vacation"}
          />
          <BlogPgBox img={img3} title={"Meet Fitness Ambassador Grace"} />
          <BlogPgBox
            img={img4}
            title={"The Best are European Materls Direct"}
          />
          <BlogPgBox
            img={img5}
            title={"Give your Fitness a Boost with our Gym"}
          />
          <BlogPgBox
            img={img6}
            title={"How to Get Fit Your Kids Moving Throughout The Summer"}
          />
          <BlogPgBox
            img={img7}
            title={"Give your fitness a boost with our new gym challenge"}
          />
        </div>
        <div className=" w-[100%] md:w-[30%] flex justify-start gap-4 flex-col ">
          <form
            className=" flex w-full bg-blue-200 border-[1px] border-[#eeeff2] rounded-l-md"
            action=""
          >
            <input
              className=" w-[80%] h-[40px] outline-none rounded-l-md px-2 "
              placeholder="Search.."
              type="text"
            />
            <button className=" w-[20%] h-[40px] bg-[#ff3232] rounded-r-md text-white flex justify-center items-center">
              <IoSearch className=" text-white text-[20px]" />
            </button>
          </form>
          <div className=" bg-[#e4dfdf5b] px-3 py-5">
            <h5 className=" font-bold text-[20px] mb-5">Categories</h5>
            <ul className=" flex flex-col gap-3 text-[13px]">
              <li className=" flex items-center text-[#6d6d6d] font-medium hover:text-[#ff3232] cursor-pointer  justify-between px-3 pb-2 gap-5 border-b-2 ">
                <p className=" flex items-center gap-1">
                  <IoChevronForward /> Body Building
                </p>
                <span>(4)</span>
              </li>
              <li className=" flex items-center text-[#6d6d6d] font-medium hover:text-[#ff3232] cursor-pointer  justify-between px-3 pb-2 gap-5 border-b-2 ">
                <p className=" flex items-center gap-1">
                  <IoChevronForward /> CrossFit
                </p>
                <span>(4)</span>
              </li>
              <li className=" flex items-center text-[#6d6d6d] font-medium hover:text-[#ff3232] cursor-pointer  justify-between px-3 pb-2 gap-5 border-b-2 ">
                <p className=" flex items-center gap-1">
                  <IoChevronForward /> Boxing
                </p>
                <span>(4)</span>
              </li>
              <li className=" flex items-center text-[#6d6d6d] font-medium hover:text-[#ff3232] cursor-pointer  justify-between px-3 pb-2 gap-5 border-b-2 ">
                <p className=" flex items-center gap-1">
                  <IoChevronForward /> Meditation
                </p>
                <span>(4)</span>
              </li>
              <li className=" flex items-center text-[#6d6d6d] font-medium hover:text-[#ff3232] cursor-pointer justify-between px-3 pb-2 gap-5 border-b-2 ">
                <p className=" flex items-center gap-1">
                  <IoChevronForward /> Yoga
                </p>
                <span>(4)</span>
              </li>
              <li className=" flex items-center text-[#6d6d6d] font-medium hover:text-[#ff3232] cursor-pointer  justify-between px-3 pb-2 gap-5 border-b-2 ">
                <p className=" flex items-center gap-1">
                  <IoChevronForward /> Fitness
                </p>
                <span>(4)</span>
              </li>
            </ul>
          </div>
          <div className=" bg-[#e4dfdf5b] px-3 py-5 flex flex-col gap-4">
            <h5 className=" font-bold text-[20px] mb-5">Recent Post</h5>
            <div className=" flex items-center gap-3">
              <img src={img1} className=" w-[5rem] h-[5rem] object-cover" alt="" />
              <div>
                <p className=" text-[#6d6d6d] text-[13px]">June 25, 2022</p>
                <h3 className=" font-bold text-[14px]">Yoga For Everyone in 2022</h3>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={img2} className=" w-[5rem] h-[5rem] object-cover" alt="" />
              <div>
                <p className=" text-[#6d6d6d] text-[13px]">June 25, 2022</p>
                <h3 className=" font-bold text-[14px]">Getting Back Into CrossFit</h3>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={img3} className=" w-[5rem] h-[5rem] object-cover" alt="" />
              <div>
                <p className=" text-[#6d6d6d] text-[13px]">June 25, 2022</p>
                <h3 className=" font-bold text-[14px]">Meet Fitness Abassador Grace</h3>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={img4} className=" w-[5rem] h-[5rem] object-cover" alt="" />
              <div>
                <p className=" text-[#6d6d6d] text-[13px]">June 25, 2022</p>
                <h3 className=" font-bold text-[14px]">The best are European Meditation Practitioner</h3>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={img5} className=" w-[5rem] h-[5rem] object-cover" alt="" />
              <div>
                <p className=" text-[#6d6d6d] text-[13px]">June 25, 2022</p>
                <h3 className=" font-bold text-[14px]">Learn Boxing With Our Trainer John</h3>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={img6} className=" w-[5rem] h-[5rem] object-cover" alt="" />
              <div>
                <p className=" text-[#6d6d6d] text-[13px]">June 25, 2022</p>
                <h3 className=" font-bold text-[14px]">How To Get Lean For The Summer</h3>
              </div>
            </div> 
          </div>
          <div className=" bg-[#e4dfdf5b] px-3 py-5  gap-4">
            <h5 className=" font-bold text-[20px] mb-5">Popular Tags</h5>
            <div className=" flex flex-wrap gap-3">
              <p className=" bg-white w-fit p-[0.1rem] rounded-md">#Fitness</p>
              <p className=" bg-white w-fit p-[0.1rem] rounded-md">#CrossFit</p>
              <p className=" bg-white w-fit p-[0.1rem] rounded-md">#Gym</p>
              <p className=" bg-white w-fit p-[0.1rem] rounded-md">#Meditation</p>
              <p className=" bg-white w-fit p-[0.1rem] rounded-md">#Running</p>
              <p className=" bg-white w-fit p-[0.1rem] rounded-md">#Workout</p>
              <p className=" bg-white w-fit p-[0.1rem] rounded-md">#Yoga</p>
              <p className=" bg-white w-fit p-[0.1rem] rounded-md">#Boxing</p>
            </div>
          </div>
          <div className=" flex justify-center">
            <img src={side} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPg;
