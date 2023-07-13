'use client'

import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({setShowModal,showModal,source}) => {
   
  return (
    <div onClick={e=>setShowModal(false)} className={ `${showModal?'fixed':'hidden' } inset-0 bg-black/90 flex justify-center items-center min-w-[70%]`}>
      
        <iframe
          width="760"
          height="515"
          src={source}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      <div className="cursor-pointer border-2 p-1 text-3xl text-green-900 bg-white fixed top-20 right-80"><FaWindowClose/></div>
    </div>
  );
};

export default Modal;
