import { KeyboardEvent, useState, ReactElement } from "react";
import "./Checkbox.scss";

type PropsType = {
    label: (string | number),
    checked: boolean,
    setChecked: Function
}

/* https://blog.logrocket.com/building-custom-checkbox-react/ */
const Checkbox = ({
    label,
    checked,
    setChecked,
    ...props
}: PropsType & React.InputHTMLAttributes<HTMLInputElement>): ReactElement => {
    const [isRippling, setIsRippling] = useState(false);

    const onKeyDown = (e: KeyboardEvent) => {
        const { key } = e;
        if (key === "Enter") {
            e.preventDefault()
            handleCheck();
        }
    };

    const handleCheck = () => {
        ripple();
        setChecked(!checked);
    };

    const ripple = () => {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 300);
    }

    return (
        <div className="checkbox">
            <label className="checkbox-label">
                <div 
                    className={checked ? "checkbox-wrapper checked" : "checkbox-wrapper" }
                >
                    {isRippling ? (
                        <span
                            className="checkbox-ripple"
                            style={{
                                marginTop: "-10px",
                                top: "50%"
                            }}
                        />
                    ) : (
                        ''
                    )}
                    <input
                        {...props}
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheck}
                        onKeyDown={onKeyDown}
                        tabIndex={0}
                    />
                </div>
                <p>{label}</p>
            </label>
        </div>
    )
}

export default Checkbox