import React from "react";
import CarsOptions from "./CarsOptions";
import SwiperFleetItem from "./SwiperFleetItem";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { mercedesviano } from "./Data";

const MercedesVianoItem = () => {
  return (
    <div className="mx-6">
      <div className="w-full py-7">
        <Image
          src="/images/cars/mercedesviano/main.jpg"
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
          The Mercedes Viano seats have been designed to offer maximum comfort
          even on the longest journeys.
        </p>
        <p>
          All seats in the Viano are ergonomically designed and have three-point
          seatbelts. Single passenger seats have armrests and adjustable
          backrests. They move forward or back in 1-inch (25 mm) stages, to give
          you a more flexible space and passengers plenty of legroom where they
          need it. In addition, the standard 7-seater Viano can be fitted with
          an extra seat if so desired, offering space for up to eight people.
        </p>
        <p>
          The spacious 7 seater Mercedes Viano is the most equipped vehicle for
          chauffeured transfer as well as group bookings. Its stylish interior
          can be manoeuvred to create “conference style seating” and are ideal
          for business meetings “on the move”.The Mercedes Viano come equipped
          with the following complimentary features:
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
        <SwiperFleetItem listcars={mercedesviano} />
        <CarsOptions />
      </div>
    </div>
  );
};

export default MercedesVianoItem;
