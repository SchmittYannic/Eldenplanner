import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { CommentType, SortCommentsType } from "src/types";
import { commentsApiSlice } from "./commentsApiSlice";

interface CommentsStateType<CommentId extends string> {
    totalComments: number;
    commentIds: CommentId[];
    commentEntities: Record<CommentId, CommentType<CommentId>>;
    hasMore: boolean;
    lastFetchedTimestamp: string;
    sort: SortCommentsType;
    limit: number;
}

export const initialState: CommentsStateType<string> = {
    totalComments: 0,
    commentIds: [],
    commentEntities: {},
    hasMore: true,
    lastFetchedTimestamp: "",
    sort: "new",
    limit: 2,
};

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        resetState: (state) => {
            state.totalComments = initialState.totalComments;
            state.commentIds = [];
            state.commentEntities = {};
            state.hasMore = initialState.hasMore;
            state.lastFetchedTimestamp = initialState.lastFetchedTimestamp;
            state.sort = initialState.sort;
            state.limit = initialState.limit;
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
                    state.commentIds = [...state.commentIds, ...action.payload.ids];
                    state.commentEntities = {
                        ...state.commentEntities,
                        ...action.payload.entities
                    };

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

                    if (!currentRepliesIds && !currentRepliesEntities) {
                        // if the replies to the comment are the first replies that got fetched
                        // write ids and entities to the parent comments repliesIds and repliesEntities keys
                        state.commentEntities[parentId].repliesIds = action.payload.ids;
                        state.commentEntities[parentId].repliesEntities = action.payload.entities;
                    } else if (currentRepliesIds && currentRepliesEntities) {
                        // if replies already exist on the comment attach newly fetched replies to end
                        state.commentEntities[parentId].repliesIds = [...currentRepliesIds, ...action.payload.ids];
                        state.commentEntities[parentId].repliesEntities = {
                            ...currentRepliesEntities,
                            ...action.payload.entities
                        }
                    } else {
                        throw new Error("Error while merging Cache: both repliesIds and repliesEntities of a comment must either be both undefined or both exist")
                    }

                    // update hasMore of parent comment
                    const hasMore = state.commentEntities[parentId].repliesIds.length < action.payload.totalComments;
                    state.commentEntities[parentId].hasMoreReplies = hasMore;

                    // update totalReplies of parent comment
                    state.commentEntities[parentId].totalReplies = action.payload.totalComments;
                }
            }
        );
    },
});

export const {
    changeLimit,
    changeSort,
} = commentsSlice.actions;

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

export default commentsSlice.reducer;