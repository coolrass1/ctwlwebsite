import Image from "next/image";
import React from "react";
import HerAboutpic from "../components/HerAboutpic";
import Bogbutton from "../components/Bogbutton";
import Animater from "../components/Animater";

const Page = () => {
  return (
    <Animater>
      <HerAboutpic title='url("/images/Heathrow.jpeg")' />

      <section className="container mx-auto px-7 py-10 max-w-screen-xl">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-semibold">Airport Transfer</h1>
            <div className="w-12 h-[2px] bg-green-900" />

            <p>
              When it comes to top-class airport transfer chauffeur service in London, Citywide Executive Chauffeurs is second to none.
              Our extraordinary fleet of vehicles and professional chauffeurs ensure a smooth, luxurious journey after or before your flight.
            </p>
            <p>
              We monitor all flights to ensure our chauffeurs arrive promptly, even in the case of early or delayed landings.
            </p>
            <p>
              Our coverage isn’t just limited to Heathrow and Gatwick — we serve all major London airports.
            </p>
            <p>
              We also offer VIP airport chauffeur services to private charter airports like Farnborough, Luton Private, and Biggin Hill,
              ensuring full coverage of the UK’s premium travel hubs.
            </p>

            <h2 className="text-xl font-semibold pt-4">Waiting Policy</h2>
            <p>
              All flights are monitored, and Citywide offers <span className="font-medium">30 minutes free of any waiting charges</span>,
              giving clients enough time to disembark and collect their belongings.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-semibold">How We Work</h1>
            <div className="w-12 h-[2px] bg-green-900" />
            <Image
              src="/images/airportimage.jpg"
              width={500}
              height={350}
              alt="City of London airport transfer"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </main>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-4">
          <Bogbutton title="Our Services" url="/about" />
          <Bogbutton title="Request a Quote Now" url="/quotes" />
        </div>
      </section>
    </Animater>
  );
};

export default Page;
