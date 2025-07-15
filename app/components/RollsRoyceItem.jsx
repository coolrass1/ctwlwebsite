import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import SwiperFleetItem from "./SwiperFleetItem";
import CarsOptions from "./CarsOptions";
import { rollsroyces } from "./Data";

const features = [
  "Extended rear leg room",
  "Climate controlled air conditioning",
  "Electric rear reclining seats",
  "Heated rear seats",
  "On-board Wi-Fi",
  "Smartphone rear chargers",
];

const RollsRoyceItem = () => {
  return (
    <div className="mx-6">
      {/* Vehicle Image */}
      <div className="relative w-full h-[300px] md:h-[500px] py-7">
        <Image
          src="/images/cars/rollsroys/main.jpg"
          alt="Rolls Royce Phantom"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      {/* Overview Section */}
      <div className="pt-7 space-y-5">
        <h2 className="text-2xl font-semibold">Vehicle Overview</h2>
        <div className="w-24 h-[3px] bg-green-900"></div>

        <p>
          The <strong>Rolls Royce Phantom</strong> is the perfect chauffeur-driven car,
          redefining luxury, quality, and style. A truly stunning top-of-the-line vehicle.
        </p>

        <p>
          With state-of-the-art technology and handcrafted detailing, the Phantom is the
          ultimate luxury choice for <strong>airport transfers</strong>, <strong>weddings</strong>, and <strong>proms</strong>.
        </p>

        <p>
          Perfect for parties of up to <strong>4 passengers</strong>, this iconic vehicle
          ensures unmatched comfort and prestige for any special occasion.
        </p>

        <p>
          Experience the pinnacle of luxury travel—this chauffeur-driven Rolls Royce is
          perfect for making an unforgettable impression.
        </p>
      </div>

      {/* Features List */}
      <div className="mt-10 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 py-1">
            <FaArrowRight className="text-green-900" />
            <span className="text-sm text-neutral-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* Carousel and Options */}
      <div className="px-2 mt-10">
        <SwiperFleetItem listcars={rollsroyces} />
        <CarsOptions />
      </div>
    </div>
  );
};

export default RollsRoyceItem;
