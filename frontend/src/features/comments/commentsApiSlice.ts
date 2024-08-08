import { apiSlice } from "src/app/api/apiSlice";
import { SortCommentsType, CommentType, GetCommentsResponseType } from "src/types";

type GetCommentsQueryParamsType = {
    targetId: string,
    targetType: string,
    parentId: string,
    lastFetchedTimestamp: string,
    sort?: SortCommentsType,
    limit?: number,
}

export const commentsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getComments: builder.query<GetCommentsResponseType<string>, GetCommentsQueryParamsType>({
            query: ({ targetId, targetType, parentId, lastFetchedTimestamp, sort = "new", limit = 25, }) => ({
                url: `/comments?targetId=${targetId}&targetType=${targetType}&parentId=${parentId}&lastFetchedTimestamp=${lastFetchedTimestamp}&sort=${sort}&limit=${limit}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            serializeQueryArgs: (args) => {
                const { endpointName } = args
                const { targetId, targetType, sort } = args.queryArgs;
                return endpointName + `("${targetId}-${targetType}-${sort}")`;
            },
            merge: (currentCache, responseData, args) => {
                const { parentId } = args.arg

                // if no parentId -> received regular comments
                if (!parentId) {
                    // Step 1: Filter out IDs that are already in the cache
                    const newIds = responseData.ids.filter(id => !currentCache.ids.includes(id));

                    // Step 2: Push only new, unique IDs into currentCache.ids
                    currentCache.ids.push(...newIds);

                    // Step 3: Merge the entities, which will replace old entities with the new ones
                    currentCache.entities = {
                        ...currentCache.entities,
                        ...responseData.entities
                    };
                } else {
                    // if parentId -> received replies to a comment
                    // if length of ids is 0 we fetched every comment
                    if (responseData.ids.length === 0) {
                        currentCache.entities[parentId].hasMoreReplies = false;
                        return
                    }
                    // get timestamp of last fetched reply and save it under lastReplyFetchedTimestamp of parent comment
                    const lastId = responseData.ids[responseData.ids.length - 1];
                    const lastReplyFetchedTimestamp = responseData.entities[lastId].createdAt;
                    currentCache.entities[parentId].lastReplyFetchedTimestamp = lastReplyFetchedTimestamp;

                    // get repliesIds and repliesEntities of parent comment in the cache
                    const currentRepliesIds = currentCache.entities[parentId].repliesIds
                    const currentRepliesEntities = currentCache.entities[parentId].repliesEntities
                    if (!currentRepliesIds && !currentRepliesEntities) {
                        // if the replies to the comment are the first replies that got fetched
                        // write ids and entities to the parent comments repliesIds and repliesEntities keys
                        currentCache.entities[parentId].repliesIds = responseData.ids;
                        currentCache.entities[parentId].repliesEntities = responseData.entities;
                    } else if (currentRepliesIds && currentRepliesEntities) {
                        // if replies already exist on the comment attach newly fetched replies to end
                        currentCache.entities[parentId].repliesIds = [...currentRepliesIds, ...responseData.ids];
                        currentCache.entities[parentId].repliesEntities = {
                            ...currentRepliesEntities,
                            ...responseData.entities
                        }
                    } else {
                        throw new Error("Error while merging Cache: both repliesIds and repliesEntities of a comment must either be both undefined or both exist")
                    }

                    // update hasMore of parent comment
                    const hasMore = currentCache.entities[parentId].repliesIds.length < responseData.totalComments;
                    currentCache.entities[parentId].hasMoreReplies = hasMore;

                    // update totalReplies of parent comment
                    currentCache.entities[parentId].totalReplies = responseData.totalComments;
                }
            },
            // providesTags: (result) => (
            //     result ?
            //         [
            //             ...result.comments.map((comment): { type: tagTypesType, id: string } => ({ type: "Comments", id: comment.id })),
            //             { type: "Comments", id: 'LIST' }
            //         ] : [{ type: "Comments", id: 'LIST' }]
            // ),
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
            // invalidatesTags: (result, _error, { targetId, targetType }) =>
            //     result ? [{ type: "Comments", id: `${targetId}-${targetType}` }]
            //         : [],
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
            // invalidatesTags: (_result, _error, { id }) => [{ type: "Comments", id }],
        }),
        deleteComment: builder.mutation<{ success: boolean, id: string }, string>({
            query: (id) => ({
                url: `/comments/${id}`,
                method: "DELETE",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            // invalidatesTags: (_result, _error, id) => [{ type: "Comments", id }],
        }),
        getUserLikedComment: builder.query<{ hasLiked: boolean }, { commentId: string, userId: string }>({
            query: ({ commentId, userId }) => ({
                url: `/comments/${commentId}/like?userId=${userId}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            // providesTags: (_result, _error, { commentId }) => [{ type: "Likes", id: commentId }],
        }),
        addLike: builder.mutation<void, { commentId: string }>({
            query: ({ commentId }) => ({
                url: `/comments/${commentId}/like`,
                method: "POST",
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            // invalidatesTags: (_result, _error, { commentId }) => [{ type: 'Likes', id: commentId }],
        }),
        removeLike: builder.mutation<void, { commentId: string }>({
            query: ({ commentId }) => ({
                url: `/comments/${commentId}/like`,
                method: "DELETE",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            // invalidatesTags: (_result, _error, { commentId }) => [{ type: 'Likes', id: commentId }],
        }),
    })
});

export const {
    useLazyGetCommentsQuery,
    useCreateCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
    useGetUserLikedCommentQuery,
    useAddLikeMutation,
    useRemoveLikeMutation,
} = commentsApiSlice;