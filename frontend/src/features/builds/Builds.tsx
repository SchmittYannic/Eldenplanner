import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    ColumnDef,
    ColumnFiltersState,
    functionalUpdate,
    OnChangeFn,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";

import { useGetBuildsQuery } from "./buildsApiSlice";
import {
    selectBuildsColumnFilter,
    selectBuildsField,
    selectBuildsLevelFilter,
    selectBuildsLimit,
    selectBuildsOrder,
    selectBuildsPagination,
    selectBuildsSkip,
    selectBuildsSorting,
    selectBuildsStarsFilter,
    selectBuildsTitleFilter,
    selectBuildsUsernameFilter,
    setBuildsColumnFilter,
    setBuildsPagination,
    setBuildsSorting,
} from "./buildsSlice";
import BuildsTable from "./BuildsTable";
import { BuildType } from "src/types";

const BuildsNew = () => {

    const dispatch = useDispatch();

    const limit = useSelector(selectBuildsLimit);
    const skip = useSelector(selectBuildsSkip);
    const pagination = useSelector(selectBuildsPagination);
    const OnPaginationChange: OnChangeFn<PaginationState> = (updaterFunction) => {
        const newValue = functionalUpdate(updaterFunction, pagination);
        dispatch(setBuildsPagination(newValue));
    };
    const sorting = useSelector(selectBuildsSorting);
    const onSortingChange: OnChangeFn<SortingState> = (updaterFunction) => {
        const newValue = functionalUpdate(updaterFunction, sorting);
        dispatch(setBuildsSorting(newValue));
    }
    const order = useSelector(selectBuildsOrder);
    const field = useSelector(selectBuildsField);
    const columnFilter = useSelector(selectBuildsColumnFilter);
    const onColumnFiltersChange: OnChangeFn<ColumnFiltersState> = (updaterFunction) => {
        const newValue = functionalUpdate(updaterFunction, columnFilter);
        dispatch(setBuildsColumnFilter(newValue));
    };

    const title = useSelector(selectBuildsTitleFilter);
    const username = useSelector(selectBuildsUsernameFilter);
    const { minLevel, maxLevel } = useSelector(selectBuildsLevelFilter);
    const { minStars, maxStars } = useSelector(selectBuildsStarsFilter);

    const {
        data,
        isFetching,
    } = useGetBuildsQuery({
        limit,
        skip,
        field,
        order,
        title,
        username,
        minLevel,
        maxLevel,
        minStars,
        maxStars,
    });

    const columns = useMemo<ColumnDef<BuildType, any>[]>(
        () => [
            {
                accessorFn: row => row.title,
                id: "title",
                cell: info => {
                    const buildId = info.row.original.id;
                    return (
                        <Link to={`/charplanner/${buildId}`} title="open build in charplanner">
                            {info.getValue()}
                        </Link>
                    )
                },
                header: () => <span>Title</span>,
                //sortingFn: sortCaseInsensitive,
            },
            {
                accessorFn: row => row.username,
                id: "username",
                cell: info => {
                    const authorId = info.row.original.user;
                    if (info.getValue() === null) {
                        return (
                            <>
                                Account deleted
                            </>
                        )
                    } else {
                        return (
                            <Link to={`/user/${authorId}`} title="open profile of build author">
                                {info.getValue()}
                            </Link>
                        )
                    }
                },
                header: () => <span>Author</span>,
                //sortingFn: sortCaseInsensitive,
            },
            {
                accessorFn: row => row.level,
                id: "level",
                cell: info => info.getValue(),
                header: () => <span>Level</span>,
            },
            {
                accessorFn: row => row.stars,
                id: "stars",
                cell: info => info.getValue(),
                header: () => <span>Stars</span>,
            },
            {
                accessorFn: row => row.createdAt,
                id: "createdAt",
                cell: info => {
                    const createdDate = new Date(info.getValue());
                    return createdDate.toLocaleDateString()
                },
                header: () => <span>Created</span>,
                enableColumnFilter: false,
            },
            {
                accessorFn: row => row.updatedAt,
                id: "updatedAt",
                cell: info => {
                    const createdDate = new Date(info.row.original.createdAt);
                    const modifiedDate = new Date(info.getValue());
                    const isDateEqual = createdDate.valueOf() === modifiedDate.valueOf();
                    return !isDateEqual ? modifiedDate.toLocaleDateString() : ""
                },
                header: () => <span>Modified</span>,
                enableColumnFilter: false,
            },
        ], []
    );

    return (
        <>
            {data &&
                <BuildsTable
                    cols={columns}
                    data={data.builds}
                    loading={isFetching}
                    onPaginationChange={OnPaginationChange}
                    onSortingChange={onSortingChange}
                    onColumnFiltersChange={onColumnFiltersChange}
                    totalCount={data.totalBuilds}
                    pageCount={Math.ceil(data.totalBuilds / limit)}
                    pagination={pagination}
                    sorting={sorting}
                />
            }
        </>
    )
}

export default BuildsNew