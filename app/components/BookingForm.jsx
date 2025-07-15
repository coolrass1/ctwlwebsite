'use client'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const BookingForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm();
  
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const onSubmit = async (data) => {
    try {
      console.log(data); // Replace with actual submission logic
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-6 bg-green-50 border-l-4 border-green-500 text-green-700">
        <h2 className="text-xl font-bold mb-2">Thank You!</h2>
        <p>Your booking request has been received. We'll contact you shortly to confirm your arrangements.</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Luxury car booking form"
      className="space-y-6"
    >
      {/* Contact Information Section */}
      <fieldset className="space-y-4">
        <legend className="sr-only">Contact Information</legend>
        
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            id="name"
            type="text"
            placeholder="Please enter your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
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
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
            type="email"
            placeholder="Please enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Contact Number Field */}
        <div>
          <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Contact Number <span className="text-red-600">*</span>
          </label>
          <input
            {...register("contactNumber", { 
              required: "Phone number is required",
              pattern: {
                value: /^[0-9\s+-]+$/,
                message: "Please enter a valid phone number"
              }
            })}
            id="contactNumber"
            type="tel"
            placeholder="Please enter your contact number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
            aria-invalid={errors.contactNumber ? "true" : "false"}
            aria-describedby="phone-error"
          />
          {errors.contactNumber && (
            <p id="phone-error" className="mt-1 text-sm text-red-600">
              {errors.contactNumber.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* Trip Details Section */}
      <fieldset className="space-y-4">
        <legend className="sr-only">Trip Details</legend>
        
        {/* Pickup Location */}
        <div>
          <label htmlFor="pickup" className="block text-gray-700 text-sm font-bold mb-2">
            Pick up From <span className="text-red-600">*</span>
          </label>
          <input
            {...register("pickup", { required: "Pickup location is required" })}
            id="pickup"
            type="text"
            placeholder="Pickup location"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
            aria-invalid={errors.pickup ? "true" : "false"}
            aria-describedby="pickup-error"
          />
          {errors.pickup && (
            <p id="pickup-error" className="mt-1 text-sm text-red-600">
              {errors.pickup.message}
            </p>
          )}
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">
            Destination <span className="text-red-600">*</span>
          </label>
          <input
            {...register("destination", { required: "Destination is required" })}
            id="destination"
            type="text"
            placeholder="Destination"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-900"
            aria-invalid={errors.destination ? "true" : "false"}
            aria-describedby="destination-error"
          />
          {errors.destination && (
            <p id="destination-error" className="mt-1 text-sm text-red-600">
              {errors.destination.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* Additional Services Section */}
      <div>
        <p className="text-gray-700 mb-4">
          We can help make sure you have everything you need including a
          personal concierge. Let us know what you may require in addition
          to your personal chauffeur and we will do our best to help:
        </p>
        
        <fieldset className="space-y-3">
          <legend className="sr-only">Additional Services</legend>
          
          {[
            { id: "concierge", label: "Concierge service" },
            { id: "childseat", label: "Child seat" },
            { id: "serviceapartement", label: "Serviced apartment" },
            { id: "hotelreservation", label: "Hotel reservation" },
            { id: "restaurantreservation", label: "Restaurant reservation" },
            { id: "tour", label: "Tours & sightseeing" },
            { id: "golfcoaching", label: "Book golf coaching" },
            { id: "book_personal_trainer", label: "Book Personal Trainer" },
            { id: "English_language_translator", label: "English language translator" },
            { id: "Additional_security", label: "Additional security" }
          ].map((service) => (
            <div key={service.id} className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id={service.id}
                  {...register(service.id)}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor={service.id} className="font-medium text-gray-900">
                  {service.label}
                </label>
              </div>
            </div>
          ))}
        </fieldset>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="yourRequest" className="block text-sm font-medium leading-6 text-gray-900">
          Your Request
        </label>
        <div className="mt-2">
          <textarea
            id="yourRequest"
            {...register("Your_Request")}
            rows="3"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
            placeholder="Any special requests or additional information"
          ></textarea>
        </div>
      </div>

      {/* Consent Checkbox */}
      <fieldset>
        <div className="mb-3 text-sm font-semibold leading-6 text-gray-900">
          Please consent to us contacting you:
        </div>
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="consent"
              {...register("term_valid", { required: "Consent is required" })}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-green-900 focus:ring-green-900"
              aria-invalid={errors.term_valid ? "true" : "false"}
              aria-describedby="consent-error"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="consent" className="font-medium text-gray-900">
              I consent to being contacted by email or phone by Citywide London
            </label>
          </div>
        </div>
        {errors.term_valid && (
          <p id="consent-error" className="mt-1 text-sm text-red-600">
            {errors.term_valid.message}
          </p>
        )}
      </fieldset>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full text-white bg-green-900 px-6 py-3 rounded-md hover:bg-green-700 shadow-sm transition-colors duration-200 flex justify-center items-center gap-2"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <FaSpinner className="animate-spin" />
            Processing...
          </>
        ) : (
          "SEND BOOKING REQUEST"
        )}
      </button>
    </form>
  );
};

export default BookingForm;