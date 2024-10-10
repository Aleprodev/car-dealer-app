import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CarsResponse, VehicleDataResponse } from '../types/cars';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    fetchMakesOptions: builder.query<CarsResponse, void>({
      query: () => '/GetMakesForVehicleType/car?format=json',
    }),
    fetchModelsForMake: builder.query<
      VehicleDataResponse,
      { makeId: string; year: string }
    >({
      query: ({ makeId, year }) =>
        `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    }),
  }),
});

export const { useFetchMakesOptionsQuery, useFetchModelsForMakeQuery } =
  apiSlice;
