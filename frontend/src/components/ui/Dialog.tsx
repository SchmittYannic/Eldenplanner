import { ReactElement, useRef, useEffect, useState } from "react";
import FocusTrap from "focus-trap-react";
import { MdClose } from "react-icons/md";
import "./Dialog.scss";

type DialogIconPropsType = {
    children: ReactElement[] | ReactElement,
};

const DialogIcon = ({ children }: DialogIconPropsType): ReactElement => {
    return (
        <>
            <div className="dialog__image">
                { children }
            </div>
            <div className="v-divider-4" />
            <div className="v-divider-4" />
        </>
    )
}

type DialogContentPropsType = {
    children: ReactElement[] | ReactElement,
};

const DialogContent = ({ children }: DialogContentPropsType ): ReactElement => {
    return (
        <div className="dialog__content">
            { children }
        </div>
    )
};

type DialogButtonsPropsType = {
    children: ReactElement[] | ReactElement,
};

const DialogButtons = ({ children }: DialogButtonsPropsType ): ReactElement => {
    return (
        <div className="dialog__button-wrapper">
            { children }
        </div>
    )
};

type DialogMainPropsType = {
    children: ReactElement[] | ReactElement,
};

const DialogMain = ({ children }: DialogMainPropsType ): ReactElement => {
    return (
        <div className="dialog__main">
            { children }
        </div>
    )
};

type DialogPropsType = {
    setDialog: Function,
    className?: string,
    children: ReactElement[] | ReactElement,
};

const Dialog = ({ setDialog, className, children }: DialogPropsType ): ReactElement => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [top, setTop] = useState("");

    useEffect(() => {
        if (ref.current) {
            setTop((window.innerHeight * .5).toString() + "px");
            ref.current.scrollIntoView({
                block: "center",
            });
        }
    }, []);

    return (
        <FocusTrap>
            <div className={`dialog__background ${className}`}>
                <div 
                    id="dialog"  
                    tabIndex={0}
                    ref={ref}
                    style={{ top: top }}
                >
                    <div className="dialog__close-wrapper">
                        <button 
                            className="close-dialog" 
                            tabIndex={0}
                            onClick={() => setDialog(false)}
                            onKeyDown={(e) => e.key === "Enter" ? setDialog(false) : null}
                            title="Close Dialog"
                        >
                            <MdClose />
                        </button>
                    </div>

                    { children }

                </div>
            </div>
        </FocusTrap>
    )
}

export {
    Dialog,
    DialogMain,
    DialogButtons,
    DialogContent,
    DialogIcon,
};