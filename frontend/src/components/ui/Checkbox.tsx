import { KeyboardEvent, useState, ReactElement } from "react";
import "./Checkbox.scss";

type PropsType = {
    label: (string | number),
    checked: boolean,
    setChecked: Function
}

/* https://blog.logrocket.com/building-custom-checkbox-react/ */
const Checkbox = ({ label, checked, setChecked }: PropsType): ReactElement => {
    const [isRippling, setIsRippling] = useState(false);

    const onKeyDown = (e: KeyboardEvent) => {
        const { key } = e;
        if (key === "Enter") handleCheck();
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
        <div className="Checkbox">
            <label>
                <div 
                    className={checked ? "CheckboxWrapper Checked" : "CheckboxWrapper" }
                >
                    {isRippling ? (
                        <span
                            className="CheckboxRipple"
                            style={{
                                marginTop: "-10px",
                                top: "50%"
                            }}
                        />
                    ) : (
                        ''
                    )}
                    <input
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