import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import HerAboutpic from "../components/HerAboutpic";
import Bogbutton from "../components/Bogbutton";
import Animater from "../components/Animater";

const MeetingPage = () => {
  return (
    <Animater>
      {/* Hero Section */}
      <HerAboutpic title='url("/images/westminster-abby.jpg")' />

      {/* Main Content */}
      <section className="px-7 pt-11 container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left - Meeting Description */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl font-semibold">Meetings & Events</h1>
              <div className="h-[1px] w-12 bg-green-900 mt-2" />
            </div>
            <p>
              Our experienced, professional, and knowledgeable team at Citywide Chauffeur Services offers an expert service to get you to and from your corporate event or meeting on time.
            </p>
            <p>
              Many corporate clients prefer to work on-board. Our luxury corporate cars are equipped with Wi-Fi and chargers, allowing executives to check emails, make calls, hold discussions, and prepare for meetings or conferences. With our London corporate car hire, time-sensitive work continues smoothly in the comfort of our vehicles—without distractions.
            </p>
            <p>
              Every thriving business deserves the services of a proficient chauffeur company—ensuring clients and employees are transported punctually, safely, confidentially, and in total style.
            </p>
          </div>

          {/* Right - How We Work */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl font-semibold">How We Work</h1>
              <div className="h-[1px] w-12 bg-green-900 mt-2" />
            </div>
            <Image
              src="/images/city-of-london.jpeg"
              width={600}
              height={400}
              alt="City of London"
              className="rounded w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <Bogbutton title="Our Services" url="/about" />
          <Bogbutton title="Request a Quote Now" url="/quotes" />
        </div>
      </section>
    </Animater>
  );
};

export default MeetingPage;
