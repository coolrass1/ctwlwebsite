import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import SwiperFleetItem from "./SwiperFleetItem";
import CarsOptions from "./CarsOptions";
import { bmw7icars } from './Data'

const Bmw7iItem = () => {
  return (
    <main className="mx-6">
      <article itemScope itemType="https://schema.org/Product">
        <meta itemProp="brand" content="BMW" />
        <meta itemProp="model" content="7 Series i" />
        
        <div className="w-full py-7">
          <Image
            src="/images/cars/bmw7iseries/main.jpg"
            alt="BMW 7 Series i luxury sedan - exterior view"
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
            priority={true}
            itemProp="image"
            aria-labelledby="bmw7i-heading"
          />
        </div>
        
        <header className="pt-7 flex flex-col gap-7">
          <h1 id="bmw7i-heading" className="text-2xl font-bold text-gray-900" itemProp="name">BMW 7 Series i Overview</h1>
          <div className="w-24 h-[3px] bg-green-900" aria-hidden="true"></div>
          <p className="text-gray-700" itemProp="description">
            Combining BMW's world-renowned engineering with an unprecedented
            commitment to comfort, the 7 Series i has earned a reputation as the
            luxury car of choice. The BMW 7 Series i is a line of full-size luxury
            vehicles perfect for both professional and personal travel.
          </p>
          <p className="text-gray-700">
            Available with premium leather interior and long wheelbase options,
            passengers enjoy ample leg room to relax while being chauffeured.
            The BMW 7 Series i comes equipped with these premium features:
          </p>
        </header>
        
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">BMW 7 Series i Features</h2>
          <ul className="mt-12 list-none">
            {[
              "Extended rear leg room",
              "Climate controlled air conditioning",
              "Electric rear reclining seats",
              "Heated rear seats",
              "On-Board Wi-Fi",
              "Smartphone rear chargers"
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-1 py-2" itemProp="feature">
                <div className="flex justify-center items-center text-green-900" aria-hidden="true">
                  <FaArrowRight />
                </div>
                <span className="text-sm font-normal text-neutral-600">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>
        
        <div className="px-2 mt-7">
          <SwiperFleetItem listcars={bmw7icars} />
          <CarsOptions />
        </div>
      </article>
    </main>
  );
};

export default Bmw7iItem;