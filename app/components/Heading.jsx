"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCheckboxChecked } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "./Logo";
import Mobilemenu from "./Mobilemenu";
import FleetHeader from "./FleetHeader";
import Btn from "./Btn";

const Heading = () => {
  return (
    <section>
      <div className="  hidden md:flex flex-col  gap-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl  ">
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
          <Btn title="quote request" url="/quotes"/>
         
        </div>
        <nav className="hidden md:flex justify-between items-center bg-black text-white">
          <ul className="flex justify-between items-center gap-3">
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/">Home</Link>
            </li>
            <li className=" py-7 px-2 hover:bg-green-600">
              <Link href="/about">About us</Link>
            </li>
            <li className=" relative py-7  hover:bg-green-600 [&>*:nth-child(2)]:hover:z-50 [&>*:nth-child(2)]:hover:opacity-100">
              <Link
                href="/fleet"
                className="flex gap-1 justify-center items-center"
              >
                <span className="pl-2">Fleet</span>
                <MdKeyboardArrowDown className="text-lg" />
              </Link>
              {/* floating  */}
              <ul
                className={` fixed opacity-0 z-[-99] text-black top-[230px]   flex flex-col gap-2 bg-neutral-100 shadow-slate-900 shadow-2xl py-2`}
              >
                <li className=" hover:bg-green-500  py-2 pl-2 pr-28">
                  <Link href="/fleet/BMW-7i-Series">BMW i7 Series </Link>
                </li>
                <li className=" hover:bg-green-500 py-2 pl-2 pr-28">
                  <Link href="/fleet/BMW-7-Series">BMW 7 Series </Link>
                </li>
                <li className=" hover:bg-green-500  py-2 pl-2 pr-28">
                  <Link href="/fleet/Mercedes-s-class">Mercedes S Class </Link>
                </li>
                <li className=" hover:bg-green-500  py-2 pl-2 pr-28">
                  <Link href="/fleet/Mercedes-e-class">Mercedes E Class </Link>
                </li>
                <li className=" hover:bg-green-500 py-2 pl-2 pr-28">
                  <Link href="/fleet/BMW5series">BMW 5 Series </Link>
                </li>
                <li className=" hover:bg-green-500  py-2 pl-2 pr-28">
                  <Link href="/fleet/MercedesViano">Mercedes Viano </Link>
                </li>
                <li className=" hover:bg-green-500  py-2 pl-2 pr-28">
                  <Link href="/fleet/Rolls-Roye-Phantom">Rolls Royce Phantom </Link>
                </li>
                <li className=" hover:bg-green-500 py-2 pl-2 pr-28">
                  <Link href="/">Coaches </Link>
                </li>
              </ul>
              {/* floation */}
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
      <Mobilemenu />
    </section>
  );
};

export default Heading;
