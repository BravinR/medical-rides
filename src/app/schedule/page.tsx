"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

function Schedule() {

    const router = useRouter();

    const handlePrivatePayment = () => {
        router.push('/payment-schedule');
    };

    const handleMedicaidSchedule = () => {
        router.push('/medicaid-schedule');
    };
    return (
        <>
            <Navbar />
            <main className="text-center py-20">
                <h1 className="text-4xl font-bold">Choose Your Ride Payment Option</h1>
                <p className="mt-4 text-gray-600">Select how you would like to arrange your transportation</p>
                
                <div className="flex flex-col items-center justify-center mt-10 space-y-10 md:flex-row md:space-x-10">
                    <div className="border p-6 rounded-lg w-80">
                        <h2 className="text-xl font-semibold text-blue-500">Pay Privately</h2>
                        <p className="mt-2 text-gray-600">Enjoy a hassle-free ride with private payment. Secure and convenient options available.</p>
                        <button 
                        onClick={handlePrivatePayment}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Pay Privately</button>
                    </div>
                    <div className="border p-6 rounded-lg w-80">
                        <h2 className="text-xl font-semibold text-blue-500">Schedule with Medicaid</h2>
                        <p className="mt-2 text-gray-600">Book your ride through Medicaid for covered transportation services.</p>
                        <button 
                        onClick={handleMedicaidSchedule}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Schedule with Medicaid</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Schedule;
