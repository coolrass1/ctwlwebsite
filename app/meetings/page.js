import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import HerAboutpic from "../components/HerAboutpic";

const page = () => {
  return (
    <div>
      <HerAboutpic title='url("/images/westminster-abby.jpg")' />
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
        <div className="pt-7">
          <div className="flex ">
            <div className="bg-black text-white flex-1 py-11 ">
              <h5 className="text-center text-xl md:text-start md:ml-3">
                Our Services
              </h5>
            </div>
            <div className=" text-white bg-green-900 flex justify-center items-center px-5">
              <h5 className="text-4xl">{`>`}</h5>
            </div>
          </div>
        </div>
        <div className="pt-7">
          <div className="flex ">
            <div className="bg-black text-white flex-1 py-11  ">
              <h5 className="text-center text-xl md:text-start md:ml-3">
                Request a Quote Now
              </h5>
            </div>
            <div className=" text-white bg-green-900 flex justify-center items-center px-5">
              <h5 className="text-4xl">{`>`}</h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
