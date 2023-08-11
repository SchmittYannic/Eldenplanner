import { useState, useEffect, ChangeEvent } from "react";
import CustomSelectLogic from "./CustomSelectLogic";
import "./CustomSelect.scss";

type PropsType = {
    id: string,
    selectedOption: string,
    setSelectedOption: React.Dispatch<React.SetStateAction<string>> | Function,
    options: string[],
    renderOption: Function,
    classes: string,
    label: string,
    enableDelete?: boolean,
    searchable?: boolean
}

const CustomSelect = ({ 
    id,
    selectedOption, 
    setSelectedOption, 
    options, 
    renderOption, 
    classes="", 
    label="", 
    enableDelete=false, 
    searchable=false
}: PropsType) => {
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        const filteredOptions = options.filter((option) => option
        .toLowerCase().includes(target.value.toLowerCase()));

        setFilteredOptions(filteredOptions);
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setFilteredOptions(options);
    }

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    return (
        <form 
            className={classes === "" ? "CustomSelect" : classes}
            onSubmit={(e) => e.preventDefault()}
        >
            <CustomSelectLogic 
                id={id}
                currentSelectedOption={selectedOption}
                options={filteredOptions}
                renderOption={renderOption}
                label={label}
                enableDelete={enableDelete}
                searchable={searchable}
                onChange={handleChange}
                onSelect={(option: string) => handleSelect(option)}
            />
        </form>
    )
}

export default CustomSelect