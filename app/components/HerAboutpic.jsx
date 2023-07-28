import Link from 'next/link'
import React from 'react'

const HerAboutpic = ({title}) => {
    const r='url("/images/wedding.png")'
  return (
    <div className="py-24  md:mt-[-30px] flex justify-center items-center min-h-[70px] bg-[#f0f0f0]"
    style={{backgroundImage:`${title}`, backgroundPosition:"top center", backgroundSize:"cover"}}
    >
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl font-normal">{}</h1>
     
      <p className="font-light">
      
        <span className="capitalize">{}</span>{" "}
      </p>
    </div>
  </div>
  )
}

export default HerAboutpic