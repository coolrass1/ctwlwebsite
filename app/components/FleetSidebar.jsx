import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FleetSidebar = () => {
  return (
    <aside
      className="hidden py-7 md:flex flex-col justify-start items-start gap-7 pl-11 border-l-2"
      aria-labelledby="fleet-title"
    >
      <h2 id="fleet-title" className="text-xl font-semibold">
        Our Fleet
      </h2>
      <div className="w-24 h-[3px] bg-green-900 mb-7" aria-hidden="true"></div>
      <p>
        Our Fleet is the embodiment of elegance and style, in alliance with
        state-of-the-art engineering and superb on-board facilities. We operate
        primarily with Mercedes-Benz and BMW vehicles, known for their high
        safety standards and luxurious interiors.
      </p>
      <p>
        All vehicles are no more than 2 years old and include top-of-the-range
        specifications to fulfil your executive chauffeur needs. They include
        the following complimentary features:
      </p>
      <ul className="mt-12 space-y-4">
        {[
          "Wi-Fi",
          "Daily Newspaper",
          "Tissues",
          "Bottled Water",
          "Mobile phone multi-charger",
          "All cars are registered and licensed by the PCO",
          "All cars are fully maintained to our exacting standards",
          "All cars are fully valeted before every assignment",
        ].map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 border-b-2 pb-2"
            aria-label={feature}
          >
            <FaArrowRight className="text-green-900" aria-hidden="true" />
            <span className="text-sm font-normal text-neutral-600">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      {/* Optionally: Swiper carousel component */}
    </aside>
  );
};

export default FleetSidebar;
