import React from "react";
import Buttonquote from "./Buttonquote";

const Area4 = () => {
  return (
    <section
      className=" min-h-[150px] flex justify-center items-center"
      style={{
        backgroundImage: "url(/images/Citywide-London-quote.jpg)",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <blockquote className="flex flex-col gap-2 items-center justify-center text-white py-7 md:flex-row md:justify-between md:max-w-screen-xl mx-auto">
        <p className="py-5 text-base text-center  md:text-xl">
          Citywide London has pricing options to meet all of your needs
        </p>
        <Buttonquote />
      </blockquote>
    </section>
  );
};

export default Area4;
