import { ReactElement, useMemo } from "react";
import { Column, Table } from "@tanstack/react-table";
import { DebouncedInput } from "./ui";

type PropsType = {
    column: Column<any, unknown>,
    table: Table<any>,
}

const FilterTable = ({column, table,}: PropsType): ReactElement => {
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
            <div className="table--filter-number-wrapper">
                <label htmlFor={column.id + "filterMin"} className="sr-only">
                    {`filter column ${column.id} minimum`}
                </label>
                <DebouncedInput
                    id={column.id + "filterMin"}
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={(columnFilterValue as [number, number])?.[0] ?? ""}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [value, old?.[1]])
                    }
                    placeholder={`Min ${column.id} ${
                    column.getFacetedMinMaxValues()?.[0]
                        ? `(${column.getFacetedMinMaxValues()?.[0]})`
                        : ""
                    }`}
                    className="table--filter-number"
                    title={`Filter by minimum ${column.id}`}
                />
                <label htmlFor={column.id + "filterMax"} className="sr-only">
                    {`filter column ${column.id} maximum`}
                </label>
                <DebouncedInput
                    id={column.id + "filterMax"}
                    type="number"
                    min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
                    max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
                    value={(columnFilterValue as [number, number])?.[1] ?? ""}
                    onChange={value =>
                        column.setFilterValue((old: [number, number]) => [old?.[0], value])
                    }
                    placeholder={`Max ${column.id} ${
                            column.getFacetedMinMaxValues()?.[1]
                                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                                : ""
                        }`}
                    className="table--filter-number"
                    title={`Filter by maximum ${column.id}`}
                />
            </div>
        </div>
    ) : (
        <>
            <datalist id={column.id + "list"}>
                {sortedUniqueValues.slice(0, 5000).map((value: any) => (
                    <option value={value} key={value} />
                ))}
            </datalist>
            <label htmlFor={column.id + "filter"} className="sr-only">
                {`filter Column ${column.id}`}
            </label>
            <DebouncedInput
                id={column.id + "filter"}
                type="text"
                value={(columnFilterValue ?? "") as string}
                onChange={value => column.setFilterValue(value)}
                placeholder={`Filter ${column.id} (${column.getFacetedUniqueValues().size})`}
                className={`table--filter-text ${column.id}`}
                list={column.id + "list"}
                title={`Filter column: ${column.id}`}
            />
        </>
    )
}

export default FilterTable