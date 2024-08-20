import { ReactElement, ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteToast, selectToast } from "src/features/toasts/toastSlice";
import { AiFillCheckCircle, AiFillCloseCircle, MdClose } from "src/components/icons";
import { ToastTypeType } from "src/types";
import "src/features/toasts/Toast.scss";

type ToastIconMapType = {
    [key in ToastTypeType]: ReactNode;
}

const ToastIconMap: ToastIconMapType = {
    success: <AiFillCheckCircle aria-hidden />,
    error: <AiFillCloseCircle aria-hidden />,
}

const Toast = (): ReactElement => {

    const toastlist = useSelector(selectToast);
    const dispatch = useDispatch();

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScrolling = (element: HTMLDivElement) => {
            element?.scrollTo(0, element.scrollHeight);
        };

        if (listRef.current) {
            handleScrolling(listRef.current);
        }
    }, [toastlist]);

    useEffect(() => {
        if (process.env.TOAST_AUTO_DELETE === "true") {
            const interval = setInterval(() => {
                if (toastlist.length) {
                    dispatch(deleteToast({ id: toastlist[0].id }));
                }
            }, Number(process.env.TOAST_AUTO_DELETE_TIME) ?? 4000);

            return () => {
                clearInterval(interval);
            }
        }
    }, [toastlist]);

    return (
        toastlist.length > 0 ? (
            <div
                className="toast-list"
                aria-live="assertive"
                ref={listRef}
            >
                {
                    toastlist.map((toast, idx) =>
                        <div
                            key={idx}
                            className="toast"
                            role="alert"
                        >
                            <div className={`toast-icon ${toast.type}`}>
                                {ToastIconMap[toast.type]}
                            </div>
                            <p className="toast-text">
                                {toast.text}
                            </p>
                            <button
                                className="toast-close-button"
                                type="button"
                                onClick={() => dispatch(deleteToast({ id: toast.id }))}
                            >
                                <MdClose aria-hidden />
                            </button>
                        </div>
                    )
                }
            </div>
        ) : (<></>)
    )
}

export default Toast