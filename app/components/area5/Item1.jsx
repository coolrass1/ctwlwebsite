import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import SectionAnim from "../SectionAnim";

const Item1 = () => {
  return (
    <div className="flex items-start gap-5 md:w-[450px] xl:w-[600px] mb-10 md:mb-20">
      {/* Icon Box */}
      <div
        className="flex justify-center items-center border-2 border-green-900 p-5 text-green-900 text-4xl"
        aria-label="Calendar icon"
      >
        <FaRegCalendarCheck />
      </div>

      {/* Animated Content */}
      <SectionAnim>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-xl xl:text-2xl">
            Easy Online Booking
          </h1>
          <div className="w-16 h-[2px] bg-green-900 mb-4"></div>
          <p className="text-sm xl:text-lg text-start text-neutral-700">
            If you're looking for a reliable, friendly chauffeur service, look no further.
            Make your booking online from the comfort of your home or office.
          </p>
        </div>
      </SectionAnim>
    </div>
  );
};

export default Item1;
