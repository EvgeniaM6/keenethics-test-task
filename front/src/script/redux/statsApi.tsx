import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, PARTIAL_URL } from '../constants';
import fetch from 'isomorphic-fetch';
import { StatsData } from '../models';

export const statsApi = createApi({
  reducerPath: 'statsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, fetchFn: fetch }),
  endpoints: (build) => ({
    getStats: build.query<StatsData, string>({
      query: () => ({
        url: `/${PARTIAL_URL.STATS}`,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': 'no-cors',
        },
      }),
    }),
  }),
});

export const { useGetStatsQuery } = statsApi;
