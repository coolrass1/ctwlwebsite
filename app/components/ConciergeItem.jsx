import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ConciergeItem = () => {
  return (
    <section className="pt-11 px-7" aria-labelledby="concierge-heading">
      <h2 id="concierge-heading" className="sr-only">Concierge Services</h2>

      <p className="pb-7">
        Alongside our chauffeur service, we can also provide VIP concierge to
        carry out tasks so you don’t have to. From shopping trips and tour
        guides to securing tickets for events and restaurants, we have the right
        personnel to fulfill your needs.
      </p>

      <p className="pb-7">
        We also offer close protection security personnel, tour guides, and
        personal assistants to support travel arrangements for you and your
        guests. Email us at{" "}
        <a
          href="mailto:info@citywidelondon.co.uk"
          className="text-green-900 font-bold underline"
        >
          info@citywidelondon.co.uk
        </a>{" "}
        or call us on{" "}
        <a
          href="tel:+442074744828"
          className="text-green-900 font-bold underline"
        >
          +44 (0) 20 7474 4828
        </a>.
      </p>

      <h3 className="text-black font-extrabold">
        Contact us to find out more about:
      </h3>

      <div className="py-11 grid grid-cols-1 gap-3 md:gap-1 md:grid-cols-2">
        <ul aria-label="Concierge services offered" className="space-y-2">
          {[
            "Professional chauffeur & luxury vehicle",
            "Professional concierge / assistant",
            "SIA licensed security personnel",
            "Event and ticket bookings",
            "Entourage transportation",
            "Tour guides",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 py-2">
              <FaArrowRight className="text-green-900" aria-hidden="true" />
              <span className="text-sm font-normal text-neutral-600">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Image
          width={300}
          height={300}
          src="/images/concierge.png"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          alt="Citywide London concierge service representative"
        />
      </div>
    </section>
  );
};

export default ConciergeItem;
