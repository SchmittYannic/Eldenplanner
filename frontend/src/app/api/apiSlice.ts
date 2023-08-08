import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query/react"

interface CustomError {
    data: {
        message: string,
    },
    status: number
}

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
    tagTypes: ["User", "Build"],
    endpoints: builder => ({})
});