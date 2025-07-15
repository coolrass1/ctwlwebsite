'use client'
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { FaPlay } from 'react-icons/fa6'
import Modal from "./Modal";
import SectionAnim from "./SectionAnim";

const Area1 = ({ ctp }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <section 
      className="bg-black py-0 text-white md:flex"
      aria-label={ctp?.title || "Service information section"}
    >
      {/* Text Content Section */}
      <article 
        className="px-7 py-5 flex flex-col gap-4 md:flex-1"
        itemScope
        itemType="https://schema.org/Service"
      >
        <h1 className="text-2xl font-bold" itemProp="name">
          {ctp?.title || "Premium Chauffeur Services"}
        </h1>
        
        <div 
          className="h-[5px] w-[40px] bg-green-900" 
          aria-hidden="true"
        ></div>
        
        <SectionAnim>
          <p 
            className="text-sm py-5 leading-7 md:text-base md:leading-9"
            itemProp="description"
          >
            {ctp?.content || (
              <>
                Book a luxury chauffeur-driven Mercedes S Class, BMW 7 Series,
                executive Mercedes E class, or BMW 5 Series featuring extended 
                leg room, Wi-Fi, climate control, and more. Our fully licensed 
                operators provide reliable transportation with professional, 
                background-checked drivers.
              </>
            )}
          </p>
        </SectionAnim>
        
        <ButtonComponent 
          title={ctp?.btncontent || "Book Now"} 
          url={ctp?.btnurl || "/booking"}
          aria-label={`${ctp?.btncontent || "Book"} our chauffeur service`}
        />
      </article>

      {/* Image/Video Section */}
      <article 
        className="hidden md:flex md:flex-1 h-[420px] justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctp?.urllink})` }}
        role="img"
        aria-label={ctp?.imageAlt || "Luxury chauffeur vehicle"}
      >
        <button
          onClick={() => setShowModal(true)}
          className="text-3xl border-4 p-7 rounded-full border-white cursor-pointer hover:bg-green-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Play service video"
          aria-haspopup="dialog"
        >
          <FaPlay />
        </button>
      </article>

      {/* Video Modal */}
      <Modal 
        setShowModal={setShowModal} 
        showModal={showModal} 
        source={ctp?.source}
        title={ctp?.modalTitle || "Our Chauffeur Service Video"}
      />
    </section>
  );
};

export default Area1;