import { apiSlice } from "../../app/api/apiSlice";


export const charplannerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addNewBuild: builder.mutation({           
            query: initialBuildData => ({
                url: '/builds',
                method: 'POST',
                body: {
                    ...initialBuildData,
                },
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            invalidatesTags: [
                { type: 'Build', id: "LIST" }
            ]           
        }),
        updateBuild: builder.mutation({
            query: initialBuildData => ({
                url: '/builds',
                method: 'PATCH',
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
            query: ( buildId ) => ({
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
        })
    })
});

export const {
    useAddNewBuildMutation,
    useUpdateBuildMutation,
    useDeleteBuildMutation,
} = charplannerApiSlice;