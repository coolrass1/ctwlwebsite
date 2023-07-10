import React from "react";
import { FaCar } from "react-icons/fa6";
const Item3 = () => {
  return (
    <div className=" flex justify-start items-start gap-5 md:w-[450px] xl:w-[600px] md:mb-20 ">
      <div>
        <div className="flex justify-center items-center border-2  border-green-900 p-5 text-green-900 text-4xl">
          {" "}
          <FaCar />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="font-extrabold xl:text-2xl">Big Fleet Of Vehicles</h1>
        <div className="w-16 h-[2px] bg-green-900 mb-7"></div>
        <p className="text-start xl:text-xl">
          Choose from our range of executive cars. From the E Class Mercedes to
          the Mercedes Viano for group bookings. All our vehicles provide space
          and comfort perfect for busy executives
        </p>
      </div>
    </div>
  );
};

export default Item3;
