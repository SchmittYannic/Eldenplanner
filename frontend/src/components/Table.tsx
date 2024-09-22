import { ColumnDef, flexRender, TableOptions, useReactTable } from "@tanstack/react-table"
import TableNumberFilter from "./TableNumberFilter"
import TableTextFilter from "./TableTextFilter"
import { MdArrowDownward, MdArrowUpward, MdSwapVert } from "./icons"
import { DebouncedInput } from "./ui"
import { capitalizeFirstLetter } from "src/utils/functions"


type TablePropsType<T> = Omit<TableOptions<T>, "data" | "columns"> & {
    data?: T[],
    columns: ColumnDef<T>[],
    isMobile: boolean | 0 | undefined,
    isLoading?: boolean,
    isError?: boolean,
    numberColumns?: string[],
    totalCount?: number,
    className?: string,
};

const Table = <T,>({
    data = [],
    columns,
    isMobile,
    isLoading = false,
    isError = false,
    numberColumns = [],
    totalCount,
    className,
    ...tableOptions
}: TablePropsType<T>) => {

    const table = useReactTable({
        data,
        columns,
        ...tableOptions,
    });

    return (
        <>
            {table.getAllColumns().some((column) => column.getCanFilter()) &&
                <div className="table--filter-wrapper">
                    <div className="table--filter">
                        {
                            table.getHeaderGroups().map(headerGroup => headerGroup.headers.map(header => {
                                if (header.column.getCanFilter()) {
                                    if (numberColumns.includes(header.column.id)) {
                                        return (
                                            <TableNumberFilter
                                                key={`filter` + header.column.id}
                                                column={header.column}
                                            />
                                        )
                                    } else {
                                        return (
                                            <TableTextFilter
                                                key={`filter` + header.column.id}
                                                column={header.column}
                                            />
                                        )
                                    }
                                }
                            }))
                        }
                    </div>
                    <div className="divider-2" />
                </div>
            }

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

            <table className={`table ${className}`}>
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
                    {(isLoading || isError || (!data || data?.length === 0)) ?
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

            <>
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
                    <div>{totalCount ? totalCount : table.getPrePaginationRowModel().rows.length} Entries Total</div>
                </div>
            </>


            {/* keep for debug purposes */}
            {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
            <div className="divider-4" />
        </>
    )
}

export default Table