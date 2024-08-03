import { InputHTMLAttributes, PropsWithChildren, useState, useId } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type InputPasswordPropsType = PropsWithChildren<{
    name: string,
    register?: UseFormRegister<any>,
    label?: string,
    error?: FieldError,
}> & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "id">;

const InputPassword = ({
    register,
    name,
    error,
    label = "",
    children,
    ...rest
}: InputPasswordPropsType) => {

    const id = useId();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onShowHidePasswordClicked = () => setIsPasswordVisible(!isPasswordVisible);

    return (
        <div className={`input-wrapper password${error ? " error" : ""}`}>
            {label && (
                <>
                    <label htmlFor={id}>
                        {label}
                    </label>
                    <div className="divider-1" />
                </>
            )}
            <div className="flex">
                <input
                    id={id}
                    type={isPasswordVisible ? "text" : "password"}
                    {...(register ? register(name) : {})}
                    {...rest}
                />
                <button
                    className="password-toggle button"
                    type="button"
                    onClick={onShowHidePasswordClicked}
                >
                    {isPasswordVisible ? "Hide" : "Show"}
                </button>
            </div>
            {children}
        </div>
    )
}

export default InputPassword