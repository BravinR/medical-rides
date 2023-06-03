"use client"; // This is a client component
import React from "react";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="max-w-lg mx-6 mt-8 flex-grow">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            
            <p className="mb-4">We would love to hear from you. Please reach out to us with any questions, inquiries, or feedback.</p>

            <form>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">Name:</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded" type="text" id="name" name="name" placeholder="Your Name" required />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded" type="email" id="email" name="email" placeholder="Your Email" required />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">Message:</label>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded" id="message" name="message" rows={5} placeholder="Your Message" required></textarea>
                </div>

                <div className="flex justify-center">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700" type="submit">Submit</button>
                </div>
            </form>
        </div>
        <Footer />
    </div>
  );
};

export default Contact;
