import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const CarsItem = () => {
  return (
    <div className=" max-w-[320px] border-2 flex flex-col justify-center items-center py-5 shadow-md  ">
      <div className="flex-1">
        <Image
          src="/images/BMW_7_Series_side_small.jpg"
          width={300}
          height={130}
        />
      </div>
      <div className="flex-1 py-3">
        <h1 className="text-start">Mercedes E class</h1>
        <div className="w-12 h-[2px] mt-1 mb-7 bg-green-900"></div>
        <p className="flex gap-2">
          <span className="flex justify-center items-center text-green-600">
            <FaCheck />
          </span>
          <span>2 passenger</span>
        </p>
        <p className="flex gap-2">
          <span className="flex justify-center items-center text-green-600">
            <FaCheck />
          </span>{" "}
          <span>2 lugguges</span>
        </p>
      </div>
    </div>
  );
};

export default CarsItem;
