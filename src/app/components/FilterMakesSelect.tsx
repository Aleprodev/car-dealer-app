'use client';

import React, { useState } from 'react';
import { Car } from '../types/cars';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { setVehicleMake } from '../features/options/optionsSlice';
import { useDispatch } from 'react-redux';

interface Props {
  data: Car[];
}

export default function FilterMakesSelect({ data }: Props) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (car: Car) => {
    setSelected(car.MakeName);
    setIsOpen(false);
    dispatch(setVehicleMake(car.MakeId.toString()));
  };

  return (
    <div className="relative w-60">
      <div
        className="flex justify-between items-center p-2 border rounded bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{selected || 'Select a vehicle make'}</p>
        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-40 w-full overflow-auto bg-white border rounded shadow-lg">
          {data.map((car: Car) => (
            <li
              key={car.MakeId}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(car)}
            >
              {car.MakeName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
