import React from "react";
import { FaCar } from "react-icons/fa6";

const Area2 = () => {
  return (
    <section className="py-7">
      <div className="flex flex-col gap-8  px-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
      <div className="flex gap-7">
        <div className="p-4 text-2xl md:p-7 flex justify-center border-2 border-green-900 items-center text-green-900 md:text-4xl">
          <FaCar />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl capitalize">citywide london</p>
          <div className="w-24 h-[3px] bg-green-900"></div>
        </div>
      </div>
      <p className="md:w-2/3  md:leading-8">
        Citywide is among the leading chauffeur service provider in the UK. With
        years of experience providing chauffeur services in London, we
        understand what customers need. A professional service with a quality
        luxury car, driven by a dedicated, professional and reliable PCO
        licensed driver. Our specialised services cover a wide range and are
        inclusive of:
      </p>
      <div>
        <ul className=" list-inside list-disc flex flex-col gap-1">
          <li>Corporate chauffeur services</li>
          <li>Airport chauffeur services</li>
          <li>Concierge service</li>
          <li>Weddings</li>
          <li>Sightseeing, sports and special event chauffeur services</li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Area2;
