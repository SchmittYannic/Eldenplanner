import { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from "react";
import { MdClose, MdExpandMore } from "react-icons/md";
import OptionsList from "./OptionsList";

type PropsType = {
    id: string,
    currentSelectedOption: string,
    options: string[],
    renderOption: Function,
    label: string,
    enableDelete: boolean,
    searchable: boolean,
    onChange: Function,
    onSelect: Function
}

const CustomSelectLogic = ({
    id,
    currentSelectedOption,
    options,
    renderOption,
    label,
    enableDelete,
    searchable,
    onChange,
    onSelect
}: PropsType) => {
    const [inputValue, setInputValue] = useState(currentSelectedOption);
    const [showOptionsList, setShowOptionsList] = useState(false);
    const [focusedOption, setFocusedOption] = useState(-1);
    const optionContainer = useRef<HTMLLIElement | null>(null);
    const [newSelectedOption, setNewSelectedOption] = useState({})

    const handleSelection = (option: string) => {
        setNewSelectedOption(option)
        onSelect && onSelect(option);
    };

    const resetSelectElement = () => {
        handleSelection("");
        setInputValue("");
    };

    const handleClose = () => {
        setFocusedOption(-1);
        setShowOptionsList(false);
    };

    const handleBlur = () => {
        /* if a previous selected Option exists */
        if (currentSelectedOption) {
            /* if a new Option was selected */
            if (Object.keys(newSelectedOption).length !== 0) {
                // Do nothing
            /* else if the inputValue is not an empty string and
            the previous selected Option starts with the inputValue */
            } else if (inputValue && typeof(currentSelectedOption) === "string" && currentSelectedOption.startsWith(inputValue)) {
                /* set the InputValue and the selectedOption back to the
                previously selected Option*/
                setInputValue(currentSelectedOption);
                setNewSelectedOption(currentSelectedOption);
            } else {
                /* Reset the Select Element by sending an empty Object
                as the selected Option to the parent and setting inputValue
                back to an empty string */
                resetSelectElement();
            }
        /* if no previous selected Option exists */
        } else {
            /* if no new Option was selected */
            if (Object.keys(newSelectedOption).length === 0) {
                // Reset
                resetSelectElement();
            }
        }

        setTimeout(()=> handleClose(), 100); //Timeout for ripple effect to play, when Option is clicked.
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentInputValue = e.target.value;
        setInputValue(currentInputValue);
        setShowOptionsList(true);
        setNewSelectedOption(""); // whenever input changes there is no selected Option
        setFocusedOption(-1); // set focusedOption back to -1 when input changed
        onChange && onChange(e);
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
            if (showOptionsList) {
                if (focusedOption !== -1) {
                    handleSelection(options[focusedOption]);
                    handleClose();
                } else {
                    handleBlur();
                }
            } else {
                setShowOptionsList(true);
            }
        }

        if (key === "Tab") {
            if (showOptionsList) {
                e.preventDefault();
                if (focusedOption !== -1) {
                    handleSelection(options[focusedOption]);
                    handleClose();
                } else {
                    handleBlur();
                }
            }
        }
    };

    const handleClickExpandButton = () => {
        if (!showOptionsList) {
            const inputElement = document.getElementById(id);
            inputElement?.focus();
            setShowOptionsList(true);
        }
    };

    const handleButtonKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
        const { key } = e;
        if (key === "Enter") inputValue==="" ? handleClickExpandButton() : resetSelectElement();
    };

    useEffect(() => {
        if(!optionContainer.current) return;

        optionContainer.current.scrollIntoView({
            block: "center",
        });
    }, [focusedOption]);

    useEffect(() => {
        setInputValue(currentSelectedOption);
    }, [currentSelectedOption]);

    return (
        <>
            <label>
                <input 
                    id={id}
                    type="text"
                    placeholder=" "
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onClick={() => setShowOptionsList(true)}
                    onBlur={handleBlur}
                    readOnly={!searchable}
                />
                <p>{label}</p>
                <button tabIndex={0} onKeyDown={handleButtonKeyDown} >
                    {enableDelete ? 
                        inputValue === "" ? 
                        <MdExpandMore  className="ddBtn" onClick={handleClickExpandButton} /> : 
                        <MdClose className="ddBtn" onMouseDown={resetSelectElement} />
                    : <MdExpandMore  className="ddBtn" onClick={handleClickExpandButton} /> 
                    }
                </button>
            </label>

            {showOptionsList && 
                <OptionsList 
                    options={options} 
                    renderOption={renderOption}
                    focusedOption={focusedOption} 
                    optionContainer={optionContainer}
                    handleSelection={handleSelection} 
                />
            }
        </>
    )
}

export default CustomSelectLogic