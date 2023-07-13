import React from "react";
import HeroAbout from "../components/HeroAbout";
import CarsItem from "../components/CarsItem";
import { FaArrowRight } from "react-icons/fa";
import { carsmain } from "../components/Data";

const page = () => {
  return (
    <section>
      <HeroAbout title="Our Fleet" />
      <div className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl md:grid md:grid-cols-3">
        <div className="py-7  px-10 col-span-2">
          <h1>Our fleet</h1>
          <div className="w-24 h-[3px] bg-green-900 mb-7"></div>
          <main className=" grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-7 ">
            {/* <CarsItem />
            <CarsItem />
            <CarsItem />
            <CarsItem />
            <CarsItem />
            <CarsItem /> */}
            {carsmain?.map(car=><CarsItem key={car} car={car}/>)}
          </main>
        </div>
        <aside className=" hidden py-7 md:flex flex-col justify-start items-start gap-7 pl-11 border-l-2">
          <h1 >Our fleet</h1>
          <div className="w-24 h-[3px] bg-green-900 mb-7"></div>
          <p>
            Our Fleet is the embodiment of elegance and style, in alliance with
            state of the art engineering and superb on-board facilities. We
            operate primarily with Mercedes-Benz cars and BMW because of their
            high safety standards and luxurious interiors. Uncompromising in
            their styling, engineering and specification, they bring a level of
            luxury that is recognised and respected by discerning connoisseurs
            of good taste everywhere
          </p>
          <p>
            All vehicles are no more than 2 years old and include top of the
            range specifications ready to fulfil your executive chauffeur needs.
            They come equipped with the following complimentary features:
          </p>
          <div className="mt-12">
            <div  className="flex items-center gap-1 border-b-2 py-4">
              <div className="flex justify-center items-center text-green-900">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">wi-fi</span>
            </div>
            <div  className="flex items-center gap-1 border-b-2 py-4">
              <div className="flex justify-center items-center text-green-900">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">Daily Newspaper</span>
            </div>
            <div  className="flex items-center gap-1 border-b-2 py-4">
              <div className="flex justify-center items-center text-green-900">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">Tissues</span>
            </div>
            <div  className="flex items-center gap-1 border-b-2 py-4">
              <div className="flex justify-center items-center text-green-900">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">Bottled Water</span>
            </div>
            <div  className="flex items-center gap-1 border-b-2 py-4">
              <div className="flex justify-center items-center text-green-900">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">Mobile phone multi charger</span>
            </div>
            <div  className="flex items-center gap-1 border-b-2 py-4">
              <div className="flex justify-center items-center text-green-900">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">All cars are registered and licensed by the PCO</span>
            </div>
            <div  className="flex items-center gap-1 border-b-2 py-4">
              <div className="flex justify-center items-center text-green-900">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">All cars are fully maintained to our exacting standards</span>
            </div>
            <div  className="flex items-center gap-1 border-b-2 py-4">
              <div className="flex justify-center items-center text-green-900">
                <FaArrowRight />
              </div>
              <span className=" text-sm font-normal text-neutral-600">All cars are fully valeted before every assignment</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default page;
