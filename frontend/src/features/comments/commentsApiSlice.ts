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
    UpdateCommentMutationParamsType,
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

                    const repliesIds = currentCache.entities[parentId].repliesIds;
                    const repliesEntities = currentCache.entities[parentId].repliesEntities;

                    if (!repliesIds && !repliesEntities) {
                        // if the replies to the comment are the first replies that got fetched
                        // write ids and entities to the parent comments repliesIds and repliesEntities keys
                        currentCache.entities[parentId].repliesIds = responseData.ids;
                        currentCache.entities[parentId].repliesEntities = responseData.entities;
                    } else if (repliesIds && repliesEntities) {
                        // if replies already exist on the comment attach newly fetched replies to end
                        // Step 1: Filter out Ids that are in the cache and not in the response
                        const oldIds = repliesIds.filter(id => !responseData.ids.includes(id))

                        // Step 2: Merge the entities, which will replace old entities with the new ones
                        const newEntities = {
                            ...repliesEntities,
                            ...responseData.entities
                        }
                        currentCache.entities[parentId].repliesEntities = { ...newEntities }

                        // Step 3 merge the fetchedIds into oldIds making sure the ids in resulting array remain sorted
                        const mergedIds = mergeSortedArrays(oldIds, responseData.ids, newEntities, sort === "old");
                        currentCache.entities[parentId].repliesIds = mergedIds;
                    } else {
                        throw new Error("Error while merging Cache: both repliesIds and repliesEntities of a comment must either be both undefined or both exist")
                    }

                    const newRepliesIds = currentCache.entities[parentId].repliesIds;
                    // update hasMore of parent comment
                    const hasMore = newRepliesIds
                        ? newRepliesIds.length < responseData.totalComments
                        : currentCache.entities[parentId].totalReplies !== 0;
                    currentCache.entities[parentId].hasMoreReplies = hasMore;

                    // update totalReplies of parent comment
                    currentCache.entities[parentId].totalReplies = responseData.totalComments;
                }
            },
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

                let sorting = sort;

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

                // function to update cache with temp comment
                const draftFunction: Recipe<GetCommentsResponseType<string>> = (draft: MaybeDrafted<GetCommentsResponseType<string>>) => {
                    if (!parentId) {
                        // increment totalComments
                        draft.totalComments += 1;

                        // add comment to entities
                        draft.entities = {
                            ...draft.entities,
                            [tempId]: tempComment,
                        };

                        // push or unshift tempId into ids depending on sort setting
                        if (sorting === "new") {
                            draft.ids.unshift(tempId);
                        } else if (sorting === "old") {
                            draft.ids.push(tempId)
                        }
                    } else {
                        // increment totalReplies
                        draft.entities[parentId].totalReplies += 1;

                        draft.entities[parentId].repliesEntities = {
                            ...draft.entities[parentId].repliesEntities,
                            [tempId]: tempComment,
                        }

                        // if there is no repliesIds yet create one with tempId inside
                        const repliesIds = draft.entities[parentId].repliesIds;
                        if (!repliesIds) {
                            draft.entities[parentId].repliesIds = [tempId];
                        } else {
                            // replies always oldest to newest therefore always push
                            draft.entities[parentId].repliesIds = [...repliesIds, tempId];
                        }
                    }
                }

                // optimistic update of the cache for sort new
                sorting = "new";
                const patchResultNew = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", { targetId, targetType, parentId, lastFetchedTimestamp, sort: "new", limit }, draftFunction)
                );

                // optimistic update of the cache for sort old
                sorting = "old";
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

                    sorting = "new";
                    dispatch(
                        commentsApiSlice.util.updateQueryData("getComments", { targetId, targetType, parentId, lastFetchedTimestamp, sort: "new", limit }, draftFunction)
                    );

                    sorting = "old";
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
        }),
        updateComment: builder.mutation<CommentType, UpdateCommentMutationParamsType>({
            query: ({ commentId, content }) => ({
                url: `/comments/${commentId}`,
                method: "PATCH",
                body: { content },
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            async onQueryStarted({
                commentId,
                content,
                ...queryArgsGetComments
            }, { dispatch, queryFulfilled }) {
                // save previous state of comment to be able to reset comment if mutation fails
                let previousState: CommentType | null = null;
                let newState: CommentType | null = null;

                // temporary timestamp for comments updatedAt field
                const tempUpdatedAt = new Date().toISOString();

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
                        // update content of comment
                        draft.entities[commentId].content = content;
                        // update updatedAt of comment with temporary timestamp
                        draft.entities[commentId].updatedAt = tempUpdatedAt;
                        // save new state of comment
                        newState = { ...draft.entities[commentId] };
                    } else {
                        // if reply
                        const parentEntity = draft.entities[parentId];
                        const repliesEntities = parentEntity?.repliesEntities;

                        // if the reply doesn't exist in cache return
                        if (!repliesEntities || !repliesEntities[commentId]) return;

                        // save previous state of comment
                        previousState = { ...repliesEntities[commentId] };

                        // update content of comment
                        repliesEntities[commentId].content = content;

                        // update updatedAt of comment with temporary timestamp
                        repliesEntities[commentId].updatedAt = tempUpdatedAt;

                        // save new state of comment
                        newState = { ...repliesEntities[commentId] };
                    }
                }

                // optimistic update of the cache of current sort
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
                    const { data: comment } = await queryFulfilled

                    dispatch(
                        setCommentEntity({
                            parentId: queryArgsGetComments.parentId,
                            commentId,
                            newComment: comment,
                        })
                    );
                } catch (err) {
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
        }),
        deleteComment: builder.mutation<{ success: boolean, id: string }, DeleteCommentMutationParamsType>({
            query: ({ commentId }) => ({
                url: `/comments/${commentId}`,
                method: "DELETE",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            async onQueryStarted({
                commentId,
                ...queryArgsGetComments
            }, { dispatch, queryFulfilled }) {
                // save previous state of comment 
                let deletedComment: CommentType | null = null;
                let indexOfComment: number | null = null;

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
                        if (!draft.ids.includes(commentId)) return

                        // save previous state of comment
                        deletedComment = draft.entities[commentId];

                        // decrement totalComments
                        draft.totalComments -= 1;

                        // remove comment from entities
                        const { [commentId]: _, ...newEntities } = draft.entities;
                        draft.entities = newEntities;

                        // get and save index of comment
                        indexOfComment = draft.ids.indexOf(commentId);
                        if (indexOfComment !== -1) {
                            // remove the id of the comment from ids
                            const newIds = [
                                ...draft.ids.slice(0, indexOfComment),
                                ...draft.ids.slice(indexOfComment + 1)
                            ];
                            draft.ids = newIds;
                        }
                    } else {
                        // if reply
                        // if the reply doesnt exist in cache return
                        const parentEntity = draft.entities[parentId]
                        const repliesEntities = parentEntity?.repliesEntities
                        const repliesIds = parentEntity?.repliesIds
                        if (!repliesEntities || !repliesEntities[commentId]) return
                        if (!repliesIds || !repliesIds.includes(commentId)) return

                        // save previous state of reply
                        deletedComment = repliesEntities[commentId];

                        // decrement totalReplies
                        draft.entities[parentId].totalReplies -= 1;

                        // remove comment from entities
                        const { [commentId]: _, ...newEntities } = repliesEntities;
                        draft.entities[parentId].repliesEntities = newEntities;

                        // get and save index of comment
                        indexOfComment = repliesIds.indexOf(commentId);
                        if (indexOfComment !== -1) {
                            // remove the id of the comment from ids
                            const newIds = [
                                ...repliesIds.slice(0, indexOfComment),
                                ...repliesIds.slice(indexOfComment + 1)
                            ];
                            draft.entities[parentId].repliesIds = newIds;
                        }
                    }
                }

                // optimistic update of the cache of current sort
                const patchResult = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", queryArgsGetComments, draftFunction)
                );

                // optimistic update of other cache with different sort argument
                const patchResultAlternativeSort = dispatch(
                    commentsApiSlice.util.updateQueryData("getComments", oppositeQueryArgs, draftFunction)
                );

                // Optimistic update for comment entity in commentsSlice state
                if (deletedComment && indexOfComment) {
                    dispatch(
                        deleteCommentId({
                            parentId: queryArgsGetComments.parentId,
                            commentId,
                        })
                    );
                    dispatch(
                        deleteCommentEntity({
                            parentId: queryArgsGetComments.parentId,
                            commentId,
                        })
                    );
                    dispatch(
                        decrementTotalComments({
                            parentId: queryArgsGetComments.parentId
                        })
                    )
                }

                try {
                    await queryFulfilled;
                } catch (err) {
                    patchResult.undo();
                    patchResultAlternativeSort.undo();

                    if (deletedComment && indexOfComment) {
                        dispatch(
                            addCommentId({
                                parentId: queryArgsGetComments.parentId,
                                commentId,
                                position: indexOfComment,
                            })
                        );
                        dispatch(
                            setCommentEntity({
                                parentId: queryArgsGetComments.parentId,
                                commentId,
                                newComment: deletedComment,
                            })
                        );
                        dispatch(
                            incrementTotalComments({
                                parentId: queryArgsGetComments.parentId,
                            })
                        );
                    }
                }
            },
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
                        const parentEntity = draft.entities[parentId];
                        const repliesEntities = parentEntity?.repliesEntities;
                        if (!repliesEntities || !repliesEntities[commentId]) return

                        // save previous state of comment
                        previousState = { ...repliesEntities[commentId] };

                        if (type === "like" && !repliesEntities[commentId].hasLiked && !repliesEntities[commentId].hasDisliked) {
                            // if like is added and comment hasLiked and hasDisliked is false
                            // add the like
                            repliesEntities[commentId].likes += 1;
                            repliesEntities[commentId].hasLiked = true;
                        } else if (type === "dislike" && !repliesEntities[commentId].hasLiked && !repliesEntities[commentId].hasDisliked) {
                            // if dislike is added and comment hasLiked and hasDisliked is false
                            // add the dislike
                            repliesEntities[commentId].dislikes += 1;
                            repliesEntities[commentId].hasDisliked = true;
                        } else if (type === "like" && repliesEntities && repliesEntities[commentId] && repliesEntities[commentId].hasDisliked) {
                            // if like is added and comments hasDisliked true
                            // add the like and remove the dislike
                            repliesEntities[commentId].likes += 1;
                            repliesEntities[commentId].hasLiked = true;
                            if (repliesEntities[commentId].dislikes > 0) repliesEntities[commentId].dislikes -= 1;
                            repliesEntities[commentId].hasDisliked = false;
                        } else if (type === "dislike" && repliesEntities && repliesEntities[commentId] && repliesEntities[commentId].hasLiked) {
                            // if dislike is added and comments hasLiked true
                            // add the dislike and remove the like
                            repliesEntities[commentId].dislikes += 1;
                            repliesEntities[commentId].hasDisliked = true;
                            if (repliesEntities[commentId].likes > 0) repliesEntities[commentId].likes -= 1;
                            repliesEntities[commentId].hasLiked = false;
                        }

                        // save new state of comment
                        newState = { ...repliesEntities[commentId] };
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
                        const parentEntity = draft.entities[parentId];
                        const repliesEntities = parentEntity?.repliesEntities
                        if (!repliesEntities || !repliesEntities[commentId]) return

                        // save previous state of comment
                        previousState = { ...repliesEntities[commentId] };

                        if (type === "like" && repliesEntities[commentId].hasLiked) {
                            repliesEntities[commentId].hasLiked = false;
                            if (repliesEntities[commentId].likes > 0) repliesEntities[commentId].likes -= 1;
                        } else if (type === "dislike" && repliesEntities[commentId].hasDisliked) {
                            repliesEntities[commentId].hasDisliked = false;
                            if (repliesEntities[commentId].dislikes > 0) repliesEntities[commentId].dislikes -= 1;
                        }

                        // save new state of comment
                        newState = { ...repliesEntities[commentId] };
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
        }),
    })
});

export const {
    useLazyGetCommentsQuery,
    useCreateCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
    useAddLikeDislikeMutation,
    useRemoveLikeDislikeMutation,
} = commentsApiSlice;