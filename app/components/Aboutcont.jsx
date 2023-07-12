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
const Aboutcont = () => {
    const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const Handleisopen = () => {
    setIsopen(false);
  };
  return (
    <>  <ModalGallery2 isOpen={isOpen} Handleisopen={Handleisopen} />
    <HeroAbout title="About us" />
    <main className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-2xl grid grid-cols-1  gap-7 md:grid-cols-2">
      <div className="flex flex-col gap-3 pt-14">
        <h1 className="text-2xl">Our Company</h1>{" "}
        <div className="h-[3px] w-14 bg-green-900 mb-3"></div>
        <p className="mb-3">
          Established for nearly two decades, Citywide is an executive
          chauffeur company of the highest quality. Professionalism comes as
          standard with both our VIP Chauffeur Service, Chauffeur Car Hire and
          concierge services. We pride ourselves on a customised service,
          tailored to suit your needs offering a combination of comfort and
          safety on the road. Citywide London chauffeur and concierge services
          focus on providing the best possible service and experience for our
          customers.
        </p>
        <p>
          Through our history of more than a decade of chauffeuring corporate
          high-fliers, professionals, entertainers and their families, you
          will experience client satisfaction at its peak. That is why we
          provide a service not only to transport our business clients to
          important meetings but also to provide executive chauffeur service
          with facilities for on board meetings.
        </p>
      </div>
      <div className="pt-14">
        <div
          className={` ${
            isOpen
              ? "opacity-0 hidden tranlate-y-[2000px]"
              : " block opacity-100 tranlate-y-[1px]"
          }`}
        >
          {/* <h1 className="text-xl text-center">Photo Gallery</h1>
        <div className="w-14 h-[2px] bg-green-900 mx-auto mb-10 mt-2"></div> */}
          <div
            onClick={(e) => setIsopen(true)}
            className="grid grid-cols-2 gap-7"
          >
            {gallery1?.map((item, key) => (
              <GalleryItem item={item} key={key} />
            ))}
          </div>
        </div>
      </div>
    </main>
    <main className="flex flex-col gap-7 mt-7 py-14 md:flex-row  md:justify-center md:items-center container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <div className="flex md:flex-1">
        <div className="bg-black text-white flex-1 py-14  ">
          <h5 className="text-center text-2xl md:text-start md:ml-3">
            Request a Quote Now
          </h5>
        </div>
        <div className=" text-white bg-green-900 flex justify-center items-center px-5">
          <h5 className="text-4xl">{`>`}</h5>
        </div>
      </div>
      <div className="flex md:flex-1">
        <div className="bg-black text-white flex-1 py-14 ">
          <h5 className="text-center text-2xl md:text-start md:ml-3">
            Learn More About Our Services
          </h5>
        </div>
        <div className=" text-white bg-green-900 flex justify-center items-center px-5">
          <h5 className="text-4xl">{`>`}</h5>
        </div>
      </div>
    </main>
    <main className="grid grid-cols-1 md:grid-cols-2 md:py-14 md:gap-14 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <div className="">
        <h1 className="mb-2">How we work</h1>
        <div className="h-[3px] w-24 bg-green-900"> </div>
        {/* <Area1 ctp={area1}/> */}
        <article
          className="  flex w-full md:flex  md:flex-1 min-h-[450px] md:h-full justify-center items-center"
          style={{
            backgroundImage: `${"url(/images/area22.png)"} `,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "850px",
          }}
        >
          <div
            onClick={(e) => setShowModal(true)}
            className="md:text-3xl border-4  p-7 md:p-7 cursor-pointer text-white rounded-full border-white"
          >
            <FaPlay />
          </div>
        </article>
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          source={
            "https://www.youtube.com/embed/F2NLxQKqgL0?autoplay=1&mute=1"
          }
        />
      </div>
      <div className="flex flex-col gap-5">
        {" "}
        <h1>How we work</h1>
        <div className="h-[3px] w-24 bg-green-900"> </div>
        <p>
          Citywide London Limited operates an impeccable executive chauffeur
          service throughout London and the UK. We offer a wide range of
          chauffeur services which includes airport pickup and drop off,
          business meetings, weddings, and special events. Our luxury fleets
          assure to bring a definite touch of class to your journeys.
        </p>
        <p>
          Vehicle quality along with excellent customer service is the most
          important aspect of the citywide business culture. We understand the
          need for privacy, comfort, safety and punctuality when you book a
          car with us. Our modern and prestigious fleet of luxury cars are
          teamed with licensed professional chauffeurs who have all been well
          trained in the art of effective communication, reliability and
          discretion.
        </p>
      </div>
    </main></>
  )
}

export default Aboutcont