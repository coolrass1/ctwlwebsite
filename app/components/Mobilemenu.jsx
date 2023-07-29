"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaRegWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";

import Logo from "./Logo";

const Mobilemenu = () => {
  const router = useRouter();

  const [openNav, setOpenNav] = useState(false);
  const HandleClick = (e) => {
    e.preventDefault();
    setOpenNav(!openNav);
  };
  return (
    <div className=" md:hidden">
      <Logo />
      <div className="py-3  pr-3 flex justify-end items-center">
        <div className="flex items-center justify-center mr-5 ">
          <FaSearch />
        </div>
        <button
          onClick={HandleClick}
          className="flex items-center justify-center mr-3 text-3xl "
        >
          {openNav ? <FaRegWindowClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <ul
        className={`${
          openNav
            ? "relative h-auto opacity-100  z-50"
            : " opacity-0 h-0  hidden  z-[-99]"
        }  left-0 right-0 transition-all ease-in duration-[5000] flex flex-col justify-start  py-7 pb-[120px] items-start gap-1 text-white  bg-black`}
      >
        <li
          onClick={(e) => {
            router.push("/");
            setOpenNav(false);
          }}
          className=" w-full px-2 py-2 hover:bg-green-600"
        >
          <Link href="#">Home</Link>
        </li>
        <li
          onClick={(e) => {
            router.push("/about");
            setOpenNav(false);
          }}
          className=" w-full px-2 py-2 hover:bg-green-600"
        >
          <Link href="/fleet">About us</Link>
        </li>
        <li
          onClick={(e) => {
            setOpenNav(false);
          }}
          className="  w-full px-2  py-2  "
        >
          <Link href="/fleet">Fleet</Link>
          {/* floating  */}
          <ul className={` flex flex-col `}>
            <li
              onClick={(e) => {
                router.push("/fleet/BMW-7i-Series");
                setOpenNav(false);
              }}
              className=" hover:bg-green-500  py-2 pl-2 pr-28"
            >
              <Link href="/fleet/BMW-7i-Series">BMW 7i Series </Link>
            </li>
            <li
           
              className=" hover:bg-green-500 py-2 pl-2 pr-28"
            >
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
        <li className="  w-full px-2  py-2 hover:bg-green-600">
          <Link href="/quotes">Quotes request</Link>
        </li>
        <li className=" w-full px-2  py-2 hover:bg-green-600">
          <Link href="/weddings">Weddings</Link>
        </li>
        <li className=" w-full px-2  py-2 hover:bg-green-600">
          <Link href="/meetings">Meetings & Events</Link>
        </li>
        <li className=" w-full px-2  py-2 hover:bg-green-600">
          <Link href="/airport">Airport transfer</Link>
        </li>
        <li className="  w-full px-2  py-2 hover:bg-green-600">
          <Link href="/concierge">Concierge</Link>
        </li>
        <li className=" w-full px-2  py-2 hover:bg-green-600">
          <Link href="#">Contact</Link>
        </li>
        <li className=" w-full  px-2 hover:bg-green-600">
          <Link href="/booking">Booking</Link>
        </li>
      </ul>
    </div>
  );
};

export default Mobilemenu;
