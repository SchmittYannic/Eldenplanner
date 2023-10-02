import { ReactElement } from "react";

type FormInputPropsType = {
    id: string,
    children: string,
};

const FormInput = ({
    id,
    children,
    ...props
}: FormInputPropsType & React.InputHTMLAttributes<HTMLInputElement>): ReactElement => {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>
                {children}
            </label>
            <div className="divider-1" />
            <input
                id={id}
                {...props}
            />
        </div>
    )
}

export default FormInput