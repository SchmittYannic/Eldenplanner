import { useEffect, useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    ColumnDef,
    ColumnFiltersState,
    functionalUpdate,
    getCoreRowModel,
    OnChangeFn,
    PaginationState,
    SortingState,
} from "@tanstack/react-table";

import { useGetBuildsQuery } from "./buildsApiSlice";
import {
    resetBuildsSliceState,
    selectBuildsAuthorFilter,
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
    setBuildsColumnFilter,
    setBuildsPagination,
    setBuildsSorting,
} from "./buildsSlice";
import useWindowSize from "src/hooks/useWindowSize";
import Table from "src/components/Table";
import { BuildType } from "src/types";


const BuildsTable = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const limit = useSelector(selectBuildsLimit);
    const skip = useSelector(selectBuildsSkip);
    const pagination = useSelector(selectBuildsPagination);
    const onPaginationChange: OnChangeFn<PaginationState> = (updaterFunction) => {
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
    const author = useSelector(selectBuildsAuthorFilter);
    const { minLevel, maxLevel } = useSelector(selectBuildsLevelFilter);
    const { minStars, maxStars } = useSelector(selectBuildsStarsFilter);

    const {
        data,
        isFetching,
        isError,
    } = useGetBuildsQuery({
        limit,
        skip,
        field,
        order,
        title,
        author,
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
                        <Link
                            className="link"
                            to={`/charplanner/${buildId}`}
                            title="open build in charplanner"
                        >
                            {info.getValue()}
                        </Link>
                    )
                },
                header: () => <span>Title</span>,
            },
            {
                accessorFn: row => row.author,
                id: "author",
                cell: info => {
                    const authorId = info.row.original.authorId;
                    if (info.getValue() === null) {
                        return (
                            <>
                                Account deleted
                            </>
                        )
                    } else {
                        return (
                            <Link
                                className="link"
                                to={`/user/${authorId}`}
                                title="open profile of build author"
                            >
                                {info.getValue()}
                            </Link>
                        )
                    }
                },
                header: () => <span>Author</span>,
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

    useEffect(() => {
        return () => {
            dispatch(resetBuildsSliceState());
        }
    }, []);

    useEffect(() => {
        // Create a copy of the current search params
        const newSearchParams = new URLSearchParams(searchParams);

        // Update the search params
        newSearchParams.set("limit", String(limit));
        newSearchParams.set("skip", String(skip));
        newSearchParams.set("field", field);
        newSearchParams.set("order", order);
        if (title) {
            newSearchParams.set("title", title);
        }
        if (author) {
            newSearchParams.set("author", author);
        }
        newSearchParams.set("minLevel", minLevel);
        if (maxLevel) {
            newSearchParams.set("maxLevel", maxLevel);
        }
        newSearchParams.set("minStars", minStars);
        if (maxStars) {
            newSearchParams.set("maxStars", maxStars);
        }

        navigate(`?${newSearchParams.toString()}`, { replace: true });
    }, [
        limit,
        skip,
        field,
        order,
        title,
        author,
        minLevel,
        maxLevel,
        minStars,
        maxStars,
    ])

    return (
        <main>
            <h1>Builds</h1>

            <div className="divider-2" />

            <Table
                data={data?.builds}
                columns={columns}
                getCoreRowModel={getCoreRowModel()}
                manualPagination={true}
                manualSorting={true}
                manualFiltering={true}
                onPaginationChange={onPaginationChange}
                onSortingChange={onSortingChange}
                onColumnFiltersChange={onColumnFiltersChange}
                state={{ pagination, sorting }}
                totalCount={data ? data.totalBuilds : 0}
                pageCount={data ? Math.ceil(data.totalBuilds / limit) : 0}
                isLoading={isFetching}
                isError={isError}
                isMobile={isMobile}
                numberColumns={["level", "stars"]}
                className={"table--builds"}
            />
        </main>
    )
}

export default BuildsTable