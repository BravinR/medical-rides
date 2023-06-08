"use client"; // Remove this line

import React from "react";
import Image from "next/image";
import serviceArea from "./../../../public/medride-colorado-service-area.jpg";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ServiceArea = () => {
  const counties = [
    "Alamosa", "Archuleta", "Baca", "Bent", "Chaffee", "Cheyenne", "Crowley", "Custer",
    "Costilla", "Conejos", "Delta", "Eagle", "Elbert", "El Paso", "Fremont", "Garfield",
    "Gunnison", "Grand", "Hinsdale", "Huerfano", "Jackson", "Kioa", "Kit Carson",
    "Las Animas", "Lake", "Lincoln", "Mesa", "Mineral", "Moffat", "Montrose", "Otero",
    "Ouray", "Park", "Pitkin", "Prowers", "Pueblo", "Rio Blanco", "Rio Grande", "Routt",
    "Saguache", "Summit", "Teller"
  ];

  // Split the counties array into two halves
  const halfLength = Math.ceil(counties.length / 2);
  const firstHalf = counties.slice(0, halfLength);
  const secondHalf = counties.slice(halfLength);

  return (
    <div>
      <Navbar />
      <h2 className="ml-5 mt-3 text-2xl font-bold mb-4">Service Areas</h2>
      <p className="max-w-xl text-center text-gray-700 mb-8">
        We will be providing services to the following counties:
      </p>
      <Image className="w-auto mb-5" src={serviceArea} alt="Peak Elite logo" />
      <div className="grid grid-cols-2 gap-4">
        <ul className="ml-5">
          {firstHalf.map((county) => (
            <li key={county}>{county}</li>
          ))}
        </ul>
        <ul>
          {secondHalf.map((county) => (
            <li key={county}>{county}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceArea;
