"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Thankyou from "./Thankyou";
import { FaSpinner } from "react-icons/fa6";

const BookingForm2 = () => {
  const [thankyou, setThankyou] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setSubmitError(false);
      const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setThankyou(true);
        reset();
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(true);
    }
  };

  if (thankyou) return <Thankyou />;
  if (submitError) {
    return (
      <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
        <h2 className="text-lg font-bold mb-2">Submission Error</h2>
        <p>There was an error submitting your form. Please try again.</p>
        <button
          onClick={() => setSubmitError(false)}
          className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-md bg-slate-100 md:p-3"
      aria-label="Booking form"
    >
      {/* Personal Information Section */}
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <legend className="sr-only">Personal Information</legend>
        
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
            type="text"
            placeholder="Please enter your name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Business/Referral Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="business">
            Business or referral name
          </label>
          <input
            {...register("business")}
            id="business"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
            type="text"
            placeholder="Business or referral name"
          />
        </div>
      </fieldset>

      {/* Contact Information Section */}
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <legend className="sr-only">Contact Information</legend>
        
        {/* Phone Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            {...register("phone", { 
              required: "Phone number is required",
              pattern: {
                value: /^[0-9\s+-]+$/,
                message: "Please enter a valid phone number"
              }
            })}
            id="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
            type="tel"
            placeholder="Enter Phone number"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby="phone-error"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Your Email <span className="text-red-600">*</span>
          </label>
          <input
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
            type="email"
            placeholder="Please enter your email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* Address Information Section */}
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <legend className="sr-only">Address Information</legend>
        
        {/* Pickup Address */}
        <div className="mb-4">
          <label htmlFor="pickupaddress" className="block text-base font-semibold leading-6 text-gray-900">
            Your pick up address <span className="text-red-600">*</span>
          </label>
          <textarea
            {...register("pickupaddress", { required: "Pickup address is required" })}
            id="pickupaddress"
            rows="3"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
            aria-invalid={errors.pickupaddress ? "true" : "false"}
            aria-describedby="pickup-error"
          ></textarea>
          {errors.pickupaddress && (
            <p id="pickup-error" className="mt-1 text-sm text-red-600">
              {errors.pickupaddress.message}
            </p>
          )}
        </div>

        {/* Destination Address */}
        <div className="mb-4">
          <label htmlFor="destination" className="block text-base font-semibold leading-6 text-gray-900">
            Your destination address <span className="text-red-600">*</span>
          </label>
          <textarea
            {...register("destination", { required: "Destination address is required" })}
            id="destination"
            rows="3"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
            aria-invalid={errors.destination ? "true" : "false"}
            aria-describedby="destination-error"
          ></textarea>
          {errors.destination && (
            <p id="destination-error" className="mt-1 text-sm text-red-600">
              {errors.destination.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* Optional Message */}
      <div className="mb-4">
        <label htmlFor="omessage" className="block text-base font-semibold leading-6 text-gray-900">
          Your message (optional)
        </label>
        <textarea
          {...register("omessage")}
          id="omessage"
          rows="3"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
          placeholder="Any special requests or additional information"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-7 bg-green-900 disabled:bg-gray-600 flex justify-center items-center gap-3 py-4 text-white shadow-sm rounded-md hover:bg-green-700 transition-colors duration-200"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <FaSpinner className="animate-spin text-yellow-300" />
            Processing
          </>
        ) : (
          "SEND BOOKING REQUEST"
        )}
      </button>
    </form>
  );
};

export default BookingForm2;