import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { CommentType, SortCommentsType } from "src/types";
import { commentsApiSlice } from "./commentsApiSlice";

interface CommentsStateType {
    totalComments: number;
    comments: CommentType[],
    hasMore: boolean;
    lastFetchedTimestamp: string;
    sort: SortCommentsType;
    limit: number;
}

export const initialState: CommentsStateType = {
    totalComments: 0,
    comments: [],
    hasMore: true,
    lastFetchedTimestamp: "",
    sort: "new",
    limit: 25,
};

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        resetState: (state) => {
            state.totalComments = initialState.totalComments;
            state.comments = [];
            state.hasMore = initialState.hasMore;
            state.lastFetchedTimestamp = initialState.lastFetchedTimestamp;
            state.sort = initialState.sort;
            state.limit = initialState.limit;
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
            commentsApiSlice.endpoints.getComments.matchFulfilled,
            (state, action) => {
                // Update the total comments and last fetched timestamp
                state.totalComments = action.payload.totalComments;
                state.lastFetchedTimestamp = action.payload.comments.length
                    ? action.payload.comments[action.payload.comments.length - 1].createdAt
                    : state.lastFetchedTimestamp;

                // Add comments to the state using the Entity Adapter
                //commentsAdapter.upsertMany(state, action.payload.comments);
                state.comments = [...state.comments, ...action.payload.comments]

                // Update hasMore
                state.hasMore = state.comments.length < action.payload.totalComments;
            }
        );
    },
});

export const selectAllComments = (state: RootState) => state.comments.comments;
export const selectHasMoreComments = (state: RootState) => state.comments.hasMore;
export const selectTotalComments = (state: RootState) => state.comments.totalComments;
export const selectSort = (state: RootState) => state.comments.sort;
export const selectLimit = (state: RootState) => state.comments.limit;
export const selectLastFetchedTimestamp = (state: RootState) => state.comments.lastFetchedTimestamp;
// export const selectCommentsMetaData = (state: RootState) => ({
//     hasMore: state.comments.hasMore,
//     totalComments: state.comments.totalComments,
//     sort: state.comments.sort,
//     limit: state.comments.limit,
//     lastFetchedTimestamp: state.comments.lastFetchedTimestamp,
// })

export default commentsSlice.reducer;