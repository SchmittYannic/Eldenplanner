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
    _id: string
    id: string
    username: string
    email: string
    validated: boolean
    active: boolean
    roles: string[]
    createdAt: string
    updatedAt: string
};

export const isUserAsAdminType = (object: any): object is UserAsAdminType => {
    if (!object) return false
    if (typeof object !== "object") return false
    if (!("_id" in object)) return false
    if (typeof object._id !== "string") return false
    if (!("id" in object)) return false
    if (typeof object.id !== "string") return false
    if (!("username" in object)) return false
    if (typeof object.username !== "string") return false
    if (!("email" in object)) return false
    if (typeof object.email !== "string") return false
    if (!("validated" in object)) return false
    if (typeof object.validated !== "boolean") return false
    if (!("active" in object)) return false
    if (typeof object.active !== "boolean") return false
    if (!("roles" in object)) return false
    if (!Array.isArray(object.roles)) return false
    if (object.roles.some((value: any) => typeof value !== "string")) return false
    if (!("createdAt" in object)) return false
    if (typeof object.createdAt !== "string") return false
    if (!("updatedAt" in object)) return false
    if (typeof object.updatedAt !== "string") return false
    return true
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
                        { type: "User", id: arg.id },
                        { type: "Build", user: arg.id }
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