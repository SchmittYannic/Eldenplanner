import { ChangeEvent, FocusEventHandler, RefObject, useEffect, useRef, useState } from "react";

import useAuth from "src/hooks/useAuth";
import AuthorThumbnail from "./AuthorThumbnail";

type CommentBoxPropsType = {
    showCommentBoxFooter: boolean,
    callbackOnCancel?: Function,
    textareaRef?: RefObject<HTMLTextAreaElement>,
    onTextAreaFocus?: FocusEventHandler<HTMLTextAreaElement>,
}

const CommentBox = ({
    showCommentBoxFooter,
    callbackOnCancel,
    textareaRef,
    onTextAreaFocus,
}: CommentBoxPropsType) => {

    const textareaDefaultRef = useRef<HTMLTextAreaElement>(null);
    const [commentText, setCommentText] = useState("");
    const { avatarUrl } = useAuth();

    const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setCommentText(value);
    };

    const handleCancelClicked = () => {
        setCommentText("");
        if (textareaRef?.current) textareaRef.current.style.height = "auto";
        if (textareaDefaultRef.current) textareaDefaultRef.current.style.height = "auto";
        if (callbackOnCancel) callbackOnCancel();
    };

    useEffect(() => {
        if (!textareaRef?.current) return

        const adjustTextareaSize = () => {
            if (!textareaRef.current) return
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }

        textareaRef.current.addEventListener("input", adjustTextareaSize);

        return () => {
            if (!textareaRef.current) return
            textareaRef.current.removeEventListener("input", adjustTextareaSize);
        }
    }, []);

    useEffect(() => {
        if (!textareaDefaultRef.current) return

        const adjustTextareaSize = () => {
            if (!textareaDefaultRef.current) return
            textareaDefaultRef.current.style.height = "auto";
            textareaDefaultRef.current.style.height = `${textareaDefaultRef.current.scrollHeight}px`;
        };

        textareaDefaultRef.current.addEventListener("input", adjustTextareaSize);

        return () => {
            if (!textareaDefaultRef.current) return
            textareaDefaultRef.current.removeEventListener("input", adjustTextareaSize);
        }
    }, []);

    return (
        <div className="comment-box">
            <div className="thumbnail-input-row">
                <AuthorThumbnail
                    href={`/user/`}
                    src={avatarUrl}
                    width={40}
                    height={40}
                />
                <div className="comment-box-main">
                    <div className="comment-box-creation">
                        <textarea
                            ref={textareaRef ? textareaRef : textareaDefaultRef}
                            rows={1}
                            value={commentText}
                            onChange={handleCommentChange}
                            onFocus={onTextAreaFocus}
                            placeholder="Write comment..."
                        >

                        </textarea>
                        <div className="line">
                            <div className="line-animation"></div>
                        </div>
                    </div>

                    {showCommentBoxFooter &&
                        <div className="comment-box-footer">
                            <div className="comment-box-buttons flex">
                                <div className="text-btn-wrapper">
                                    <button
                                        type="button"
                                        onClick={handleCancelClicked}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <div className="text-btn-wrapper">
                                    <button
                                        className="submit-btn"
                                        type="button"
                                        disabled={commentText === "" ? true : false}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CommentBox