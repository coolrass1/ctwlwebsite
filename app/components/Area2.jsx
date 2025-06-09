import React from "react";
import { FaCar } from "react-icons/fa6";

const Area2 = () => {
  return (
    <section 
      className="py-14 bg-gray-50"
      aria-label="About Citywide London chauffeur services"
    >
      <div className="flex flex-col gap-8 px-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl">
        {/* Company Header */}
        <header className="flex gap-7 items-center">
          <div 
            className="p-4 text-2xl md:p-7 flex justify-center border-2 border-green-900 items-center text-green-900 md:text-4xl rounded-lg"
            aria-hidden="true"
          >
            <FaCar />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 capitalize">
              Premium Chauffeur Services in London
            </h2>
            <div 
              className="w-24 h-[3px] bg-green-900"
              aria-hidden="true"
            ></div>
          </div>
        </header>

        {/* Company Description */}
        <p className="md:w-2/3 md:leading-8 text-gray-700">
          <strong>Citywide London</strong> is a premier chauffeur service provider in the UK. 
          With years of experience in luxury transportation across London, we deliver:
        </p>
        
        {/* Services List */}
        <ul className="list-inside list-disc flex flex-col gap-2 pl-5 text-gray-700">
          <li className="hover:text-green-900 transition-colors">
            <strong>Corporate chauffeur services</strong> - Reliable executive transport
          </li>
          <li className="hover:text-green-900 transition-colors">
            <strong>Airport transfers</strong> - Punctual Heathrow, Gatwick & other airport services
          </li>
          <li className="hover:text-green-900 transition-colors">
            <strong>Concierge services</strong> - Bespoke travel solutions
          </li>
          <li className="hover:text-green-900 transition-colors">
            <strong>Wedding cars</strong> - Luxury vehicles for your special day
          </li>
          <li className="hover:text-green-900 transition-colors">
            <strong>Event transportation</strong> - Sports, sightseeing & special occasions
          </li>
        </ul>

        {/* Key Features */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-green-900 mb-2">24/7 Availability</h3>
            <p>Round-the-clock service for your convenience</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-green-900 mb-2">PCO Licensed</h3>
            <p>Fully vetted professional drivers</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-green-900 mb-2">Luxury Fleet</h3>
            <p>Mercedes, BMW & premium vehicles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Area2;