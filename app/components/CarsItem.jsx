//'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";
//import { useRouter } from "next/navigation";

const CarsItem = ({car}) => {
  
  return (
    <Link href={car.url} className=" hover:scale-[110%] max-w-[320px] h-full py-7 gap-7 border-2 flex flex-col justify-start items-start pl-7 cursor-pointer shadow-md  ">
      <div className="flex-1">
        <Image
          src={car?.imageSrc}
          width={300}
          height={300}
          alt="a car"
          priority
          style={{objectFit:"contain"}}
        />
      </div>
      <div className="flex-1 py-7">
        <h1 className="text-start capitalize">{car?.title}</h1>
        <div className="w-12 h-[2px] mt-1 mb-7 bg-green-900"></div>
        <p className="flex gap-2 mb-3">
          <span className="flex justify-center items-center text-green-600">
            <FaCheck />
          </span>
          <span>2 passenger</span>
        </p>
        <p className="flex gap-2">
          <span className="flex justify-center items-center text-green-600">
            <FaCheck />
          </span>{" "}
          <span>2 lugguges</span>
        </p>
      </div>
    </Link>
  );
};

export default CarsItem;
