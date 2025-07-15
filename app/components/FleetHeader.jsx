import Link from "next/link";
import React from "react";

const FleetHeader = () => {
  return (
    <nav aria-label="Fleet vehicle options" className="hidden pr-36 z-30 text-black top-[230px] flex-col gap-2 bg-neutral-100 shadow-2xl py-2">
      <ul>
        {[
          "BMW 7i Series",
          "BMW 7 Series",
          "Mercedes S Class",
          "Mercedes E Class",
          "BMW 5 Series",
          "Mercedes Viano",
          "Rolls Royce Phantom",
          "Coaches",
        ].map((item, index) => (
          <li key={index} className="hover:bg-teal-500 py-1 pl-2 pr-28">
            <Link href={`/fleet/${item.toLowerCase().replace(/\s+/g, "-")}`}>
              <span className="sr-only">View details of </span>{item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FleetHeader;
