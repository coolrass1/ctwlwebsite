import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ConciergeItem = () => {
  return (
    <div className="pt-11 px-7">
      <p className="pb-7">
        Alongside our chauffeurs service we can also provide VIP concierge to
        carry out tasks so you don’t have to. Be it for shopping trips, tours
        guides, securing tickets for events & restaurants on your behalf; we
        have the right personnel to fulfil your needs.
      </p>
      <p className="pb-7">
        We can also provide close protection security personnel, tour guides and
        personal assistants to support travel arrangements for you and your
        guests. Email us now at{" "}
        <span className="text-green-900 font-bold">
          info@citywidelondon.co.uk
        </span>{" "}
        or call now on
        <span className="text-green-900 font-bold">
          +44 (0) 20 7474 4828
        </span>{" "}
      </p>
      <h1 className="text-black font-extrabold">Contact us to find out more about:</h1>
      <div className=" py-11 grid grid-cols-1 gap-3 md:gap-1 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-1  py-2">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              Professional chauffeur & luxury vehicle
            </span>
          </div>
          <div className="flex items-center gap-1  py-2">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              Professional concierge / assistant
            </span>
          </div>
          <div className="flex items-center gap-1  py-2">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              SIA licensed security personnel
            </span>
          </div>
          <div className="flex items-center gap-1  py-2">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              Event and ticket bookings
            </span>
          </div>
          <div className="flex items-center gap-1  py-2">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              Entourage transportation
            </span>
          </div>
          <div className="flex items-center gap-1  py-2">
            <div className="flex justify-center items-center text-green-900">
              <FaArrowRight />
            </div>
            <span className="text-sm font-normal text-neutral-600">
              Tour guides
            </span>
          </div>
        </div>
        <div>
          <Image
            width={300}
            height={300}
            src="/images/concierge.png"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            alt="concierge"
          />
        </div>
      </div>
    </div>
  );
};

export default ConciergeItem;
