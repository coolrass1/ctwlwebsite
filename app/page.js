import React from "react";
import { Inter, Poppins, Open_Sans, Montserrat } from "next/font/google";
import Area1 from "./components/Area1";
import Area2 from "./components/Area2";
import Area3 from "./components/Area3";
import Area4 from "./components/Area4";
import Area5 from "./components/Area5";

const inter = Inter({ subsets: ["latin"] });
const open = Open_Sans({ subsets: ["latin-ext"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "200"] });
const monserat = Montserrat({ subsets: ["latin"] });
import {area , area1,area9} from '/app/components/Data.js'
import Area6 from "./components/Area6";
import { Area7 } from "./components/Area7";
import Area8 from "./components/Area8";
const page = () => {

  return (
    <>
      <section className="relative min-h-[200px] md:h-screen ">
        <div
       
          style={{
            backgroundImage: "url(/images/cars/mercedes_e_class/3.jpeg)",
            backgroundPosition: "center -190px",
            backgroundSize: "100vw",
            backgroundRepeat: "no-repeat",
          }}
          className=" hidden md:block absolute  -z-20 w-screen h-screen md:translate-y-[-50px] "
        ></div>
         <div
       
       style={{
         backgroundImage: "url(/images/cars/mercedes_e_class/3.jpeg)",
         backgroundPosition: "center center",
         backgroundSize:"100vw",
         backgroundRepeat: "no-repeat",
         height:"200px"
       }}
       className=" block z-50 min-w-screen min-h-full md:hidden mb-4"
     ></div>
      </section>
      <Area1 ctp={area1}/>
      <Area2 />
      <Area3 />
      <Area4 />
      <Area5 />
      <Area1 ctp={area}/>
      <Area6/>
      <Area7/>
      <Area8/>
      <Area1 ctp={area9}/>
    </>
  );
};

export default page;
