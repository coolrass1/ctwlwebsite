"use client";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Thankyou from "./Thankyou";
import { FaSpinner } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BookForm3 = () => {
  const [thankyou, setThankyou] = useState(false);
  const [emailfail, setEmailfail] = useState(false);
  const [btnloading, setbtnloading] = useState(false);
  const [startDate] = useState(new Date());
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setbtnloading(true);
      const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      result.success ? setThankyou(true) : setEmailfail(true);
    } catch (error) {
      console.error("Submission error:", error);
      setEmailfail(true);
    } finally {
      setbtnloading(false);
      reset();
    }
  };

  const ErrorMessage = ({ error }) => (
    error && <span className="text-red-500 ml-2 text-sm">{error.message || "This field is required"}</span>
  );

  const FormFields = () => (
    <form
      className="shadow-md bg-slate-100 md:p-3"
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Car booking form"
    >
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Please enter your name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          <ErrorMessage error={errors.name} />
        </div>

        {/* Date Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateofbooking">
            Date <span className="text-red-600">*</span>
          </label>
          <Controller
            control={control}
            name="dateofbooking"
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DatePicker
                required
                className="w-full p-2 border rounded shadow focus:outline-none focus:shadow-outline"
                placeholderText="Select date and time"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                showTimeSelect
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={startDate}
                withPortal
                aria-invalid={errors.dateofbooking ? "true" : "false"}
                aria-describedby="date-error"
              />
            )}
          />
          <ErrorMessage error={errors.dateofbooking} />
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone <span className="text-red-600">*</span>
          </label>
          <Controller
            control={control}
            name="phone"
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <PhoneInput
                country={"gb"}
                inputClass="w-full p-2 border rounded shadow focus:outline-none focus:shadow-outline"
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
          <ErrorMessage error={errors.phone} />
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Please enter your email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          <ErrorMessage error={errors.email} />
        </div>

        {/* Car Type Field */}
        <div className="mb-4">
          <label htmlFor="cartype" className="block text-gray-700 text-sm font-bold mb-2">
            Select a Brand
          </label>
          <select
            id="cartype"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("cartype")}
            defaultValue="Any Brand"
          >
            <option value="Any Brand">Any Brand</option>
            <option value="Mercedes Class S">Mercedes class S</option>
            <option value="BMWi7">BMWi7</option>
            <option value="Mercedes Class E">Mercedes class E</option>
            <option value="BMW5">BMW5</option>
            <option value="Mercedes Viano">Mercedes Viano</option>
            <option value="Rolls Fantom">Roll Royce Phantom</option>
            <option value="BMW7">BMW7</option>
          </select>
        </div>

        {/* Pickup Address */}
        <div className="mb-4">
          <label htmlFor="pickupaddress" className="block text-gray-700 text-sm font-bold mb-2">
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
          <ErrorMessage error={errors.pickupaddress} />
        </div>

        {/* Destination Address */}
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">
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
          <ErrorMessage error={errors.destination} />
        </div>
      </fieldset>

      {/* Optional Message */}
      <div className="mb-4 pt-4">
        <label htmlFor="omessage" className="block text-gray-700 text-sm font-bold mb-2">
          Your message (optional)
        </label>
        <textarea
          {...register("omessage")}
          id="omessage"
          rows="3"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-4 bg-green-900 disabled:bg-gray-500 flex justify-center items-center gap-3 py-3 text-white shadow-sm rounded-md hover:bg-green-700 transition-colors duration-200"
        disabled={btnloading}
        aria-busy={btnloading}
      >
        {btnloading ? (
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

  if (thankyou) return <Thankyou />;
  if (emailfail) return (
    <div className="max-w-md mx-auto p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
      <h2 className="text-xl font-bold mb-2">Submission Error</h2>
      <p>We couldn't process your booking request. Please try again or contact us directly.</p>
      <button 
        onClick={() => setEmailfail(false)}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );

  return <FormFields />;
};

export default BookForm3;