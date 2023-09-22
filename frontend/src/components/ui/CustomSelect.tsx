import { ReactElement, useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { MdClose, MdExpandMore } from "react-icons/md";
import "./CustomSelect.scss";
import "./ListElement.scss";

type SearchSelectPropsType = {
    id: string,
    value: string,
    setValue: Function,
    options: string[],
    className?: string,
    label?: string,
    enableDelete?: boolean,
    searchable?: boolean,
    disabled?: boolean
};

const CustomSelect = ({
    id,
    value: currentSelectedOption,
    setValue,
    options,
    className="CustomSelect",
    label="",
    enableDelete=false,
    searchable=false,
    disabled=false,
}: SearchSelectPropsType): ReactElement => {

    const [inputValue, setInputValue] = useState<string>(currentSelectedOption);
    const [filteredOptions, setFilteredOptions] = useState<string []>(options);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const [focusedOption, setFocusedOption] = useState(-1);
    const optionContainer = useRef<HTMLLIElement | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentInputValue = e.target.value;
        setInputValue(currentInputValue);

        const newFilteredOptions = options.filter((option) => option
        .toLowerCase().includes(currentInputValue.toLowerCase()));
        setFilteredOptions(newFilteredOptions);

        setShowOptions(true);
        setFocusedOption(-1); // set focusedOption back to -1 when input changed
    };

    const handleSelection = (idx: number) => {
        setInputValue(filteredOptions[idx]);
    }

    const handleClose = () => {
        setShowOptions(false);
        setFocusedOption(-1);
        setFilteredOptions(options);
    };

    const handleReset = () => {
        setInputValue("");
        setValue("");
    };

    const handleBlur = () => {
        /* if inputValue is an option set the selected value of the select box */
        if (options.includes(inputValue)) {
            setValue(inputValue);
        } else if (!options.includes(inputValue) && !enableDelete) {
            /* if inputValue is not an option AND you are not allowed to select nothing 
            reset the select box to its previous value */
            setInputValue(currentSelectedOption);
            setValue(currentSelectedOption);
        } else if (!options.includes(inputValue) && enableDelete && inputValue && currentSelectedOption.startsWith(inputValue)) {
            /* if inputValue is not an option AND 
            you are allowed to select nothing AND
            the inputValue is not an empty string AND
            the currentSelectedOption starts with the inputValuu THEN
            reset the select box to its previous value */
            setInputValue(currentSelectedOption);
            setValue(currentSelectedOption);
        } else {
            /* else select nothing */
            handleReset();
        }

        setTimeout(()=> handleClose(), 100); //Timeout for ripple effect to play, when Option is clicked.
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        const optionsLength = options.length;
        let nextIndexCount = 0;

        if (key === "ArrowDown") {
            nextIndexCount = (focusedOption + 1) % optionsLength;
            setFocusedOption(nextIndexCount);
        }

        if (key === "ArrowUp") {
            nextIndexCount = (focusedOption + optionsLength - 1) % optionsLength;
            setFocusedOption(nextIndexCount);
        }

        if (key === "Enter") {
            if (showOptions) {
                if (focusedOption !== -1) {
                    setInputValue(filteredOptions[focusedOption]);
                    setValue(filteredOptions[focusedOption]);
                    handleClose();
                } else {
                    handleBlur();
                }
            } else {
                setShowOptions(true);
            }
        }

        if (key === "Tab") {
            if (showOptions) {
                e.preventDefault();
                if (focusedOption !== -1) {
                    setInputValue(filteredOptions[focusedOption]);
                    handleClose();
                } else {
                    handleBlur();
                }
            }
        }
    };

    const handleClickExpandButton = () => {
        if (!showOptions) {
            const inputElement = document.getElementById(id);
            inputElement?.focus();
            setShowOptions(true);
        }
    };

    const handleButtonKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
        const { key } = e;
        if (key === "Enter") inputValue==="" ? handleClickExpandButton() : handleReset();
    };

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    useEffect(() => {
        setInputValue(currentSelectedOption);
    }, [currentSelectedOption]);

    useEffect(() => {
        if(!optionContainer.current) return;

        optionContainer.current.scrollIntoView({
            block: "center",
        });
    }, [focusedOption]);

    return (
        <div className={className}>
            <label>
                <input
                    id={id}
                    type="text"
                    placeholder=" "
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onClick={() => setShowOptions(true)}
                    onBlur={handleBlur}
                    readOnly={!searchable}
                    disabled={disabled}
                />
                <p>{label}</p>
                <button tabIndex={disabled ? -1 : 0} onKeyDown={handleButtonKeyDown} >
                    {enableDelete ? 
                        inputValue === "" ? 
                        <MdExpandMore  className="ddBtn" onClick={handleClickExpandButton} /> : 
                        <MdClose className="ddBtn" onMouseDown={handleReset} />
                    : <MdExpandMore  className="ddBtn" onClick={handleClickExpandButton} /> 
                    }
                </button>
            </label>

            {showOptions && 
                <ul className="OptionsList">
                    {filteredOptions.map((option, idx) => {
                        return(
                            <li 
                                key={idx}
                                ref={idx === focusedOption ? optionContainer : null}
                                className={idx === focusedOption ? "FocusedOption": ""}
                                onMouseDown={() => handleSelection(idx)}
                            >
                                <p className={option === currentSelectedOption ? "SelectedOption" : ""}>
                                    {option}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default CustomSelect