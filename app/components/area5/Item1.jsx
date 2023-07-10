import React from 'react'
import { FaRegCalendarCheck } from "react-icons/fa6";

const Item1 = () => {
  return (
    <div className=" flex justify-start items-start gap-5 md:w-[450px] xl:w-[600px] md:mb-20 " >
    <div >
      <div className="flex justify-center items-center border-2  border-green-900 p-5 text-green-900 text-4xl">
        {" "}
        <FaRegCalendarCheck />
      </div>
    </div>
    <div className="flex flex-col items-start justify-start gap-2">
      <h1 className='font-extrabold xl:text-2xl'>Easy Online Booking</h1>
      <div className="w-16 h-[2px] bg-green-900 mb-7"></div>
      <p className="text-start xl:text-xl">
        If you are looking for a reliable, friendly chauffeur service look
        no further. Make your booking online from the comfort of your home
        or office.
      </p>
    </div>
    </div>
  )
}

export default Item1