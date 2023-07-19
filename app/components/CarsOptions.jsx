"use client";
import React, { useState } from "react";
import Table from "./Table";
import { FaArrowRight } from "react-icons/fa6";

const CarsOptions = () => {
  const [showtable, setShowtable] = useState(true);
  return (
    <>
      {" "}
      <div className=" -mt-5 flex gap-0">
        <span
          onClick={(e) => setShowtable(true)}
          className={`border-2 p-2 cursor-pointer  ${!showtable?'':'border-t-4 border-t-green-900'}`}
        >
          specification
        </span>
        <span
          onClick={(e) => setShowtable(false)}
          className={`border-2 p-2 cursor-pointer ${showtable?'':'border-t-4 border-t-green-900'}`}
        >
          addtitional information
        </span>
      </div>
      <div className="w-full h-auto">
        {showtable ? (
          <Table />
        ) : (
          <div className="border-2 px-4">
            <h1 className="py-5  font-normal text-neutral-900">
              The BMW 7i Series come equipped with the following complimentary
              features:
            </h1>
            <div className="mt-2 ">
        <div className="flex items-center gap-1  py-2">
          <div className="flex justify-center items-center text-green-900">
            <FaArrowRight />
          </div>
          <span className="text-sm font-normal text-neutral-600">
            Extended rear leg room
          </span>
        </div>

        <div className="flex items-center gap-1  py-2">
          <div className="flex justify-center items-center text-green-900">
            <FaArrowRight />
          </div>
          <span className="text-sm font-normal text-neutral-600">
            Climate controlled air conditioning
          </span>
        </div>
        <div className="flex items-center gap-1  py-2">
          <div className="flex justify-center items-center text-green-900">
            <FaArrowRight />
          </div>
          <span className=" text-sm font-normal text-neutral-600">
            Electric rear reclining seats
          </span>
        </div>
        <div className="flex items-center gap-1  py-2">
          <div className="flex justify-center items-center text-green-900">
            <FaArrowRight />
          </div>
          <span className=" text-sm font-normal text-neutral-600">
            Heated rear seats
          </span>
        </div>
        <div className="flex items-center gap-1  py-2">
          <div className="flex justify-center items-center text-green-900">
            <FaArrowRight />
          </div>
          <span className=" text-sm font-normal text-neutral-600">
            On-Board Wi-Fi
          </span>
        </div>
        <div className="flex items-center gap-1  py-2">
          <div className="flex justify-center items-center text-green-900">
            <FaArrowRight />
          </div>
          <span className=" text-sm font-normal text-neutral-600">
            Smart Phone rear chargers
          </span>
        </div>
      </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CarsOptions;
