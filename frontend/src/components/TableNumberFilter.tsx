import { useState } from "react";
import { Column } from "@tanstack/react-table";
import { DebouncedInput } from "./ui";

type TableNumberFilterPropsType = {
    column: Column<any, unknown>,
}

const TableNumberFilter = ({ column }: TableNumberFilterPropsType) => {

    const columnFilterValue = column.getFilterValue();
    const initialMinState = Array.isArray(columnFilterValue) ? columnFilterValue[0] : "";
    const initialMaxState = Array.isArray(columnFilterValue) ? columnFilterValue[1] : "";
    const [minValue, setMinValue] = useState(String(initialMinState));
    const [maxValue, setMaxValue] = useState(String(initialMaxState));

    const handleMinValueChange = (value: string | number) => {
        const newMinValue = value === "" ? "0" : value;
        const newMaxValue = maxValue === "" ? null : maxValue;

        column.setFilterValue([newMinValue, newMaxValue]);
        setMinValue(String(value));
    };

    const handleMaxValueChange = (value: string | number) => {
        const newMinValue = minValue === "" ? "0" : minValue;
        const newMaxValue = value === "" ? null : value;

        column.setFilterValue([newMinValue, newMaxValue]);
        setMaxValue(String(value));
    };

    return (
        <div className="table--filter--slot">
            <div className="table--filter-number-wrapper">
                <label htmlFor={column.id + "filterMin"} className="sr-only">
                    {`filter column ${column.id} minimum`}
                </label>
                <DebouncedInput
                    id={column.id + "filterMin"}
                    type="number"
                    min={0}
                    value={minValue}
                    onChange={handleMinValueChange}
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
                    value={maxValue}
                    onChange={handleMaxValueChange}
                    placeholder={`Max ${column.id}`}
                    className="table--filter-number"
                    title={`Filter by maximum ${column.id}`}
                />
            </div>
        </div>
    )
};

export default TableNumberFilter