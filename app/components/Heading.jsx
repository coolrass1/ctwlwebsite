'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCheckboxChecked } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import Mobilemenu from "./Mobilemenu";


const Heading = () => {

  return (
    <section>
      <div className="  hidden md:flex flex-col  gap-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-2xl ">
        <div className="hidden md:flex py-2 border-b-2  justify-between items-center text-sm">
          <div>
            <p>Luxury Transport Services London</p>
          </div>
          <div>
            <ul className=" flex justify-start items-center gap-1">
              <li>
                <Link href="/about-citywide-chauffeur-services/">About us</Link>{" "}
                /
              </li>

              <li>
                <Link href="/covid-19-statement/">COVID-19 Statement</Link> /
              </li>

              <li>
                <Link href="/request-a-quote/">Quote Request</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/images/logo.png"
              width={300}
              height={300}
              alt="logo"
              // width={300}
              // height={200}
              // quality={70}
              // alt="logo "
            />
          </div>
          <div className=" hidden md:flex justify-start items-center gap-2">
            <div className="border-r-2 border-l-2 px-5">
              <p className="flex">
                <span className="text-green-600 text-2xl flex justify-center items-center">
                  <BiCheckboxChecked />
                </span>

                <strong>Airport Transfers</strong>
              </p>
              <p> Offered At Short Notice</p>
            </div>
            <div className="border-r-2 px-5">
              <p className="flex">
                <span className="text-green-600 text-2xl flex justify-center items-center">
                  <BiCheckboxChecked />
                </span>
                <strong>Wedding Parties</strong>
              </p>
              <p> Can Be Easily Arranged</p>
            </div>
            <div className="border-r-2 px-5">
              <p className="flex">
                <span className="text-green-600 text-2xl flex justify-center items-center">
                  <BiCheckboxChecked />
                </span>
                <strong>Business Meetings</strong>
              </p>
              <p> You Will Arrive On Time</p>
            </div>
          </div>
          <button className=" hidden px-7 py-2 md:flex justify-center items-center gap-1 capitalize rounded-full text-white bg-[#025B3F]">
            quote request{" "}
            <span>
              <TbMathGreater />
            </span>
          </button>
        </div>
        <nav className="hidden md:flex justify-between items-center bg-black text-white">
          <ul className="flex justify-between items-center gap-3">
            <li  className=" py-7 px-2 hover:bg-green-600">
              <Link href="/">Home</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/about">About us</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/fleet">Fleet</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/quotes">Quotes request</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/weddings">Weddings</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/meetings">Meetings & Events</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/airport">Airport transfer</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/concierge">Concierge</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/contact">Contact</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/booking">Booking</Link>
            </li>
          </ul>
          <div className="flex items-center justify-center mr-5 ">
            <FaSearch />
          </div>
        </nav>
      </div>
      <Mobilemenu/>
    </section>
  );
};

export default Heading;
