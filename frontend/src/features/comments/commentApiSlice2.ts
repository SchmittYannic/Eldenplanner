import { EntityId, EntityState } from "@reduxjs/toolkit";
import { apiSlice, tagTypesType } from "src/app/api/apiSlice";
import { SortCommentsType, CommentType, GetCommentsResponseType } from "src/types";
import { commentsAdapter, initialState } from "./commentsSlice";

type GetCommentsQueryParamsType = {
    targetId: string,
    targetType: string,
    lastFetchedTimestamp: string,
    sort?: SortCommentsType,
    limit?: number,
}

export const commentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getComments: builder.query<EntityState<CommentType>, GetCommentsQueryParamsType>({
            query: ({ targetId, targetType, lastFetchedTimestamp, sort = "new", limit = 25, }) => ({
                url: `/comments?targetId=${targetId}&targetType=${targetType}&lastFetchedTimestamp=${lastFetchedTimestamp}&sort=${sort}&limit=${limit}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData: GetCommentsResponseType) => {
                return commentsAdapter.setAll(initialState, responseData.comments)
            },
            // serializeQueryArgs: (args) => {
            //     const { endpointName } = args
            //     const { targetId, targetType } = args.queryArgs
            //     return endpointName + `("${targetId}-${targetType}")`;
            // },
            // merge: (currentCache, newItems) => {
            //     //currentCache.ids.push(...newItems.ids);
            //     currentCache = {
            //         ids: [...newItems.ids],
            //         entities: { ...newItems.entities },
            //     };
            // },
            providesTags: (result) => (
                result ?
                    [
                        ...result.ids.map((id): { type: tagTypesType, id: EntityId } => ({ type: "Comments", id })),
                        { type: "Comments", id: 'LIST' }
                    ] : [{ type: "Comments", id: 'LIST' }]
            ),
            // providesTags: (result, _error, { targetId, targetType }) =>
            //     result ? [
            //         ...result.comments.map(({ id }): { type: tagTypesType, id: string } => ({ type: "Comments", id })),
            //         { type: "Comments", id: `${targetId}-${targetType}` }
            //     ]
            //         : [{ type: "Comments", id: `${targetId}-${targetType}` }],
        }),
        createComment: builder.mutation<CommentType, Partial<CommentType>>({
            query: (newComment) => ({
                url: "/comments",
                method: "POST",
                body: {
                    ...newComment,
                },
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            invalidatesTags: (result, _error, { targetId, targetType }) =>
                result ? [{ type: "Comments", id: `${targetId}-${targetType}` }]
                    : [],
        }),
        updateComment: builder.mutation<CommentType, { id: string, content: string }>({
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