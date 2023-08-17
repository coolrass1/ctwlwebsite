'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaFacebookF,} from "react-icons/fa6";
import {  FaPhoneAlt,FaInstagramSquare,FaLinkedinIn, FaTwitter,FaYoutube } from "react-icons/fa";
import {  GrMail } from "react-icons/gr";


const Footer = () => {
  return (
    <section className="bg-black text-white mt-16">
      <div className="py-5 md:text-sm md:grid md:grid-cols-3 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
        <div className=" px-6">
          <h1 className="mb-2 text-xl">About us</h1>
          <div className="w-24 h-[3px] bg-green-900 "></div>
          <p className="my-7 md:leading-6">
            Citywide promises to provide a quality, competitively priced, safe
            and reliable chauffeur driven, luxury vehicle hire service, for your
            professional and personal travel itineraries around the London area.
          </p>
          <p className="mb-5  md:leading-6">
            ABOUT US Citywide promises to provide a quality, competitively
            priced, safe and reliable chauffeur driven, luxury vehicle hire
            service, for your professional and personal travel itineraries
            around the London area. We offer our account clients the use of our
            Concierge Service in order to make your busy life that little bit
            easier and stress free.
          </p>
          <Link href="#">Read more about Citywide</Link>
        </div>
        <div className=" py-9 mx-7 md:py-0">
          <h1 className="mb-2 text-xl uppercase">Licensed by tfl</h1>
          <div className="w-24 h-[3px] bg-green-900 mb-6 "></div>
          <p className="my-2">
            Official licensed private hire operator. Licensed by Transport for
            London.
          </p>
          <div className="w-full">
            <Image
              src="/images/Licence.png"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
              alt="footer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 mx-7">
          <h1 className="mb-2 text-xl uppercase">Contacy details</h1>
          <div className="w-24 h-[3px] bg-green-900 mb-6"></div>
          <div className="flex gap-3  items-center">
            <div className="flex  justify-center items-center text-lg">
              <FaLocationDot />
            </div>
            <h5 className="w-3/4">
              49 Skyline Business Village, Limeharbour, E14 9TS
            </h5>
          </div>
          <div className="flex gap-3  items-center">
            <div className="flex  justify-center items-center text-lg">
              <FaPhoneAlt />
            </div>
            <h5 className="">
              <p>+4420 7474 4828</p>
              <p>24 hours 7 days a week</p>
            </h5>
          </div>
          <div className="flex gap-3  items-center">
            <div className="flex  justify-center items-center text-lg">
              <GrMail />
            </div>
            <h5 className="">
              <p>info@citywidelondon.co.uk</p>
              <p>we reply withon 24hrs</p>
            </h5>
          </div>
          <p>Terms conditions</p>
          <p>Privacy</p>
          
        </div>
      </div>
      <hr/>
      <div className="flex justify-center items-center min-h-[75px]">
        <div className="flex justify-center items-center gap-2"><FaFacebookF/><FaInstagramSquare/><FaLinkedinIn/><FaTwitter/><FaYoutube/></div>
      </div>
    </section>
  );
};

export default Footer;
