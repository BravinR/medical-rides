 "use client"; // Remove this line

import React from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const { submit } = useWeb3Forms({
    access_key: '378de2ec-f6e7-4f1e-9fbe-e35bc39537d2',
    settings: {
      from_name: "Peak Elite Medride",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      console.log("Form submitted successfully:", data);
      reset(); // Reset the form after successful submission
    },
    onError: (msg, data) => {
      console.error("Form submission error:", data);
    },
  });

  const onSubmit = (data:any) => {
    submit(data); // Trigger the form submission
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-lg mx-6 mt-8 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <p className="mb-4">
          We would love to hear from you. Please reach out to us with any
          questions, inquiries, or feedback.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="text"
              id="name"
              placeholder="Your Name"
              required
              {...register("name")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="email"
              id="email"
              placeholder="Your Email"
              required
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="message"
              rows={5}
              placeholder="Your Message"
              required
              {...register("message")}
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
