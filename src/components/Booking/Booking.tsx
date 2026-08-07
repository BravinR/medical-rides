import React, { useContext, useState } from 'react'
import Autocomplete from './Autocomplete'
import Cars from './Cars'
import Cards from './Cards'
import { useRouter } from 'next/navigation'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'
import { FormDetailsContext } from '@/context/FormDetailsContext'
import { useAddressContext } from '@/context/AddressContext'
import FormDetails from './FormDetails'

function Booking() {
  const { carAmount } = useContext(SelectedCarAmountContext);
  const formContext = useContext(FormDetailsContext);
  const { sourceAddress, destinationAddress } = useAddressContext();
  const router = useRouter();
  const [error, setError] = useState('');

  if (!formContext) {
    throw new Error('Booking must be used within a FormDetailsProvider');
  }
  const { formDetails } = formContext;

  const hasFare = Boolean(carAmount && carAmount !== 0);

  const handleScheduleRide = () => {
    if (!formDetails.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formDetails.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    if (!formDetails.pickUpDate || !formDetails.pickUpTime) {
      setError('Please choose a pick up date and time.');
      return;
    }
    if (!sourceAddress || !destinationAddress) {
      setError('Please select your pick up and drop off addresses from the suggestions.');
      return;
    }
    setError('');
    router.push('/payment');
  };

  return (
    <div>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <FormDetails />
        <Autocomplete />
        <Cars />
        <Cards />
        {error && (
          <p className='mt-3 text-sm text-red-600' role='alert'>{error}</p>
        )}
        {!hasFare && !error && (
          <p className='mt-3 text-sm text-gray-500'>
            Select your pick up and drop off addresses to calculate your fare.
          </p>
        )}
        <button
          className={`w-full p-2 rounded-md mt-4 font-medium ${hasFare ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          disabled={!hasFare}
          onClick={handleScheduleRide}
        >
          {hasFare ? `Schedule Ride - $${carAmount}` : 'Schedule Ride'}
        </button>
    </div>
  )
}

export default Booking
