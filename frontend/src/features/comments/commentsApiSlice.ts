import { MaybeDrafted, Recipe } from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { v4 as uuidv4 } from "uuid";

import { apiSlice } from "src/app/api/apiSlice";
import {
    addCommentId,
    decrementTotalComments,
    deleteCommentEntity,
    deleteCommentId,
    incrementTotalComments,
    setCommentEntity,
} from "./commentsSlice";
import {
    CommentType,
    GetCommentsResponseType,
    AddLikeDislikeMutationParamsType,
    GetCommentsQueryParamsType,
    CreateCommentMutationParamsType,
    DeleteCommentMutationParamsType,
} from "src/types";
import { mergeSortedArrays } from "src/utils/functions";

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
                const { parentId, sort } = args.arg

                // if no new ids received return
                if (responseData.ids.length === 0) return
                // if no parentId -> received regular comments
                if (!parentId) {
                    // Step 1: Filter out Ids that are in the cache and not in the response
                    const oldIds = currentCache.ids.filter(id => !responseData.ids.includes(id))

                    // Step 2: Merge the entities, which will replace old entities with the new ones
                    currentCache.entities = {
                        ...currentCache.entities,
                        ...responseData.entities
                    };

                    // Step 3 merge the fetchedIds into oldIds making sure the ids in resulting array remain sorted
                    const mergedIds = mergeSortedArrays(oldIds, responseData.ids, currentCache.entities, sort === "old");
                    currentCache.ids = mergedIds;
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

                    if (!currentCache.entities[parentId].repliesIds && !currentCache.entities[parentId].repliesEntities) {
                        // if the replies to the comment are the first replies that got fetched
                        // write ids and entities to the parent comments repliesIds and repliesEntities keys
                        currentCache.entities[parentId].repliesIds = responseData.ids;
                        currentCache.entities[parentId].repliesEntities = responseData.entities;
                    } else if (currentCache.entities[parentId].repliesIds && currentCache.entities[parentId].repliesEntities) {
                        // if replies already exist on the comment attach newly fetched replies to end
                        // Step 1: Filter out Ids that are in the cache and not in the response
                        const oldIds = currentCache.entities[parentId].repliesIds.filter(id => !responseData.ids.includes(id))

                        // Step 2: Merge the entities, which will replace old entities with the new ones
                        currentCache.entities[parentId].repliesEntities = {
                            ...currentCache.entities[parentId].repliesEntities,
                            ...responseData.entities
                        }

                        // Step 3 merge the fetchedIds into oldIds making sure the ids in resulting array remain sorted
                        const mergedIds = mergeSortedArrays(oldIds, responseData.ids, currentCache.entities[parentId].repliesEntities, sort === "old");
                        currentCache.entities[parentId].repliesIds = mergedIds;
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
        createComment: builder.mutation<CommentType, CreateCommentMutationParamsType>({
            query: ({
                authorId,
                content,
                targetId,
                targetType,
                parentId,
            }) => ({
                url: "/comments",
                method: "POST",
                body: {
                    authorId,
                    content,
                    targetId,
                    targetType,
                    parentId,
                },
                validateStatus: (response, result) => {
                    return response.status === 201 && !result.isError
                },
            }),
            async onQueryStarted({
                authorId,
                username,
                avatarUrl,
                parentId,
                targetId,
                targetType,
                content,
                lastFetchedTimestamp,
                sort,
                limit,
            }, { dispatch, queryFulfilled }) {

                const generateTempId = (prefix: string = "temp-"): string => {
                    return `${prefix}${uuidv4()}`;
                };

                let tempId = generateTempId();
                const tempCreatedAt = new Date().toISOString();

                let tempComment: CommentType = {
                    id: tempId,
                    authorId,
                    username,
                    avatarUrl,
                    parentId,
                    targetId,
                    targetType,
                    content,
                    totalReplies: 0,
                    likes: 0,
                    dislikes: 0,
                    createdAt: tempCreatedAt,
                    updatedAt: tempCreatedAt,
                };
                console.log("tempId: ", tempId)
                console.log("tempIdComment: ", tempComment)

                // function to update cache with temp comment
                const draftFunction: Recipe<GetCommentsResponseType<string>> = (draft: MaybeDrafted<GetCommentsResponseType<string>>) => {
                    console.log("tempIdDraft: ", tempId)
                    console.log("tempIdDraft: ", tempComment)
                    if (!parentId) {
                        // add comment to entities
                        draft.entities = {
                            ...draft.entities,
                            [tempId]: tempComment,
                        };

                        // push or unshift tempId into ids depending on sort setting
                        if (sort === "new") {
                            draft.ids.unshift(tempId);
                        } else if (sort === "old") {
                            draft.ids.push(tempId)
                        }
                    } else {
                        draft.entities[parentId].repliesEntities = {
                            ...draft.entities[parentId].repliesEntities,
                            [tempId]: tempComment,
                        }

                        // if there is no repliesIds yet create one with tempId inside
                        if (!draft.entities[parentId].repliesIds) {
                            draft.entities[parentId].repliesIds = [tempId];
                        } else {
                            // replies always oldest to newest therefore always push
                            draft.entities[parentId].repliesIds.push(tempId);
                        }
                    }
                }

                // optimistic update of the cache for sort new
                const patchResultNew = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", { targetId, targetType, parentId, lastFetchedTimestamp, sort: "new", limit }, draftFunction)
                );

                // optimistic update of the cache for sort old
                const patchResultOld = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", { targetId, targetType, parentId, lastFetchedTimestamp, sort: "old", limit }, draftFunction)
                );

                // optimistic update increase of totalComments
                dispatch(incrementTotalComments({ parentId }));

                // Optimistic update for comment entity in commentsSlice state          
                dispatch(
                    setCommentEntity({
                        parentId,
                        commentId: tempId,
                        newComment: tempComment,
                    })
                );
                dispatch(
                    addCommentId({
                        parentId,
                        commentId: tempId,
                    })
                );

                try {
                    const { data: comment } = await queryFulfilled;
                    // if query successful
                    // delete temp comment from state
                    dispatch(
                        deleteCommentEntity({
                            parentId,
                            commentId: tempId,
                        })
                    );
                    dispatch(
                        deleteCommentId({
                            parentId,
                            commentId: tempId,
                        })
                    );

                    // add comment received as response from backend
                    dispatch(
                        setCommentEntity({
                            parentId: comment.parentId,
                            commentId: comment.id,
                            newComment: comment,
                        })
                    );
                    dispatch(
                        addCommentId({
                            parentId: comment.parentId || "",
                            commentId: comment.id,
                        })
                    );

                    patchResultNew.undo();
                    patchResultOld.undo();

                    // overwrite tempId and tempComment with real id and comment
                    tempId = comment.id;
                    tempComment = comment;
                    console.log("tempIdSuccess: ", tempId)
                    console.log("tempIdCommentSuccess: ", tempComment)

                    dispatch(
                        commentsApiSlice.util.updateQueryData("getComments", { targetId, targetType, parentId, lastFetchedTimestamp, sort: "new", limit }, draftFunction)
                    );

                    dispatch(
                        commentsApiSlice.util.updateQueryData("getComments", { targetId, targetType, parentId, lastFetchedTimestamp, sort: "old", limit }, draftFunction)
                    );
                } catch (err) {
                    // if mutation fails undo cache changes and save previous comment entity in commentsSlice state
                    patchResultNew.undo();
                    patchResultOld.undo();
                    // delete temp comment from state
                    dispatch(
                        deleteCommentEntity({
                            parentId,
                            commentId: tempId,
                        })
                    );
                    dispatch(
                        deleteCommentId({
                            parentId,
                            commentId: tempId,
                        })
                    );
                    // decrement totalComment
                    dispatch(decrementTotalComments({ parentId }))
                }
            },
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
        deleteComment: builder.mutation<{ success: boolean, id: string }, DeleteCommentMutationParamsType>({
            query: ({ commentId }) => ({
                url: `/comments/${commentId}`,
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

                // get cache for other sort options -> if new sort options are added they need to be included here
                const currentSort = queryArgsGetComments.sort;
                const oppositeSort = currentSort === "new" ? "old" : "new";
                const oppositeQueryArgs: GetCommentsQueryParamsType = { ...queryArgsGetComments, sort: oppositeSort }

                // function updating the cache
                const draftFunction: Recipe<GetCommentsResponseType<string>> = (draft: MaybeDrafted<GetCommentsResponseType<string>>) => {
                    const { parentId } = queryArgsGetComments;
                    if (!parentId) {
                        // if the comment doesnt exist in cache return
                        if (!draft.entities[commentId]) return

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
                        // if the reply doesnt exist in cache return
                        if (!draft.entities[parentId].repliesEntities || !draft.entities[parentId].repliesEntities[commentId]) return

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
                }

                // optimistic update of the cache
                const patchResult = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", queryArgsGetComments, draftFunction)
                );

                const patchResultAlternativeSort = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", oppositeQueryArgs, draftFunction)
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
                    patchResultAlternativeSort.undo()
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

                // get cache for other sort options -> if new sort options are added they need to be included here
                const currentSort = queryArgsGetComments.sort;
                const oppositeSort = currentSort === "new" ? "old" : "new";
                const oppositeQueryArgs: GetCommentsQueryParamsType = { ...queryArgsGetComments, sort: oppositeSort }

                // function updating the cache
                const draftFunction: Recipe<GetCommentsResponseType<string>> = (draft: MaybeDrafted<GetCommentsResponseType<string>>) => {
                    const { parentId } = queryArgsGetComments;
                    if (!parentId) {
                        // if root comment
                        // if the comment doesnt exist in cache return
                        if (!draft.entities[commentId]) return

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
                        // if the reply doesnt exist in cache return
                        if (!draft.entities[parentId].repliesEntities || !draft.entities[parentId].repliesEntities[commentId]) return

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
                }

                // optimistic update of the cache
                const patchResult = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", queryArgsGetComments, draftFunction)
                );
                // optimistic update of other cache with different sort argument
                const patchResultAlternativeSort = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", oppositeQueryArgs, draftFunction)
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
                    patchResultAlternativeSort.undo();
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