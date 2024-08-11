import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiTrash } from "react-icons/pi";

import { selectPopup, setPosition } from "./popupSlice";
import { setIsEditMode } from "src/features/comments/commentsSlice";
import { IconMapKeyType } from "src/types";
import { isCommentOptionlistPropsType } from "src/utils/typeguards";
import "src/features/popups/Popup.scss";

type IconMapType = {
    [key in IconMapKeyType]: ReactNode;
}

const iconMap: IconMapType = {
    edit: <MdOutlineModeEdit aria-hidden />,
    delete: <PiTrash aria-hidden />
}

const Popup = () => {

    const dispatch = useDispatch();
    const {
        refId,
        isOpen,
        type,
        position,
        props,
    } = useSelector(selectPopup);

    // whenever refId changes
    useEffect(() => {
        // reset Position
        dispatch(setPosition({}));
        // get element belonging to refId
        if (!refId) return
        const element = document.getElementById(refId);
        if (!element) return

        // set position of popup on resize of window
        const handleResize = () => {
            const rect = element.getBoundingClientRect();

            dispatch(setPosition({
                top: rect.bottom + window.scrollY,
                right: window.innerWidth - rect.right + window.scrollX,
            }));
        }

        // when open initial set position of popup
        if (isOpen) handleResize();

        window.addEventListener("resize", handleResize);

        () => window.removeEventListener("resize", handleResize);
    }, [refId]);

    if (!isOpen) return null;

    switch (type) {
        case "COMMENT_OPTIONLIST":
            return (
                <div className="popup-container">
                    <ul
                        className="options-list"
                        style={{
                            top: position.top,
                            left: position.left,
                            right: position.right,
                            bottom: position.bottom,
                        }}
                    >
                        {isCommentOptionlistPropsType(props) && props.map((option, idx) => {

                            const { text, icon, commentId } = option;

                            const onClick = (icon === "edit" && commentId) ?
                                () => {
                                    dispatch(setIsEditMode(commentId));
                                } : () => { }

                            return (
                                <li key={idx}>
                                    <div
                                        className="option"
                                        onClick={onClick}
                                    >
                                        {icon &&
                                            <div className="icon-container">
                                                {iconMap[icon]}
                                            </div>
                                        }
                                        <span className="text">
                                            {text}
                                        </span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        default:
            return null;
    }
}

export default Popup