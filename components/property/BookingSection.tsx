// components/property/BookingSection.tsx
import React, { useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');

  const calcNights = (): number => {
    if (!checkIn || !checkOut) return 0;
    const ci = new Date(checkIn);
    const co = new Date(checkOut);
    const diff = Math.max(0, Math.ceil((co.getTime() - ci.getTime()) / (1000 * 60 * 60 * 24)));
    return diff;
  };

  const nights = calcNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">${price}/night</h3>

      <div className="mt-4">
        <label className="block text-sm">Check-in</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="border p-2 w-full mt-2 rounded" />
      </div>

      <div className="mt-4">
        <label className="block text-sm">Check-out</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="border p-2 w-full mt-2 rounded" />
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-700">Nights: <strong>{nights}</strong></p>
        <p className="mt-2">Total payment: <strong>${total}</strong></p>
      </div>

      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md">Reserve now</button>
    </div>
  );
};

export default BookingSection;
