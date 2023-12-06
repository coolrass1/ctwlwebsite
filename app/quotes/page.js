
import React from "react";
import HeroAbout from "../components/HeroAbout";
import BookingForm from "../components/BookingForm";
import QuoteForm from "../components/QuoteForm";
import Animater from "../components/Animater";

const page = () => {
 
  return (
    <section>
      <Animater>
      <HeroAbout title="Quote Request" />
      <main className=" px-7 py-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl grid gap-4 grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-lg mb-1">Online Reservations </h1>
          <div className="h-[3px] w-24 bg-green-900 mb-11"></div>
          <p className=" mb-3 w-[80%]">
            You can make a booking or booking enquiry by completing and
            submitting this form or by emailing{" "}
            <span className="text-green-900">info@citywidelondon.co.uk</span>
          </p>
          {/* <p className=" mb-3 w-[80%]">
            If you wish to book a car with less than 12 hours’ notice, kindly
            call us on{" "}
            <span className="text-green-900">+44 (0) 207 474 4828.</span>
          </p>
          <p className=" mb-3 w-[80%]">
            Please note that your booking request becomes a booked job only once
            you have received confirmation from us.
          </p>
          <p className=" mb-3 w-[80%]">
            Online rates do not include Car Park and waiting charges.
          </p> */}
        </div>
        <div>
          <QuoteForm/>
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Your Name
              </label>
              <input
              {...register("name", { required: true })}
                className="shadow appearance-none border rounded 
                          w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none 
                         focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Please enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Your Email
              </label>
              <input
               {...register("email", { required: true })}
                className="shadow appearance-none border rounded 
                          w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none 
                         focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Please enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Contact Number
              </label>
              <input
              {...register("contactNumber", { required: true })}
                className="shadow appearance-none border rounded 
                          w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none 
                         focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Please enter your contact number"
              />
            </div>
            <div className="mb-4">
          
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Pick up From
              </label>
              <input
                {...register("pickup", { required: true })}
                className="shadow appearance-none border rounded 
                          w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none 
                         focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Pickup me from"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Destination
              </label>
              <input
              {...register("destination", { required: true })}
                className="shadow appearance-none border rounded 
                          w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none 
                         focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Destination"
              />
            </div>
            <p>
              We can help make sure you have everything you need including a
              personal concierge. Let us know what you may require in addition
              to your personal chauffeur and we will do our best to help:
            </p>
            <fieldset className="py-7 flex flex-col gap-2">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                 
                  
                    type="checkbox"
                      {...register("concierge")}
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Concierge service
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                     {...register("childseat")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Child seat
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    
                    type="checkbox"
                      {...register("serviceapartement")}
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Serviced apartment
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                     {...register("hotelreservation")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Hotel reservation
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                   {...register("restaurantreservation")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Restaurant reservation
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    {...register("tour")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Tours & sightseeing
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    {...register("golfcoaching")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Book golf coaching
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    {...register("book_personal_trainer")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Book Personal Trainer
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                      {...register("English_language_translator")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    English language translator
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    {...register("Additional_security")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Additional security
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Your Request
                </label>
                <div className="mt-2">
                  <textarea
                    {...register("Your_Request")}
                    rows="3"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </fieldset>
            <fieldset className="py-7">
            <div className="mb-3 text-sm font-semibold leading-6 text-gray-900">
                Please consent to us contacting you:
              </div>
              <div className="relative flex gap-x-3">
             
                <div className="flex h-6 items-center">
                  <input
                 required
                 {...register("term_valid")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="comments" className="font-medium text-gray-900">
                    I consent to being contacted by email or phone by Citywide
                    London
                  </label>
                </div>
              </div>
            </fieldset>
            <button className=" text-white bg-green-900 px-24 py-3 rounded-md hover:bg-green-700 shadow-sm" type="submit"> SEND</button>
          </form> */}
        </div>
      </main>
      </Animater>
    </section>
  );
};

export default page;
