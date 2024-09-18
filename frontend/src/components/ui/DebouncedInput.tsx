import { useState, useEffect, KeyboardEvent, ReactElement, useRef, ChangeEvent } from "react";

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
    const isUserInputRef = useRef(false);

    const onInputKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        // Only allow number and utility keys to be functional.
        if (!/[0-9]/.test(key) && !["Backspace", "Delete", "Tab", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Enter"].includes(key)) {
            e.preventDefault();
        }
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        isUserInputRef.current = true;
        setValue(e.target.value)
    };

    useEffect(() => {
        isUserInputRef.current = false;
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        if (!isUserInputRef.current) return;

        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout)
    }, [value]);

    return (
        <input
            {...props}
            value={value}
            onChange={onInputChange}
            onKeyDown={props.type === "number" ? onInputKeydown : undefined}
            inputMode={props.type === "number" ? "numeric" : "text"}
        />
    )
}

export default DebouncedInput