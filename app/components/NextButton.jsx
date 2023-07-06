"use client";
// some-inner-component.jsx
import { React } from "react";
import { useSwiper } from "swiper/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const NextButton = ({setSlideindex}) => {
  const swiper = useSwiper();
  

  return (
    <button
    className='border-2 text-sm p-1 ' 
    //   style={{
    //     border: "1px solid gray",
    //     fontSize: "25px",
    //     padding: "15px",
    //     marginRight: "-100px",
    //   }}
      onClick={() =>{swiper.slideNext()
        console.log("clicked index is"+swiper.clickedIndex)
        setSlideindex(swiper.activeIndex)
    } }
    >
      <MdOutlineArrowForwardIos />
    </button>
  );
};

export default NextButton;
