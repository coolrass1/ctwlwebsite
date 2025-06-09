'use client';
import React, { useState } from "react";
import Table from "./Table";
import { FaArrowRight } from "react-icons/fa6";

const CarsOptions = () => {
  const [activeTab, setActiveTab] = useState('specification');
  
  const features = [
    "Extended rear leg room",
    "Climate controlled air conditioning",
    "Electric rear reclining seats",
    "Heated rear seats",
    "On-Board Wi-Fi",
    "Smartphone rear chargers"
  ];

  return (
    <section aria-labelledby="car-details-tabs">
      <h2 id="car-details-tabs" className="sr-only">Car Details</h2>
      
      <div className="flex border-b-2">
        <button
          onClick={() => setActiveTab('specification')}
          className={`px-4 py-2 font-medium ${activeTab === 'specification' ? 'border-b-4 border-b-green-900 text-green-900' : 'text-gray-600'}`}
          aria-current={activeTab === 'specification' ? 'true' : 'false'}
          aria-controls="specification-content"
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab('information')}
          className={`px-4 py-2 font-medium ${activeTab === 'information' ? 'border-b-4 border-b-green-900 text-green-900' : 'text-gray-600'}`}
          aria-current={activeTab === 'information' ? 'true' : 'false'}
          aria-controls="information-content"
        >
          Additional Information
        </button>
      </div>

      <div className="w-full h-auto">
        {activeTab === 'specification' ? (
          <div id="specification-content" aria-labelledby="specification-tab">
            <Table />
          </div>
        ) : (
          <div id="information-content" className="border-2 px-4 py-5" aria-labelledby="information-tab">
            <h3 className="font-normal text-neutral-900 mb-4">
              The BMW 7i Series comes equipped with the following complimentary features:
            </h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 py-1">
                  <span className="text-green-900" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                  <span className="text-sm font-normal text-neutral-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarsOptions;