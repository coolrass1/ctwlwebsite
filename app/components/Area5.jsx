import React from "react";
import Area5Items from "./Area5Items";


const Area5 = () => {
  return (
    <section className="container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <div className="flex flex-col gap-7 py-7 px-4 md:flex-row md:flex-wrap md:justify-around md:py-20">
     <Area5Items/>
     <Area5Items/>
     <Area5Items/>
     <Area5Items/>
      </div>
    </section>
  );
};

export default Area5;
