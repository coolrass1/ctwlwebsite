"use client";
// some-inner-component.jsx
import { React } from "react";
import { useSwiper } from "swiper/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const NextButton = ({setSlideindex}) => {
  const swiper = useSwiper();
  

  return (
    <button
    className='border-2 z-50 p-2 bg-black/25 text-white text-lg hover:bg-green-900' 
    //   style={{
    //     border: "1px solid gray",
    //     fontSize: "25px",
    //     padding: "15px",
    //     marginRight: "-100px",
    //   }}
      onClick={() =>{
        swiper.isEnd?swiper.slideTo(0,10):swiper.slideNext()
        console.log("clicked index is"+swiper.clickedIndex)
        setSlideindex(swiper.activeIndex)
    } }
    >
      <MdOutlineArrowForwardIos />
    </button>
  );
};

export default NextButton;
