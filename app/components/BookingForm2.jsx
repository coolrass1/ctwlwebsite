"use client";
import { useForm } from "react-hook-form";

const BookingForm2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
        <fieldset className=" grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
         Name <span className="text-red-600">*</span>
        </label>
        <input
          {...register("name", { required: true })}
          className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none 
                 focus:shadow-outline"
       required
          type="text"
          placeholder="Please enter your name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
         Business or referal name
        </label>
        <input
          {...register("business", { required: true })}
          className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none 
                 focus:shadow-outline"
          
          type="text"
          placeholder="Business or referal name"
        />
      </div>
        </fieldset>
        <fieldset className=" grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Phone  <span className="text-red-600">*</span>
        </label>
        <input
          {...register("phone", { required: true })}
          className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none 
                 focus:shadow-outline"
         
          type="text"
          placeholder="Please enter your Phone nimber"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Your Email <span className="text-red-600">*</span>
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
        </fieldset>
        <fieldset className=" grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="">
        <label
          htmlFor="about"
          className="block text-base font-semibold leading-6 text-gray-900"
        >
       Your pick up address <span className="text-red-600">*</span>
        </label>
        <div className="mt-2">
          <textarea
            {...register("pickupaddress")}
            rows="3"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
      <div className="">
        <label
          htmlFor="about"
          className="block text-base font-semibold leading-6 text-gray-900"
        >
        Your destination address <span className="text-red-600">*</span>
        </label>
        <div className="mt-2">
          <textarea
            {...register("destination")}
            rows="3"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <div className="col-span-full pt-7">
        <label
          htmlFor="about"
          className="block text-base font-semibold leading-6 text-gray-900"
        >
        Your message (optional)
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
    <button type="submit" className="w-full mt-7 bg-green-900 py-7 text-white shadow-sm rounded-md hover:bg-green-700">SEND</button>
     
    </form>
  );
};

export default BookingForm2;
