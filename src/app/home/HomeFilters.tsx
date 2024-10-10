'use client';
import FilterMakesSelect from '@/app/components/FilterMakesSelect';
import { useFetchMakesOptionsQuery } from '../features/apiSlice';
import FilterModelYearsSelect from '../components/FilterModelYearsSelect';
import Spinner from '../components/LoadingSpinner';

export default function HomeFilters() {
  const { data: makesOptions, error, isLoading } = useFetchMakesOptionsQuery();

  if (isLoading) return <Spinner />;
  if (error) return <p className='text-white'>Error loading options.</p>;
  if (!makesOptions) return <p className='text-white'>No data.</p>;
  return (
    <div className="flex flex-col gap-4">
      <FilterMakesSelect data={makesOptions.Results} />
      <FilterModelYearsSelect />
    </div>
  );
}
