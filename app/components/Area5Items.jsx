import React from 'react';
import { FaRegCalendarCheck } from "react-icons/fa6";

const Area5Items = () => {
  return (
    <article 
      className="flex justify-start items-start gap-5 md:w-[450px] xl:w-[600px] md:mb-20 p-4 hover:bg-gray-50 rounded-lg transition-colors"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Icon Container */}
      <div 
        className="flex justify-center items-center border-2 border-green-900 p-5 text-green-900 text-4xl rounded-lg bg-white shadow-sm"
        aria-hidden="true"
      >
        <FaRegCalendarCheck />
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-start justify-start gap-2">
        <h2 
          className="font-bold text-xl xl:text-2xl text-gray-800"
          itemProp="name"
        >
          Easy Online Booking System
        </h2>
        
        <div 
          className="w-16 h-[2px] bg-green-900 mb-4"
          aria-hidden="true"
        ></div>
        
        <p 
          className="text-start text-gray-700 xl:text-lg leading-relaxed"
          itemProp="description"
        >
          Book your luxury chauffeur service effortlessly through our user-friendly platform. 
          Get instant confirmation for airport transfers, corporate travel, or special events 
          - all from the comfort of your home or office.
        </p>

        {/* Hidden structured data for SEO */}
        <meta itemProp="serviceType" content="Chauffeur Service Booking" />
        <meta itemProp="provider" content="Citywide London" />
      </div>
    </article>
  )
}

export default Area5Items;