"use client";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Thankyou from "./Thankyou";
import { FaSpinner } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MyDatePicker from "./MyDatePicker";
import { FaCalendarAlt } from "react-icons/fa";

const BookForm3 = () => {
  const [thankyou, setThankyou] = useState(false);
  const [emailfail, setEmailfail] = useState(false);
  const [btnloading, setbtnloading] = useState(false);
  const [startDate, setStartDate] = useState(Date.now);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    getdata(data);
    reset();
  };
  const getdata = async (data) => {
    console.log("calling .... BookForm3")
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    setbtnloading(true);

    // API endpoint where we send form data.
    const endpoint = "/api/nodemailer";

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

    // console.log(`result is ${JSON.stringify(result)}}`)
    
   // results && setThankyou(true);
    //results && router.push("/thankyou");
    result.success?setThankyou(true):setEmailfail(true)
    setbtnloading(false);
    reset();
  };

  const Formi = function () {
    return (
      <>
        <form
          className="shadow-md bg-slate-100 md:p-3"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              {errors.name && "First name is required"}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Date{" "}  <span className="text-red-600">*</span>
                {errors.date && (
                  <span className="text-red-500">{"date is required"}</span>
                )}
              </label>
              {/* < DatePicker 
                className="py-2 shadow-sm"
                 selected={startDate} 
                 onChange={(date) => setStartDate(date)}
                 showTimeSelect
                 dateFormat="Pp" /> */}
              <Controller
                control={control}
                name="dateofbooking"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    //showIcon
                    required
                    className="py-2"
                    placeholderText="Click to select a date" 
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    showTimeSelect
                    dateFormat="Pp"
                    isClearable
                    minDate={startDate}
                    withPortal
                  />
                  // <MyDatePicker

                  // />
                )}
              />
            </div>
          </fieldset>
          <fieldset className=" grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="mb-4 max-w-[80px]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Phone <span className="text-red-600">*</span>
                {errors.phone && (
                  <span className="text-red-500 ml-2">
                    {"phone number is required"}
                  </span>
                )}
              </label>

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
            </div>
            {/* hshs */}
          </fieldset>
          <fieldset className=" grid grid-cols-1 md:grid-cols-2 gap-2">
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
                required
                type="email"
                placeholder="Please enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a Brand
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("cartype")}
              >
                <option selected>Any Brand</option>
                <option value="Mercedes Class S">Mercedes class S</option>
                <option value="BMWi7">BMWi7</option>
                <option value="Mercedes Class E">Mercedes class E</option>
                <option value="BMW5">BMW5</option>
                <option value="Mercedes Viano">Mercedes Viano</option>
                <option value="Rolls Fantom">Roll Royce Phatom</option>
                <option value="BMW7">BMW7</option>
              </select>
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
                  {...register("pickupaddress", { required: true })}
                  rows="3"
                  required
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
                  {...register("destination", { required: true })}
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
                  {...register("omessage")}
                  rows="3"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
                ></textarea>
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
        </form>
      </>
    );
  };
  if (thankyou) return  <Thankyou />
  if(emailfail) return <h1 className="text-red-950 text-9xl">Error happened</h1>
  return  <Formi />;
};

export default BookForm3;
