import Image from "next/image";
import React from "react";
import HerAboutpic from "../components/HerAboutpic";
import Bogbutton from "../components/Bogbutton";

const page = () => {
  return (
    <div>
      <HerAboutpic title='url("/images/Heathrow.jpeg")' />
      <section className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">

      <main
        className="pt-11 px-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl
 grid grid-cols-1 gap-3 md:grid-cols-2
"
      >
        <div className="flex flex-col gap-3">
          <h1>Airport Transfer</h1>
          <div className="h-[1px] w-12 bg-green-900"></div>
          <p className="py-5">
            When it comes to top class airport transfer chauffeur service in
            London, Citywide executive chauffeurs’ service is second to none.
            Our extraordinary fleet of vehicles, along with ever helpful
            chauffeurs, is something that you can always count on, after a long
            flight or on the way to one.
          </p>
          <p className="py-5">
            We love to serve our clients well and just so that we don’t miss out
            anything, we always make sure to check the status of your flight at
            all times. So, even if your flight happens to be delayed or early,
            we always arrive on time for you.
          </p>
          <p className="py-5">
            Our Airport transfer service is not just limited to Heathrow and
            Gatwick airports, we have a large fleet of vehicles and personnel,
            which allows us to cover airports all around London.
          </p>
          <p className="py-5">
            We also offer VIP airport chauffeur service for private charter
            airports such as Farnborough airport, Luton Private airport and
            Biggin Hill airport as well as most other major private airports
            across the country for your added convenience.
          </p>
          <h2>Waiting Policy</h2>
          <p className="py-5">
            All flights are monitored and Citywide gives every client{" "}
            <span className="text-black">an 30 minutes free of any waiting charges.</span> This allows
            our clients to get off the flight and find the time to collect their
            necessary belongings.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1>How We Work</h1>
          <div className="h-[1px] w-12 bg-green-900"></div>
          <div className="w-full mt-3">
            <Image
              width={500}
              height={500}
              src={"/images/airportimage.jpg"}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              alt="city of london"
            />
          </div>
        </div>
        {/* <div className="pt-7">
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
        </div> */}
        {/* <div className="pt-7">
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
        </div> */}
      </main>
      <div className="mt-7 mx-7 flex flex-col md:flex-row gap-3"> 
      <Bogbutton title=" Our Services" url="/about"/>
        <Bogbutton title=" Request a Quote Now" url="/quotes"/></div>
                </section>
    </div>
  );
};

export default page;
