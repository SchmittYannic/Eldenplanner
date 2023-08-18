import {
    createSelector,
    createEntityAdapter,
    EntityState
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"
import { RootState } from "../../app/store";

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()

export type UserType = {
    _id?: number
    id?: number
    username: string
    createdAt: string
}

export type UserAsAdminType = {
    _id?: number
    id?: number
    username: string
    email: string
    validated: boolean
    active: boolean
    roles: string[]
    createdAt: string
    updatedAt: string
}

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<EntityState<unknown>, string>({
            query: () => ({
                url: '/users',
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
                    ...result.ids.map(( id ) => ({ type: 'User' as const, id })),
                    { type: 'User', id: 'LIST' },
                    ]
                : [{ type: 'User', id: 'LIST' }],
            }),
        addNewUser: builder.mutation({
            query: initialUserData => ({
                url: '/users',
                method: 'POST',
                body: {
                    ...initialUserData,
                }
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
                }
            }),
            invalidatesTags: (arg) => [
                { type: 'User', id: arg.id }
            ]
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/users`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (arg) => [
                { type: 'User', id: arg.id }
            ]
        }),
        getUsersAsAdmin: builder.query<EntityState<unknown>, string>({
            query: () => ({
                url: '/users/admin',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData: UserAsAdminType[]) => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id
                    return user
                });
                return usersAdapter.setAll(initialState, loadedUsers)         
            },
            providesTags: (result) =>
                result
                ? [
                    ...result.ids.map(( id ) => ({ type: 'User' as const, id })),
                    { type: 'User', id: 'LIST' },
                    ]
                : [{ type: 'User', id: 'LIST' }],
            }),
    }),
})

export const {
    useGetUsersQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useGetUsersAsAdminQuery,
} = usersApiSlice

// returns the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select("usersList");
export const selectUsersAsAdminResult = usersApiSlice.endpoints.getUsersAsAdmin.select("usersList");

//creates memoized selector
const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data // normalized state object with ids & entities
);

const selectUsersAsAdminData = createSelector(
    selectUsersAsAdminResult,
    usersResult => usersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
    // Pass in a selector that returns the users slice of state
} = usersAdapter.getSelectors((state: RootState) => selectUsersData(state) ?? initialState)

export const {
    selectAll: selectAllUsersAsAdmin,
    selectById: selectUserByIdAsAdmin,
    selectIds: selectUserIdsAsAdmin
    // Pass in a selector that returns the users slice of state
} = usersAdapter.getSelectors((state: RootState) => selectUsersAsAdminData(state) ?? initialState)