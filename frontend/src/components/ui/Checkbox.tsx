import { KeyboardEvent, useState } from "react";
// import "./Checkbox.scss";

type PropsType = {
    label: string,
    checked: boolean,
    setChecked: Function
}

/* https://blog.logrocket.com/building-custom-checkbox-react/ */
const Checkbox = ({ label, checked, setChecked }: PropsType) => {
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
        <form
            className="Checkbox"
            onSubmit={(e) => e.preventDefault()}
        >
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
        </form>
    )
}

export default Checkbox