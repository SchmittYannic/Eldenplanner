import { createEntityAdapter, createSelector, EntityState } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
import { RootState } from "../../app/store";
import { ArmamentStateType, ArmorStateType, GeneralStateType, StatsStateType, TalismanStateType } from "../charplanner/charplannerSlice";


const buildsAdapter = createEntityAdapter({});

const initialState = buildsAdapter.getInitialState();

export type BuildType = {
    _id?: number
    id?: number   
    user: string
    general: GeneralStateType
    stats: StatsStateType
    armament: ArmamentStateType
    talisman: TalismanStateType
    armor: ArmorStateType
    createdAt: string
    updatedAt: string
}

export const buildsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBuilds: builder.query<EntityState<unknown>, string>({
            query: () => ({
                url: '/builds',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData: BuildType[]) => {
                const loadedBuilds = responseData.map(build => {
                    build.id = build._id
                    return build
                });
                return buildsAdapter.setAll(initialState, loadedBuilds)         
            },
            providesTags: (result) =>
                result
                ? [
                    ...result.ids.map(( id ) => ({ type: 'Build' as const, id })),
                    { type: 'Build', id: 'LIST' },
                    ]
                : [{ type: 'Build', id: 'LIST' }],
        }),
    })
});

export const {
    useGetBuildsQuery,
} = buildsApiSlice;

// returns the query result object
export const selectBuildsResult = buildsApiSlice.endpoints.getBuilds.select("buildsList");

//creates memoized selector
const selectBuildsData = createSelector(
    selectBuildsResult,
    buildsResult => buildsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllBuilds,
    selectById: selectBuildById,
    selectIds: selectBuildIds
    // Pass in a selector that returns the builds slice of state
} = buildsAdapter.getSelectors((state: RootState) => selectBuildsData(state) ?? initialState)