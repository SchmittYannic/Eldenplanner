import { ReactElement } from "react";
import ClipLoader from "./ClipLoader";

type AsyncButtonPropsType = {
    isLoading: boolean,
    children: string,
    size?: number,
    color?: string,
};

const AsyncButton = ({
    isLoading,
    children,
    size = 20,
    color = "rgb(231, 214, 182)",
    ...props
}: AsyncButtonPropsType & React.ButtonHTMLAttributes<HTMLButtonElement>): ReactElement => {
    return (
        <button
            {...props}
        >
            <span className={isLoading ? "hidden" : "visible"}>
                {children}
            </span>
            {(isLoading &&
                <div className="cliploader-centered">
                    <ClipLoader
                        color={color}
                        loading={isLoading}
                        size={size}
                    />
                </div>
            )}
        </button>
    )
}

export default AsyncButton