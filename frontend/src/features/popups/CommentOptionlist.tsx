import { ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiTrash } from "react-icons/pi";

import { setIsEditMode } from "src/features/comments/commentsSlice";
import { addCommentDelete, selectPopup, setPopupIsOpen, toggleOpen } from "./popupSlice";
import { isCommentOptionlistPropsType } from "src/utils/typeguards";
import { IconMapKeyType } from "src/types";

type IconMapType = {
    [key in IconMapKeyType]: ReactNode;
}

const iconMap: IconMapType = {
    edit: <MdOutlineModeEdit aria-hidden />,
    delete: <PiTrash aria-hidden />
}


const CommentOptionlist = () => {
    const dispatch = useDispatch();

    const { position, props } = useSelector(selectPopup);

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                dispatch(setPopupIsOpen(false));
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={popupRef}
            className="popup-container"
        >
            <ul
                className="options-list"
                style={{
                    top: position.top,
                    left: position.left,
                    right: position.right,
                    bottom: position.bottom,
                }}
            >
                {isCommentOptionlistPropsType(props) && props.options.map((option, idx) => {

                    const { text, icon } = option;

                    const onClick = (icon === "edit" && props.commentId) ?
                        () => {
                            dispatch(setIsEditMode(props.commentId));
                            dispatch(toggleOpen());
                        }
                        : (icon === "delete" && props.commentId) ?
                            () => {
                                dispatch(addCommentDelete({
                                    props: {
                                        commentId: props.commentId,
                                        targetType: props.targetType,
                                        targetId: props.targetId,
                                        parentId: props.parentId,
                                    },
                                }));
                            }
                            :
                            () => {
                                dispatch(toggleOpen());
                            }

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
}

export default CommentOptionlist