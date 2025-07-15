'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const CarsItem = ({ car }) => {
  return (
    <article className="hover:scale-[102%] transition-transform duration-200 max-w-[320px] h-full py-7 gap-7 border-2 flex flex-col justify-start items-start pl-7 cursor-pointer shadow-md group">
      <Link 
        href={car.url} 
        className="w-full h-full flex flex-col"
        aria-label={`View details of ${car.title}`}
      >
        <div className="flex-1 w-full relative h-48">
          <Image
            src={car?.imageSrc}
            fill
            alt={`${car?.title} luxury vehicle`}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex-1 py-7">
          <h2 className="text-start capitalize text-xl font-semibold text-gray-900 group-hover:text-green-900">
            {car?.title}
          </h2>
          <div className="w-12 h-[2px] mt-1 mb-7 bg-green-900"></div>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <span className="text-green-600" aria-hidden="true">
                <FaCheck />
              </span>
              <span>2 passengers</span>
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-green-600" aria-hidden="true">
                <FaCheck />
              </span>
              <span>2 luggages</span>
            </li>
            {car.features?.map((feature, index) => (
              <li key={index} className="flex gap-2 items-center">
                <span className="text-green-600" aria-hidden="true">
                  <FaCheck />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
};

export default CarsItem;