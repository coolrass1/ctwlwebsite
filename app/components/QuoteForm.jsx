"use client";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Thankyou from "./Thankyou";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const QuoteForm = () => {
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
  const onSubmit = (data) => {
    data.subject = "quotation";
    getdata(data);
    reset();
  };
  const getdata = async (data) => {
    // Send the data to the server in JSON format.
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    setbtnloading(true);

    // API endpoint where we send form data.
    const endpoint = "/api/quotes";

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
  const Formi = function () {
    return (
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
            aria-invalid={errors.name ? "true" : "false"}
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
            Contact Number
          </label>
          {/* <input
      {...register("contactNumber", { required: true })}
      className="shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700
             leading-tight focus:outline-none 
             focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Please enter your contact number"
    /> */}
          <Controller
            control={control}
            name="phone"
            rules={{ required: true }}
            render={({ field }) => (
              <PhoneInput
                containerStyle={{ width: "20px" }}
                country={"gb"}
                //value={this.state.phone}
                //onChange={phone => this.setState({ phone })}
                placeholderText="Select date"
                onChange={(phone) => field.onChange(phone)}
                selected={field.value}
              />
            )}
          />
          {errors.phone && (
            <strong className="text-red-500">phone is required</strong>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Pick up From
          </label>
          <input
            className="shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700
             leading-tight focus:outline-none 
             focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Pickup me from"
            {...register("pickupadress", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.pickupadress?.type === "required" && (
            <p className="text-red-500" role="alert">
              Pick up address is required
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Destination
          </label>
          <input
            className="shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700
             leading-tight focus:outline-none 
             focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Destination"
            {...register("destination", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.destination?.type === "required" && (
            <p className="text-red-500" role="alert">
              Destination is required
            </p>
          )}
        </div>
        <p>
          We can help make sure you have everything you need including a
          personal concierge. Let us know what you may require in addition to
          your personal chauffeur and we will do our best to help:
        </p>
        {/* <fieldset className="py-7 flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-start gap-2">
    <div>
      {" "}
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
    </div>
    <div>
     
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
    </div>

    <div>
      {" "}
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
    </div>
  </fieldset> */}
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
        {/* <fieldset className="py-7">
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
          I consent to being contacted by email or phone by Citywide London
        </label>
      </div>
    </div>
  </fieldset> */}
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
      </form>
    );
  };
  return thankyou ? <Thankyou /> : <Formi />;
};

export default QuoteForm;
