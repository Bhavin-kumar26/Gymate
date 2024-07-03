import React from "react";
import PagesHeader from "../Components/PagesHeader";
import Footer from "../Components/Footer";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactPg = () => {
  return (
    <div className=" w-full ">
      <PagesHeader text={"Contact Us"} />
      <div className=" w-full lg:pt-[8rem] flex flex-col  lg:pb-[4rem]  justify-center lg:flex-row   lg:px-[5rem] gap-10  ">
        {/* first col */}
        <div className="   w-full lg:w-1/2 p-10">
          <h2 className="text-black text-[36px] font-bold leading-[1.2]">
            We are here for help you! To Shape Your Body.
          </h2>
          <p className="text-[16px]  text-[#646464] font-medium my-[20px]">
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>

          <div className="  flex flex-col justify-between md:flex-row lg:flex-col  items-center gap-5 ">
            <div className=" w-full justify-between flex flex-col lg:flex-row lg:gap-5 ">
              <div className="flex flex-col relative ">
                <h3 className="text-[1.3rem] font-bold ">
                  New York City, USA
                </h3>
                {/* <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span> */}
                <p className="text-[15px] font-medium text-[#646464]">
                  85 Briston Mint Street,
                  <br /> London, E1 8LG, USA
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[1.3rem] font-bold ">Opening Hours</h3>
                {/* <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span> */}
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                </div>
              </div>
            </div>

            {/*  */}
              <div className=" flex  w-full justify-start xl:gap-[12rem]  flex-col  lg:flex-row lg:gap-5">
              <div className="flex flex-col relative">
                <h3 className="text-[1.3rem] font-bold ">Information</h3>
                {/* <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span> */}
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>+800-123-4567</p>
                  <p> gymat@gymail.com</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative ">
                <h3 className="text-[1.3rem] font-bold my-1 ">Follow Us On</h3>
                {/* <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span> */}
                <div className="text-[22px] font-medium text-black flex gap-5">
                  <FaLinkedinIn
                    style={{ transition: "0.5s" }}
                    className=" hover:text-[#ff3232]"
                  />
                  <FaGithub
                    style={{ transition: "0.5s" }}
                    className=" hover:text-[#ff3232]"
                  />
                  <FaInstagram
                    style={{ transition: "0.5s" }}
                    className=" hover:text-[#ff3232]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second col ---*/}
        <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative lg:w-1/2">
          <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
          {/* <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span> */}
          <input
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            placeholder="Full Name *"
            type="text"
          ></input>
          <input
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            placeholder="Email Address *"
            type="email"
          ></input>
          <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
            <option>Select Class</option>
            <option>Body Building</option>
            <option>Boxing</option>
            <option>Running</option>
            <option>Fitness</option>
            <option>Yoga</option>
            <option>Workout</option>
            <option>Katate</option>
            <option>Meditation</option>
            <option>Cycling</option>
          </select>
          <textarea
            placeholder="Comment"
            className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
          >
            submit now
          </button>
        </form>
      </div>

      {/* map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
        allowFullScreen=""
        loading="lazy"
        samesite="Strict"
        title="map"
        style={{ width: "100%", height: "30rem", border: "0px" }}
      ></iframe>
      <Footer />
    </div>
  );
};

export default ContactPg;
