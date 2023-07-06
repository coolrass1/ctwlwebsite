"use client";
import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useSwiperSlide } from "swiper/react";

const DotsTestimonial = ({ position, index }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  return (
    <div
      onClick={(e) => {
        console.log('index clicked is ..'+ index)
        swiper.slideTo(parseInt(position).valueOf());
        //setSlideindex(parseInt(position).valueOf())
      }}
      className={`w-4 h-4 rounded-full ${
        parseInt(position).valueOf() === parseInt(index).valueOf()
          ? "bg-slate-200"
          : "bg-blue-700"
      }`}
    ></div>
  );
};

export default DotsTestimonial;
