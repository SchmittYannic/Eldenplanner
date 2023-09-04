import { apiSlice } from "../../app/api/apiSlice";


export const charplannerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addNewBuild: builder.mutation({           
            query: initialBuildData => ({
                url: '/builds',
                method: 'POST',
                body: {
                    ...initialBuildData,
                }
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
                }
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