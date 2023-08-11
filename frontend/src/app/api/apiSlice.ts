import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query/react"

interface CustomError {
    data: {
        message: string,
    },
    status: number
};

export const isCustomError = (object: any): object is CustomError => {
    if (typeof object !== "object") return false
    if (!("data" in object)) return false
    if (typeof object.data !== "object") return false
    if (!("status" in object)) return false
    if (typeof object.status !== "number") return false
    if (!("message" in object.data)) return false
    if (typeof object.data.message !== "string") return false
    return true
};

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASEURL }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
    tagTypes: ["User", "Build"],
    endpoints: builder => ({})
});