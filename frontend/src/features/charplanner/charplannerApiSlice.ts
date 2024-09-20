import { MaybeDrafted, Recipe } from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { apiSlice } from "src/app/api/apiSlice";
import { changeHasGivenStar, updateStars } from "./charplannerSlice";
import { AddStarMutationParamsType, BuildType, DeleteStarMutationParamsType } from "src/types";


export const charplannerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBuildById: builder.query<BuildType & { hasGivenStar: boolean }, string>({
            query: (id) => ({
                url: `/builds/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            keepUnusedDataFor: 300,
        }),
        addNewBuild: builder.mutation({
            query: initialBuildData => ({
                url: "/builds",
                method: "POST",
                body: {
                    ...initialBuildData,
                },
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            invalidatesTags: [
                { type: "Build", id: "LIST" }
            ]
        }),
        updateBuild: builder.mutation({
            query: initialBuildData => ({
                url: "/builds",
                method: "PATCH",
                body: {
                    ...initialBuildData,
                },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            invalidatesTags: (arg) => {
                if (arg) {
                    return [
                        { type: "Build", id: arg.id }
                    ]
                } else {
                    return []
                }
            }
        }),
        deleteBuild: builder.mutation({
            query: (buildId) => ({
                url: "/builds",
                method: "DELETE",
                body: { buildId },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            invalidatesTags: (arg) => {
                if (arg) {
                    return [
                        { type: "Build", id: arg.id }
                    ]
                } else {
                    return []
                }
            }
        }),
        addStar: builder.mutation<void, AddStarMutationParamsType>({
            query: ({ buildId }) => ({
                url: `/builds/${buildId}/star`,
                method: "POST",
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            async onQueryStarted({ buildId }, { dispatch, queryFulfilled }) {
                const draftFunction: Recipe<MaybeDrafted<BuildType & { hasGivenStar: boolean }>> = (draft: MaybeDrafted<BuildType & { hasGivenStar: boolean }>) => {
                    draft.stars += 1;
                    draft.hasGivenStar = true;
                }

                // optimistic update of the cache
                const patchResult = dispatch(
                    charplannerApiSlice.util.updateQueryData("getBuildById", buildId, draftFunction)
                );

                // Optimistic update for charplanner state
                dispatch(updateStars("increment"));
                dispatch(changeHasGivenStar(true));

                try {
                    await queryFulfilled;
                } catch (err) {
                    // if mutation fails undo cache changes
                    patchResult.undo();

                    // and revert state changes
                    dispatch(updateStars("decrement"));
                    dispatch(changeHasGivenStar(false));
                }
            },
            invalidatesTags: (_result, _error, { userId }) => [
                { type: "User", id: userId },
            ],
        }),
        deleteStar: builder.mutation<void, DeleteStarMutationParamsType>({
            query: ({ buildId }) => ({
                url: `/builds/${buildId}/star`,
                method: "DELETE",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            async onQueryStarted({ buildId }, { dispatch, queryFulfilled }) {
                const draftFunction: Recipe<MaybeDrafted<BuildType & { hasGivenStar: boolean }>> = (draft: MaybeDrafted<BuildType & { hasGivenStar: boolean }>) => {
                    if (draft.stars > 0) {
                        draft.stars -= 1;
                    }

                    draft.hasGivenStar = false;
                }

                // optimistic update of the cache
                const patchResult = dispatch(
                    charplannerApiSlice.util.updateQueryData("getBuildById", buildId, draftFunction)
                );

                // Optimistic update for charplanner state
                dispatch(updateStars("decrement"));
                dispatch(changeHasGivenStar(false));

                try {
                    await queryFulfilled;
                } catch (err) {
                    // if mutation fails undo cache changes
                    patchResult.undo();

                    // and revert state changes
                    dispatch(updateStars("increment"));
                    dispatch(changeHasGivenStar(true));
                }
            },
            invalidatesTags: (_result, _error, { userId }) => [
                { type: "User", id: userId },
            ],
        }),
    })
});

export const {
    useLazyGetBuildByIdQuery,
    useAddNewBuildMutation,
    useUpdateBuildMutation,
    useDeleteBuildMutation,
    useAddStarMutation,
    useDeleteStarMutation,
} = charplannerApiSlice;