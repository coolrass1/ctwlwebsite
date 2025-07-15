"use client";
import React, { useState } from "react";
import SwiperTestimonial from "./SwiperTestimonial";
import GalleryItem from "./GalleryItem";
import { gallery } from "./Data";
import ModalGallery from "./ModalGallery";

const Area8 = () => {
  const [isOpen, setIsopen] = useState(false);
  
  return (
    <section className="bg-gray-50 py-14">
      <div className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl mb-14 pb-5 grid grid-cols-1 md:grid-cols-2 md:gap-14">
        {/* Photo Gallery Section */}
        <div className="mb-10 md:mb-0">
          <h2 className="text-2xl text-center font-bold text-gray-800">Our Luxury Fleet Gallery</h2>
          <div 
            className="w-14 h-[2px] bg-green-900 mx-auto mb-10 mt-2"
            aria-hidden="true"
          ></div>
          <div 
            onClick={() => setIsopen(true)}
            className="grid grid-cols-2 gap-4 cursor-pointer"
            role="button"
            aria-label="View our photo gallery"
            tabIndex="0"
          >
            {gallery?.map((item, key) => (
              <GalleryItem item={item} key={key} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h2 className="text-2xl text-center font-bold text-gray-800">Client Testimonials</h2>
          <div 
            className="w-14 h-[2px] bg-green-900 mx-auto mb-10 mt-2"
            aria-hidden="true"
          ></div>
          <SwiperTestimonial />
        </div>
      </div>

      <ModalGallery 
        isOpen={isOpen} 
        Handleisopen={() => setIsopen(false)} 
        ariaLabel="Luxury fleet gallery modal"
      />
    </section>
  );
};

export default Area8;