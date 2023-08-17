import React from "react";
import { FaStar } from "react-icons/fa6";
import SectionAnim from "../SectionAnim";

const Item2 = () => {
  return (
    <div className=" flex justify-start items-start gap-5 md:w-[450px] xl:w-[600px] md:mb-20 ">
      <div>
        <div className="flex justify-center items-center border-2  border-green-900 p-5 text-green-900 text-4xl">
          {" "}
          <FaStar />
        </div>
      </div>
      <SectionAnim>
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="font-extrabold xl:text-2xl">Professional Drivers</h1>
        <div className="w-16 h-[2px] bg-green-900 mb-7"></div>
        <p className="text-start xl:text-xl">
          Our Drivers are experienced and highly professional. People hire us
          repeatedly because of our professionalism and punctuality.
        </p>
      </div>
      </SectionAnim>
    </div>
  );
};

export default Item2;
