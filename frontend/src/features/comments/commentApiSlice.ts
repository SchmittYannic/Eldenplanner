import { apiSlice, tagTypesType } from "src/app/api/apiSlice";

export type Comment = {
    id: string;
    authorId: string;
    parentId: string | null;
    targetId: string;
    targetType: "Build" | "User";
    content: string;
    likesCount: number;
    createdAt: string;
    updatedAt: string;
    replies?: Comment[];
    hasLiked?: boolean;
}

export const commentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getComments: builder.query<Comment[], { targetId: string, targetType: string }>({
            query: ({ targetId, targetType }) => ({
                url: `/comments?targetId=${targetId}&targetType=${targetType}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            providesTags: (result, _error, _args) =>
                result ?
                    [
                        ...result.map(({ id }): { type: tagTypesType, id: string } => ({ type: "Comments", id })),
                        { type: "Comments", id: "LIST" }
                    ] :
                    [{ type: "Comments", id: "LIST" }],
        }),
        createComment: builder.mutation<Comment, Partial<Comment>>({
            query: (newComment) => ({
                url: "/comments",
                method: "POST",
                body: newComment,
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            invalidatesTags: [{ type: "Comments", id: "LIST" }],
        }),
        updateComment: builder.mutation<Comment, { id: string, content: string }>({
            query: ({ id, content }) => ({
                url: `/comments/${id}`,
                method: "PATCH",
                body: { content },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "Comments", id }],
        }),
        deleteComment: builder.mutation<{ success: boolean, id: string }, string>({
            query: (id) => ({
                url: `/comments/${id}`,
                method: "DELETE",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            invalidatesTags: (_result, _error, id) => [{ type: "Comments", id }],
        }),
        getUserLikedComment: builder.query<{ hasLiked: boolean }, { commentId: string, userId: string }>({
            query: ({ commentId, userId }) => ({
                url: `/comments/${commentId}/like?userId=${userId}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            providesTags: (_result, _error, { commentId }) => [{ type: "Likes", id: commentId }],
        }),
        addLike: builder.mutation<void, { commentId: string }>({
            query: ({ commentId }) => ({
                url: `/comments/${commentId}/like`,
                method: "POST",
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            invalidatesTags: (_result, _error, { commentId }) => [{ type: 'Likes', id: commentId }],
        }),
        removeLike: builder.mutation<void, { commentId: string }>({
            query: ({ commentId }) => ({
                url: `/comments/${commentId}/like`,
                method: "DELETE",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            invalidatesTags: (_result, _error, { commentId }) => [{ type: 'Likes', id: commentId }],
        }),
    })
});

export const {
    useGetCommentsQuery,
    useCreateCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
    useGetUserLikedCommentQuery,
    useAddLikeMutation,
    useRemoveLikeMutation,
} = commentApiSlice;