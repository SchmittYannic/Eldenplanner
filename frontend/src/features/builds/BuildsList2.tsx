import { ReactElement, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MdSwapVert, MdArrowDownward, MdArrowUpward } from "react-icons/md";
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
    //FilterFn,
    ColumnDef,
    flexRender,
} from "@tanstack/react-table";
//import { RankingInfo } from "@tanstack/match-sorter-utils";
import FuzzyFilter from "../../utils/FuzzyFilter";
import { BuildListItem } from "../../utils/Types";
import FilterTable from "../../components/FilterTable";
import useWindowSize from "../../hooks/useWindowSize";
import { capitalizeFirstLetter } from "../../utils/functions";
// declare module "@tanstack/table-core" {
//     interface FilterFns {
//         fuzzy: FilterFn<unknown>
//     }
//     interface FilterMeta {
//         itemRank: RankingInfo
//     }
// }

const BuildsList2 = ({ data }: {data: BuildListItem[]}): ReactElement => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

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
                    return <Link to={`/user/${authorId}`}>{info.getValue()}</Link>
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
                id: "created",
                cell: info => {
                    const createdDate = new Date(info.getValue());
                    return createdDate.toLocaleDateString()
                },
                header: () => <span>Created</span>,
                enableColumnFilter: false,
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
                enableColumnFilter: false,
            },
        ], []
    );

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
                                        <div key={header.id} className="table__sort">                                     
                                                <div
                                                    {...{
                                                        className: "flex",
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >                                                                                                  
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
                                                </>
                                            )}
                                        </th>
                                    )
                                })}
                            </tr>
                        ))}
                    </thead>
                }
                <tbody>
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
                </tbody>
            </table>

            <div className="divider-2" />

            <div className="table--pagination">
                <span className="table--pagination button-wrapper">
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
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <div>{table.getPrePaginationRowModel().rows.length} Builds Total</div>
            </div>

            {/* keep for debug purposes */}
            {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
            <div className="divider-4" />
        </main>
    )
    
}

export default BuildsList2