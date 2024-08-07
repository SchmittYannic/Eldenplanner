import { createEntityAdapter, createSlice, EntityState, PayloadAction } from "@reduxjs/toolkit";
import { CommentType, SortCommentsType } from "src/types";
import { commentApiSlice } from "./commentApiSlice";
import { RootState } from "src/app/store";

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
});

interface CommentsStateType extends EntityState<CommentType> {
    totalComments: number;
    hasMore: boolean;
    lastFetchedTimestamp: string;
    sort: SortCommentsType;
    limit: number;
}

const initialState: CommentsStateType = commentsAdapter.getInitialState({
    totalComments: 0,
    hasMore: true,
    lastFetchedTimestamp: "",
    sort: "new",
    limit: 25,
});

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        resetState: (state) => {
            state.totalComments = initialState.totalComments;
            state.hasMore = initialState.hasMore;
            state.lastFetchedTimestamp = initialState.lastFetchedTimestamp;
            state.sort = initialState.sort;
            state.limit = initialState.limit;
            commentsAdapter.removeAll(state);
        },
        changeSort: (state, { payload }: PayloadAction<SortCommentsType>) => {
            state.sort = payload;
        },
        changeLimit: (state, { payload }: PayloadAction<number>) => {
            state.limit = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            commentApiSlice.endpoints.getComments.matchFulfilled,
            (state, action) => {
                // Update the total comments and last fetched timestamp
                state.totalComments = action.payload.totalComments;
                state.lastFetchedTimestamp = action.payload.comments.length
                    ? action.payload.comments[action.payload.comments.length - 1].createdAt
                    : state.lastFetchedTimestamp;

                // Add comments to the state using the Entity Adapter
                commentsAdapter.upsertMany(state, action.payload.comments);

                // Update hasMore
                state.hasMore = state.ids.length < action.payload.totalComments;
            }
        );
    },
});

const selectCommentsState = (state: RootState) => state.comments;

export const selectAllComments = (state: RootState) =>
    commentsAdapter.getSelectors(selectCommentsState).selectAll(state);

export const selectCommentById = (state: RootState, commentId: string) =>
    commentsAdapter.getSelectors(selectCommentsState).selectById(state, commentId);

export const selectHasMoreComments = (state: RootState) => state.comments.hasMore;
export const selectTotalComments = (state: RootState) => state.comments.totalComments;
export const selectSort = (state: RootState) => state.comments.sort;
export const selectLimit = (state: RootState) => state.comments.limit;
export const selectLastFetchedTimestamp = (state: RootState) => state.comments.lastFetchedTimestamp;
export const selectCommentsMetaData = (state: RootState) => ({
    hasMore: state.comments.hasMore,
    totalComments: state.comments.totalComments,
    sort: state.comments.sort,
    limit: state.comments.limit,
    lastFetchedTimestamp: state.comments.lastFetchedTimestamp,
})

export default commentsSlice.reducer;