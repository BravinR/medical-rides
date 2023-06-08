import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white mt-5 shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-start md:justify-between">
          <div className="">
            <div className="md:grid md:grid-cols-4 md:gap-x-8">
              <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Address: 8346 SPRAGUE WAY
                  <br />
                  COLORADO SPRINGS, CO 80908
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone Number: +1 (719) 233-0707
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email Address: peakelitemedride@gmail.com
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Satellite Office:
                  <br />
                  6228 Dancing water Drive
                  <br />
                  Colorado Springs, Colorado, 80911
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone Numbers:
                  <br />
                  +1 (806) 787-6905
                  <br />
                  +1 (719) 306-7313
                </p>
              </div>
              <div className="mb-8">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Office hours:
                  <br />
                  Monday 6:00 am - 8:00 pm
                  <br />
                  Tuesday 6:00 am - 8:00 pm
                  <br />
                  Wednesday 6:00 am - 8:00 pm
                  <br />
                  Thursday 6:00 am - 8:00 pm
                  <br />
                  Friday 6:00 am - 8:00 pm
                  <br />
                  Saturday 6:00 am - 8:00 pm
                  <br />
                  Sunday 6:00 am - 1pm
                  <br />
                  Closed on Sunday Afternoon and Evening.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  24 hours transportation
                  <br />
                  Peak Elite medride operates 24 hours a day providing timely transportation to your appointments. Having reliable and accessible transportation is our goal. If you have any specific question or need further information about our service, feel free to call or text our main office number: (719) 233-0707, or our satellite office numbers: (806) 787-6905 and (719) 306-7313.
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
