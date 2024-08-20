import { ReactElement, useState, useRef, useEffect, ChangeEvent, KeyboardEvent, MutableRefObject } from "react";
import { MdClose, MdExpandMore } from "src/components/icons";
import "./CustomSelect.scss";

type SearchSelectPropsType = {
    id: string,
    value: string,
    setValue: Function,
    options: string[],
    className?: string,
    label?: string,
    enableDelete?: boolean,
    searchable?: boolean,
    disabled?: boolean,
    optionScrollInView?: boolean,
    title?: string,
};

const CustomSelect = ({
    id,
    value: currentSelectedOption,
    setValue,
    options,
    className = "customselect",
    label = "",
    enableDelete = false,
    searchable = false,
    disabled = false,
    optionScrollInView = true,
    title,
}: SearchSelectPropsType): ReactElement => {

    const [inputValue, setInputValue] = useState<string>(currentSelectedOption);
    const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const [focusedOption, setFocusedOption] = useState(-1);
    const optionContainer: MutableRefObject<HTMLLIElement | null> = useRef(null);
    const selectedOptionRef: MutableRefObject<HTMLLIElement | null> = useRef(null);
    const optionslistRef: MutableRefObject<HTMLUListElement | null> = useRef(null);

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
        /* if inputValue is an option and the inputValue is not the currentSelectedOption set the selected value of the select box */
        if (options.includes(inputValue) && inputValue !== currentSelectedOption) {
            setValue(inputValue);
            setInputValue(currentSelectedOption);
        } else if (options.includes(inputValue) && inputValue === currentSelectedOption) {
            /* if inputValue is an option and the inputValue is the currentSelectedOption only reset the inputValue */
            setInputValue(currentSelectedOption);
        } else if (!options.includes(inputValue) && !enableDelete) {
            /* if inputValue is not an option AND you are not allowed to select nothing 
            reset the select box to its previous value */
            setInputValue(currentSelectedOption);
            setValue(currentSelectedOption);
        } else if (!options.includes(inputValue) && enableDelete && inputValue && currentSelectedOption.startsWith(inputValue)) {
            /* if inputValue is not an option AND 
            you are allowed to select nothing AND
            the inputValue is not an empty string AND
            the currentSelectedOption starts with the inputValue THEN
            reset the select box to its previous value */
            setInputValue(currentSelectedOption);
            //setValue(currentSelectedOption);
        } else {
            /* else select nothing */
            handleReset();
        }

        handleClose();

        //setTimeout(() => handleClose(), 500); //Timeout for ripple effect to play, when Option is clicked.
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        const optionsLength = filteredOptions.length;
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
        if (key === "Enter") inputValue === "" ? handleClickExpandButton() : handleReset();
    };

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    useEffect(() => {
        setInputValue(currentSelectedOption);
    }, [currentSelectedOption]);

    // scroll option into center when focusedOption changes
    useEffect(() => {
        if (!optionContainer.current) return;
        if (!optionslistRef.current) return;
        if (!optionScrollInView) return;

        const topPos = optionContainer.current.offsetTop;
        const optionHeight = optionContainer.current.clientHeight;
        const optionslistHeight = optionslistRef.current.clientHeight;
        optionslistRef.current.scrollTop = topPos - (optionslistHeight / 2) + (optionHeight / 2);
        // set scrollBehavior back to smooth in case it was set to auto before
        optionslistRef.current.style.scrollBehavior = "smooth";
    }, [focusedOption]);

    // set focusedOption when opening options
    // set scrollBehavior to auto for instant scroll
    useEffect(() => {
        if (!showOptions) return
        if (!optionslistRef.current) return;
        if (!selectedOptionRef.current) return

        optionslistRef.current.style.scrollBehavior = "auto";

        // set focusedOption to the currentSelectedOptions index
        setFocusedOption(filteredOptions.indexOf(currentSelectedOption));
    }, [showOptions]);

    return (
        <div className={className} title={title}>
            <div className="ddBtn-container">
                <button
                    tabIndex={disabled ? -1 : 0}
                    onKeyDown={handleButtonKeyDown}
                    title={enableDelete && inputValue !== "" ? "Remove current selection" : ""}
                >
                    {enableDelete ?
                        inputValue === "" ?
                            <MdExpandMore className="ddBtn" onClick={handleClickExpandButton} /> :
                            <MdClose className="ddBtn" onMouseDown={handleReset} />
                        : <MdExpandMore className="ddBtn" onClick={handleClickExpandButton} />
                    }
                </button>
            </div>
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
            </label>

            {showOptions &&
                <ul
                    ref={optionslistRef}
                    className="optionslist"
                >
                    {filteredOptions.map((option, idx) => {

                        const regEscape = (v: string) => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
                        const strArr = option.split(new RegExp("(" + regEscape(inputValue) + ")", "ig"));

                        return (
                            <li
                                key={idx}
                                ref={(el) => {
                                    if (idx === focusedOption) {
                                        optionContainer.current = el;
                                    }
                                    if (option === currentSelectedOption) {
                                        selectedOptionRef.current = el;
                                    }
                                }}
                                className={idx === focusedOption ? "focused-option" : ""}
                                onMouseDown={() => handleSelection(idx)}
                            >
                                <p className={option === currentSelectedOption ? "selected-option" : ""}>
                                    {strArr.map((substring, idx2) => {
                                        if (substring.toLowerCase() === inputValue.toLowerCase()) {
                                            return <span key={idx + substring + idx2} className="filter-substring">{substring}</span>
                                        }
                                        return substring
                                    })}
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