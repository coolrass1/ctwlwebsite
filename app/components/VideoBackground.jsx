import React from "react";
import BookForm3 from "./BookForm3";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";

const VideoBackground = () => {
  return (
    <div className="relative h-screen">
     <video
    className="w-full h-full object-cover absolute top-0 left-0 z-0"
    autoPlay
    muted
    loop
  >
<source src="/images/bg.mp4" type="video/mp4"></source>
  </video>

    

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-20">
     <div className="pl-10 animate-pulse">
        <h1 className="text-2xl text-white uppercase mb-7 ">Enjoy your ride with us</h1>
        <Link href="/booking"className="px-16 py-2 bg-green-900 rounded-md text-white">BOOK NOW</Link>
        </div>
      
      </div>
    </div>
  );
};

export default VideoBackground;
