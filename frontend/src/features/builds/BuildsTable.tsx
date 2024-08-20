import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, OnChangeFn, PaginationState, SortingState, useReactTable } from "@tanstack/react-table";

import useWindowSize from "src/hooks/useWindowSize";
import FilterTable from "src/components/FilterTable";
import { DebouncedInput } from "src/components/ui";
import { MdSwapVert, MdArrowDownward, MdArrowUpward } from "src/components/icons";
import { BuildType } from "src/types";
import { capitalizeFirstLetter } from "src/utils/functions";

type BuildsTablePropsType = {
    cols: ColumnDef<BuildType>[],
    data?: BuildType[],
    loading: boolean,
    error: boolean,
    onPaginationChange: OnChangeFn<PaginationState>,
    onSortingChange: OnChangeFn<SortingState>,
    onColumnFiltersChange: OnChangeFn<ColumnFiltersState>
    totalCount: number,
    pageCount: number,
    pagination: {
        pageSize: number,
        pageIndex: number,
    },
    sorting: SortingState,
}

const BuildsTable = ({
    cols,
    data,
    loading,
    error,
    onPaginationChange,
    onSortingChange,
    onColumnFiltersChange,
    totalCount,
    pageCount,
    pagination,
    sorting,
}: BuildsTablePropsType) => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const table = useReactTable({
        data: data ? data : [],
        columns: cols,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        onPaginationChange,
        onSortingChange,
        onColumnFiltersChange,
        state: { pagination, sorting },
        pageCount,
    });

    return (
        <main>
            <h1>Builds</h1>

            <div className="divider-2" />

            <div className="table--filter-wrapper">
                <div className="table--filter">
                    {
                        table.getHeaderGroups().map(headerGroup => headerGroup.headers.map(header => {
                            if (header.column.getCanFilter()) {
                                return (
                                    <FilterTable
                                        key={`filter` + header.column.id}
                                        column={header.column}
                                        table={table}
                                    />
                                )
                            }
                        }))
                    }
                </div>
                <div className="divider-2" />
            </div>

            {isMobile &&
                <>
                    <div className="divider-4" />

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

            <table className="table table--builds">
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
                                                onClick: loading ? () => { } : header.column.getToggleSortingHandler(),
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
                    {loading ?
                        <tr className="table--placeholder">
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
                        </tr>
                        : error
                            ?
                            <tr className="table--placeholder">
                                <td className="sm-alert errmsg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>Error fetching builds</span>
                                </td>
                            </tr>
                            : !data || data?.length === 0
                                ?
                                <tr className="table--placeholder">
                                    <td>No Builds found</td>
                                </tr>
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
                <div>{totalCount} Builds Total</div>
            </div>

            {/* keep for debug purposes */}
            {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
            <div className="divider-4" />
        </main>
    )
}

export default BuildsTable