"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import CarsItem from "./CarsItem";
//import { slideTab } from "@/Data";
// Import Swiper styles
import "swiper/css";
import NextButton from "./NextButton";
import Backbutton from "./Backbutton";
import Dotsbullet from "./Dotsbullet";
import { useState } from "react";

const SwiperHolder = () => {
  const [slideindex, setSlideindex]=useState(0)
 
  
  return (
    <div className="mx-7 py-7">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        //slidesPerView={4}
        autoplay
        speed={500}
        pagination
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
        }}
        // effect='cube'
        // cubeEffect={{ slideShadows: false}

        // }

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => {{console.log("slide change"+JSON.stringify(Swiper))}}}
      >
        <SwiperSlide>
          <CarsItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarsItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarsItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarsItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarsItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarsItem />
        </SwiperSlide>

        <span
          className=" pb-14 md:flex md:justify-between  md:gap-6  md:mb-7 md:mr-28"
          slot="container-start"
        >
          <div></div>
          <div className="flex flex-col items-center justify-center pb-7">
            <h1 className="text-xl  font-semibold md:text-3xl capitalize mb-3">
              Citywide fleet
            </h1>
            <div className="w-14 h-[2px] bg-green-700"></div>
          </div>
          <div className=" hidden md:block ">
            <Backbutton setSlideindex={setSlideindex} />
            <NextButton setSlideindex={setSlideindex} />
          </div>
        </span>
        <span
          className=" flex justify-center items-center gap-2 pt-11"
          slot="container-end"
        >
          <Dotsbullet index={slideindex} position={1} setSlideindex={setSlideindex} />
          <Dotsbullet index={slideindex} position={2} setSlideindex={setSlideindex} />
        </span>
      </Swiper>
    </div>
  );
};

export default SwiperHolder;
