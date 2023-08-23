import { useState, useEffect, KeyboardEvent, ReactElement } from "react";

type PropsType = {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
}

const DebouncedInput = ({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: PropsType & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">): ReactElement => {
    const [value, setValue] = useState(initialValue);

    const onInputKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        // Only allow number and utility keys to be functional.
        if (!/[0-9]/.test(key) && !["Backspace", "Delete", "Tab", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Enter"].includes(key)) {
            e.preventDefault();
        }
    };
  
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
  
    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);
    
        return () => clearTimeout(timeout)
    }, [value]);
  
    return (
        <input
            {...props}
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={props.type === "number" ? onInputKeydown : () => {}}
            inputMode={props.type === "number" ? "numeric" : "text"}
        />
    )
}

export default DebouncedInput