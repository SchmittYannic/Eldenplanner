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
        <div className="input-wrapper">
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
            {children}
            {error && (
                <>
                    <div className="divider-1" />
                    <div className="sm-alert errmsg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{error.message}</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Input