import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDeleteCommentMutation } from "src/features/comments/commentsApiSlice";
import { resetPopupState, selectPopup, setPopupIsOpen } from "./popupSlice";
import { selectLastFetchedTimestamp, selectLimit, selectSort, } from "src/features/comments/commentsSlice";
import { addToast } from "src/features/toasts/toastSlice";
import { isCommentDeletePropsType } from "src/utils/typeguards";

const CommentDelete = () => {
    const dispatch = useDispatch();

    const [deleteComment] = useDeleteCommentMutation();

    const { props } = useSelector(selectPopup);
    if (!isCommentDeletePropsType(props)) return
    const { commentId, targetId, targetType, parentId } = props;
    const sort = useSelector(selectSort);
    const limit = useSelector(selectLimit);
    const lastFetchedTimestamp = useSelector(selectLastFetchedTimestamp);

    const popupRef = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState(0);

    const onCancelClicked = () => {
        dispatch(resetPopupState());
    };

    const onDeleteClicked = async () => {
        try {
            await deleteComment({
                commentId,
                targetType,
                targetId,
                parentId,
                lastFetchedTimestamp,
                sort,
                limit,
            }).unwrap();
        } catch (err) {
            dispatch(addToast({
                type: "error",
                text: "Deleting comment failed",
            }));
        }

        dispatch(resetPopupState());
    };

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

    useEffect(() => {
        if (!popupRef.current) return
        const viewportHeight = window.innerHeight;
        const popup = popupRef.current;
        const top = (viewportHeight - popup.offsetHeight) / 2

        setTop(top);
    }, []);

    return (
        <div
            className="popup-container overlay"
        >
            <div className="overlay">
            </div>
            <div
                ref={popupRef}
                className="comment-delete"
                style={{
                    top: top,
                }}
            >
                <h4>Delete Comment</h4>
                <div className="text-container">
                    <p>Do you want to permanently delete this comment?</p>
                </div>
                <div className="button-wrapper">
                    <button
                        type="button"
                        onClick={onCancelClicked}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onDeleteClicked}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CommentDelete