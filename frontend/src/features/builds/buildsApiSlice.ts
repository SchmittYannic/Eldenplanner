import { createEntityAdapter, createSelector, EntityState } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
import { RootState } from "../../app/store";
import { ArmamentStateType, ArmorStateType, GeneralStateType, StatsStateType, TalismanStateType } from "../charplanner/charplannerSlice";
import { GetBuildsQueryParamsType, GetBuildsResponseType } from "src/types";


const buildsAdapter = createEntityAdapter({});

const initialState = buildsAdapter.getInitialState();

export type BuildType = {
    _id: string
    id: string
    user: string
    title: string
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
        getAllBuilds: builder.query<EntityState<unknown>, string>({
            query: () => ({
                url: '/builds/old',
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
                        ...result.ids.map((id) => ({ type: 'Build' as const, id })),
                        { type: 'Build', id: 'LIST' },
                    ]
                    : [{ type: 'Build', id: 'LIST' }],
        }),
        getBuilds: builder.query<GetBuildsResponseType, GetBuildsQueryParamsType>({
            query: ({
                limit = 10,
                skip = 0,
                field = "stars",
                order = "asc",
                title,
                username,
                minLevel = "0",
                maxLevel,
                minStars = "0",
                maxStars,
            }) => {
                // Construct the query parameters
                let queryParams = new URLSearchParams({
                    limit: String(limit),
                    skip: String(skip),
                    order,
                    minLevel,
                    minStars,
                });

                if (field) queryParams.append("field", field);
                if (title !== undefined) queryParams.append("title", title);
                if (username !== undefined) queryParams.append("username", username);
                if (typeof maxLevel === "string") queryParams.append("maxLevel", maxLevel);
                if (typeof maxStars === "string") queryParams.append("maxStars", maxStars);

                return {
                    url: `/builds?${queryParams.toString()}`,
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }
            },
            providesTags: (_result, _error, { limit, skip, field, order, title, minStars, maxStars }) => [
                { type: 'Build', id: `list-${limit}-${skip}-${field}-${order}-${title}-${minStars}-${maxStars}` },
            ],
        }),
    })
});

export const {
    useGetAllBuildsQuery,
    useGetBuildsQuery,
} = buildsApiSlice;

// returns the query result object
export const selectBuildsResult = buildsApiSlice.endpoints.getAllBuilds.select("buildsList");

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