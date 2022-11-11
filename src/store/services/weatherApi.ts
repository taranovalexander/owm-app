import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { OPENWEATHERMAP_API_URL, UNITS } from "../../constants";
import type { Coordinates, Forecast } from '../../types';

interface GetDailyForecastResponse {
  city: {
    id: number;
    name: string;
    coord: Coordinates;
    country: string;
    population: number;
    timezone: number;
  },
  cod: string;
  message: number;
  cnt: number;
  list: Forecast[];
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: OPENWEATHERMAP_API_URL }),
  endpoints: (builder) => ({
    getDailyForecast: builder.query<GetDailyForecastResponse, Coordinates>({
      query: (params) => ({
        url: "forecast/daily",
        params: {
          lat: params.lat,
          lon: params.lon,
          appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
          units: UNITS,
        }
      }),
    }),
  }),
});

export const { useGetDailyForecastQuery } = weatherApi;
