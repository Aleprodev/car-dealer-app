'use client';
import Link from 'next/link';
import HomeFilters from './HomeFilters';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const { vehicleMake, modelYear } = useSelector(
    (state: RootState) => state.options
  );
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(!!vehicleMake && !!modelYear);
  }, [vehicleMake, modelYear]);

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-16 p-8">
      <h1 className="text-center font-bold text-6xl text-black opacity-90">
        Find your dream car
      </h1>
      <div className="flex flex-col space-y-4 bg-black bg-opacity-70 rounded-lg p-8">
        <h2 className="text-white text-lg text-center font-bold">
          Filter your options below!
        </h2>
        <HomeFilters />
        <div className="flex justify-center">
          <Link
            href={`/result/${vehicleMake}/${modelYear}`}
            passHref
            aria-disabled={isEnabled}
            className={`py-1 px-4 w-fit rounded text-white ${isEnabled ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed pointer-events-none'}`}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
