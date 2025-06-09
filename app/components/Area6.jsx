import React from "react";
import ButtonComponent from "./ButtonComponent";

const Area6 = () => {
  return (
    <section 
      className="min-h-[600px] mt-7 pt-7 px-2 flex justify-center items-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/area6.jpg')" }}
      aria-label="Request a quote for chauffeur services"
    >
      <article className="flex flex-col py-11 justify-center md:justify-start items-center gap-5 text-white bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl mx-4">
        <h1 className="text-center leading-10 md:leading-[50px] text-xl md:text-3xl font-bold">
          Request Your Custom Quote Today
        </h1>
        <div 
          className="w-28 h-[3px] bg-green-900 mb-7"
          aria-hidden="true"
        ></div>
        <p className="text-center leading-7 text-lg">
          Contact us directly at <a href="tel:+442074744828" className="font-bold hover:text-green-400 transition-colors">+44 (0) 20 7474 4828</a> or email us at <a href="mailto:info@citywidelondon.co.uk" className="font-bold hover:text-green-400 transition-colors">info@citywidelondon.co.uk</a>
        </p>
        <ButtonComponent 
          title="Get a Free Quote" 
          url="/quotes"
          aria-label="Request a free quote for chauffeur services"
          className="bg-green-900 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
        />
      </article>
    </section>
  );
};

export default Area6;