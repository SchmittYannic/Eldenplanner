import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { RootState } from "src/app/store";
import { OrderType } from "src/types";

interface BuildsStateType {
    pageSize: number,
    pageIndex: number,
    sorting: SortingState,
}

const initialState: BuildsStateType = {
    pageSize: 10,
    pageIndex: 0,
    sorting: [
        { id: "stars", desc: false }
    ],
};

export const buildsSlice = createSlice({
    name: "builds",
    initialState,
    reducers: {
        setBuildsPagination: (state, { payload }: PayloadAction<PaginationState>) => {
            const { pageSize, pageIndex } = payload;
            state.pageSize = pageSize;
            state.pageIndex = pageIndex;
        },
        setBuildsSorting: (state, { payload }: PayloadAction<SortingState>) => {
            state.sorting = payload;
        },
    },
});

export const {
    setBuildsPagination,
    setBuildsSorting,
} = buildsSlice.actions;

export const selectBuildsPagination = createSelector(
    (state: RootState) => state.builds.pageSize,
    (state: RootState) => state.builds.pageIndex,
    (pageSize, pageIndex) => ({
        pageSize,
        pageIndex,
    })
);
export const selectBuildsLimit = (state: RootState) => state.builds.pageSize;
export const selectBuildsSkip = (state: RootState) => state.builds.pageSize * state.builds.pageIndex;
export const selectBuildsSorting = (state: RootState) => state.builds.sorting;

export const selectBuildsOrder = (state: RootState) => {
    const order: OrderType = !state.builds.sorting.length ? "asc" : state.builds.sorting[0].desc ? "desc" : "asc";
    return order
};
export const selectBuildsField = (state: RootState) => {
    const field = state.builds.sorting.length ? state.builds.sorting[0].id : "stars";
    return field
};

export default buildsSlice.reducer;