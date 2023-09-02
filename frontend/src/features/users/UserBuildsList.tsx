import { ReactElement, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    useReactTable,
    ColumnDef,
    SortingState,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
} from "@tanstack/react-table";
import { BuildListItem } from "../../utils/Types";
import useWindowSize from "../../hooks/useWindowSize";
import { capitalizeFirstLetter } from "../../utils/functions";

type PropsType = {
    data: BuildListItem[],
}

const UserBuildsList = ({ data }: PropsType): ReactElement => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [sorting, setSorting] = useState<SortingState>([]);

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
        data,
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
        <table className="table table--userbuilds">
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
    )
}

export default UserBuildsList