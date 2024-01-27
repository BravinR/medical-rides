"use client"; 
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react"
import Image from "next/image";
import logo from "./../../../public/logo.png";

const About = () => {
  return (
      <div>
          <div className="mx-8 text-sm">
              <Navbar />
              <div className='flex justify-center items-center mb-10'>
                  <Image className="" src={logo} alt="Peak Elite logo" />
              </div>
              <div className="flex flex-col justify-center items-center">
                  <h1>Ph: (719) 233-0707 Email: info@peakelitemedride.com</h1>
                  <h1 className="font-bold">Medical Certification of Transportation Services: Beyond 25Miles</h1>
              </div>
              <div className="h-6 border-t border-slate-900 mt-4">
              </div>
              <p>
                  The patient's medical provider completes this form which will be used to verify that any trip requested over 25miles has
                  been confirmed as needed by the member’s medical provider. There are no closer providers to this member that can
                  provide needed service are the reasons for submittal. This information can be emailed or mailed to Peak Elite Medride.
              </p>

              <div className="h-6 border-t border-slate-900 mt-4">
              </div>
              <div className="flex">
                  <h1>Patient Name:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4 mr-8">
                  </div>
                  <h1>Patient Date of Birth:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex">
                  <h1>Patient Health First Colorado ID:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>

              <div className="h-6 border-t border-slate-900 mt-4">
              </div>
              <h1 className="font-bold">Referring Provider Information:</h1>
              <div className="flex">
                  <h1>Medical Provider’s Name:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>Facility Name:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex">
                  <h1>Facility Contact Person:</h1>
                  <div className="w-80 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>Phone:</h1>
                  <div className="w-64 h-6 border-t border-slate-900 mt-4">
                  </div>
                  <h1>Fax:</h1>
                  <div className="w-48 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex">
                  <h1>Facility Address:</h1>
                  <div className="w-80 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>Suite:</h1>
                  <div className="w-64 h-6 border-t border-slate-900 mt-4">
                  </div>
                  <h1>Specialty:</h1>
                  <div className="w-48 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex">
                  <h1>City:</h1>
                  <div className="w-80 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>State:</h1>
                  <div className="w-64 h-6 border-t border-slate-900 mt-4">
                  </div>
                  <h1>Zip:</h1>
                  <div className="w-48 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <h1 className="font-bold">Medical Facility Information (where the patient going to):</h1>
              <div className="flex">
                  <h1>Medical Provider’s Name:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>Facility Name:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex">
                  <h1>Facility Contact Person:</h1>
                  <div className="w-80 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>Phone:</h1>
                  <div className="w-64 h-6 border-t border-slate-900 mt-4">
                  </div>
                  <h1>Fax:</h1>
                  <div className="w-48 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex">
                  <h1>Facility Address:</h1>
                  <div className="w-80 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>Suite:</h1>
                  <div className="w-64 h-6 border-t border-slate-900 mt-4">
                  </div>
                  <h1>Specialty:</h1>
                  <div className="w-48 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex">
                  <h1>City:</h1>
                  <div className="w-80 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>State:</h1>
                  <div className="w-64 h-6 border-t border-slate-900 mt-4">
                  </div>
                  <h1>Zip:</h1>
                  <div className="w-48 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="">
                  <input
                      className="p-4 pb-28 border border-gray-600 rounded-lg w-full text-gray-700 text-start"
                      type="text"
                      placeholder="Explain why patient cannot be seen by or transported to a provider closer to the patient's home:"
                  />
              </div>
              <h1 className="font-bold mt-8">Agreement and signature:</h1>
              <h1>I hereby certify that the information contained herein is true and accurate.</h1>
              <div className="flex">
                  <h1>Name of Licensed Medical Provider:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>Title:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex">
                  <h1>Signature of medical facility staff:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4 mr-4">
                  </div>
                  <h1>Date:</h1>
                  <div className="w-96 h-6 border-t border-slate-900 mt-4">
                  </div>
              </div>
              <div className="flex justify-center">
                  <button
                      className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700"
                      type="submit"
                  >
                      Submit
                  </button>
              </div>
          </div>
          <Footer />
      </div>
  )
};

export default About;
