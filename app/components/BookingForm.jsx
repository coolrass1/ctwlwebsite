'use client'
import { useForm } from "react-hook-form";
const BookingForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
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
        htmlFor="username"
      >
        Your Email
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
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Contact Number
      </label>
      <input
      {...register("contactNumber", { required: true })}
        className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none 
                 focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Please enter your contact number"
      />
    </div>
    <div className="mb-4">
  
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Pick up From
      </label>
      <input
        {...register("pickup", { required: true })}
        className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none 
                 focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Pickup me from"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Destination
      </label>
      <input
      {...register("destination", { required: true })}
        className="shadow appearance-none border rounded 
                  w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none 
                 focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Destination"
      />
    </div>
    <p>
      We can help make sure you have everything you need including a
      personal concierge. Let us know what you may require in addition
      to your personal chauffeur and we will do our best to help:
    </p>
    <fieldset className="py-7 flex flex-col gap-2">
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
    </fieldset>
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
    <fieldset className="py-7">
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
            I consent to being contacted by email or phone by Citywide
            London
          </label>
        </div>
      </div>
    </fieldset>
    <button className=" text-white bg-green-900 px-24 py-3 rounded-md hover:bg-green-700 shadow-sm" type="submit"> SEND</button>
  </form>
  )
}

export default BookingForm