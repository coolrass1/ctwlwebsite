import React from "react";
import HeroAbout from "../components/HeroAbout";
import Image from "next/image";
import BookingForm from "../components/BookingForm";
import BookingForm2 from "../components/BookingForm2";

const page = () => {
  return (
    <section>
      <HeroAbout title="Booking" />
      <main className=" pt-7 grid grid-cols-1  px-7 md:grid-cols-2 gap-3 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
      <div>
        <div>
          <Image
           
            width={300}
            height={300}
            src="/images/area9.jpg"
            alt="img"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <p className="py-7">
          Request a booking form now using our easy to use form and we will get
          back to you with a quote for your journey. Please book well in advance
          (preferably at least 24hrs) to ensure availability of your chosen
          vehicle and to receive the best possible price.
        </p>
        <h1 className="text-xl font-bold">Our Coaches</h1>
        <p className="py-7">
          At Citywide we offer a range of standard and Luxury Mini coaches
          suitable for all your group and VIP Travels, which are all provided
          with a professional driver. Our experience in the travel industry
          gives us an edge over our competitors in London, and our client base
          consists of major corporate banks and public offices. Both in London
          and from overseas.
        </p>
        <p className="py-7">
          We take pride in being a fully Licensed Operator, with a team of
          highly skilled, CRB checked drivers, so you can rely on us, as you
          need a transportation service you can rely on. Our drivers are
          selected for their knowledge and experience to ensure that you
          experience the highest levels of service and professionalism during
          your trip. They are highly professional, always polite and punctual.
        </p>
        <p className="py-7">
          We only provide vehicles which meet VOSA safety check guidelines and
          road worthiness, so you’ll be sure of a pleasant trip with minimal
          risk of trouble.
        </p>
        <p className="py-7">
          We offer flexibility when it comes to collection and the end of your
          trip, picking your party up and dropping you off at locations of your
          choice for convenience and ease of access.Each journey is planned
          prior to departure to ensure the driver is fully familiar with the
          route, along with any access or parking limitations at the
          destination.
        </p>
        <p className="py-7">
          If you’ve flown into town to attend a conference, a big meeting, a
          road show or simply need a city transfer we have the vehicle to suit
          your needs.
        </p>
        <p className="py-7">
          We provide our services at all the major London Airports, (Heathrow,
          Gatwick, London City Airport, Stansted, and Luton). We offer Corporate
          Travel Airport Transfers, Group Travel, School Transport, Nights Out,
          Events & Exhibitions, Sporting Events, Road Shows and much more. We
          will tailor our services to meet your needs and will ensure that you
          travel in comfort and style.
        </p>
        <p className="py-7">
          If you want to see a variety of sights in the city, we can plan your
          route and stop off whenever and wherever you would like while your
          professional chauffeur waits on you as you explore.
        </p>
        <p className="py-7">
          Some of our most popular destinations to visit are, Bicester Village,
          London Eye, London Kew Gardens, The O2 Arena, Thorpe Park, Wembley
          Arena, Windsor Castle, Alton Towers, Chessington World of Adventures,
          Legoland Windsor, Chiswick House & Gardens. These along with many
          corporate events and exhibitions.
        </p>
      </div>
      <div className="md:px-7"><BookingForm2/></div>



      </main>
     
    </section>
  );
};

export default page;
