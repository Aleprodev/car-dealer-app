'use client';
import Spinner from '@/app/components/LoadingSpinner';
import { useFetchModelsForMakeQuery } from '@/app/features/apiSlice';
import { VehicleDataPath, VehicleDetails } from '@/app/types/cars';
import Link from 'next/link';

export default function VehicleData({ makeId, year }: VehicleDataPath) {
  const {
    data: modelsData,
    error,
    isLoading,
  } = useFetchModelsForMakeQuery({ makeId, year });

  if (isLoading) return <Spinner />;
  if (error) return <p className="text-white">Error loading options.</p>;
  if (!modelsData) return <p className="text-white">No data.</p>;

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-16 p-8">
      <div>
        <h1 className="text-center font-bold text-6xl text-black opacity-90">
          Your dream car make is {modelsData.Results[0].Make_Name}
        </h1>
        <p className="text-center font-bold text-2xl text-black opacity-90">
          Here are the different models you can find:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {modelsData.Results.map((car: VehicleDetails) => (
          <div
            key={car.Model_ID}
            className="flex flex-col h-fit space-y-4 bg-black bg-opacity-70 rounded-lg p-8"
          >
            <h2 className="text-white text-lg text-center font-bold">
              {car.Make_Name} - {car.Model_Name}
            </h2>
          </div>
        ))}
      </div>

      <Link
        href="/"
        passHref
        className={`py-1 px-4 w-fit rounded text-white bg-blue-500`}
      >
        Back to home
      </Link>
    </div>
  );
}
