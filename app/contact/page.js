import React from "react";
import HeroAbout from "../components/HeroAbout";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import ContactForm from "../components/ContactForm";
import Animater from "../components/Animater";

const Page = () => {
  return (
    <Animater>
      <section>
        <HeroAbout title="Contact" />
        <main className="container mx-auto px-7 py-10 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Column - Contact Details */}
          <div className="order-2 md:order-1">
            <h1 className="text-2xl font-semibold mb-3">Contact Details</h1>
            <div className="w-24 h-[2px] bg-green-900 mb-6" />

            <div className="space-y-4">
              <div className="flex items-start gap-3 border-y py-3">
                <FaLocationDot className="text-green-900 mt-1" />
                <p className="w-[80%]">
                  First Floor, 49 Skyline Business Village, Limeharbour, London,
                  E14 9TS, United Kingdom
                </p>
              </div>

              <div className="flex items-start gap-3 border-b py-3">
                <FaPhoneAlt className="text-green-900 mt-1" />
                <p className="w-[80%]">
                  +44 (0) 20 7474 4828 | +44 7484 718117 (WhatsApp)
                </p>
              </div>

              <div className="flex items-start gap-3 border-b py-3">
                <GrMail className="text-green-900 mt-1" />
                <p className="w-[80%]">info@citywidelondon.co.uk</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="order-1 md:order-2">
            <h1 className="text-2xl font-semibold mb-3">Get In Touch</h1>
            <div className="w-24 h-[2px] bg-green-900 mb-6" />

            <p className="mb-4">
              We make sure you have an experienced team member to talk to from
              the start. You will have direct contact with your driver – someone
              who will get to know you, your timetables, routes and preferences.
              We are available 24 hours a day, seven days a week, 365 days a year.
            </p>

            <p className="mb-6">
              We believe in providing a timely and efficient service, so contact
              any of our team members using the number below for further information.
            </p>

            <ContactForm />
          </div>
        </main>
      </section>
    </Animater>
  );
};

export default Page;
