"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Thankyou from "./Thankyou";
import { FaSpinner } from "react-icons/fa6";

const ContactForm = () => {
  const [thankyou, setThankyou] = useState(false);
  const [btnloading, setbtnloading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    data.subject = "contact";
    getdata(data);
    reset();
  };
  const getdata = async (data) => {
    // Send the data to the server in JSON format.
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    setbtnloading(true);

    // API endpoint where we send form data.
    const endpoint = "/api/contac";

    // Form the request for sending data to the server.
    const options = {
      
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    const results = result.success;
    results && setThankyou(true);
    //results && router.push("/thankyou");
    reset();
  };
  const Formi= function(){
    return( 
       <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Your Name
      </label>

      <input
        className="shadow appearance-none border rounded 
                      w-full py-2 px-3 text-gray-700
                       leading-tight focus:outline-none 
                      focus:shadow-outline"
        type="text"
        placeholder="Please enter your name"
        {...register("name", { required: true })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name?.type === "required" && (
        <p className="text-red-500" role="alert">
          Name is required
        </p>
      )}
    </div>
    <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Your Email
        </label>
        <input
          className="shadow appearance-none border rounded 
    w-full py-2 px-3 text-gray-700
   leading-tight focus:outline-none 
   focus:shadow-outline"
          type="email"
          placeholder="Please enter your email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500" role="alert">
            email is required
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Subject
        </label>
        <input
          className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                leading-tight focus:outline-none 
                focus:shadow-outline"
          type="text"
          placeholder="Please enter your email"
          {...register("subject", { required: true })}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject?.type === "required" && (
          <p className="text-red-500" role="alert">
            Subject is required
          </p>
        )}
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
          
            rows="8"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
          
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message?.type === "required" && (
            <p className="text-red-500" role="alert">
             Message is required
            </p>
          )}
        </div>
      </div>
    </fieldset>
    <button
            type="submit"
            className="w-full mt-7 bg-green-900   disabled:bg-black flex justify-center items-center gap-3  py-7 text-white shadow-sm rounded-md hover:bg-green-700"
            disabled={btnloading ? true : false}
          >
            {btnloading ? (
              <>
                <FaSpinner className="text-center animate-spin text-yellow-300" />{" "}
                Processing
              </>
            ) : (
              "SEND"
            )}
          </button>
  </form>)
  }
  return  thankyou ? <Thankyou /> : <Formi />;
  ;
};

export default ContactForm;
