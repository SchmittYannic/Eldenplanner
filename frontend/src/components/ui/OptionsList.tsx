import { ReactElement } from "react";
import ListElement from "./ListElement";

type PropsType = {
    options: string[],
    renderOption: Function,
    focusedOption: number,
    optionContainer: React.MutableRefObject<HTMLLIElement | null>,
    handleSelection: Function
}

const OptionsList = ({ 
    options, 
    renderOption, 
    focusedOption, 
    optionContainer, 
    handleSelection 
}: PropsType): ReactElement => {
    return (
        <ul className="OptionsList">
            {options.map((option, idx) => {
                return(
                    <ListElement 
                        key={idx}
                        options={options}
                        option={option} 
                        idx={idx} 
                        renderOption={renderOption} 
                        focusedOption={focusedOption}
                        optionContainer={optionContainer}
                        handleSelection={handleSelection}
                    />
                )
            })}
        </ul>
    )
}

export default OptionsList