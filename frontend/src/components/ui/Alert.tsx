import { useEffect, useRef, ReactElement } from "react";
import "./Alert.scss";

type PropsType = {
    setAlert: React.Dispatch<React.SetStateAction<boolean>>,
    classes?: string
    children: ReactElement[] | ReactElement
}

const Alert = ({ setAlert, classes, children }: PropsType): ReactElement => {
    const ref = useRef<HTMLDivElement | null>(null);

    const handleKeyDown = () => {
        // e: KeyboardEvent<HTMLDivElement>
        // const { key } = e;
        // e.preventDefault();
        // if(key === "Tab") {
        //     ref.current?.focus(); //ref.current?.firstChild?.focus();
        // }
    };

    useEffect(() => {
        //timeout because of the ripple effect moving focus back to CustomSelect Element otherwise
        setTimeout(()=> ref.current?.focus(), 100);
        document.body.style.overflow = 'hidden';
        return () => {document.body.style.overflow = 'unset'};
    }, []);

    return (
        <div className={`AlertBackground ${classes}`}>
            <div 
                id="Alert"  
                tabIndex={0}
                onKeyDown={handleKeyDown}
                ref={ref}
            >
                <button 
                    className="CloseAlert" 
                    tabIndex={0}
                    onClick={() => setAlert(false)}
                    onKeyDown={(e) => e.key === "Enter" ? setAlert(false) : null}
                >
                    &times;
                </button>
                { Array.isArray(children) ? { ...children } : children }
            </div>
        </div>
    )
}

export default Alert