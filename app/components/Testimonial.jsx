import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="px-6 sm:px-14 pt-14 pb-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-start gap-2 text-green-900 text-4xl sm:text-5xl">
          <ImQuotesLeft aria-label="quote start" />
        </div>

        <p className="max-w-xl text-neutral-700 leading-7">
          {testimonial?.quote || "Citywide London got me to my meeting on time and in style. Looking forward to next time I travel with you guys!"}
        </p>

        <div className="flex items-end justify-end text-green-900 text-4xl sm:text-5xl">
          <ImQuotesRight aria-label="quote end" />
        </div>

        <div className="h-14 w-14 rounded-full bg-neutral-200 mt-2" />

        <h5 className="text-md font-semibold text-neutral-800">
          {testimonial?.name || "John Doe"}
        </h5>
      </div>
    </div>
  );
};

export default Testimonial;
