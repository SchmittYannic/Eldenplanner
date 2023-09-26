import { apiSlice } from "../../app/api/apiSlice";
import { logOut, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "/auth",
                method: "POST",
                body: { ...credentials },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(logOut());
                    setTimeout(() => {
                        // clears out the cache and query subscriptions
                        // dispatch(apiSlice.util.resetApiState());

                        /*
                            invalidatesTags to force refetching.
                            This gets rid of any unwanted data in cache.
                            A simple resetApiState is not enough since there is no
                            refetching of data going on.
                        */ 
                        dispatch(apiSlice.util.invalidateTags(["User"]));
                        dispatch(apiSlice.util.invalidateTags(["Build"]));
                    }, 1000);
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: "/auth/refresh",
                method: "GET",
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;                    
                    const { accessToken } = data;
                    dispatch(setCredentials({ accessToken }));
                } catch (err) {
                    //console.log(err);
                }
            }
        }),
        sendVerificationEmail: builder.mutation({
            query: ( email ) => ({
                url: "/auth/sendverify",
                method: "POST",
                body: { email },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        verify: builder.mutation({
            query: ( verificationToken ) => ({
                url: "/auth/verify",
                method: "POST",
                body: { verificationToken },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        sendResetRequest: builder.mutation({
            query: ( user ) => ({
                url: "/auth/sendreset",
                method: "POST",
                body: { user },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
        reset: builder.mutation({
            query: ({ resetPasswordToken, password, confirm }) => ({
                url: "/auth/reset",
                method: "POST",
                body: { resetPasswordToken, password, confirm },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation,
    useSendVerificationEmailMutation,
    useVerifyMutation,
    useSendResetRequestMutation,
    useResetMutation,
} = authApiSlice;