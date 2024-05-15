import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const campperApi = createApi({
  reducerPath: "campperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66438e9d6c6a656587078fa8.mockapi.io/api/v1/",
  }),
  tagTypes: ["campper"],
  endpoints: (builder) => ({
    getCampperData: builder.query({
      query: () => `Campper`,
      providesTags: ["campper"],
    }),
  }),
});

export const { useGetCampperDataQuery } = campperApi;
