"use client"; // Remove this line
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Link from 'next/link';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Schedule = () => {
    const router = useRouter();
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { submit } = useWeb3Forms({
    access_key: '378de2ec-f6e7-4f1e-9fbe-e35bc39537d2',
    settings: {
      from_name: "Peak Elite Medride",
      subject: "New Schedule Request from your Website",
    },
    onSuccess: (msg, data) => {
        router.push("/thanks");
    },
    onError: (msg, data) => {
      console.error("Form submission error:", data);
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await submit(data);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <iframe
          src="https://peaklite.nemtclouddispatch.com/request.php"
          style={{ height: '55rem', width: '97%', border: 'none' }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
