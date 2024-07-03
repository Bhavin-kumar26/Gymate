import React, { useState } from "react";
import logo from "../assets//logo/logo.svg";
import { RiContactsLine } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [spin, setSpin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  function hoverEnter() {
    setSpin(true);
  }

  function hoverLeave() {
    setSpin(false);
  }

  function handleToggle() {
    setMenuOpen(!menuOpen);
   
  }
  // console.log(menuOpen);

  return (
    <nav
      className={` ${
        sticky ? "bg-black" : "bg-transparent"
      }  w-full shadow-2xl text-white flex items-center justify-between px-10 py-4 fixed top-0 left-0 right-0 z-50`}
    >
      <div>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul
        className={` hidden lg:flex gap-5 text-[22px] lg:text-[12px] lg:mx-5 font-medium tracking-wide mx-3`}
      >
        <Link
          to={"/"}
          className=" hover:text-[#ff3232]"
          style={{ transition: "0.7s" }}
        >
          Home
        </Link>
        <Link
          to={"/aboutpg"}
          className=" hover:text-[#ff3232]"
          style={{ transition: "0.7s" }}
        >
          About
        </Link>
        <Link
          to={"/schedulepg"}
          className=" hover:text-[#ff3232]"
          style={{ transition: "0.7s" }}
        >
          Schedule
        </Link>
        {/* <Link to={"/gallerypg"} className=" hover:text-[#ff3232]" style={{ transition:"0.7s"}}>Gallery</Link> */}
        <Link
          to={"/blogpg"}
          className=" hover:text-[#ff3232]"
          style={{ transition: "0.7s" }}
        >
          Blog
        </Link>
        <Link
          to={"/contactpg"}
          className=" hover:text-[#ff3232]"
          style={{ transition: "0.7s" }}
        >
          Contact
        </Link>
        <Link
          to={"/pricingpg"}
          className=" hover:text-[#ff3232]"
          style={{ transition: "0.7s" }}
        >
          Pricing
        </Link>
        <Link
          to={"/classpg"}
          className=" hover:text-[#ff3232]"
          style={{ transition: "0.7s" }}
        >
          Classes
        </Link>
      </ul>
      <div className=" flex gap-7 items-center">
        <div className=" block lg:hidden  text-3xl z-40 sm:text-2xl font-extrabold">
          <RiMenu2Fill onClick={handleToggle} className="  lg:hidden" />
        </div>
        <div className=" hidden sm:block">
          <button className="flex gap-2 border-2 px-3 py-2 items-center border-[#5a5a5a]">
            <FaPlusSquare
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              className={` ${
                spin ? "animate-spin" : "animate-none"
              }  bg-[#fff] text-[#ff3232]  text-2xl  `}
            />
            <h3 className=" font-bold lg:text-[10px]">JOIN CLASS NOW</h3>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          style={{ transition: "1s" }}
          className=" fixed top-0 w-full bg-[black] h-[100%] flex justify-center items-center lg:hidden md:hidden "
        >
          <ul className=" text-2xl flex flex-col gap-5">
            <Link
              
              onClick={handleToggle}
              to={"/"}
              className=" hover:text-[#ff3232]"
              // style={{ transition: "0.7s" }}
            >
              Home
            </Link>
            <Link
              onClick={handleToggle}
              to={"/aboutpg"}
              className=" hover:text-[#ff3232]"
              // style={{ transition: "0.7s" }}
            >
              About
            </Link>
            <Link
              onClick={handleToggle}
              to={"/schedulepg"}
              className=" hover:text-[#ff3232]"
              // style={{ transition: "0.7s" }}
            >
              Schedule
            </Link>
            {/* <Link to={"/gallerypg"} className=" hover:text-[#ff3232]" style={{ transition:"0.7s"}}>Gallery</Link> */}
            <Link
              onClick={handleToggle}
              to={"/blogpg"}
              className=" hover:text-[#ff3232]"
              // style={{ transition: "0.7s" }}
            >
              Blog
            </Link>
            <Link
              onClick={handleToggle}
              to={"/contactpg"}
              className=" hover:text-[#ff3232]"
              // style={{ transition: "0.7s" }}
            >
              Contact
            </Link>
            <Link
              onClick={handleToggle}
              to={"/pricingpg"}
              className=" hover:text-[#ff3232]"
              // style={{ transition: "0.7s" }}
            >
              Pricing
            </Link>
            <Link
              onClick={handleToggle}
              to={"/classpg"}
              className=" hover:text-[#ff3232]"
              // style={{ transition: "0.7s" }}
            >
              Classes
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
