import React from "react";
import SwiperFleetItem from "./SwiperFleetItem";
import { bmw7icars, mercedesEseries } from "./Data";
import { FaArrowRight } from "react-icons/fa6";
import CarsOptions from "./CarsOptions";
import Image from "next/image";

const MercedesEitem = () => {
  return (
    <div className="mx-6">
      <div className="w-full py-7">
        <Image
          src="/images/cars/mercedes_e_class/main.jpg"
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
          The Mercedes E-Class Saloon is synonymous with quality, reliability
          and comfort. It is an excellent option for executive, corporate and
          business travel with a capacity of 4 people and light luggage. All
          cars are equipped with leather seats, air conditioning, satellite
          navigation, and a cd player
        </p>
        <p>
          The Mercedes E class is one of the most preferred chauffeur cars
          because of its quality, reliability and cost effectiveness.
        </p>
        <p>
          All of our E-Class cars are regularly maintained by Mercedes-Benz and
          feature many high-spec accessories. Wherever you want to travel to in
          and around London, this marvelous Mercedes chauffeur car will be
          perfect for the task. From chauffeur-driven Heathrow airport transfers
          to business and “as directed” private hire this certainly beats a
          black cab for comfort and luxury.
        </p>
      </div>
     
      <div className="px-2 mt-7">
        <SwiperFleetItem listcars={mercedesEseries} />
        <CarsOptions />
      </div>
    </div>
  );
};

export default MercedesEitem;
