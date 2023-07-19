import React from "react";
import CarsOptions from "./CarsOptions";
import SwiperFleetItem from "./SwiperFleetItem";
import { bmw7icars, mercedesSseries } from "./Data";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const MercedesSitem = () => {
  return (
    <div className="mx-6">
      <div className="w-full py-7">
        <Image
          src="/images/cars/mercedes_s_class/main.jpg"
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
          Combining elegance with quality, the Mercedes S Class sets the
          standard in chauffeured travel. With its luxuriously spacious leather
          interior, the Mercedes S Class makes for a perfect executive business
          travel. With its new design and the very highest levels of comfort,
          this is a true leader in luxury Chauffeur services. The S class is
          preferred choice for our top dignitaries and business leaders. The
          Mercedes S class is perfect for airport transfers, city transfers and
          long distance journeys.
        </p>
        <p>
          The rear cabin includes individual climate control and an executive
          armrest with cup holders. The Comfortable head rests are like small
          pillows, perfect for resting on long journeys.The S Class Mercedes
          come equipped with the following complimentary features:
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
        <SwiperFleetItem listcars={mercedesSseries} />
        <CarsOptions />
      </div>
    </div>
  );
};

export default MercedesSitem;
