"use client"; 

import React from "react"
import Link from 'next/link';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Services = () => {
  return (
    <div>
        <Navbar />
        <div className="flex justify-center items-center ">
            <div className="max-w-lg bg-gray-100 rounded m-5">
                <h1 className="text-3xl font-bold text-center mb-8">Non-Emergency Medical Transportation Services (Medicaid)</h1>
                <p className="text-center mb-4">At Peak Elite, we place an unwavering emphasis on delivering exceptional customer service. Specializing in non-emergent medical transportation (NEMT) services for Colorado Springs and its neighboring counties, we are dedicated to our mission of providing punctual, compassionate, and cost-effective transportation solutions to healthcare facilities.</p>

                <div className="mx-auto">
                <h2 className="text-xl font-bold mb-4">Services Offered:</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>To and from Home</li>
                    <li>Medical Appointments</li>
                    <li>Physical Therapy Appointments</li>
                    <li>Vision and Dental Appointments</li>
                    <li>Dialysis Appointments</li>
                    <li>Mental Health Service Appointments</li>
                </ul>

                <p className="text-center mb-8">We are here to assist you with your Medicaid transportation needs.</p>

                <div className="flex justify-center">
                <Link href="/schedule" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700">SCHEDULE A RIDE</Link>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
};

export default Services;
