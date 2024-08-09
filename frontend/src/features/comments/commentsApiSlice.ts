import { apiSlice } from "src/app/api/apiSlice";
import {
    CommentType,
    GetCommentsResponseType,
    AddLikeDislikeMutationParamsType,
    GetCommentsQueryParamsType,
} from "src/types";
import { setCommentEntity } from "./commentsSlice";

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
        addLikeDislike: builder.mutation<void, AddLikeDislikeMutationParamsType>({
            query: ({ commentId, type }) => ({
                url: `/comments/${commentId}/like?type=${type}`,
                method: "POST",
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            async onQueryStarted({ commentId, type, ...queryArgsGetComments }, { dispatch, queryFulfilled }) {
                // save previous state of comment to be able to reset comment if mutation fails
                let previousState: CommentType | null = null;
                let newState: CommentType | null = null;

                // optimistic update of the cache
                const patchResult = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", queryArgsGetComments, (draft) => {
                        const { parentId } = queryArgsGetComments;
                        if (!parentId) {
                            // if the comment doesnt exist in cache throw error
                            if (!draft.entities[commentId]) {
                                throw new Error("commentsApiSlice: addLikeDislike mutation onQueryStarted: Comment doesnt exist in cache")
                            }

                            // save previous state of comment
                            previousState = { ...draft.entities[commentId] };

                            // if root comment
                            if (type === "like" && !draft.entities[commentId].hasLiked && !draft.entities[commentId].hasDisliked) {
                                // if like is added and comment hasLiked and hasDisliked is false
                                // add the like
                                draft.entities[commentId].likes += 1;
                                draft.entities[commentId].hasLiked = true;
                            } else if (type === "dislike" && !draft.entities[commentId].hasLiked && !draft.entities[commentId].hasDisliked) {
                                // if dislike is added and comment hasLiked and hasDisliked is false
                                // add the dislike
                                draft.entities[commentId].dislikes += 1;
                                draft.entities[commentId].hasDisliked = true;
                            } else if (type === "like" && draft.entities[commentId].hasDisliked) {
                                // if like is added and comments hasDisliked true
                                // add the like and remove the dislike
                                draft.entities[commentId].likes += 1;
                                draft.entities[commentId].hasLiked = true;
                                if (draft.entities[commentId].dislikes > 0) draft.entities[commentId].dislikes -= 1;
                                draft.entities[commentId].hasDisliked = false;
                            } else if (type === "dislike" && draft.entities[commentId].hasLiked) {
                                // if dislike is added and comments hasLiked true
                                // add the dislike and remove the like
                                draft.entities[commentId].dislikes += 1;
                                draft.entities[commentId].hasDisliked = true;
                                if (draft.entities[commentId].likes > 0) draft.entities[commentId].likes -= 1;
                                draft.entities[commentId].hasLiked = false;
                            }

                            // save new state of comment
                            newState = { ...draft.entities[commentId] };
                        } else {
                            // if reply
                            // if the reply doesnt exist in cache throw error
                            if (!draft.entities[parentId].repliesEntities || !draft.entities[parentId].repliesEntities[commentId]) {
                                throw new Error("commentsApiSlice: addLikeDislike mutation onQueryStarted: Reply doesnt exist in cache")
                            }

                            // save previous state of comment
                            previousState = { ...draft.entities[parentId].repliesEntities[commentId] };

                            if (type === "like" && !draft.entities[parentId].repliesEntities[commentId].hasLiked && !draft.entities[parentId].repliesEntities[commentId].hasDisliked) {
                                // if like is added and comment hasLiked and hasDisliked is false
                                // add the like
                                draft.entities[parentId].repliesEntities[commentId].likes += 1;
                                draft.entities[parentId].repliesEntities[commentId].hasLiked = true;
                            } else if (type === "dislike" && !draft.entities[parentId].repliesEntities[commentId].hasLiked && !draft.entities[parentId].repliesEntities[commentId].hasDisliked) {
                                // if dislike is added and comment hasLiked and hasDisliked is false
                                // add the dislike
                                draft.entities[parentId].repliesEntities[commentId].dislikes += 1;
                                draft.entities[parentId].repliesEntities[commentId].hasDisliked = true;
                            } else if (type === "like" && draft.entities[parentId].repliesEntities && draft.entities[parentId].repliesEntities[commentId] && draft.entities[parentId].repliesEntities[commentId].hasDisliked) {
                                // if like is added and comments hasDisliked true
                                // add the like and remove the dislike
                                draft.entities[parentId].repliesEntities[commentId].likes += 1;
                                draft.entities[parentId].repliesEntities[commentId].hasLiked = true;
                                if (draft.entities[parentId].repliesEntities[commentId].dislikes > 0) draft.entities[parentId].repliesEntities[commentId].dislikes -= 1;
                                draft.entities[parentId].repliesEntities[commentId].hasDisliked = false;
                            } else if (type === "dislike" && draft.entities[parentId].repliesEntities && draft.entities[parentId].repliesEntities[commentId] && draft.entities[parentId].repliesEntities[commentId].hasLiked) {
                                // if dislike is added and comments hasLiked true
                                // add the dislike and remove the like
                                draft.entities[parentId].repliesEntities[commentId].dislikes += 1;
                                draft.entities[parentId].repliesEntities[commentId].hasDisliked = true;
                                if (draft.entities[parentId].repliesEntities[commentId].likes > 0) draft.entities[parentId].repliesEntities[commentId].likes -= 1;
                                draft.entities[parentId].repliesEntities[commentId].hasLiked = false;
                            }

                            // save new state of comment
                            newState = { ...draft.entities[parentId].repliesEntities[commentId] };
                        }
                    })
                );

                // Optimistic update for comment entity in commentsSlice state
                if (newState) {
                    dispatch(
                        setCommentEntity({
                            parentId: queryArgsGetComments.parentId,
                            commentId,
                            newComment: newState,
                        })
                    );
                }

                try {
                    await queryFulfilled;
                } catch (err) {
                    // if mutation fails undo cache changes and save previous comment entity in commentsSlice state
                    patchResult.undo();
                    if (previousState) {
                        dispatch(
                            setCommentEntity({
                                parentId: queryArgsGetComments.parentId,
                                commentId,
                                newComment: previousState,
                            })
                        );
                    }
                }
            },
            // invalidatesTags: (_result, _error, { commentId }) => [{ type: 'Likes', id: commentId }],
        }),
        removeLikeDislike: builder.mutation<void, AddLikeDislikeMutationParamsType>({
            query: ({ commentId, type }) => ({
                url: `/comments/${commentId}/like?type=${type}`,
                method: "DELETE",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            async onQueryStarted({ commentId, type, ...queryArgsGetComments }, { dispatch, queryFulfilled }) {
                // save previous state of comment 
                let previousState: CommentType | null = null;
                let newState: CommentType | null = null;
                // optimistic update of the cache
                const patchResult = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", queryArgsGetComments, (draft) => {
                        const { parentId } = queryArgsGetComments;
                        if (!parentId) {
                            // if root comment
                            // if the comment doesnt exist in cache throw error
                            if (!draft.entities[commentId]) {
                                throw new Error("commentsApiSlice: removeLikeDislike mutation onQueryStarted: Comment doesnt exist in cache")
                            }

                            // save previous state of comment
                            previousState = { ...draft.entities[commentId] };

                            if (type === "like" && draft.entities[commentId].hasLiked) {
                                draft.entities[commentId].hasLiked = false;
                                if (draft.entities[commentId].likes > 0) draft.entities[commentId].likes -= 1;
                            } else if (type === "dislike" && draft.entities[commentId].hasDisliked) {
                                draft.entities[commentId].hasDisliked = false;
                                if (draft.entities[commentId].dislikes > 0) draft.entities[commentId].dislikes -= 1;
                            }

                            // save new state of comment
                            newState = { ...draft.entities[commentId] };
                        } else {
                            // if reply
                            // if the reply doesnt exist in cache throw error
                            if (!draft.entities[parentId].repliesEntities || !draft.entities[parentId].repliesEntities[commentId]) {
                                throw new Error("commentsApiSlice: addLikeDislike mutation onQueryStarted: Reply doesnt exist in cache")
                            }

                            // save previous state of comment
                            previousState = { ...draft.entities[parentId].repliesEntities[commentId] };

                            if (type === "like" && draft.entities[parentId].repliesEntities[commentId].hasLiked) {
                                draft.entities[parentId].repliesEntities[commentId].hasLiked = false;
                                if (draft.entities[parentId].repliesEntities[commentId].likes > 0) draft.entities[parentId].repliesEntities[commentId].likes -= 1;
                            } else if (type === "dislike" && draft.entities[parentId].repliesEntities[commentId].hasDisliked) {
                                draft.entities[parentId].repliesEntities[commentId].hasDisliked = false;
                                if (draft.entities[parentId].repliesEntities[commentId].dislikes > 0) draft.entities[parentId].repliesEntities[commentId].dislikes -= 1;
                            }

                            // save new state of comment
                            newState = { ...draft.entities[parentId].repliesEntities[commentId] };
                        }
                    })
                );

                // Optimistic update for comment entity in commentsSlice state
                if (newState) {
                    dispatch(
                        setCommentEntity({
                            parentId: queryArgsGetComments.parentId,
                            commentId,
                            newComment: newState,
                        })
                    );
                }

                try {
                    await queryFulfilled;
                } catch (err) {
                    // if mutation fails undo cache changes and save previous comment entity in commentsSlice state
                    patchResult.undo();
                    if (previousState) {
                        dispatch(
                            setCommentEntity({
                                parentId: queryArgsGetComments.parentId,
                                commentId,
                                newComment: previousState,
                            })
                        );
                    }
                }
            },
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
    useAddLikeDislikeMutation,
    useRemoveLikeDislikeMutation,
} = commentsApiSlice;