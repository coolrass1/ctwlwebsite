
import React from "react";
import HeroAbout from "../components/HeroAbout";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import ContactForm from "../components/ContactForm";

const page = () => {

  return (
    <section>
      <HeroAbout title="Contact" />
      <main className="grid grid-cols-1  px-7 md:grid-cols-2 gap-3 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
        <div className="order-2 md:order-1 pt-11">
          <h1 className="mb-3">Contact Details</h1>
          <div className="h-[2px] w-24 bg-green-900 mb-7 "></div>
          <div>
            <div className="py-3 border-t-[0.5px] border-b-[0.5px]  flex  justify-start items-center gap-3">
              <div className="flex justify-center items-center text-green-900">
                {" "}
                <FaLocationDot />
              </div>{" "}
              <div className="w-[80%]">
                First Floor, 49 Skyline Business Village, Limeharbour, London,
                E14 9TS, United Kingdom
              </div>
            </div>
            <div className="py-3 border-b-[0.5px] flex  justify-start items-center gap-3">
              <div className="flex justify-center items-center text-green-900">
                {" "}
                <FaPhoneAlt />
              </div>{" "}
              <div className="w-[80%]">
                +44 (0) 20 7474 4828 | +44 7484 718117 (WhatsApp)
              </div>
            </div>
            <div className="py-3 border-b-[0.5px] flex justify-start items-center gap-3">
              <div className="flex justify-center items-center text-green-900">
                {" "}
                <GrMail />
              </div>{" "}
              <div className="w-[80%]">info@citywidelondon.co.uk</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 pt-11">
        <h1 className="mb-3">Get In Touch</h1>
          <div className="h-[2px] w-24 bg-green-900 mb-7 "></div>
          <p className="py-4">
            We make sure you have an experienced team member to talk to from the
            start. You will have direct contact with your driver – someone who
            will get to know you, your timetables, routes and preferences. We
            are available 24hrs a day, seven days a week, and 365 days a year.
          </p>
          <p className="py-4">
            We believe in providing a timely and efficient service, so contact
            any of our team on the number below for further information.
          </p>
        <ContactForm/>
        </div>
      </main>
    </section>
  );
};

export default page;
