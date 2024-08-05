import { createApi, fetchBaseQuery, FetchArgs, BaseQueryApi } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "src/features/auth/authSlice";
import { RootState } from "src/app/store";
import { CustomError } from "src/types";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.API_BASEURL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
});

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    // console.log(args) // request url, method, body
    // console.log(api) // signal, dispatch, getState()
    // console.log(extraOptions) //custom like {shout: true}

    let result = await baseQuery(args, api, extraOptions);

    // If you want, handle other status codes, too
    if (result?.error?.status === 403) {
        // console.log('sending refresh token');

        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

        if (refreshResult?.data) {

            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data }));

            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {

            if (refreshResult?.error?.status === 403) {
                (refreshResult.error as CustomError).data.message = "Your login has expired."
            }
            return refreshResult
        }
    }

    return result
}

const tagTypes = ["User", "Build", "Comments", "Likes"] as const;
export type tagTypesType = typeof tagTypes[number];

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: tagTypes,
    endpoints: () => ({})
});