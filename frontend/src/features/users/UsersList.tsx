import { ReactElement, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdSwapVert, MdArrowDownward, MdArrowUpward, MdEdit } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs"
import {
    ColumnDef,
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    flexRender,
} from "@tanstack/react-table";

import FuzzyFilter from "src/utils/FuzzyFilter";
import FilterTable from "src/components/FilterTable";
import useWindowSize from "src/hooks/useWindowSize";
import { capitalizeFirstLetter } from "src/utils/functions";
import sortCaseInsensitive from "src/utils/sortCaseInsensitive";
import { DebouncedInput } from "src/components/ui";
import { UserAsAdminType } from "src/types";

type UsersListPropsType = {
    data: UserAsAdminType[],
}

const UsersList = ({
    data,
}: UsersListPropsType): ReactElement => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const navigate = useNavigate();
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const onEditClick = (userId: string) => {
        navigate(`/users/${userId}/edit`);
    };

    const onDeleteClick = (userId: string) => {
        navigate(`/users/${userId}/delete`);
    };

    const columns = useMemo<ColumnDef<UserAsAdminType, any>[]>(
        () => [
            {
                accessorFn: row => row.username,
                id: "username",
                cell: info => {
                    const userId = info.row.original.id;
                    return (
                        <Link to={`/user/${userId}`} title="open profile of build author">
                            {info.getValue()}
                        </Link>
                    )
                },
                header: () => <span>Username</span>,
                sortingFn: sortCaseInsensitive,
            },
            {
                accessorFn: row => row.email,
                id: "email",
                cell: info => info.getValue(),
                header: () => <span>Email</span>,
                sortingFn: sortCaseInsensitive,
            },
            {
                accessorFn: row => row.roles,
                id: "roles",
                cell: info => info.getValue().join(", "),
                header: () => <span>Roles</span>,
                enableColumnFilter: false,
            },
            {
                accessorFn: row => row.active,
                id: "active",
                cell: info => info.getValue().toString(),
                header: () => <span>Active</span>,
                enableColumnFilter: false,
            },
            {
                accessorFn: row => row.validated,
                id: "validated",
                cell: info => info.getValue().toString(),
                header: () => <span>Validated</span>,
                enableColumnFilter: false,
            },
            {
                accessorFn: row => row.createdAt,
                id: "created",
                cell: info => {
                    const createdDate = new Date(info.getValue());
                    return createdDate.toLocaleString()
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
                    return !isDateEqual ? modifiedDate.toLocaleString() : ""
                },
                header: () => <span>Modified</span>,
            },
            {
                accessorFn: row => row.id,
                id: "edit",
                cell: info => (
                    <button
                        className="button"
                        type="button"
                        onClick={() => onEditClick(info.getValue())}
                        title="edit user"
                    >
                        <MdEdit />
                    </button>
                )
                ,
                header: () => <span>Edit</span>,
                enableColumnFilter: false,
                enableSorting: false,
            },
            {
                accessorFn: row => row.id,
                id: "delete",
                cell: info => (
                    <button
                        className="button"
                        type="button"
                        onClick={() => onDeleteClick(info.getValue())}
                        title="delete user"
                    >
                        <BsFillTrashFill />
                    </button>
                )
                ,
                header: () => <span>Delete</span>,
                enableColumnFilter: false,
                enableSorting: false,
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
            <h1>Users</h1>

            <div className="divider-2" />

            <div className="table--filter-wrapper">
                <div className="table--filter">
                    {
                        table.getHeaderGroups().map(headerGroup => headerGroup.headers.map(header => {
                            if (header.column.getCanFilter()) {
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

            <table className="table table--users">
                {!isMobile &&
                    <thead className="table__thead">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="table__row">
                                {headerGroup.headers.map(header => {
                                    const isSorted = header.column.getIsSorted();

                                    if (header.column.getCanSort()) {
                                        return (
                                            <th
                                                {...{
                                                    className: "table__th table__sort",
                                                    key: header.id,
                                                    colSpan: header.colSpan,
                                                    scope: "col",
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
                                            </th>
                                        )
                                    } else {
                                        return (
                                            <th key={header.id} colSpan={header.colSpan} scope="col" className="table__th">
                                                <div>
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                </div>
                                            </th>
                                        )
                                    }
                                })}
                            </tr>
                        ))}
                    </thead>
                }
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="table__row user">
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
                    ))}
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
                <div>{table.getPrePaginationRowModel().rows.length} Users Total</div>
            </div>

            <div className="divider-4" />
        </main>
    )
}

export default UsersList