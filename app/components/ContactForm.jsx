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
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.subject = "contact";
    getdata(data);
    reset();
  };

  const getdata = async (data) => {
    const JSONdata = JSON.stringify(data);
    setbtnloading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    });

    const result = await response.json();
    if (result.success) {
      setThankyou(true);
    }
    setbtnloading(false);
  };

  const FormElement = () => (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Contact form">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Your Name
        </label>
        <input
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Please enter your name"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-red-500" role="alert">Name is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Your Email
        </label>
        <input
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Please enter your email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-500" role="alert">Email is required</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
          Subject
        </label>
        <input
          id="subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && (
          <p className="text-red-500" role="alert">Subject is required</p>
        )}
      </div>

      <div className="mb-7">
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
          Message <span className="text-red-900">*</span>
        </label>
        <textarea
          id="message"
          rows={8}
          className="block w-full rounded-md border border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-green-900 sm:text-sm"
          placeholder="Your message"
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-red-500" role="alert">Message is required</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-7 bg-green-900 disabled:bg-gray-600 flex justify-center items-center gap-3 py-3 text-white font-semibold shadow-sm rounded-md hover:bg-green-700"
        disabled={btnloading}
        aria-busy={btnloading}
      >
        {btnloading ? (
          <>
            <FaSpinner className="animate-spin text-yellow-300" aria-hidden="true" />
            Processing
          </>
        ) : (
          "SEND"
        )}
      </button>
    </form>
  );

  return thankyou ? <Thankyou /> : <FormElement />;
};

export default ContactForm;
