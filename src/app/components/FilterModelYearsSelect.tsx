'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { setModelYear } from '../features/options/optionsSlice';
import { useDispatch } from 'react-redux';

const modelYears: string[] = [
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
];

export default function FilterModelYearsSelect() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (year: string) => {
    setSelected(year);
    setIsOpen(false);
    dispatch(setModelYear(year));
  };

  return (
    <div className="relative w-60">
      <div
        className="flex justify-between items-center p-2 border rounded bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{selected || 'Select a model year'}</p>
        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-40 w-full overflow-auto bg-white border rounded shadow-lg">
          {modelYears.map((year: string) => (
            <li
              key={year}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(year)}
            >
              {year}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
