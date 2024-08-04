import { ReactElement, InputHTMLAttributes, ChangeEventHandler } from "react";
import "src/components/ui/CharplannerTextInput.scss";

type CharplannerTextInputPropsType = {
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "value">

const CharplannerTextInput = ({
    value,
    onChange,
    label,
    ...rest
}: CharplannerTextInputPropsType): ReactElement => {
    return (
        <div className="charplanner__textinput" >
            <label>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
                <p>{label}</p>
            </label>
        </div>
    )
}

export default CharplannerTextInput