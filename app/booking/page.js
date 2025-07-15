import React from "react";
import HeroAbout from "../components/HeroAbout";
import Image from "next/image";
import BookForm3 from "../components/BookForm3";
import Animater from "../components/Animater";

const BookingPage = () => {
  return (
    <Animater>
      <section>
        <HeroAbout title="Booking" />

        <main className="pt-7 px-7 grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto max-w-screen-xl">
          
          {/* Left Column - Booking Content */}
          <div className="order-2 md:order-1">
            <div className="w-full h-auto">
              <Image
                width={800}
                height={500}
                src="/images/area9.jpg"
                alt="Citywide Booking"
                className="w-full h-auto object-cover rounded"
              />
            </div>

            <div className="pt-6 space-y-6 text-base leading-relaxed">
              <p>
                Request a booking form now using our easy-to-use form and we will get
                back to you with a quote for your journey. Please book well in advance
                (preferably at least 24hrs) to ensure availability of your chosen
                vehicle and to receive the best possible price.
              </p>

              <h2 className="text-xl font-bold">Our Coaches</h2>

              <p>
                At Citywide we offer a range of standard and luxury mini coaches
                suitable for all your group and VIP travels, each with a professional
                driver. Our experience in the travel industry gives us a competitive edge
                in London. Our client base includes major corporate banks and public
                offices from both the UK and abroad.
              </p>

              <p>
                We are a fully licensed operator with CRB-checked drivers, carefully
                selected for their professionalism and punctuality. Our drivers are
                knowledgeable, polite, and trained to offer an exceptional travel
                experience.
              </p>

              <p>
                All vehicles meet VOSA safety guidelines, so your trip will be
                comfortable and low-risk. We offer flexible pick-up and drop-off at
                locations of your choice, and every journey is pre-planned to ensure the
                route is clear and suitable.
              </p>

              <p>
                Whether you're flying in for a conference, a meeting, or a roadshow—or
                you just need a city transfer—we have the right vehicle for your needs.
              </p>

              <p>
                We cover all major London airports: Heathrow, Gatwick, London City,
                Stansted, and Luton. We also provide transport for corporate travel,
                group events, school trips, exhibitions, nights out, sporting events, and
                more.
              </p>

              <p>
                Want to sightsee around the city? We can customize your route and stop
                off wherever you like, while your chauffeur waits. Some popular
                destinations include:
              </p>

              <ul className="list-disc list-inside">
                <li>Bicester Village</li>
                <li>London Eye</li>
                <li>Kew Gardens</li>
                <li>The O2 Arena</li>
                <li>Thorpe Park</li>
                <li>Wembley Arena</li>
                <li>Windsor Castle</li>
                <li>Alton Towers</li>
                <li>Chessington World of Adventures</li>
                <li>Legoland Windsor</li>
                <li>Chiswick House & Gardens</li>
              </ul>

              <p>
                ...and many more corporate events and exhibitions.
              </p>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="order-1 md:order-2 md:px-7">
            <BookForm3 />
          </div>
        </main>
      </section>
    </Animater>
  );
};

export default BookingPage;
