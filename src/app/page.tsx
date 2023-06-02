import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import backgroundImage from "./../../public/dark_colorado.jpg";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='relative'>
        <Image className="h-[600px] w-full object-cover " src={backgroundImage} alt='Peak Elite Background Image'/>
        <h1 className='absolute top-[200px] text-4xl text-center font-semibold text-white'>Book your ride from anywhere today!</h1>
        <h1 className="absolute top-[300px] text-2xl text-center font-semibold text-white">
        Ride with Confidence: Reliable Non-Emergency Medical Transportation Services at Your Fingertips!
        </h1>
        <button type="button" className=" absolute top-[450px] focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-32 mb-2 dark:focus:ring-yellow-900">Schedule a Ride</button>
      </div>
      <div className='ml-10'>
        <h1 className="mt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Non Emergency Medicaid Transportation Services</h1>
        <ul className='text-gray-500'>
          <li className="text-body-color mb-4 flex text-base">
            <span className="text-primary mr-2 rounded-full text-base">
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                <path
                d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"
                ></path>
                <path
                d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"
                ></path>
              </svg>
            </span>
            Transportation to and from medical facilities
          </li>
          <li className="text-body-color mb-4 flex text-base">
            <span className="text-primary mr-2 rounded-full text-base">
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                <path
                  d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"
                ></path>
                <path
                  d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"
                ></path>
              </svg>
            </span>
            Outpatient clinic visits
          </li>
          <li className="text-body-color mb-4 flex text-base">
            <span className="text-primary mr-2 rounded-full text-base">
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                <path
                  d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"
                ></path>
                <path
                  d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"
                ></path>
              </svg>
            </span>
            Physical therapy appointments
          </li>
          <li className="text-body-color mb-4 flex text-base">
            <span className="text-primary mr-2 rounded-full text-base">
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                <path
                  d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"
                ></path>
                <path
                  d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"
                ></path>
              </svg>
            </span>
            Physical therapy appointments
          </li>
          <li className="text-body-color mb-4 flex text-base">
            <span className="text-primary mr-2 rounded-full text-base">
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                <path
                  d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"
                ></path>
                <path
                  d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"
                ></path>
              </svg>
            </span>
            Medical appointments
          </li>
          <li className="text-body-color mb-4 flex text-base">
            <span className="text-primary mr-2 rounded-full text-base">
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                <path
                  d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z"
                ></path>
                <path
                  d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"
                ></path>
              </svg>
            </span>
            Prescription pickup
          </li>
        </ul>
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Why Ride With Us</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Here at Peak Elite we understand that your safety and comfort are our top priorities. That&apos;s why we offer: </p>
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Safety Guarantee:</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Our drivers are carefully selected and thoroughly trained to ensure that they meet our high safety standards. 
            Our vehicles are equipped with state-of-the-art technology to monitor and ensure the safety of each ride.</p>
          </a>
          <a href="#" className="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fast Pickups:</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">We know that time is of the essence, especially when it comes to medical appointments. That&apos;s why we pride ourselves on our fast pickup times. 
            Our drivers are trained to arrive promptly and get you to your destination on time.</p>
          </a>
          <a href="#" className="mt-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">24/7 Support:</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">We&apos;re here for you whenever you need us. Our customer support team is available 24/7 to answer your questions, 
            make changes to your reservations, or help you with any other needs you may have.</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}