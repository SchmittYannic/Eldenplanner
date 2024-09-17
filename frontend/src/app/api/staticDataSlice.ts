import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "/",
});

export const staticDataSlice = createApi({
    reducerPath: "staticData",
    baseQuery: baseQuery,
    endpoints: () => ({})
});