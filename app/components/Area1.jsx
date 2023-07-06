'use client'
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import {FaPlay} from 'react-icons/fa6'
import Modal from "./Modal";

const Area1 = ({ctp}) => {
  const [showModal, setShowModal]=useState(false)
  return (
    <section className="bg-black py-0 text-white md:flex ">
      <article className="px-7 py-5 flex flex-col gap-4 md:flex-1">
        <h1 className="text-2xl">{ctp?.title}</h1>
        <div className="h-[5px] w-[40px] bg-green-900"></div>
        <p className="text-sm  py-5 leading-7 md:text-base md:leading-9">
          {/* Book a luxury chauffeur driven Mercedes S Class, BMW 7 Series,
          executive Mercedes E class, Mercedes Viano, or BMW 5 Series featuring
          extended rear leg room, on-board Wi-fi, climate controlled air
          conditioning, and more. We take pride in being a fully Licensed
          Operator, with a team of highly skilled, CRB checked drivers, so you
          can rely on us, as you need a transportation service you can rely on. */}
        {ctp?.content}
        </p>
        <ButtonComponent title={ctp?.btncontent} />
      </article>
      <article
        className="hidden md:flex  md:flex-1 h-[420px] justify-center items-center"
        style={{ backgroundImage: `${ctp?.urllink} ` , backgroundPosition:'center center' , backgroundRepeat:'no-repeat', backgroundSize:"850px"}}
      >
       <div onClick={e=>setShowModal(true)} className="text-3xl border-4 p-7 rounded-full border-white"><FaPlay/></div>
      </article>
      <Modal setShowModal={setShowModal} showModal={showModal} source={ctp?.source}/>
    </section>
  );
};

export default Area1;
