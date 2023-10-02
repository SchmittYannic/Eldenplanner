import { ReactElement, useState } from "react";

type FormInputPropsType = {
    id: string,
    type: string,
    label?: string,
    children?: ReactElement | ReactElement[],
};

const FormInput = ({
    id,
    type,
    label="",
    children,
    ...props
}: FormInputPropsType & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">): ReactElement => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onShowHidePasswordClicked = () => setIsPasswordVisible(!isPasswordVisible);

    return (
        type === "password" ? (
            <div className="input-wrapper password">
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
                        {...props}
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
        ) : (
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
                    type={type}
                    {...props}
                />
                {children}
            </div>
        )
    )
}

export default FormInput