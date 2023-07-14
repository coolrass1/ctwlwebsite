"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { bmw7icars } from "./Data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Backbutton from "./Backbutton";
import NextButton from "./NextButton";

const SwiperFleetItem = () => {
  const [slideindex, setSlideindex] = useState(0);
  return (
    <div className="w-screen mr-3 md:w-auto">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        // install Swiper modules
        
        spaceBetween={50}
      

        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
           
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
        }}
       
      
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {bmw7icars?.map((car, index) => (
    
            <SwiperSlide key={index}>
              <Image
            
                src={car.imageSrc}
                alt='BMW7iSeries'
                width={700}
                height={600}
                className=" cursor-pointer w-[350]  object-cover h-[210px] md:object-cover md:h-[420px] md:w-[720px]"
                // style={{ objectFit: "cover" , width:"100%" , height:"100%"}}
              />
              {/* <img
              src={car.imageSrc}
              alt='cars '
                 <div className=" translate-y-[-120px] absolute    flex justify-between items-center w-[80vw]  z-[999]">
            {" "}
            <Backbutton className="  px-11 z-50" />{" "}
            <Nextbutton className="  px-11 z-50" />
          </div>
              
              
            /> */}
            </SwiperSlide>
      
        ))}
        <span
          className=" flex justify-center items-center gap-2 "
          slot="container-end"
        >
           <div   className=" translate-y-[-250px] flex justify-between w-full z-50 pr-12 ">
           <Backbutton setSlideindex={setSlideindex} />
          <NextButton setSlideindex={setSlideindex} />
          </div>
        </span>
      </Swiper>
    </div>
  );
};

export default SwiperFleetItem;
