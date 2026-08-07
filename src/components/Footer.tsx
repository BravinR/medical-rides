import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 mt-5 shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-start md:justify-between">
          <div className="">
            <div className="md:grid md:grid-cols-3 md:gap-x-8">
              <div className="mb-4">
                <h1 className="font-semibold text-white">Office Location:</h1>
                <p className="text-sm text-gray-400 ">
                  8346 Sprague Way
                  <br />
                  COLORADO SPRINGS, CO 80908
                </p>
                <p className="text-sm text-gray-400 ">
                  Phone Number: +1 (719) 233-0707
                </p>
                <p className="text-sm text-gray-400 ">
                  Email Address: info@peakelitemedride.com
                </p>
              </div>
              <div className="mb-8">
              <h1 className="font-semibold text-white">Office hours:</h1>
                <p className="text-sm text-gray-400 ">
                  Monday 6 AM - 10 PM
                  <br />
                  Tuesday 6 AM - 10 PM
                  <br />
                  Wednesday 6 AM - 10 PM
                  <br />
                  Thursday 6 AM - 10 PM
                  <br />
                  Friday 6 AM - 10 PM
                  <br />
                  Saturday 6 AM - 10 PM
                  <br />
                  Sunday 6 AM - 10 PM
                </p>
              </div>
              <div>
              <h1 className="text-sm font-semibold text-white">Daily transportation, 6 AM - 10 PM:</h1>
                <p className="text-sm text-gray-400 ">
                  Peak Elite medride operates every day from 6 AM to 10 PM providing timely transportation to your appointments. Having reliable and accessible transportation is our goal. If you have any specific question or need further information about our service, feel free to call or text our main office number: (719) 233-0707, or our satellite office numbers: (806) 787-6905 and (719) 306-7313.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;