import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColumnFiltersState, PaginationState, SortingState } from "@tanstack/react-table";

import { RootState } from "src/app/store";
import { OrderType } from "src/types";
import { findObjectById, isFilterColumnValueArray } from "src/utils/functions";

interface BuildsStateType {
    pageSize: number,
    pageIndex: number,
    sorting: SortingState,
    columnFilter: ColumnFiltersState,
}

const initialState: BuildsStateType = {
    pageSize: 10,
    pageIndex: 0,
    sorting: [
        { id: "stars", desc: false }
    ],
    columnFilter: [],
};

export const buildsSlice = createSlice({
    name: "builds",
    initialState,
    reducers: {
        resetBuildsSliceState: (state) => {
            state.pageSize = initialState.pageSize;
            state.pageIndex = initialState.pageIndex;
            state.sorting = initialState.sorting;
            state.columnFilter = initialState.columnFilter;
        },
        setBuildsPagination: (state, { payload }: PayloadAction<PaginationState>) => {
            const { pageSize, pageIndex } = payload;
            state.pageSize = pageSize;
            state.pageIndex = pageIndex;
        },
        setBuildsSorting: (state, { payload }: PayloadAction<SortingState>) => {
            state.sorting = payload;
        },
        setBuildsColumnFilter: (state, { payload }: PayloadAction<ColumnFiltersState>) => {
            state.columnFilter = payload;
        },
    },
});

export const {
    resetBuildsSliceState,
    setBuildsPagination,
    setBuildsSorting,
    setBuildsColumnFilter,
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
export const selectBuildsColumnFilter = (state: RootState) => state.builds.columnFilter;

export const selectBuildsOrder = (state: RootState) => {
    const order: OrderType = !state.builds.sorting.length ? "asc" : state.builds.sorting[0].desc ? "desc" : "asc";
    return order
};
export const selectBuildsField = (state: RootState) => {
    const field = state.builds.sorting.length ? state.builds.sorting[0].id : "stars";
    return field
};

export const selectBuildsTitleFilter = (state: RootState) => {
    const titleFilter = findObjectById(state.builds.columnFilter, "title");
    const title = titleFilter && typeof titleFilter.value === "string" ? titleFilter.value : undefined;
    return title
}

export const selectBuildsUsernameFilter = (state: RootState) => {
    const usernameFilter = findObjectById(state.builds.columnFilter, "username");
    const username = usernameFilter && typeof usernameFilter.value === "string" ? usernameFilter.value : undefined;
    return username
}

export const selectBuildsLevelFilter = createSelector(
    [selectBuildsColumnFilter],
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
    [selectBuildsColumnFilter],
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