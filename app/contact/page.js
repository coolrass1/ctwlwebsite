'use client'
import { useForm } from "react-hook-form";
import React from "react";
import HeroAbout from "../components/HeroAbout";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const page = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <section>
      <HeroAbout title="Contact" />
      <main className="grid grid-cols-1  px-7 md:grid-cols-2 gap-3 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
        <div className="order-2 md:order-1 pt-11">
          <h1 className="mb-3">Contact Details</h1>
          <div className="h-[2px] w-24 bg-green-900 mb-7 "></div>
          <div>
            <div className="py-3 border-t-[0.5px] border-b-[0.5px]  flex  justify-start items-center gap-3">
              <div className="flex justify-center items-center text-green-900">
                {" "}
                <FaLocationDot />
              </div>{" "}
              <div className="w-[80%]">
                First Floor, 49 Skyline Business Village, Limeharbour, London,
                E14 9TS, United Kingdom
              </div>
            </div>
            <div className="py-3 border-b-[0.5px] flex  justify-start items-center gap-3">
              <div className="flex justify-center items-center text-green-900">
                {" "}
                <FaPhoneAlt />
              </div>{" "}
              <div className="w-[80%]">
                +44 (0) 20 7474 4828 | +44 7484 718117 (WhatsApp)
              </div>
            </div>
            <div className="py-3 border-b-[0.5px] flex justify-start items-center gap-3">
              <div className="flex justify-center items-center text-green-900">
                {" "}
                <GrMail />
              </div>{" "}
              <div className="w-[80%]">info@citywidelondon.co.uk</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 pt-11">
        <h1 className="mb-3">Get In Touch</h1>
          <div className="h-[2px] w-24 bg-green-900 mb-7 "></div>
          <p className="py-4">
            We make sure you have an experienced team member to talk to from the
            start. You will have direct contact with your driver – someone who
            will get to know you, your timetables, routes and preferences. We
            are available 24hrs a day, seven days a week, and 365 days a year.
          </p>
          <p className="py-4">
            We believe in providing a timely and efficient service, so contact
            any of our team on the number below for further information.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Name<span className="text-red-900">*</span>
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
        htmlFor="Email"
      >
        Email<span className="text-red-900">*</span>
      </label>
      <input
      {...register("email", { required: true })}
        className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none 
                 focus:shadow-outline"
   
        type="email"
        placeholder="Please enter your email"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Subject
      </label>
      <input
      {...register("subject", { required: true })}
        className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none 
                 focus:shadow-outline"
        
        type="text"
        placeholder="Please enter your name"
      />
    </div>
    <fieldset className="mb-7">
      <div className="col-span-full">
        <label
          htmlFor="about"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
         Message <span className="text-red-900">*</span>
        </label>
        <div className="mt-2">
          <textarea
            {...register("Your_Request")}
            rows="8"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
    </fieldset>
    <button className=" text-white bg-green-900 px-24 py-3 rounded-md hover:bg-green-700 shadow-sm" type="submit"> SEND</button>

          </form>
        </div>
      </main>
    </section>
  );
};

export default page;
