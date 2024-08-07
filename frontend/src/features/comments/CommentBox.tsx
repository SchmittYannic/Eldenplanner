import { ChangeEvent, FocusEventHandler, FormEventHandler, RefObject, useEffect, useRef, useState } from "react";

import { useCreateCommentMutation } from "src/features/comments/commentsApiSlice";
import useAuth from "src/hooks/useAuth";
import AuthorThumbnail from "src/features/comments/AuthorThumbnail";
import { TargetTypeType } from "src/types";

type CommentBoxPropsType = {
    targetId: string,
    targetType: TargetTypeType,
    parentId: string | null,
    showCommentBoxFooter: boolean,
    callbackOnCancel?: Function,
    textareaRef?: RefObject<HTMLTextAreaElement>,
    onTextAreaFocus?: FocusEventHandler<HTMLTextAreaElement>,
    initialText?: string,
}

const CommentBox = ({
    targetId,
    targetType,
    parentId,
    showCommentBoxFooter,
    callbackOnCancel,
    textareaRef,
    onTextAreaFocus,
    initialText = "",
}: CommentBoxPropsType) => {

    const [createComment, {
        isLoading,
    }] = useCreateCommentMutation();

    const { userId } = useAuth();
    const textareaDefaultRef = useRef<HTMLTextAreaElement>(null);
    const [commentText, setCommentText] = useState(initialText);
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

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();

        try {
            // Trigger the mutation with the comment data
            await createComment({
                authorId: userId,
                content: commentText,
                targetId,
                targetType,
                parentId,
            }).unwrap();
            handleCancelClicked();
            //do optimistic update
        } catch (err) {
            console.error("Failed to add the comment");
        }
    }

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

    useEffect(() => {
        if (!textareaRef?.current) return
        const textarea = textareaRef.current;
        const initialTextLength = initialText.length;
        textarea.setSelectionRange(initialTextLength, initialTextLength); // Set cursor position after initial text
    }, [initialText]);

    useEffect(() => {
        if (!textareaDefaultRef.current) return
        const textarea = textareaDefaultRef.current;
        const initialTextLength = initialText.length;
        textarea.setSelectionRange(initialTextLength, initialTextLength); // Set cursor position after initial text
    }, [initialText]);

    return (
        <div className="comment-box">
            <div className="thumbnail-input-row">
                <AuthorThumbnail
                    href={`/user/`}
                    src={avatarUrl}
                    width={40}
                    height={40}
                />
                <form
                    className="comment-box-main"
                    onSubmit={handleSubmit}
                >
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
                                <div className="text-btn-wrapper" style={{ marginLeft: "8px" }}>
                                    <button
                                        type="button"
                                        onClick={handleCancelClicked}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <div className="text-btn-wrapper" style={{ marginLeft: "8px" }}>
                                    <button
                                        className="submit-btn"
                                        type="submit"
                                        disabled={(commentText === "" || isLoading) ? true : false}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default CommentBox