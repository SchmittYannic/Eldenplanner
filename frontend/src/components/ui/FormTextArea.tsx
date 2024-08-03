import { ReactElement, useId, PropsWithChildren, TextareaHTMLAttributes } from "react"
import { FieldError, UseFormRegister } from "react-hook-form";

type FormTextAreaPropsType = PropsWithChildren<{
    name: string,
    register?: UseFormRegister<any>,
    label?: string,
    error?: FieldError,
}> & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "id">;

const FormTextArea = ({
    register,
    name,
    error,
    label = "",
    children,
    ...rest
}: FormTextAreaPropsType): ReactElement => {

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
            <textarea
                id={id}
                {...(register ? register(name) : {})}
                {...rest}
            >

            </textarea>
        </div>
    )
}

export default FormTextArea