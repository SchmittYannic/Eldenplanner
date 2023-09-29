import { ReactElement } from "react";
import { MdClose, MdSave, MdWarningAmber } from "react-icons/md";
import "./Dialog.scss";

type DialogContentPropsType = {
    children: ReactElement[] | ReactElement,
    dialogtype?: string,
};

const DialogContent = ({ children, dialogtype="" }: DialogContentPropsType ): ReactElement => {

    const icon = dialogtype === "save" ? <MdSave /> 
        : dialogtype === "warning" ? <MdWarningAmber />
        : null;

    return (
        <div className="dialog__main">
            {dialogtype &&
                <>
                    <div className="dialog__image">
                        {icon}
                    </div>
                    <div className="v-divider-4" />
                    <div className="v-divider-4" />
                </>
            }
            <div className="dialog__content">
                { children }
            </div>
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

type DialogPropsType = {
    setDialog: React.Dispatch<React.SetStateAction<boolean>>,
    className?: string,
    children: ReactElement[] | ReactElement,
};

const Dialog = ({ setDialog, className, children }: DialogPropsType ): ReactElement => {

    return (
        <div className={`dialog__background ${className}`}>
            <div 
                id="dialog"  
                tabIndex={0}
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
    )
}

export {
    Dialog,
    DialogButtons,
    DialogContent
};