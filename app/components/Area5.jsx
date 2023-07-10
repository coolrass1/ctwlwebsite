import React from "react";
import Area5Items from "./Area5Items";
import Item1 from "./area5/Item1";
import Item2 from "./area5/Item2";
import Item3 from "./area5/Item3";
import Item4 from "./area5/Item4";


const Area5 = () => {
  return (
    <section className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <div className="flex flex-col gap-7 py-7 px-4 md:flex-row md:flex-wrap md:justify-around md:py-20">
     <Item1/>
     <Item2/>
     <Item3/>
     <Item4/>
      </div>
    </section>
  );
};

export default Area5;
