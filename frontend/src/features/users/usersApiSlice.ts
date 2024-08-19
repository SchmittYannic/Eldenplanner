import { apiSlice } from "src/app/api/apiSlice"
import { RootState } from "src/app/store";
import { GetBuildsOfUserResponseType, UserType } from "src/types";


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserById: builder.query<UserType, string>({
            query: (id) => ({
                url: `/users/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            keepUnusedDataFor: 300,
            providesTags: (_result, _error, id) => [
                { type: "User", id },
            ],
        }),
        addNewUser: builder.mutation({
            query: initialUserData => ({
                url: "/users",
                method: "POST",
                body: {
                    ...initialUserData,
                },
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            invalidatesTags: [
                { type: "User", id: "LIST" }
            ]
        }),
        updateUser: builder.mutation({
            query: initialUserData => ({
                url: "/users",
                method: "PATCH",
                body: {
                    ...initialUserData,
                },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            invalidatesTags: (arg) => {
                if (arg) {
                    return [
                        { type: "User", id: arg.id }
                    ]
                } else {
                    return []
                }
            }
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/users`,
                method: "DELETE",
                body: { id },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            invalidatesTags: (arg) => {
                if (arg) {
                    return [
                        { type: "User", id: arg.id }
                    ]
                } else {
                    return []
                }
            }
        }),
        getBuildsOfUser: builder.query<GetBuildsOfUserResponseType, { id: string }>({
            query: ({ id }) => ({
                url: `/users/${id}/builds`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.builds.map(({ id }) => ({ type: "Build" as const, id })),
                        { type: "Build", id: "LIST" },
                    ]
                    : [{ type: "Build", id: "LIST" }],
        }),
    }),
})

export const {
    useLazyGetUserByIdQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useGetBuildsOfUserQuery,
} = usersApiSlice;

export const selectGetUserByIdCachedData = (state: RootState, userId: string) => {
    const cacheKey = `getUserById("${userId}")`;
    return state.api.queries[cacheKey]?.data as UserType ?? null;
};