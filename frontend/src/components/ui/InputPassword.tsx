import { InputHTMLAttributes, PropsWithChildren, useState, useId } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputPasswordPropsType<T extends string> = PropsWithChildren<{
    name: T,
    register?: UseFormRegisterReturn<T>,
    label?: string,
    error?: FieldError,
}> & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "id">;

const InputPassword = <T extends string>({
    register,
    name,
    error,
    label = "",
    children,
    ...rest
}: InputPasswordPropsType<T>) => {

    const id = useId();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onShowHidePasswordClicked = () => setIsPasswordVisible(!isPasswordVisible);

    const errorMsg = !error ? "" : error.type === "required" ? `${label} is required` : error.message;

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
                    {...(register ? register : {})}
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
            {error &&
                <p className="text-sm errmsg-input">
                    {errorMsg}
                </p>
            }
            {children}
        </div>
    )
}

export default InputPassword