import React from "react";
import HeroAbout from "../components/HeroAbout";
import HerAboutpic from "../components/HerAboutpic";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <HerAboutpic title='url("/images/wedding.png")' />
      <main
        className="pt-11 px-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl
     grid grid-cols-1 gap-3 md:grid-cols-2
    "
      >
        <div className="flex flex-col gap-3">
          <h1>Prestigious Wedding Cars</h1>
          <div className="h-[1px] w-12 bg-green-900"></div>
          <p className="py-5">
            Citywide London offers an affordable wedding car service, providing
            brides and grooms with the wedding cars of their dreams. You can
            expect a professional and experienced chauffeur driver who will
            chauffeur you in style on your special day, providing you with the
            luxury you deserve on the most important occasion of your life.
          </p>
          <div className="flex items-center gap-1 ">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              We ensure the bride arrives relaxed and in style.
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              Ensure the wedding party and wedding guests arrive promptly before
              the bride.
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              Transfer the Bride and Groom after their reception and onward to
              their honeymoon.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1>How We Work</h1>
          <div className="h-[1px] w-12 bg-green-900"></div>
          <div className="w-full mt-3">
            <Image
              width={500}
              height={500}
              src={"/images/gallery4.png"}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="pt-7">
          <div className="flex ">
            <div className="bg-black text-white flex-1 py-11 ">
              <h5 className="text-center text-xl md:text-start md:ml-3">
              Our Services
              </h5>
            </div>
            <div className=" text-white bg-green-900 flex justify-center items-center px-5">
              <h5 className="text-4xl">{`>`}</h5>
            </div>
          </div>
        </div>
        <div className="pt-7">
          <div className="flex ">
            <div className="bg-black text-white flex-1 py-11  ">
              <h5 className="text-center text-xl md:text-start md:ml-3">
                Request a Quote Now
              </h5>
            </div>
            <div className=" text-white bg-green-900 flex justify-center items-center px-5">
              <h5 className="text-4xl">{`>`}</h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
