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
} from "@tanstack/react-table";

import FuzzyFilter from "src/utils/FuzzyFilter";
import useWindowSize from "src/hooks/useWindowSize";
import Table from "src/components/Table";
import sortCaseInsensitive from "src/utils/sortCaseInsensitive";
import {
    MdEdit,
    BsFillTrashFill,
} from "src/components/icons";
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
                        <Link
                            className="link"
                            to={`/user/${userId}`}
                            title="open profile of build author"
                        >
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

    return (
        <main>
            <h1>Users</h1>

            <div className="divider-2" />

            <Table
                data={data}
                columns={columns}
                filterFns={{ fuzzy: FuzzyFilter }}
                state={{ columnFilters }}
                onColumnFiltersChange={setColumnFilters}
                getCoreRowModel={getCoreRowModel()}
                getFilteredRowModel={getFilteredRowModel()}
                getSortedRowModel={getSortedRowModel()}
                getPaginationRowModel={getPaginationRowModel()}
                getFacetedRowModel={getFacetedRowModel()}
                getFacetedUniqueValues={getFacetedUniqueValues()}
                getFacetedMinMaxValues={getFacetedMinMaxValues()}
                isMobile={isMobile}
                className="table--users"
            />
        </main>
    )
}

export default UsersList