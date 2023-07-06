'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";

const Mobilemenu = () => {
    const [openNav, setOpenNav]=useState(false)
    const HandleClick=e=>{
        e.preventDefault()
        setOpenNav(!openNav)
      
    }
  return (
    <div className=" md:hidden">
        <Logo />
        <div className="py-3  pr-3 flex justify-end items-center">
          <div className="flex items-center justify-center mr-5 ">
            <FaSearch />
          </div>
          <div onClick={HandleClick} className="flex items-center justify-center mr-3 text-3xl ">
            <GiHamburgerMenu />
          </div>
        </div>
        <ul className={`${openNav?'block':'hidden'} fixed  left-0 right-0 flex flex-col justify-start  py-3 items-start gap-1 text-white  bg-black`}>
            <li className=" w-full px-2 py-2 hover:bg-green-600">
              <Link href="#">Home</Link>
            </li>
            <li className=" w-full px-2 py-2 hover:bg-green-600">
              <Link href="#">About us</Link>
            </li>
            <li className="  w-full px-2  py-2  hover:bg-green-600">
              <Link href="#">Fleet</Link>
            </li>
            <li className="  w-full px-2  py-2 hover:bg-green-600">
              <Link href="#">Quotes request</Link>
            </li>
            <li className=" w-full px-2  py-2 hover:bg-green-600">
              <Link href="#">Weddings</Link>
            </li>
            <li className=" w-full px-2  py-2 hover:bg-green-600">
              <Link href="#">Meetings & Events</Link>
            </li>
            <li className=" w-full px-2  py-2 hover:bg-green-600">
              <Link href="#">Airport transfer</Link>
            </li>
            <li className="  w-full px-2  py-2 hover:bg-green-600">
              <Link href="#">Concierge</Link>
            </li>
            <li className=" w-full px-2  py-2 hover:bg-green-600">
              <Link href="#">Contact</Link>
            </li>
            <li className=" w-full  px-2 hover:bg-green-600">
              <Link href="#">Booking</Link>
            </li>
          </ul>
      </div>
  )
}

export default Mobilemenu