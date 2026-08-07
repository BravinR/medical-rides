"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useForm, Controller } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AddressAutocompleteInput from '../../components/AddressAutocompleteInput';

const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
const labelClass = "block mb-2 text-sm font-medium text-black";
const errorClass = "mt-1 text-sm text-red-600";

const Schedule = () => {
    const router = useRouter();
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const { submit } = useWeb3Forms({
    access_key: '378de2ec-f6e7-4f1e-9fbe-e35bc39537d2',
    settings: {
      from_name: "Peak Elite Medride",
      subject: "New Medicaid Schedule Request from your Website",
    },
    onSuccess: (msg, data) => {
        router.push("/thanks");
    },
    onError: (msg, data) => {
      console.error("Form submission error:", data);
      setSubmitError(true);
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setSubmitError(false);
    try {
      await submit(data);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-center">Schedule with Medicaid</h1>
        <p className="mt-3 mb-8 text-center text-gray-600">
          Fill in your ride details below and we will confirm your Medicaid-covered trip.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              placeholder="Full name"
              className={inputClass}
              {...register("name", { required: "Please enter your name" })}
            />
            {errors.name && <p className={errorClass}>{String(errors.name.message)}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              autoComplete="tel"
              placeholder="(555) 555-5555"
              className={inputClass}
              {...register("phone", { required: "Please enter your phone number" })}
            />
            {errors.phone && <p className={errorClass}>{String(errors.phone.message)}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div className="mb-6">
              <label htmlFor="pickupDate" className={labelClass}>
                Pick up Date
              </label>
              <input
                type="date"
                id="pickupDate"
                className={inputClass}
                {...register("pickupDateTime", { required: "Please choose a pick up date" })}
              />
              {errors.pickupDateTime && <p className={errorClass}>{String(errors.pickupDateTime.message)}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="pickupTime" className={labelClass}>
                Pick up Time
              </label>
              <input
                type="time"
                id="pickupTime"
                className={inputClass}
                {...register("pickupTime", { required: "Please choose a pick up time" })}
              />
              {errors.pickupTime && <p className={errorClass}>{String(errors.pickupTime.message)}</p>}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="pickupAddress" className={labelClass}>
              Pick up Address
            </label>
            <Controller
              name="pickupAddress"
              control={control}
              defaultValue=""
              rules={{ required: "Please enter the pick up address" }}
              render={({ field }) => (
                <AddressAutocompleteInput
                  id="pickupAddress"
                  autoComplete="section-pickup address-line1"
                  placeholder="Street, city, state"
                  className={inputClass}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.pickupAddress && <p className={errorClass}>{String(errors.pickupAddress.message)}</p>}
            <input
              type="text"
              id="pickupAddress2"
              autoComplete="section-pickup address-line2"
              placeholder="Apt, suite, unit (optional)"
              aria-label="Pick up apartment, suite, or unit (optional)"
              className={`${inputClass} mt-2`}
              {...register("pickupAddress2")}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="dropoffAddress" className={labelClass}>
              Drop off Address
            </label>
            <Controller
              name="dropoffAddress"
              control={control}
              defaultValue=""
              rules={{ required: "Please enter the drop off address" }}
              render={({ field }) => (
                <AddressAutocompleteInput
                  id="dropoffAddress"
                  autoComplete="section-dropoff address-line1"
                  placeholder="Street, city, state"
                  className={inputClass}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.dropoffAddress && <p className={errorClass}>{String(errors.dropoffAddress.message)}</p>}
            <input
              type="text"
              id="dropoffAddress2"
              autoComplete="section-dropoff address-line2"
              placeholder="Apt, suite, unit (optional)"
              aria-label="Drop off apartment, suite, or unit (optional)"
              className={`${inputClass} mt-2`}
              {...register("dropoffAddress2")}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="returnTime" className={labelClass}>
              Return Time <span className="font-normal text-gray-500">(optional, for round trips)</span>
            </label>
            <input
              type="time"
              id="returnTime"
              className={inputClass}
              {...register("returnTime")}
            />
          </div>

          {submitError && (
            <p className="mb-4 text-sm text-red-600" role="alert">
              Something went wrong while sending your request. Please try again, or call us to schedule your ride.
            </p>
          )}

          <button
            type="submit"
            className="w-full focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Schedule My Ride"}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Schedule;
