"use client";
// some-inner-component.jsx
import { React } from "react";
import { useSwiper } from "swiper/react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Backbutton = ({setSlideindex}) => {
  const swiper = useSwiper();

  return (
    <button
     
      className='border-2 text-sm p-1 ' 
      //style={{ border: "1px solid gray", fontSize: "25px", padding: "15px" }}
      onClick={() => {swiper.slidePrev()
        console.log(swiper.activeIndex)
        setSlideindex(swiper.activeIndex)}}
    >
      <MdOutlineArrowBackIos />
    </button>
  );
};

export default Backbutton;
