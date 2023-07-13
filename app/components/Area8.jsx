"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

import Testimonial from "./Testimonial";
import SwiperTestimonial from "./SwiperTestimonial";
import GalleryItem from "./GalleryItem";
import { gallery } from "./Data";
import ModalGallery from "./ModalGallery";

const Area8 = () => {
  const [isOpen, setIsopen] = useState(false);
  const Handleisopen = () => {
    setIsopen(false);
  };
  return (
    <section>
      <ModalGallery isOpen={isOpen} Handleisopen={Handleisopen} />
      <div
        className={` ${
          isOpen
            ? "opacity-0 hidden tranlate-y-[2000px]"
            : " block opacity-100 tranlate-y-[1px]"
        } transition container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl mb-14 pb-5 grid grid-cols-1 md:grid-cols-2 md:gap-14`}
      >
        <div>
          <h1 className="text-xl text-center">Photo Gallery</h1>
          <div className="w-14 h-[2px] bg-green-900 mx-auto mb-10 mt-2"></div>
          <div
            onClick={(e) => setIsopen(true)}
            className="grid grid-cols-2 gap-7"
          >
            {gallery?.map((item, key) => (
              <GalleryItem item={item} key={key} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl text-center">testimonial</h1>
          <div className="w-14 h-[2px] bg-green-900 mx-auto mb-10 mt-2"></div>
          <SwiperTestimonial />
        </div>
      </div>
    </section>
  );
};

export default Area8;
