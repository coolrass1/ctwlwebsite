import React from 'react'
import {TbMathGreater} from 'react-icons/tb'
const Buttonquote = () => {
  return (
    <button className="  px-7 py-2 flex justify-center items-center gap-1 capitalize rounded-full text-white bg-[#025B3F]">
    quote request{" "}
    <span>
      <TbMathGreater />
    </span>
    </button>
  )
}

export default Buttonquote