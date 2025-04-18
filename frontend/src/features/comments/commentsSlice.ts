import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { CommentType, GetCommentsResponseType, NumericOperationType, SortCommentsType } from "src/types";
import { commentsApiSlice } from "./commentsApiSlice";
import { mergeSortedArrays } from "src/utils/functions";

const initLimit = Number(import.meta.env.VITE_COMMENT_SECTION_FETCH_LIMIT);

interface CommentsStateType<CommentId extends string> {
    totalComments: number;
    commentIds: CommentId[];
    commentEntities: Record<CommentId, CommentType<CommentId>>;
    hasMore: boolean;
    lastFetchedTimestamp: string;
    sort: SortCommentsType;
    limit: number;
    isEditMode: CommentId | null;
    isReplyMode: CommentId | null;
}

interface SetCommentEntityPayload<CommentId extends string> {
    parentId: CommentId | null;
    commentId: CommentId;
    newComment: CommentType<CommentId>;
}

export const initialState: CommentsStateType<string> = {
    totalComments: 0,
    commentIds: [],
    commentEntities: {},
    hasMore: true,
    lastFetchedTimestamp: "",
    sort: "new",
    limit: !Number.isNaN(initLimit) ? initLimit : 15,
    isEditMode: null,
    isReplyMode: null,
};

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        resetCommentsSliceState: (state) => {
            state.totalComments = initialState.totalComments;
            state.commentIds = [];
            state.commentEntities = {};
            state.hasMore = initialState.hasMore;
            state.lastFetchedTimestamp = initialState.lastFetchedTimestamp;
            state.limit = initialState.limit;
            state.isEditMode = null;
            state.isReplyMode = null;
        },
        changeSort: (state, { payload }: PayloadAction<SortCommentsType>) => {
            state.totalComments = initialState.totalComments;
            state.commentIds = [];
            state.commentEntities = {};
            state.hasMore = initialState.hasMore;
            state.lastFetchedTimestamp = initialState.lastFetchedTimestamp;
            state.limit = initialState.limit;
            // change sort
            state.sort = payload;
        },
        changeLimit: (state, { payload }: PayloadAction<number>) => {
            state.limit = payload;
        },
        setComments: (state, { payload }: PayloadAction<{ ids: string[], entities: Record<string, CommentType<string>> }>) => {
            state.commentIds = payload.ids;
            state.commentEntities = payload.entities;
        },
        setTotalComments: (state, { payload }: PayloadAction<number>) => {
            state.totalComments = payload;
        },
        incrementTotalComments: (state, { payload }: PayloadAction<{ parentId: string }>) => {
            const { parentId } = payload;
            if (!parentId) {
                state.totalComments += 1
            } else {
                state.commentEntities[parentId].totalReplies += 1
            }
        },
        decrementTotalComments: (state, { payload }: PayloadAction<{ parentId: string }>) => {
            const { parentId } = payload;
            if (!parentId && state.totalComments > 0) {
                state.totalComments -= 1
            } else if (parentId && state.commentEntities[parentId].totalReplies > 0) {
                state.commentEntities[parentId].totalReplies -= 1
            }
        },
        setLastFetchedTimestamp: (state, { payload }: PayloadAction<string>) => {
            state.lastFetchedTimestamp = payload;
        },
        updateHasMore: (state) => {
            if (state.totalComments === state.commentIds.length) {
                state.hasMore = false;
            } else {
                state.hasMore = true;
            }
        },
        setCommentEntity: (state, { payload }: PayloadAction<SetCommentEntityPayload<string>>) => {
            const { parentId, commentId, newComment } = payload;
            if (!parentId) {
                state.commentEntities[commentId] = newComment;
            } else {
                const parentEntity = state.commentEntities[parentId];
                const repliesEntities = parentEntity.repliesEntities;
                const newEntity = { [commentId]: newComment };
                state.commentEntities[parentId].repliesEntities = { ...repliesEntities, ...newEntity }
            }
        },
        deleteCommentEntity: (state, { payload }: PayloadAction<{ parentId: string, commentId: string }>) => {
            const { parentId, commentId } = payload;
            if (!parentId && state.commentEntities[commentId]) {
                const entities = { ...state.commentEntities }
                delete entities[commentId];
                state.commentEntities = entities
            } else {
                const parentEntity = state.commentEntities[parentId];
                const repliesEntities = parentEntity?.repliesEntities;
                const entities = { ...repliesEntities }
                delete entities[commentId];
                state.commentEntities[parentId].repliesEntities = entities
            }
        },
        addCommentId: (state, { payload }: PayloadAction<{ parentId: string, commentId: string, position?: number }>) => {
            const { parentId, commentId, position } = payload;

            if (position && position >= 0) {
                // allow position to be equal length to insert element at the end of array
                if (!parentId && position <= state.commentIds.length) {
                    const ids = [
                        ...state.commentIds.slice(0, position),
                        commentId,
                        ...state.commentIds.slice(position)
                    ];
                    state.commentIds = ids;
                } else {
                    const parentEntity = state.commentEntities[parentId];
                    const repliesIds = parentEntity?.repliesIds;
                    if (repliesIds && position <= repliesIds.length) {
                        const ids = [
                            ...repliesIds.slice(0, position),
                            commentId,
                            ...repliesIds.slice(position)
                        ];
                        state.commentEntities[parentId].repliesIds = ids;
                    }
                }
            } else {
                // if no position given just add depending on sort
                // unshift for sort new and push for old
                if (!parentId) {
                    if (state.sort === "new") {
                        const ids = [...state.commentIds];
                        ids.unshift(commentId);
                        state.commentIds = ids;
                    } else if (state.sort === "old") {
                        const ids = [...state.commentIds];
                        ids.push(commentId);
                        state.commentIds = ids;
                    }
                } else {
                    const parentEntity = state.commentEntities[parentId];
                    const repliesIds = parentEntity?.repliesIds;
                    if (repliesIds) {
                        const ids = [...repliesIds, commentId];
                        state.commentEntities[parentId].repliesIds = ids;
                    }
                }
            }
        },
        deleteCommentId: (state, { payload }: PayloadAction<{ parentId: string, commentId: string }>) => {
            const { parentId, commentId } = payload;
            if (!parentId) {
                const ids = state.commentIds.filter(id => id !== commentId);
                state.commentIds = ids;
            } else {
                const parentEntity = state.commentEntities[parentId];
                const repliesIds = parentEntity?.repliesIds;
                if (repliesIds) {
                    const ids = repliesIds.filter(id => id !== commentId);
                    state.commentEntities[parentId].repliesIds = ids
                }
            }
        },
        setIsEditMode: (state, { payload }: PayloadAction<string | null>) => {
            state.isEditMode = payload;
        },
        setIsReplyMode: (state, { payload }: PayloadAction<string | null>) => {
            state.isReplyMode = payload;
        },
        changeLikes: (state, { payload }: PayloadAction<{ commentId: string, parentId: string, type: NumericOperationType }>) => {
            const { commentId, parentId, type } = payload;

            if (type === "increment") {
                if (!parentId) {
                    state.commentEntities[commentId].likes += 1;
                } else if (parentId) {
                    const repliesEntities = state.commentEntities[parentId].repliesEntities;
                    if (!repliesEntities) return
                    const reply = repliesEntities[commentId];
                    if (!reply) return
                    reply.likes += 1;
                }
            } else if (type === "decrement") {
                if (!parentId && state.commentEntities[commentId].likes > 0) {
                    state.commentEntities[commentId].likes -= 1;
                } else if (parentId) {
                    const repliesEntities = state.commentEntities[parentId].repliesEntities
                    if (!repliesEntities) return
                    const reply = repliesEntities[commentId]
                    if (!reply) return
                    if (reply.likes === 0) return
                    reply.likes -= 1;
                }
            }
        },
        changeDislikes: (state, { payload }: PayloadAction<{ commentId: string, parentId: string, type: NumericOperationType }>) => {
            const { commentId, parentId, type } = payload;

            if (type === "increment") {
                if (!parentId) {
                    state.commentEntities[commentId].dislikes += 1;
                } else if (parentId && state.commentEntities[parentId].repliesEntities) {
                    const repliesEntities = state.commentEntities[parentId].repliesEntities;
                    if (!repliesEntities) return
                    const reply = repliesEntities[commentId];
                    if (!reply) return
                    reply.dislikes += 1;
                }
            } else if (type === "decrement") {
                if (!parentId && state.commentEntities[commentId].dislikes > 0) {
                    state.commentEntities[commentId].dislikes -= 1;
                } else if (parentId) {
                    const repliesEntities = state.commentEntities[parentId].repliesEntities
                    if (!repliesEntities) return
                    const reply = repliesEntities[commentId]
                    if (!reply) return
                    if (reply.dislikes === 0) return
                    reply.dislikes -= 1;
                }
            }
        },
        setHasLikedOfComment: (state, { payload }: PayloadAction<{ commentId: string, parentId: string, hasLiked: boolean }>) => {
            const { commentId, parentId, hasLiked } = payload;

            if (!parentId) {
                state.commentEntities[commentId].hasLiked = hasLiked;
            } else if (parentId) {
                const repliesEntities = state.commentEntities[parentId].repliesEntities;
                if (!repliesEntities) return
                repliesEntities[commentId].hasLiked = hasLiked;
            }
        },
        setHasDislikedOfComment: (state, { payload }: PayloadAction<{ commentId: string, parentId: string, hasDisliked: boolean }>) => {
            const { commentId, parentId, hasDisliked } = payload;

            if (!parentId) {
                state.commentEntities[commentId].hasDisliked = hasDisliked;
            } else if (parentId) {
                const repliesEntities = state.commentEntities[parentId].repliesEntities;
                if (!repliesEntities) return
                repliesEntities[commentId].hasDisliked = hasDisliked;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            commentsApiSlice.endpoints.getComments.matchFulfilled,
            (state, action) => {
                const { parentId } = action.meta.arg.originalArgs;
                // if no parentId -> received comments are root comments
                if (!parentId) {
                    // Update the total comments and last fetched timestamp
                    state.totalComments = action.payload.totalComments;
                    const idLastComment = action.payload.ids.length ? action.payload.ids[action.payload.ids.length - 1] : null;
                    state.lastFetchedTimestamp = idLastComment ? action.payload.entities[idLastComment].createdAt : "";

                    // Adds ids and entities to state
                    state.commentEntities = {
                        ...state.commentEntities,
                        ...action.payload.entities
                    };
                    const mergedIds = mergeSortedArrays([...state.commentIds], [...action.payload.ids], state.commentEntities, state.sort === "old");
                    state.commentIds = mergedIds;

                    // Update hasMore
                    state.hasMore = state.commentIds.length < action.payload.totalComments;
                } else {
                    // if parentId -> received comments are replies
                    // get timestamp of last fetched reply and save it under lastReplyFetchedTimestamp of parent comment
                    const lastId = action.payload.ids[action.payload.ids.length - 1];
                    const lastReplyFetchedTimestamp = action.payload.entities[lastId].createdAt;
                    state.commentEntities[parentId].lastReplyFetchedTimestamp = lastReplyFetchedTimestamp;

                    // get repliesIds and repliesEntities of parent comment in the cache
                    const currentRepliesIds = state.commentEntities[parentId].repliesIds
                    const currentRepliesEntities = state.commentEntities[parentId].repliesEntities

                    if (!currentRepliesIds || currentRepliesIds.length === 0) {
                        // if the replies to the comment are the first replies that got fetched
                        // write ids and entities to the parent comments repliesIds and repliesEntities keys
                        state.commentEntities[parentId].repliesIds = action.payload.ids;
                        state.commentEntities[parentId].repliesEntities = action.payload.entities;
                    } else if (currentRepliesIds && currentRepliesIds.length !== 0) {
                        // if replies already exist on the comment
                        // Step 1: Filter out Ids that are in the state and not in the response
                        const oldIds = currentRepliesIds.filter(id => !action.payload.ids.includes(id))

                        // Step 2: Merge the entities, which will replace old entities with the new ones
                        const newRepliesEntities = {
                            ...currentRepliesEntities,
                            ...action.payload.entities
                        };
                        state.commentEntities[parentId].repliesEntities = newRepliesEntities;

                        // Step 3 merge the fetchedIds into oldIds making sure the ids in resulting array remain sorted
                        const mergedIds = mergeSortedArrays(oldIds, action.payload.ids, newRepliesEntities, true);
                        state.commentEntities[parentId].repliesIds = mergedIds;
                    } else {
                        throw new Error("Error while merging Cache: both repliesIds and repliesEntities of a comment must either be both undefined or both exist")
                    }

                    // update hasMore of parent comment
                    const parentEntity = state.commentEntities[parentId]
                    const repliesIds = parentEntity.repliesIds
                    const hasMore = repliesIds
                        ? repliesIds.length < action.payload.totalComments
                        : parentEntity.totalReplies !== 0;

                    state.commentEntities[parentId].hasMoreReplies = hasMore;

                    // update totalReplies of parent comment
                    state.commentEntities[parentId].totalReplies = action.payload.totalComments;
                }
            }
        );
    },
});

