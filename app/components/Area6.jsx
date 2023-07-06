import React from "react";
import ButtonComponent from "./ButtonComponent";

const Area6 = () => {
  return (
    <section
      className="min-h-[600px] mt-7 pt-7 px-2 flex justify-center items-start"
      style={{ backgroundImage: "url('/images/area6.jpg')", backgroundPosition:'center top', backgroundRepeat:'no-repeat' }}
    >
      <article className="flex flex-col py-11 justify-center md:justify-start items-center gap-5 text-white">
        <h1 className=" text-center leading-10 md:leading-[50px]  text-xl md:text-3xl md:max-w-[700px]">Request for a quote today and choose the car your need</h1>
        <div className="w-28 h-[3px] bg-green-900 mb-7"></div>
        <p className="text-center leading-7">Call Us On +44 (0) 20 7474 4828 or Email info@citywidelondon.co.uk</p>
        <ButtonComponent title={'get a quote'} />
      </article>
    </section>
  );
};

export default Area6;
