"use client";
import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useSwiperSlide } from 'swiper/react';

const Dotsbullet = ({index, position,setSlideindex}) => {
  
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  useEffect(()=>{
    console.log("position effect")
  },[index])
 
console.log(`Current slide is ${swiperSlide?.isActive ? 'active'+position : 'not active'}`)
  return (
    <div
      onClick={(e) => {swiper.slideTo(parseInt(position).valueOf())
        setSlideindex(parseInt(position).valueOf())}
     }
      className={`w-4 h-4 rounded-full ${parseInt(position).valueOf()===parseInt(index).valueOf()?'bg-slate-200': 'bg-blue-700'}`}
    ></div>
  );
};

export default Dotsbullet;
