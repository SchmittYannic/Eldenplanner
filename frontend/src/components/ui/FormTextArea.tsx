import { ReactElement, useId, PropsWithChildren, TextareaHTMLAttributes } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormTextAreaPropsType<T extends string> = PropsWithChildren<{
    name: T,
    register?: UseFormRegisterReturn<T>,
    label?: string,
    error?: FieldError,
}> & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "id">;

const FormTextArea = <T extends string>({
    register,
    name,
    error,
    label = "",
    children,
    ...rest
}: FormTextAreaPropsType<T>): ReactElement => {

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
            <textarea
                id={id}
                {...(register ? register : {})}
                {...rest}
            >
            </textarea>
            {error &&
                <p className="text-sm errmsg-input">
                    {errorMsg}
                </p>
            }
        </div>
    )
}

export default FormTextArea