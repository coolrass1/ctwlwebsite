import React from 'react'
import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im'
const Testimonial = ({testimonial}) => {
  return (
    <div>
    <div className=" px-14 pt-14 pb-3">
        <div className=" flex gap-3">
        <div className="text-5xl text-green-900 mt-[-20px] "><ImQuotesLeft/></div>
      <p className="leading-7 text-center">
        fast and professional, citywide london got me to my business
        meeting ontime and in style, really looking forward to next time
        I travel with you guys !
       
      </p>
      <div className="text-5xl text-green-900"><ImQuotesRight/></div>
      </div>
      <div className="h-14 w-14 bg-neutral-50"></div>
      <h5 className="text-center ">{testimonial?.name}</h5>
    </div>
  </div>
  )
}

export default Testimonial