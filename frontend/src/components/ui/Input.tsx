import { PropsWithChildren, InputHTMLAttributes, useId } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type InputPropsType = PropsWithChildren<{
    name: string,
    register?: UseFormRegister<any>,
    label?: string,
    error?: FieldError,
}> & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id">;

const Input = ({
    register,
    name,
    error,
    label = "",
    children,
    ...rest
}: InputPropsType) => {

    const id = useId();

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
                {...(register ? register(name) : {})}
                {...rest}
            />
            {error &&
                <p className="text-sm errmsg-input">
                    {error.message}
                </p>
            }
            {children}
        </div>
    )
}

export default Input