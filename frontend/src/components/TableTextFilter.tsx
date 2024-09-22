import { useEffect, useState } from "react";
import { Column } from "@tanstack/react-table";
import { DebouncedInput } from "./ui";

type TableTextFilterPropsType = {
    column: Column<any, unknown>,
    initialInputValue: string,
}

const TableTextFilter = ({
    column,
    initialInputValue,
}: TableTextFilterPropsType) => {

    const [inputValue, setInputValue] = useState(initialInputValue);

    useEffect(() => {
        setInputValue(initialInputValue);
    }, [initialInputValue]);

    return (
        <div className="table--filter--slot">
            <label htmlFor={column.id + "filter"} className="sr-only">
                {`filter Column ${column.id}`}
            </label>
            <DebouncedInput
                id={column.id + "filter"}
                type="text"
                value={inputValue}
                onChange={(value) => {
                    column.setFilterValue(value);
                    setInputValue(String(value));
                }}
                placeholder={`Filter ${column.id}`}
                className={`table--filter-text ${column.id}`}
                title={`Filter column: ${column.id}`}
            />
        </div>
    )
};

export default TableTextFilter