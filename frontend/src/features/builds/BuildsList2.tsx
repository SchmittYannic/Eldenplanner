import { ReactElement, useState, useMemo, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Column,
    Table,
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
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import { DebouncedInput } from "../../components/ui";
import { useSelector } from "react-redux";
import { UserType, selectUserById } from "../users/usersApiSlice";
import { RootState } from "../../app/store";
import { BuildType, selectBuildById } from "./buildsApiSlice";
declare module "@tanstack/table-core" {
    interface FilterFns {
        fuzzy: FilterFn<unknown>
    }
    interface FilterMeta {
        itemRank: RankingInfo
    }
}

type BuildListItem = {
    buildId: number,
    authorId: string,
    level: number,
    stars: number,
    created: string,
    modified: string,
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the itemRank info
    addMeta({
        itemRank,
    })

    // Return if the item should be filtered in/out
    return itemRank.passed
};

const BuildsList2 = ({ data }: {data: BuildListItem[]}): ReactElement => {

    // const navigate = useNavigate();
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const columns = useMemo<ColumnDef<BuildListItem, any>[]>(
        () => [
            {
                accessorFn: row => row.buildId,
                id: "title",
                cell: info => {
                    const buildId = info.getValue();
                    const build = useSelector((state: RootState) => {
                        if(buildId) {
                            return selectBuildById(state, buildId) as BuildType
                        }
                        return null
                    });
                    return <Link to={`/charplanner/${buildId}`}>{build?.title}</Link>
                },
                header: () => <span>Title</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row.authorId,
                id: "author",
                cell: info => {
                    const buildAuthorId = info.getValue();
                    const buildAuthor = useSelector((state: RootState) => {
                        if(buildAuthorId) {
                            return selectUserById(state, buildAuthorId) as UserType
                        }
                        return null
                    });
                    return <Link to={`/${buildAuthorId}`}>{buildAuthor?.username}</Link>
                },
                header: () => <span>Author</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row.level,
                id: "level",
                cell: info => info.getValue(),
                header: () => <span>Level</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row.stars,
                id: "stars",
                cell: info => info.getValue(),
                header: () => <span>Stars</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row.created,
                id: "created",
                cell: info => info.getValue(),
                header: () => <span>Created</span>,
                footer: props => props.column.id,
            },
            {
                accessorFn: row => row.modified,
                id: "modified",
                cell: info => info.getValue(),
                header: () => <span>Modified</span>,
                footer: props => props.column.id,
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
            fuzzy: fuzzyFilter,
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
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan}>
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
                                                {header.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter column={header.column} table={table} />
                                                    </div>
                                                ) : null}
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
                            <tr key={row.id}>
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
                                            <td key={cell.id}>
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
            <div className="h-2" />
            <div className="flex items-center gap-2">
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"<<"}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"<"}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {">"}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    {">>"}
                </button>
                <span className="flex items-center gap-1">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span className="flex items-center gap-1">
                    | Go to page:
                    <input
                        type="number"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            table.setPageIndex(page)
                        }}
                        className="border p-1 rounded w-16"
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
            </div>
            <div>{table.getPrePaginationRowModel().rows.length} Rows</div>

            {/* keep for debug purposes */}
            {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
        </main>
    )
}

const Filter = ({column, table,}: {column: Column<any, unknown>, table: Table<any>}) => {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()
  
    const sortedUniqueValues = useMemo(
        () =>
            typeof firstValue === "number"
            ? []
            : Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]
    );
  
    return typeof firstValue === "number" ? (
        <div>
            <div className="flex space-x-2">
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={(columnFilterValue as [number, number])?.[0] ?? ""}
                    onChange={value =>
                    column.setFilterValue((old: [number, number]) => [value, old?.[1]])
                    }
                    placeholder={`Min ${
                    column.getFacetedMinMaxValues()?.[0]
                        ? `(${column.getFacetedMinMaxValues()?.[0]})`
                        : ""
                    }`}
                    className="w-24 border shadow rounded"
                />
                <DebouncedInput
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={(columnFilterValue as [number, number])?.[1] ?? ""}
                    onChange={value =>
                    column.setFilterValue((old: [number, number]) => [old?.[0], value])
                    }
                    placeholder={`Max ${
                    column.getFacetedMinMaxValues()?.[1]
                        ? `(${column.getFacetedMinMaxValues()?.[1]})`
                        : ""
                    }`}
                    className="w-24 border shadow rounded"
                />
            </div>
            <div className="h-1" />
        </div>
    ) : (
        <>
            <datalist id={column.id + "list"}>
                {sortedUniqueValues.slice(0, 5000).map((value: any) => (
                    <option value={value} key={value} />
                ))}
            </datalist>
            <DebouncedInput
                type="text"
                value={(columnFilterValue ?? "") as string}
                onChange={value => column.setFilterValue(value)}
                placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
                className="w-36 border shadow rounded"
                list={column.id + "list"}
            />
            <div className="h-1" />
        </>
    )
}

export default BuildsList2