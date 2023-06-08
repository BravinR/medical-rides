"use client"; // Remove this line
import React from "react";
import Link from "next/link";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Thanks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center mt-12 ml-4">
        <h2 className="text-2xl font-bold mb-4">Thank You for Your Reservation</h2>
        <p className="max-w-xl text-center text-gray-700 mb-8">
          Important Information: Please note that submitting the form does not confirm your ride.
          To secure your free ride, kindly give us a call to confirm. When calling, please have your Medicaid ID ready for verification purposes.
        </p>
        <Link href="/" passHref className=" mt-3 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700">
          Go Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Thanks;
