import {
    createEntityAdapter,
    EntityState,
    createSelector,
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
import { RootState } from "../../app/store";

const usersAsAdminAdapter = createEntityAdapter({});

const initialState = usersAsAdminAdapter.getInitialState();

export type UserAsAdminType = {
    _id: number
    id: number
    username: string
    email: string
    validated: boolean
    active: boolean
    roles: string[]
    createdAt: string
    updatedAt: string
};

export const usersAsAdminApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsersAsAdmin: builder.query<EntityState<unknown>, string>({
            query: () => ({
                url: "/users/admin",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData: UserAsAdminType[]) => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id
                    return user
                });
                return usersAsAdminAdapter.setAll(initialState, loadedUsers)         
            },
            providesTags: (result) =>
                result
                ? [
                    ...result.ids.map(( id ) => ({ type: "User" as const, id })),
                    { type: "User", id: "LIST" },
                    ]
                : [{ type: "User", id: "LIST" }],
            }),
        updateUserAsAdmin: builder.mutation({
            query: initialUserData => ({
                url: "/users/admin",
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
        deleteUserAsAdmin: builder.mutation({
            query: ({ id }) => ({
                url: "/users/admin",
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
    }),
});

export const {
    useGetUsersAsAdminQuery,
    useUpdateUserAsAdminMutation,
    useDeleteUserAsAdminMutation,
} = usersAsAdminApiSlice;

// returns the query result object
export const selectUsersAsAdminResult = usersAsAdminApiSlice.endpoints.getUsersAsAdmin.select("usersList");

//creates memoized selector
const selectUsersAsAdminData = createSelector(
    selectUsersAsAdminResult,
    usersResult => usersResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllUsersAsAdmin,
    selectById: selectUserByIdAsAdmin,
    selectIds: selectUserIdsAsAdmin
    // Pass in a selector that returns the users slice of state
} = usersAsAdminAdapter.getSelectors((state: RootState) => selectUsersAsAdminData(state) ?? initialState)