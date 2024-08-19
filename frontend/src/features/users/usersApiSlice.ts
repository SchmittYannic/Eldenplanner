import {
    createSelector,
    createEntityAdapter,
    EntityState
} from "@reduxjs/toolkit";
import { apiSlice } from "src/app/api/apiSlice"
import { RootState } from "src/app/store";
import { UserType } from "src/types";

const usersAdapter = createEntityAdapter({});

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<EntityState<unknown>, string>({
            query: () => ({
                url: "/users",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData: UserType[]) => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id
                    return user
                });
                return usersAdapter.setAll(initialState, loadedUsers)
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.ids.map((id) => ({ type: 'User' as const, id })),
                        { type: 'User', id: 'LIST' },
                    ]
                    : [{ type: 'User', id: 'LIST' }],
        }),
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
                url: '/users',
                method: 'POST',
                body: {
                    ...initialUserData,
                },
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            invalidatesTags: [
                { type: 'User', id: "LIST" }
            ]
        }),
        updateUser: builder.mutation({
            query: initialUserData => ({
                url: '/users',
                method: 'PATCH',
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
                method: 'DELETE',
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
    }),
})

export const {
    useGetUsersQuery,
    useLazyGetUserByIdQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usersApiSlice;

export const selectGetUserByIdCachedData = (state: RootState, userId: string) => {
    const cacheKey = `getUserById("${userId}")`;
    return state.api.queries[cacheKey]?.data as UserType ?? null;
};

// returns the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select("usersList");

//creates memoized selector
const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
    // Pass in a selector that returns the users slice of state
} = usersAdapter.getSelectors((state: RootState) => selectUsersData(state) ?? initialState);