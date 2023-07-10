import Link from "next/link";
import React from "react";


const HeroAbout = () => {
  return (
    <div className="py-24  md:mt-[-45px] flex justify-center items-center min-h-[70px] bg-[#f0f0f0]">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-3xl font-normal">About Citywide</h1>
        <div className="h-[3px] w-14 bg-green-900 mb-3"></div>
        <p className="font-light">
          <Link href="#">Home</Link> {`>`}{" "}
          <span className="capitalize">About Citywide</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
