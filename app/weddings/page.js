import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import HerAboutpic from "../components/HerAboutpic";
import Bogbutton from "../components/Bogbutton";
import Animater from "../components/Animater";

const WeddingPage = () => {
  return (
    <Animater>
      {/* Hero image background */}
      <HerAboutpic title='url("/images/wedding.png")' />

      {/* Main section */}
      <section className="px-7 pt-11 container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left column - Wedding Info */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl font-semibold">Prestigious Wedding Cars</h1>
              <div className="h-[1px] w-12 bg-green-900 mt-2" />
            </div>
            <p>
              Citywide London offers an affordable wedding car service, providing brides and grooms with the wedding cars of their dreams. You can expect a professional and experienced chauffeur driver who will chauffeur you in style on your special day, providing you with the luxury you deserve on the most important occasion of your life.
            </p>

            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2">
                <FaArrowRight className="text-green-900 mt-1" />
                <span>We ensure the bride arrives relaxed and in style.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaArrowRight className="text-green-900 mt-1" />
                <span>Ensure the wedding party and guests arrive promptly before the bride.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaArrowRight className="text-green-900 mt-1" />
                <span>Transfer the bride and groom after their reception to their honeymoon destination.</span>
              </li>
            </ul>
          </div>

          {/* Right column - Image */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl font-semibold">How We Work</h1>
              <div className="h-[1px] w-12 bg-green-900 mt-2" />
            </div>
            <Image
              width={600}
              height={400}
              src="/images/gallery4.png"
              alt="Wedding transport"
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

export default WeddingPage;
