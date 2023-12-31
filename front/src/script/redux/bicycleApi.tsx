import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, PARTIAL_URL, REQUEST_METHODS } from '../constants';
import fetch from 'isomorphic-fetch';
import { BicycleDBData, BicycleData } from '../models';

export const bicycleApi = createApi({
  reducerPath: 'bicycleApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, fetchFn: fetch }),
  endpoints: (build) => ({
    getAllBicycles: build.query<BicycleDBData[], string>({
      query: () => ({
        url: `/${PARTIAL_URL.BICYCLE}`,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': 'no-cors',
        },
      }),
    }),
    addBicycle: build.mutation<BicycleDBData, BicycleData>({
      query: (values: BicycleData) => ({
        url: `/${PARTIAL_URL.BICYCLE}/`,
        method: REQUEST_METHODS.POST,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': 'no-cors',
        },
        body: JSON.stringify(values),
      }),
    }),
    deleteBicycle: build.mutation<unknown, string>({
      query: (id: string) => ({
        url: `/${PARTIAL_URL.BICYCLE}/${id}/`,
        method: REQUEST_METHODS.DELETE,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': 'no-cors',
        },
      }),
    }),
    changeStatusBicycle: build.mutation<BicycleDBData, { id: string; bicycle: BicycleData }>({
      query: ({ id, bicycle }: { id: string; bicycle: BicycleData }) => ({
        url: `/${PARTIAL_URL.BICYCLE}/${id}/`,
        method: REQUEST_METHODS.PUT,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': 'no-cors',
        },
        body: JSON.stringify(bicycle),
      }),
    }),
  }),
});

export const {
  useChangeStatusBicycleMutation,
  useGetAllBicyclesQuery,
  useDeleteBicycleMutation,
  useAddBicycleMutation,
} = bicycleApi;
