import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ColumnDef, getCoreRowModel, getSortedRowModel, SortingState } from "@tanstack/react-table";

import { useGetBuildsOfUserQuery } from "./usersApiSlice";
import useWindowSize from "src/hooks/useWindowSize";
import sortCaseInsensitive from "src/utils/sortCaseInsensitive";
import { BuildType, UserType } from "src/types";
import Table from "src/components/Table";

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
                enableColumnFilter: false,
            },
            {
                accessorFn: row => row.level,
                id: "level",
                cell: info => info.getValue(),
                header: () => <span>Level</span>,
                enableColumnFilter: false,
            },
            {
                accessorFn: row => row.stars,
                id: "stars",
                cell: info => info.getValue(),
                header: () => <span>Stars</span>,
                enableColumnFilter: false,
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
                accessorFn: row => row.modifiedByUserAt,
                id: "modifiedByUserAt",
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

    return (
        <Table
            data={data?.builds}
            columns={columns}
            state={{ sorting }}
            onSortingChange={setSorting}
            getCoreRowModel={getCoreRowModel()}
            getSortedRowModel={getSortedRowModel()}
            isLoading={isLoading}
            isError={isError}
            isMobile={isMobile}
            className="table--userbuilds"
        />
    )
}

export default UserBuilds