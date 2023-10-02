import { ReactElement } from "react";
import { ClipLoader } from "react-spinners";

type AsyncButtonPropsType = {
    isLoading: boolean,
    children: string,
    size?: number,
    color?: string,
};

const AsyncButton = ({
    isLoading,
    children,
    size=20,
    color="rgb(231, 214, 182)",
    ...props
}: AsyncButtonPropsType & React.ButtonHTMLAttributes<HTMLButtonElement>): ReactElement => {
    return (
        <button
            {...props}
        >
            <p className={isLoading ? "hidden" : "visible"}>
                {children}
            </p>
            {(isLoading && 
                <div className="cliploader-centered">
                    <ClipLoader
                        color={color}
                        loading={isLoading}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
        </button>
    )
}

export default AsyncButton