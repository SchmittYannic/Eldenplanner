import { ReactElement, KeyboardEvent, useRef, useState, FocusEvent } from "react";
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
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isNothingSelected = initialValue.length === 0;
    const initialValueString = initialValue.join(", ");

    const displayText = isNothingSelected 
        ? placeholder 
        : initialValueString.length > 20 
            ? `${initialValue.length} items selected` 
            : initialValueString;

    const onLabelClicked = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            setIsOpen(!isOpen);
        }
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

    const onInputFocus = () => {
        setIsFocused(true);
    };

    const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (!containerRef.current?.contains(e.relatedTarget)) {
            setIsFocused(false);
            setIsOpen(false);
        }
    };

    const onInputKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;

        if (key === "Enter") {
            e.preventDefault();
            if (!isOpen) setIsOpen(true);
        }
    };

    return (
        <div ref={containerRef} className={`multiselect`}>
            <label className="multiselect-label">
                {label}
                <input
                    ref={inputRef}
                    className="sr-only"
                    type="text"
                    tabIndex={0}
                    role="listbox"
                    aria-expanded={isOpen}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    onKeyDown={onInputKeydown}
                    readOnly
                />
            </label>

            <div className="divider-1" />
                     
            <div className={`multiselect-trigger-container ${isFocused ? "focused" : ""}`} onClick={onLabelClicked}>
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
                                onBlur={onInputBlur}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MultiSelect