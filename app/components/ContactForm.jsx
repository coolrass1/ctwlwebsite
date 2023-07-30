'use client'
import { useForm } from "react-hook-form";
import React from 'react'

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
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
  )
}

export default ContactForm