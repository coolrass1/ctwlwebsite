"use client";

import React, { useState } from "react";
import HeroAbout from "../components/HeroAbout";
import GalleryItem from "../components/GalleryItem";
import { gallery1 } from "../components/Data";
import ModalGallery from "../components/ModalGallery";
import ModalGallery2 from "../components/ModalGallery2";
import Area1 from "../components/Area1";
import { area, area1, area9 } from "../components/Data";
import Modal from "../components/Modal";
import { FaPlay } from "react-icons/fa6";
import Bogbutton from "./Bogbutton";

const Aboutcont = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  
  const Handleisopen = () => {
    setIsopen(false);
  };

  return (
    <>
      <ModalGallery2 isOpen={isOpen} Handleisopen={Handleisopen} />
      
      {/* Main Content - Company Overview */}
      <article className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl grid grid-cols-1 gap-7 md:grid-cols-2">
        <section className="flex flex-col gap-3 pt-14">
          <h1 className="text-3xl font-bold text-gray-800">Our Executive Chauffeur Company</h1>
          <div className="h-[3px] w-14 bg-green-900 mb-3" aria-hidden="true"></div>
          
          <p className="mb-3 text-gray-700 leading-relaxed">
            Established for nearly two decades, <strong>Citywide</strong> is a premium executive
            chauffeur service based in London. We specialize in VIP chauffeur services,
            luxury car hire, and bespoke concierge solutions, delivering unparalleled
            professionalism in every journey.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            With over a decade of experience serving corporate executives, professionals,
            and entertainers, we've perfected the art of client satisfaction. Our services
            go beyond transportation - we provide mobile office solutions for business
            clients needing to conduct meetings en route to their destinations.
          </p>
        </section>
        
        <section className="pt-14">
          <div className={isOpen ? "hidden" : "block"}>
            <h2 className="sr-only">Our Fleet Gallery</h2>
            <div 
              onClick={() => setIsopen(true)}
              className="grid grid-cols-2 gap-4"
              role="button"
              aria-label="View our photo gallery"
              tabIndex="0"
            >
              {gallery1?.map((item, key) => (
                <GalleryItem item={item} key={key} />
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* Call to Action Section */}
      <section className="flex flex-col gap-7 mt-7 py-14 md:flex-row md:justify-center md:items-center container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <Bogbutton 
          title="Request a Quote Now" 
          url="/quotes"
          aria-label="Request a chauffeur service quote"
        />
        <Bogbutton 
          title="Learn More About Our Services" 
          url="/about"
          aria-label="Learn about our chauffeur services"
        />
      </section>

      {/* How We Work Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 md:py-14 md:gap-14 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Service Process</h2>
          <div className="h-[3px] w-24 bg-green-900 mb-6" aria-hidden="true"></div>
          
          <figure className="flex w-full md:flex-1 min-h-[450px] justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/images/area22.png)" }}
          >
            <button
              onClick={() => setShowModal(true)}
              className="md:text-3xl border-4 p-7 md:p-7 cursor-pointer text-white rounded-full border-white hover:bg-green-900 transition-colors"
              aria-label="Play video about our services"
            >
              <FaPlay />
            </button>
          </figure>
          
          <Modal
            setShowModal={setShowModal}
            showModal={showModal}
            source="https://www.youtube.com/embed/F2NLxQKqgL0?autoplay=1&mute=1"
            title="Citywide Chauffeur Services Video"
          />
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-gray-800">Premium Chauffeur Experience</h2>
          <div className="h-[3px] w-24 bg-green-900 mb-6" aria-hidden="true"></div>
          
          <p className="text-gray-700 leading-relaxed">
            Citywide London Limited provides impeccable executive chauffeur services
            throughout London and the UK. Our comprehensive services include airport
            transfers, corporate transportation, wedding cars, and special event
            solutions.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            We prioritize vehicle excellence and customer service as the foundation of
            our business. Understanding the need for privacy, comfort, safety, and
            punctuality, we maintain a modern fleet of luxury vehicles paired with
            professionally licensed chauffeurs trained in discretion, reliability,
            and exceptional communication.
          </p>
        </div>
      </section>
    </>
  );
};

export default Aboutcont;