import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";

import { useGetBuildsOfUserQuery } from "./usersApiSlice";
import useWindowSize from "src/hooks/useWindowSize";
import { DebouncedInput } from "src/components/ui";
import { MdSwapVert, MdArrowDownward, MdArrowUpward } from "src/components/icons";
import sortCaseInsensitive from "src/utils/sortCaseInsensitive";
import { BuildType, UserType } from "src/types";
import { capitalizeFirstLetter } from "src/utils/functions"

type UserBuildsPropsType = {
    author: UserType
}

const UserBuilds = ({
    author
}: UserBuildsPropsType) => {

    const {
        data,
        isLoading,
        isError,
    } = useGetBuildsOfUserQuery({
        id: author.id
    })

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [sorting, setSorting] = useState<SortingState>([]);

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
                sortingFn: sortCaseInsensitive,
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
                id: "created",
                cell: info => {
                    const createdDate = new Date(info.getValue());
                    return createdDate.toLocaleDateString()
                },
                header: () => <span>Created</span>,
            },
            {
                accessorFn: row => row.updatedAt,
                id: "modified",
                cell: info => {
                    const createdDate = new Date(info.row.original.createdAt);
                    const modifiedDate = new Date(info.getValue());
                    const isDateEqual = createdDate.valueOf() === modifiedDate.valueOf();
                    return !isDateEqual ? modifiedDate.toLocaleDateString() : ""
                },
                header: () => <span>Modified</span>,
            },
        ], []
    );

    const table = useReactTable({
        data: data ? data.builds : [],
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        debugTable: false,
        debugHeaders: false,
        debugColumns: false,
    });

    return (
        <>
            {isMobile &&
                <>
                    <h3>Sort By Column</h3>

                    <div className="divider-2" />

                    <div className="table--sort-wrapper">
                        {table.getHeaderGroups().map(headerGroup => (
                            headerGroup.headers.map(header => {
                                if (header.column.getCanSort()) {
                                    const isSorted = header.column.getIsSorted();
                                    return (
                                        <div
                                            {...{
                                                key: header.id,
                                                className: "table__sort",
                                                onClick: header.column.getToggleSortingHandler(),
                                                title: `sort by ${header.id} column`,
                                            }}
                                        >
                                            <div className="flex">
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {!isSorted && (
                                                    <span className="swap-vert">
                                                        <MdSwapVert />
                                                    </span>
                                                )}
                                                {isSorted === "desc" && (
                                                    <span className="arrow-downward">
                                                        <MdArrowDownward />
                                                    </span>
                                                )}
                                                {isSorted === "asc" && (
                                                    <span className="arrow-upward">
                                                        <MdArrowUpward />
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        ))}
                    </div>

                    <div className="divider-4" />
                    <div className="divider-4" />
                </>
            }
            <table className="table table--userbuilds">
                {!isMobile &&
                    <thead className="table__thead">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="table__row">
                                {headerGroup.headers.map(header => {
                                    const isSorted = header.column.getIsSorted();
                                    return (
                                        <th
                                            {...{
                                                className: "table__th table__sort",
                                                key: header.id,
                                                colSpan: header.colSpan,
                                                scope: "col",
                                                onClick: isLoading ? () => { } : header.column.getToggleSortingHandler(),
                                                title: `sort by ${header.id} column`,
                                            }}
                                        >
                                            <div className="flex">
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {!isSorted && (
                                                    <span className="swap-vert">
                                                        <MdSwapVert />
                                                    </span>
                                                )}
                                                {isSorted === "desc" && (
                                                    <span className="arrow-downward">
                                                        <MdArrowDownward />
                                                    </span>
                                                )}
                                                {isSorted === "asc" && (
                                                    <span className="arrow-upward">
                                                        <MdArrowUpward />
                                                    </span>
                                                )}
                                            </div>
                                        </th>
                                    )
                                })}
                            </tr>
                        ))}
                    </thead>
                }
                <tbody>
                    {(isLoading || isError || (!data || data?.builds?.length === 0)) ?
                        <>
                            {!isMobile && Array(table.getState().pagination.pageSize).fill(null).map((_el, idx) => (
                                <tr
                                    key={idx}
                                    className="table__row build"
                                >
                                    {columns.map((_el, idx) => (
                                        <td
                                            key={idx}
                                            className={`table__cell`}
                                        >
                                            <p className={`paragraph-skeleton${isLoading ? " animated" : ""}`}>
                                            </p>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {!isMobile && !isLoading &&
                                <tr className="table__errmsg">
                                    {isError ?
                                        <td className="sm-alert errmsg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Error fetching builds</span>
                                        </td>
                                        :
                                        <td className="sm-alert bg-color">
                                            <span>No Builds found</span>
                                        </td>
                                    }
                                </tr>
                            }
                            {isMobile &&
                                <tr className="table--placeholder">
                                    {isLoading ?
                                        <td
                                            className="cliploader"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                            }}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        >
                                            <div
                                                className="cliploader-section"
                                                style={{
                                                    borderTopColor: "rgb(231, 214, 182)",
                                                    borderLeftColor: "rgb(231, 214, 182)",
                                                    borderBottomColor: "rgb(231, 214, 182)",
                                                    animationDuration: "1.5s",
                                                }}
                                            />
                                        </td>
                                        :
                                        isError ?
                                            <td className="sm-alert errmsg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span>Error fetching builds</span>
                                            </td>
                                            :
                                            <td className="sm-alert bg-color">
                                                <span>No Builds found</span>
                                            </td>
                                    }
                                </tr>
                            }
                        </>
                        :
                        <>
                            {table.getRowModel().rows.map(row => {
                                return (
                                    <tr key={row.id} className="table__row build">
                                        {row.getVisibleCells().map(cell => {
                                            if (isMobile) {
                                                const header = capitalizeFirstLetter(cell.column.id);

                                                return (
                                                    <td key={cell.id} className={`table__cell ${cell.column.id}`}>
                                                        <div className="table__cell__head">
                                                            {header}:
                                                        </div>
                                                        <div className="table__cell__body">
                                                            {flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )}
                                                        </div>
                                                    </td>
                                                )
                                            } else {
                                                return (
                                                    <td key={cell.id} className={`table__cell ${cell.column.id}`}>
                                                        {flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                        )}
                                                    </td>
                                                )
                                            }
                                        })}
                                    </tr>
                                )
                            })}
                        </>
                    }
                </tbody>
            </table>

            <div className="divider-2" />

            <div className="table--pagination">
                <span className="table--pagination button-wrapper">
                    <button
                        className="button"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                        title="first page"
                    >
                        {"<<"}
                    </button>
                    <button
                        className="button"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        title="previous page"
                    >
                        {"Previous"}
                    </button>
                    <button
                        className="button"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        title="next page"
                    >
                        {"Next"}
                    </button>
                    <button
                        className="button"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                        title="last page"
                    >
                        {">>"}
                    </button>
                </span>
                <span>
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span>
                    | Go to page:
                    <DebouncedInput
                        className="input__number"
                        type="number"
                        value={table.getState().pagination.pageIndex + 1}
                        onChange={value => {
                            const page = value ? Number(value) - 1 : 0
                            table.setPageIndex(page)
                        }}
                        title="go to page"
                    />
                </span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                    title="max number of entries per page"
                >
                    {[5, 10, 15, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <div>{table.getPrePaginationRowModel().rows.length} Builds Total</div>
            </div>

            <div className="divider-4" />
        </>
    )
}

export default UserBuilds