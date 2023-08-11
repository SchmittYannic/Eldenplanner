import { ReactElement, ChangeEvent } from "react"
import "./TextInput.scss";

type PropsType = {
    inputText: string,
    setInputText: Function,
    label: string
}

const TextInput = ({ inputText, setInputText, label }: PropsType): ReactElement => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const InputValue = e.target.value;
        setInputText(InputValue);
    };

    return (
        <form 
            className="InputForm"
            action="" 
            onSubmit={(e) => e.preventDefault()}
        >
            <label>
                <input
                    type="text"
                    placeholder=" "
                    value={inputText}
                    onChange={(e) => handleInputChange(e)}
                />
                <p>{label}</p>
            </label>
        </form>
    )
}

export default TextInput