import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColumnFiltersState, PaginationState, SortingState } from "@tanstack/react-table";

import { RootState } from "src/app/store";
import { OrderType } from "src/types";
import { findObjectById } from "src/utils/functions";
import { isFilterColumnValueArray } from "src/utils/typeguards";

interface BuildsStateType {
    pageSize: number,
    pageIndex: number,
    sorting: SortingState,
    columnFilters: ColumnFiltersState,
}

const initialState: BuildsStateType = {
    pageSize: 10,
    pageIndex: 0,
    sorting: [
        { id: "stars", desc: true }
    ],
    columnFilters: [],
};

export const buildsSlice = createSlice({
    name: "builds",
    initialState,
    reducers: {
        resetBuildsSliceState: (state) => {
            state.pageSize = initialState.pageSize;
            state.pageIndex = initialState.pageIndex;
            state.sorting = initialState.sorting;
            state.columnFilters = initialState.columnFilters;
        },
        setBuildsPagination: (state, { payload }: PayloadAction<PaginationState>) => {
            const { pageSize, pageIndex } = payload;
            state.pageSize = pageSize;
            state.pageIndex = pageIndex;
        },
        setBuildsSorting: (state, { payload }: PayloadAction<SortingState>) => {
            state.sorting = payload;
        },
        setBuildsColumnFilters: (state, { payload }: PayloadAction<ColumnFiltersState>) => {
            state.columnFilters = payload;
        },
    },
});

export const {
    resetBuildsSliceState,
    setBuildsPagination,
    setBuildsSorting,
    setBuildsColumnFilters,
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
export const selectBuildsColumnFilters = (state: RootState) => state.builds.columnFilters;

export const selectBuildsOrder = (state: RootState) => {
    const order: OrderType = !state.builds.sorting.length ? "asc" : state.builds.sorting[0].desc ? "desc" : "asc";
    return order
};
export const selectBuildsField = (state: RootState) => {
    const field = state.builds.sorting.length ? state.builds.sorting[0].id : "stars";
    return field
};

export const selectBuildsTitleFilter = (state: RootState) => {
    const titleFilter = findObjectById(state.builds.columnFilters, "title");
    const title = titleFilter && typeof titleFilter.value === "string" ? titleFilter.value : undefined;
    return title
}

export const selectBuildsAuthorFilter = (state: RootState) => {
    const authorFilter = findObjectById(state.builds.columnFilters, "author");
    const author = authorFilter && typeof authorFilter.value === "string" ? authorFilter.value : undefined;
    return author
}

export const selectBuildsLevelFilter = createSelector(
    [selectBuildsColumnFilters],
    (columnFilter) => {
        const levelFilter = findObjectById(columnFilter, "level");
        const level = levelFilter && isFilterColumnValueArray(levelFilter.value) ? levelFilter.value : undefined;
        return {
            minLevel: level === undefined ? "0" : level[0] === null ? "0" : level[0],
            maxLevel: level === undefined ? undefined : level[1],
        };
    }
);

export const selectBuildsStarsFilter = createSelector(
    [selectBuildsColumnFilters],
    (columnFilter) => {
        const starsFilter = findObjectById(columnFilter, "stars");
        const stars = starsFilter && isFilterColumnValueArray(starsFilter.value) ? starsFilter.value : undefined;
        return {
            minStars: stars === undefined ? "0" : stars[0] === null ? "0" : stars[0],
            maxStars: stars === undefined ? undefined : stars[1],
        };
    }
);

export default buildsSlice.reducer;