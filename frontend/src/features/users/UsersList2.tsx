import { ReactElement, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    FilterFn,
    flexRender,
} from "@tanstack/react-table";
import { RankingInfo } from "@tanstack/match-sorter-utils";
import { UserAsAdminType } from "./usersAsAdminApiSlice";
import FuzzyFilter from "../../utils/FuzzyFilter";
declare module "@tanstack/table-core" {
    interface FilterFns {
        fuzzy: FilterFn<unknown>
    }
    interface FilterMeta {
        itemRank: RankingInfo
    }
}

const UsersList2 = ({ data }: {data: UserAsAdminType[]}): ReactElement => {
    
    const navigate = useNavigate();
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const onEditClick = (userId: string) => {
        navigate(`/users/${userId}`);
    };

    const columns = useMemo<ColumnDef<UserAsAdminType, any>[]>(
        () => [
            {
                accessorFn: row => row.username,
                id: "username",
                cell: info => {
                    const userId = info.row.original.id;
                    return <Link to={`/${userId}`}>{info.getValue()}</Link>
                },
                header: () => <span>Username</span>,
            },
            {
                accessorFn: row => row.email,
                id: "email",
                cell: info => info.getValue(),
                header: () => <span>Email</span>,
            },
            {
                accessorFn: row => row.roles,
                id: "roles",
                cell: info => info.getValue().join(", "),
                header: () => <span>Roles</span>,
            },
            {
                accessorFn: row => row.active,
                id: "active",
                cell: info => info.getValue().toString(),
                header: () => <span>Active</span>,
            },
            {
                accessorFn: row => row.validated,
                id: "validated",
                cell: info => info.getValue().toString(),
                header: () => <span>Validated</span>,
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
                        onClick={() => onEditClick(info.getValue())}
                    >
                        EDIT
                    </button>
                )  
                ,
                header: () => <span>Edit</span>,
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
            <table className="table table--users">
                <thead className="table__thead">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="table__row">
                            {headerGroup.headers.map(header => (
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
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="table__row user">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className={`table__cell ${cell.column.id}`}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default UsersList2