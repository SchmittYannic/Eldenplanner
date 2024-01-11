import { ReactElement } from "react"

type FormTextAreaPropsType = {
    id: string,
    label?: string,
};

const FormTextArea = ({
    id,
    label="",
    ...props
}: FormTextAreaPropsType & React.TextareaHTMLAttributes<HTMLTextAreaElement>): ReactElement => {
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
            <textarea 
                id={id}
                {...props}
            >

            </textarea>
        </div>
    )
}

export default FormTextArea