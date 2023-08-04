'use client'
import React from 'react'
import { useRouter} from 'next/navigation'
import {TbMathGreater} from 'react-icons/tb'
const Buttonquote = ({url}) => {
  const router=useRouter()
    const Handleclick=e=>{
        e.preventDefault()
        router.push(url)
    }

  return (
    <button  onClick ={Handleclick} className="  px-7 py-2 flex justify-center items-center gap-1 capitalize rounded-full text-white bg-[#025B3F]">
    quote request{" "}
    <span>
      <TbMathGreater />
    </span>
    </button>
  )
}

export default Buttonquote