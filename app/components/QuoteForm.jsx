"use client";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Thankyou from "./Thankyou";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const QuoteForm = () => {
  const [thankyou, setThankyou] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setSubmitError(false);
      data.subject = "quotation";
      
      const response = await fetch("/api/quotes", {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Your Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.name ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Please enter your name"
          {...register("name", { required: "Name is required" })}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Your Email <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : ""
          }`}
          type="email"
          placeholder="Please enter your email"
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Contact Number <span className="text-red-600">*</span>
        </label>
        <Controller
          control={control}
          name="phone"
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <PhoneInput
              country={"gb"}
              inputClass={`w-full p-2 border rounded shadow focus:outline-none focus:shadow-outline ${
                errors.phone ? "border-red-500" : ""
              }`}
              containerClass="w-full"
              inputProps={{
                required: true,
                "aria-invalid": errors.phone ? "true" : "false",
                "aria-describedby": "phone-error"
              }}
              onChange={(phone) => field.onChange(phone)}
              value={field.value}
            />
          )}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Pickup Address */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickup">
          Pick up From <span className="text-red-600">*</span>
        </label>
        <input
          id="pickup"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.pickupadress ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Pickup location"
          {...register("pickupadress", { required: "Pickup address is required" })}
          aria-invalid={errors.pickupadress ? "true" : "false"}
          aria-describedby="pickup-error"
        />
        {errors.pickupadress && (
          <p id="pickup-error" className="mt-1 text-sm text-red-600">
            {errors.pickupadress.message}
          </p>
        )}
      </div>

      {/* Destination */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
          Destination <span className="text-red-600">*</span>
        </label>
        <input
          id="destination"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.destination ? "border-red-500" : ""
          }`}
          type="text"
          placeholder="Destination"
          {...register("destination", { required: "Destination is required" })}
          aria-invalid={errors.destination ? "true" : "false"}
          aria-describedby="destination-error"
        />
        {errors.destination && (
          <p id="destination-error" className="mt-1 text-sm text-red-600">
            {errors.destination.message}
          </p>
        )}
      </div>

      {/* Additional Information */}
      <div>
        <p className="text-gray-700 mb-2">
          We can help make sure you have everything you need including a
          personal concierge. Let us know what you may require in addition to
          your personal chauffeur and we will do our best to help:
        </p>
        
        <div>
          <label htmlFor="request" className="block text-sm font-medium leading-6 text-gray-900">
            Your Request
          </label>
          <textarea
            id="request"
            {...register("Your_Request")}
            rows="3"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
            placeholder="Any special requests or additional information"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4 bg-green-900 disabled:bg-gray-600 flex justify-center items-center gap-3 py-3 text-white shadow-sm rounded-md hover:bg-green-700 transition-colors duration-200"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <FaSpinner className="animate-spin" />
            Processing...
          </>
        ) : (
          "GET QUOTE"
        )}
      </button>
    </form>
  );
};

export default QuoteForm;