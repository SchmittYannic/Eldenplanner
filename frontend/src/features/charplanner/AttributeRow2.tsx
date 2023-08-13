import {
    ReactElement,
    ChangeEvent,
    KeyboardEvent,
    MouseEvent,
    useState,
    useEffect
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

import { StatsType } from "../../../data/StartingClassData";
import { RootState } from "../../app/store";
import { capitalizeFirstLetter } from "../../utils/functions";
import useTotalstats from "../../hooks/useTotalstats";


type PropsType = {
    keyName: keyof StatsType,
    minStat: number,
    statSelector: (stat: RootState) => number,
    statAction: ActionCreatorWithPayload<any, string>,
}

const AttributeRow = ({ keyName, minStat, statSelector, statAction }: PropsType): ReactElement => {

    const totalStat = useTotalstats(keyName);
    
    const dispatch = useDispatch();
    const statValue = useSelector(statSelector);

    /*
        input can be string or number to allow user to empty out the input field 
        without it displaying NaN.
    */
    const [inputValue, setInputValue] = useState<string | number>(statValue);

    /*
        ResetInput will set the value of the input element back to the stat minimum.
        Same for the state of the stat.
    */
    const resetInput = (): void => {
        setInputValue(minStat);
        dispatch(statAction(minStat));
    };

    /*
        Last check before writing the value of the input to state.
        Checks if value is within range of minimum and maximum.
    */ 
    const setStatInState = (value: number): void => {
        if (value > 99) {
            value = 99;
        } else if (value < minStat ) {
            value = minStat;
        }

        setInputValue(value);
        dispatch(statAction(value));
    };


    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
        const { key } = e;
        // Only allow number and utility keys to be functional.
        if (!/[0-9]/.test(key) && !["Backspace", "Delete", "Tab", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(key)) {
            e.preventDefault();
        }

        // Enter will trigger handleBlur
        if (key === "Enter") {
            e.preventDefault();
            handleBlur();
        }
    };

    /*
        Checks the value of the input element. 
        Parses it to a number if necessary.
        If it is a number: call setStatInState
        else: resetInput()
    */
    const handleBlur = () => {
        let value: number;
        if (typeof inputValue === "string") {
            value = parseInt(inputValue);
        } else {
            value = inputValue;
        }
        if (isNaN(value)) {
            resetInput();
        } else {
            setStatInState(value);
        }
    };

    const handleArrowButton = (e: KeyboardEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement>, action: number) => {
        const eventType = e.type
        if (eventType === "click") {
            if (action === 1) {
                setStatInState(inputValue as number + 1)
            } else if (action === -1) {
                setStatInState(inputValue as number - 1)
            };
        } else if (e instanceof KeyboardEvent && eventType === "keydown") {
            const { key } = e;
            if (key === "Enter") {
                e.preventDefault();
                if (action === 1) {
                    setStatInState(inputValue as number + 1);
                } else if (action === -1) {
                    setStatInState(inputValue as number - 1);
                };
            }
        }
    };

    /*
        whenever minStat prop changes by changing the startingclass
        make sure the current inputValue isnt below the new stat minimum.
    */
    useEffect(() => {
        if(typeof inputValue === "string" || minStat > inputValue ) {
            resetInput();
        }
    }, [minStat]);

    useEffect(() => {
        if (statValue !== inputValue) {
            setInputValue(statValue);
        }
    }, [statValue]);

    return (
        <div className="AttributeRow">
            <span>{capitalizeFirstLetter(keyName)}</span>
            <span>{minStat}</span>
            <input 
                value={inputValue}
                type="text" //number for mobile keyboard?
                inputMode="numeric"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
            />
            <span>{typeof totalStat === "number" && totalStat}</span>
            <span>
                <button
                    onClick={(e) => handleArrowButton(e, -1)}
                    onKeyDown={(e) => handleArrowButton(e, -1)}
                >
                    <MdExpandMore />
                </button>
                <button
                    onClick={(e) => handleArrowButton(e, 1)}
                    onKeyDown={(e) => handleArrowButton(e, 1)}
                >
                    <MdExpandLess />
                </button>
            </span>
        </div>
    )
}

export default AttributeRow