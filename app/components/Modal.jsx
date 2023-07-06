'use client'

import { useState } from "react";

const Modal = ({setShowModal,showModal,source}) => {
   
  return (
    <div onClick={e=>setShowModal(false)} className={ `${showModal?'fixed':'hidden' } inset-0 bg-black/90 flex justify-center items-center`}>
      
        <iframe
          width="760"
          height="515"
          src={source}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      
    </div>
  );
};

export default Modal;
