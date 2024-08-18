import { ReactElement } from "react";
import { Column, Table } from "@tanstack/react-table";
import { DebouncedInput } from "./ui";

type PropsType = {
    column: Column<any, unknown>,
    table: Table<any>,
}

const FilterTable = ({ column, table, }: PropsType): ReactElement => {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    return typeof firstValue === "number" ? (
        <div className="table--filter--slot">
            <div className="table--filter-number-wrapper">
                <label htmlFor={column.id + "filterMin"} className="sr-only">
                    {`filter column ${column.id} minimum`}
                </label>
                <DebouncedInput
                    id={column.id + "filterMin"}
                    type="number"
                    min={0}
                    value={(columnFilterValue as [number, number])?.[0] ?? ""}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [value, old?.[1]])
                    }
                    placeholder={`Min ${column.id}`}
                    className="table--filter-number"
                    title={`Filter by minimum ${column.id}`}
                />
                <label htmlFor={column.id + "filterMax"} className="sr-only">
                    {`filter column ${column.id} maximum`}
                </label>
                <DebouncedInput
                    id={column.id + "filterMax"}
                    type="number"
                    min={0}
                    value={(columnFilterValue as [number, number])?.[1] ?? ""}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [old?.[0], value])
                    }
                    placeholder={`Max ${column.id}`}
                    className="table--filter-number"
                    title={`Filter by maximum ${column.id}`}
                />
            </div>
        </div>
    ) : (
        <div className="table--filter--slot">
            <label htmlFor={column.id + "filter"} className="sr-only">
                {`filter Column ${column.id}`}
            </label>
            <DebouncedInput
                id={column.id + "filter"}
                type="text"
                value={(columnFilterValue ?? "") as string}
                onChange={value => column.setFilterValue(value)}
                placeholder={`Filter ${column.id}`}
                className={`table--filter-text ${column.id}`}
                title={`Filter column: ${column.id}`}
            />
        </div>
    )
}

export default FilterTable