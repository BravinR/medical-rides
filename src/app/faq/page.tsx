"use client"; // This is a client component
import React from "react"

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Faq = () => {
  return (
    <div>
        <Navbar />
        <div className="ml-5 mr-5">
            
            <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            
            <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Q: What is non-emergency medical transportation?</h3>
                <p className="mb-4">A: Non-emergency medical transportation (NEMT) refers to transportation services for individuals who require assistance getting to and from healthcare facilities but do not require immediate emergency medical care.</p>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Q: Who is eligible for Medicaid transportation services?</h3>
                <p className="mb-4">A: Eligibility for Medicaid transportation services varies by state. In general, individuals enrolled in Medicaid who have a medical appointment or need transportation to receive medical care may be eligible for these services. It is recommended to check with your local Medicaid office for specific eligibility criteria.</p>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Q: How do I schedule a ride for Medicaid transportation?</h3>
                <p className="mb-4">A: To schedule a ride for Medicaid transportation, please use our convenient online booking system or call our dedicated hotline. Our team will assist you in scheduling the transportation based on your needs and availability.</p>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Q: What are the safety measures in place during transportation?</h3>
                <p className="mb-4">A: Your safety is our utmost priority. We ensure that our vehicles are well-maintained, equipped with necessary safety features, and our drivers undergo proper training. Additionally, we adhere to all local and state regulations regarding transportation and COVID-19 safety protocols.</p>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Q: How much does Medicaid transportation cost?</h3>
                <p className="mb-4">A: The cost of Medicaid transportation may vary depending on factors such as distance, duration, and specific Medicaid guidelines. We strive to provide affordable transportation services and work closely with Medicaid to ensure the best possible rates for our clients.</p>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  )
};

export default Faq;
