import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import HerAboutpic from "../components/HerAboutpic";
import Bogbutton from "../components/Bogbutton";
import Animater from "../components/Animater";

const page = () => {
  return (
    <div>
          <Animater>
      <HerAboutpic title='url("/images/westminster-abby.jpg")' />
      <section className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">

      <main
        className="pt-11 px-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl
   grid grid-cols-1 gap-3 md:grid-cols-2
  "
      >
        <div className="flex flex-col gap-3">
          <h1>Meetings & Events</h1>
          <div className="h-[1px] w-12 bg-green-900"></div>
          <p className="py-5">
            Our experienced, professional and knowledgeable team at Citywide
            Chauffeur Services offers an expert service to take you to and from
            your corporate event or meeting on time.
          </p>
          <p className="py-5">
            Many of our corporate clients more often want to work on-board. Our
            luxury corporate cars are equipped with Wi-Fi and Chargers so that
            our executive clients are able check e-mails, make phone calls,
            discuss with their business clients, and prepare themselves for
            business conference or meeting. Booking our London corporate car
            hire, your time sensitive work can be continued in the comfort of
            our luxurious cars without any possible distraction.
          </p>
          <p className="py-5">
            Every thriving business deserves the services of a proficient
            chauffeur company to help transport clients and employees
            punctually, safely, confidentially and in total style.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1>How We Work</h1>
          <div className="h-[1px] w-12 bg-green-900"></div>
          <div className="w-full mt-3">
            <Image
              width={500}
              height={500}
              src={"/images/city-of-london.jpeg"}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              alt="city"
            />
          </div>
        </div>
      
      </main>
      <div className="mt-7 mx-7 flex flex-col md:flex-row  gap-3"> 
      <Bogbutton title=" Our Services" url="/about"/>
        <Bogbutton title=" Request a Quote Now" url="/quotes"/></div>
                </section>
                </Animater>
    </div>

  );
};

export default page;
