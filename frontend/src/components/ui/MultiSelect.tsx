import { ReactElement, useState } from "react";
import { Checkbox } from ".";
import "./MultiSelect.scss";

type PropsType = {
    value: (string | number)[],
    onChange: Function,
    optionsList: (string | number)[],
    placeholder?: string,
    label?: string,
};

const MultiSelect = ({ value: initialValue, onChange, optionsList, placeholder="Select an Option", label="" }: PropsType): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    const isNothingSelected = initialValue.length === 0;
    const initialValueString = initialValue.join(", ");

    const displayText = isNothingSelected 
        ? placeholder 
        : initialValueString.length > 20 
            ? `${initialValue.length} items selected` 
            : initialValueString;

    const onLabelClicked = () => {
        setIsOpen(!isOpen);
    };

    const onSelectOption = (checked: boolean, option: (string | number)) => {
        if (checked) {
            const copyArray = [...initialValue];
            copyArray.push(option);
            onChange(copyArray);
        } else {
            const copyArray = [...initialValue];
            const index = copyArray.indexOf(option);
            if (index > -1) {
                copyArray.splice(index, 1);
            }
            onChange(copyArray);
        }
    };

    return (
        <div className="multiselect">
            <label className="multiselect-label">
                {label}
                <input className="sr-only" type="text" tabIndex={0} role="listbox" aria-expanded={isOpen} readOnly />
            </label>

            <div className="divider-1" />
                     
            <div className="multiselect-trigger-container" onClick={onLabelClicked}>
                <p className={`multiselect-triggertext ${isNothingSelected ? "placeholder" : ""}`}>
                    {displayText}
                </p>
            </div>

            {isOpen && (
                <ul className="multiselect-optionslist">
                    {optionsList.map((option, idx) => (
                        <li key={idx} onClick={() => onSelectOption(!initialValue.includes(option), option)}>
                            <Checkbox
                                label={option}
                                checked={initialValue.includes(option)}
                                setChecked={(checked: boolean) => onSelectOption(checked, option)} 
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MultiSelect