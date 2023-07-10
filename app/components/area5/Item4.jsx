import React from "react";
import { FaCcVisa} from "react-icons/fa6";

const Item4 = () => {
  return (
    <div className=" flex justify-start items-start gap-5 md:w-[450px] xl:w-[600px] md:mb-20 ">
      <div>
        <div className="flex justify-center items-center border-2  border-green-900 p-5 text-green-900 text-4xl">
          {" "}
          <FaCcVisa/>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="font-extrabold xl:text-2xl">Online Payment</h1>
        <div className="w-16 h-[2px] bg-green-900 mb-7"></div>
        <p className="text-start xl:text-xl">
          We accept all major credit and debit cards. You can also pay via our
          PayPal facilities.
        </p>
      </div>
    </div>
  );
};

export default Item4;
