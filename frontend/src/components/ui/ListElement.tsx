import { useState, useEffect, MouseEvent } from "react";
import "./ListElement.scss";

type PropsType = {
    options: string[],
    option: string,
    idx: number,
    renderOption: Function, 
    focusedOption: number, 
    optionContainer: React.MutableRefObject<HTMLLIElement | null>, 
    handleSelection: Function 
}

const ListElement = ({ 
    options, 
    option, 
    idx, 
    renderOption, 
    focusedOption, 
    optionContainer, 
    handleSelection 
}: PropsType) => {
    /* ripple effect from https://www.30secondsofcode.org/react/s/ripple-button/ */
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    const handleMouseDown = (e: MouseEvent<HTMLLIElement>) => {
        handleRipple(e);
        handleSelection(options[idx]);
    };

    const handleRipple = (e: MouseEvent<HTMLLIElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);
  
    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
        <li 
            ref={idx === focusedOption ? optionContainer : null}
            className={idx === focusedOption ? "FocusedOption": ""}
            onMouseDown={(e) => handleMouseDown(e)}
        >
            {isRippling ? (
            <span
                className="Ripple"
                style={{
                left: coords.x,
                top: coords.y
                }}
            />
            ) : (
                ''
            )}
            {renderOption(option)}
        </li>
    )
}

export default ListElement