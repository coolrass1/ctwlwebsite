"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";

import { FaRegWindowClose } from "react-icons/fa";

import { gallery } from "./Data";

const ModalGallery = ({ isOpen, Handleisopen }) => {
  const [close, setclose]=useState(false)
  const rr = gallery[1];
  const [Showpicture, setShowpicture] = useState(rr);
  useCallback(()=>{Handleisopen()},[close])
  return (
    <div
      className={` ${
        isOpen ? "fixed" : "hidden"
      } inset-0 flex  bg-black shadow-lg justify-center items-center`}
    >
      
      <div className=" z-[999] flex flex-col items-center justify-center">
        <div className=" relative w-full max-h-screen  mx-3 md:w-[750px] md:h-[500px] bg-transparent ">
        
          <Image
            src={Showpicture?.gurl}
            alt="pic"
            width={770}
            height={370}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex z-50 translate-y-36 md:translate-y-0 gap-3">
          {gallery.map((item, key) => (
            <button
              onClick={(e) => {e.preventDefault();setShowpicture(item)}}
              key={key}
              className="w-10 h-10 cursor-pointer "
            >
              <Image
                src={item?.gurl}
                alt="pic"
                width={370}
                height={370}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </button>
            
          ))}
            <button
            onClick={(e) => {Handleisopen()} }
            className=" md:translate-y-[-500px]  md:translate-x-[250px] cursor-pointer text-5xl text-white  bg-green-900 "
          >
            <FaRegWindowClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalGallery;
