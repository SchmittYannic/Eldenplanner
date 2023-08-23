import { ReactElement, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
    useReactTable,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getPaginationRowModel,
    getSortedRowModel,
    FilterFn,
    ColumnDef,
    flexRender,
} from "@tanstack/react-table";
import { RankingInfo } from "@tanstack/match-sorter-utils";
import FuzzyFilter from "../../utils/FuzzyFilter";
import { BuildListItem } from "../../utils/Types";
import FilterTable from "../../components/FilterTable";
declare module "@tanstack/table-core" {
    interface FilterFns {
        fuzzy: FilterFn<unknown>
    }
    interface FilterMeta {
        itemRank: RankingInfo
    }
}

const BuildsList2 = ({ data }: {data: BuildListItem[]}): ReactElement => {

    // const navigate = useNavigate();
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const columns = useMemo<ColumnDef<BuildListItem, any>[]>(
        () => [
            {
                accessorFn: row => row.title,
                id: "title",
                cell: info => {
                    const buildId = info.row.original.buildId;
                    return <Link to={`/charplanner/${buildId}`}>{info.getValue()}</Link>
                },
                header: () => <span>Title</span>,
            },
            {
                accessorFn: row => row.author,
                id: "author",
                cell: info => {
                    const authorId = info.row.original.authorId;
                    return <Link to={`/${authorId}`}>{info.getValue()}</Link>
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
                accessorFn: row => row.created,
                id: "created",
                cell: info => info.getValue(),
                header: () => <span>Created</span>,
                enableColumnFilter: false,
            },
            {
                accessorFn: row => row.modified,
                id: "modified",
                cell: info => info.getValue(),
                header: () => <span>Modified</span>,
                enableColumnFilter: false,
            },
        ], []
    );

    // const onRowClicked = (e: MouseEvent<HTMLTableRowElement>, buildId: number) => {
    //     const target = e.target as Element
    //     const isAuthorCell = target.firstElementChild?.tagName === "A" || target.tagName === "A";
    //     if (isAuthorCell) return
    //     navigate(`/${buildId}`)
    // };

    // const onAuthorCellClicked = (e: MouseEvent<HTMLTableCellElement>) => {

    // };

    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: FuzzyFilter,
        },
        state: {
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        debugTable: false,
        debugHeaders: false,
        debugColumns: false,
    });

    return (
        <main>
            <h1>Builds</h1>
            <div className="divider-2" />
            <div className="table--filter-wrapper">
                <div className="table--filter">
                    {
                        table.getHeaderGroups().map(headerGroup => headerGroup.headers.map(header => {
                            if(header.column.getCanFilter()) {
                                return (
                                    <FilterTable key={`filter` + header.column.id} column={header.column} table={table} />
                                )
                            }
                        }))
                    }
                </div>
                <div className="divider-2" />
            </div>
            <table className="table table--builds">
                <thead className="table__thead">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="table__row">
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} scope="col" className="table__th">
                                        {header.isPlaceholder ? null : (
                                            <>
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                            ? "cursor-pointer select-none"
                                                            : "",
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {{
                                                        asc: " 🔼",
                                                        desc: " 🔽",
                                                    }[header.column.getIsSorted() as string] ?? null}
                                                </div>
                                                {/* {header.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter column={header.column} table={table} />
                                                    </div>
                                                ) : null} */}
                                            </>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => {

                        //const buildId: number = row.getValue("title");
                        // onClick={(e) => onRowClicked(e, buildId)}
                        return (
                            <tr key={row.id} className="table__row build">
                                {row.getVisibleCells().map(cell => {
                                    // const isAuthorColumn = cell.column.id === "author";
                                    
                                    // if (isAuthorColumn) {
                                    //     return (
                                    //         <td key={cell.id} onClick={(e) => onAuthorCellClicked(e)}>
                                    //             {flexRender(
                                    //                 cell.column.columnDef.cell,
                                    //                 cell.getContext()
                                    //             )}
                                    //         </td>
                                    //     )
                                    // } else {
                                        return (
                                            <td key={cell.id} className={`table__cell ${cell.column.id}`}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    //}
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="divider-2" />
            <div className="table--pagination">
                <button
                    className="button"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"<<"}
                </button>
                <button
                    className="button"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"Previous"}
                </button>
                <button
                    className="button"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {"Next"}
                </button>
                <button
                    className="button"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    {">>"}
                </button>
                <span>
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span>
                    | Go to page:
                    <input
                        type="number"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            table.setPageIndex(page)
                        }}
                    />
                </span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[2, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <div>{table.getPrePaginationRowModel().rows.length} Builds Total</div>
            </div>

            {/* keep for debug purposes */}
            {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
        </main>
    )
}

export default BuildsList2