import React from "react";
import HeroAbout from "../components/HeroAbout";
import CarsItem from "../components/CarsItem";
import { FaArrowRight } from "react-icons/fa";
import { carsmain } from "../components/Data";
import FleetSidebar from "../components/FleetSidebar";

const page = () => {
  return (
    <section>
      <HeroAbout title="Our Fleet" />
      <div className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl md:grid md:grid-cols-3">
        <div className="py-7  px-10 col-span-2">
          <h1>Our fleet</h1>
          <div className="w-24 h-[3px] bg-green-900 mb-7"></div>
          <main className=" grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-7 ">
            {/* <CarsItem />
            <CarsItem />
            <CarsItem />
            <CarsItem />
            <CarsItem />
            <CarsItem /> */}
            {carsmain?.map(car=><CarsItem key={car} car={car}/>)}
          </main>
        </div>
       <FleetSidebar/>
      </div>
    </section>
  );
};

export default page;