export const {
    resetCommentsSliceState,
    changeLimit,
    changeSort,
    setComments,
    setTotalComments,
    setLastFetchedTimestamp,
    updateHasMore,
    setCommentEntity,
    deleteCommentEntity,
    addCommentId,
    deleteCommentId,
    incrementTotalComments,
    decrementTotalComments,
    setIsEditMode,
    setIsReplyMode,
    changeLikes,
    changeDislikes,
    setHasLikedOfComment,
    setHasDislikedOfComment,
} = commentsSlice.actions;

export const selectCachedCommentsData = (state: RootState, targetId: string, targetType: string) => {
    const sort = state.comments.sort;

    // Construct the cache key based on the query parameters
    const cacheKey = `getComments("${targetId}-${targetType}-${sort}")`;

    // Access the cached data using the constructed cache key
    return state.api.queries[cacheKey]?.data as GetCommentsResponseType<string> ?? null;
};

const selectCommentsState = (state: RootState) => state.comments;
export const selectAllCommentIds = (state: RootState) => state.comments.commentIds;
export const selectCommentById = createSelector(
    [selectCommentsState, (_state, id) => id], // Input selectors
    (commentsState, id) => commentsState.commentEntities[id] // Output function
);
export const selectHasMoreComments = (state: RootState) => state.comments.hasMore;
export const selectTotalComments = (state: RootState) => state.comments.totalComments;
export const selectSort = (state: RootState) => state.comments.sort;
export const selectLimit = (state: RootState) => state.comments.limit;
export const selectLastFetchedTimestamp = (state: RootState) => state.comments.lastFetchedTimestamp;
export const selectIsEditMode = (id: string) => createSelector(
    (state: RootState) => state.comments.isEditMode,
    (isEditMode) => isEditMode === id
);
export const selectIsReplyMode = (id: string) => createSelector(
    (state: RootState) => state.comments.isReplyMode,
    (isReplyMode) => isReplyMode === id
);

export default commentsSlice.reducer;