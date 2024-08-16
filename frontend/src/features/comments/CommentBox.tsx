import { ChangeEvent, FocusEventHandler, FormEventHandler, RefObject, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useCreateCommentMutation, useUpdateCommentMutation } from "src/features/comments/commentsApiSlice";
import { selectLastFetchedTimestamp, selectLimit, selectSort } from "./commentsSlice";
import useAuth from "src/hooks/useAuth";
import AuthorThumbnail from "src/features/comments/AuthorThumbnail";
import { TargetTypeType } from "src/types";

type CommentBoxPropsType = {
    targetId: string,
    targetType: TargetTypeType,
    parentId: string | null,
    commentId?: string,
    showCommentBoxFooter?: boolean,
    callbackOnCancel?: Function,
    textareaRef?: RefObject<HTMLTextAreaElement>,
    onTextAreaFocus?: FocusEventHandler<HTMLTextAreaElement>,
    initialText?: string,
}

const CommentBox = ({
    targetId,
    targetType,
    parentId,
    commentId,
    showCommentBoxFooter = true,
    callbackOnCancel,
    textareaRef,
    onTextAreaFocus,
    initialText = "",
}: CommentBoxPropsType) => {

    const navigate = useNavigate();

    const [createComment, {
        isLoading: isCreateCommentLoading,
    }] = useCreateCommentMutation();

    const [updateComment, {
        isLoading: isUpdateCommentLoading,
    }] = useUpdateCommentMutation();

    const lastFetchedTimestamp = useSelector(selectLastFetchedTimestamp);
    const sort = useSelector(selectSort);
    const limit = useSelector(selectLimit);

    const { userId, username, avatarUrl } = useAuth();
    const textareaDefaultRef = useRef<HTMLTextAreaElement>(null);
    const [commentText, setCommentText] = useState(initialText);

    const handleClick = () => {
        if (userId) return
        // redirect unauthenticated users to log in page
        navigate("/login");
    };

    const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (userId) {
            const { value } = e.target;
            setCommentText(value);
        } else {
            // redirect unauthenticated users to log in page
            navigate("/login");
        }
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
            // if commentId is provided to component trigger update mutation
            if (commentId) {
                await updateComment({
                    commentId,
                    content: commentText,
                    targetId,
                    targetType,
                    parentId: parentId || "",
                    lastFetchedTimestamp,
                    sort,
                    limit,
                }).unwrap();
            } else {
                await createComment({
                    authorId: userId,
                    username,
                    avatarUrl,
                    parentId: parentId || "",
                    targetId,
                    targetType,
                    content: commentText,
                    lastFetchedTimestamp,
                    sort,
                    limit,
                }).unwrap();
            }
            handleCancelClicked();
        } catch (err) {
            console.log(err)
            if (commentId) {
                console.error("Failed to update the comment");
            } else {
                console.error("Failed to add the comment");
            }
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
                    href={userId ? `/user/${userId}` : undefined}
                    src={userId ? avatarUrl : "http://cdn.jsdelivr.net/gh/schmittyannic/images/eldenplanner/icons/default-user.svg"}
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
                            onClick={handleClick}
                            onChange={handleCommentChange}
                            onFocus={onTextAreaFocus}
                            placeholder="Write comment..."
                            title={userId ? undefined : "Requires login"}
                        >

                        </textarea>
                        <div className="line">
                            <div className="line-animation"></div>
                        </div>
                    </div>

                    {(showCommentBoxFooter && userId) &&
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
                                        disabled={(commentText === initialText || isCreateCommentLoading || isUpdateCommentLoading) ? true : false}
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