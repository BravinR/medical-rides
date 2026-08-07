"use client"
import Booking from '@/components/Booking/Booking'
import MapBoxMap from '@/components/Map/MapBoxMap'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function Schedule() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center">Book a Private Pay Ride</h1>
        <p className="mt-3 text-center text-gray-600">
          Enter your trip details, pick your addresses, and see your fare instantly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <Booking />
          </div>
          <div className="col-span-1 md:col-span-2">
            <MapBoxMap />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Schedule;
