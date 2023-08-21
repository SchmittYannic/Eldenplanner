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
            invalidatesTags: (arg) => [
                { type: 'Build', id: arg.id }
            ]
        }),
    })
});

export const {
    useAddNewBuildMutation,
    useUpdateBuildMutation,
} = charplannerApiSlice;