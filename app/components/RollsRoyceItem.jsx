import React from "react";
import CarsOptions from "./CarsOptions";
import SwiperFleetItem from "./SwiperFleetItem";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { rollsroyces } from "./Data";

const RollsRoyceItem = () => {
  return (
    <div className="mx-6">
      <div className="w-full py-7">
        <Image
          src="/images/cars/rollsroys/main.jpg"
          alt="BMW7iSeries"
          width={600}
          height={600}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className=" pt-7 flex flex-col gap-7">
        <h1>Vehicle Overview</h1>
        <div className="w-24 h-[3px] bg-green-900"></div>
        <p className="">
          Rolls Royce Phantom is the perfect chauffeur driven car with redefined
          levels of quality, comfort and style. A truly stunning top of the
          range luxury car!
        </p>
        <p>
          The Phantom has state of the art technology and handcrafted coach
          building making it the ultimate luxury vehicle for Luxury Airport
          Transfers, Weddings and Proms.
        </p>
        <p>
          For parties of up to 4 people, our Rolls Royce Phantom is the perfect
          solution for your chauffeur driven car hire for that special occasion.
        </p>
        <p>
          Our Rolls Royce Phantom is the pinnacle of luxury transportation,
          perfect for impersonating the high-fliers !
        </p>
      </div>
      <div className="mt-12 ">
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
      <div className="px-2 mt-7">
        <SwiperFleetItem listcars={rollsroyces} />
        <CarsOptions />
      </div>
    </div>
  );
};

export default RollsRoyceItem;
