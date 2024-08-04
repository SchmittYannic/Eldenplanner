import { PropsWithChildren, InputHTMLAttributes, useId } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputPropsType<T extends string> = PropsWithChildren<{
    name: T,
    register?: UseFormRegisterReturn<T>,
    label?: string,
    error?: FieldError,
}> & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id">;

const Input = <T extends string>({
    register,
    name,
    error,
    label = "",
    children,
    ...rest
}: InputPropsType<T>) => {

    const id = useId();

    const errorMsg = !error ? "" : error.type === "required" ? `${label} is required` : error.message;

    return (
        <div className={`input-wrapper${error ? " error" : ""}`}>
            {label && (
                <>
                    <label htmlFor={id}>
                        {label}
                    </label>
                    <div className="divider-1" />
                </>
            )}
            <input
                id={id}
                {...(register ? register : {})}
                {...rest}
            />
            {error &&
                <p className="text-sm errmsg-input">
                    {errorMsg}
                </p>
            }
            {children}
        </div>
    )
}

export default Input