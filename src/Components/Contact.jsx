import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section className=" contact w-full h-auto text-white p-10 xl:px-32">
      <h1 className=" font-bold text-[2.7rem]">Need a Fitness Trainer?</h1>
      <h2 className=" text-[2rem] font-bold my-4 md:my-8"> <span className=" text-[#ff3232]">Call:</span> +123-456789</h2>
      <Button text={"purchase now"} bg={"bg-[#ff3232]"}/>
    </section>
  );
};

export default Contact;
