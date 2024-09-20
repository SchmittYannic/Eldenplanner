import { apiSlice } from "src/app/api/apiSlice";
import { BuildType } from "src/types";


export const charplannerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBuildById: builder.query<BuildType, string>({
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
        addStar: builder.mutation({
            query: ({ buildId }) => ({
                url: `/builds/${buildId}/star`,
                method: "POST",
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            })
        }),
        deleteStar: builder.mutation({
            query: ({ buildId }) => ({
                url: `/builds/${buildId}/star`,
                method: "DELETE",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
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