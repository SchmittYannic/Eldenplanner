import {
    MouseEventHandler,
    useRef,
    useState,
    memo,
    useEffect,
} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useAddLikeDislikeMutation, useRemoveLikeDislikeMutation } from "./commentsApiSlice";
import {
    selectCommentById,
    selectLastFetchedTimestamp,
    selectLimit,
    selectSort,
    selectIsEditMode,
    setIsEditMode,
    selectIsReplyMode,
    setIsReplyMode,
} from "./commentsSlice";
import { addCommentOptionlist } from "src/features/popups/popupSlice";
import { addToast } from "src/features/toasts/toastSlice";
import useAuth from "src/hooks/useAuth";
import AuthorThumbnail from "./AuthorThumbnail";
import CommentBox from "./CommentBox";
import Replies from "./Replies";
import {
    BsHandThumbsUp,
    BsHandThumbsUpFill,
    BsHandThumbsDown,
    BsHandThumbsDownFill,
    BsThreeDotsVertical,
    MdExpandMore
} from "src/components/icons";
import { sinceDateInString } from "src/utils/functions";
import { TargetTypeType } from "src/types";

type CommentPropsType = {
    targetId: string,
    targetType: TargetTypeType,
    commentId: string,
    parentId?: string,
}

const Comment = memo(({
    targetId,
    targetType,
    commentId,
    parentId = "",
}: CommentPropsType) => {

    // get comment or reply from state
    const parentComment = parentId ? useSelector((state) => selectCommentById(state, parentId)) : null;
    const comment = !parentComment ? useSelector((state) => selectCommentById(state, commentId)) : parentComment.repliesEntities ? parentComment.repliesEntities[commentId] : null;

    // if no comment or reply in state show nothing
    if (!comment) return (<></>);

    const dispatch = useDispatch();

    // mutation hooks
    const [addLikeDislike] = useAddLikeDislikeMutation();
    const [removeLikeDislike] = useRemoveLikeDislikeMutation();

    // get states needed for triggering the mutations above 
    const lastFetchedTimestamp = useSelector(selectLastFetchedTimestamp);
    const sort = useSelector(selectSort);
    const limit = useSelector(selectLimit);

    // is comment in edit/reply mode
    const isEditMode = useSelector(selectIsEditMode(comment.id));
    const isReplyMode = useSelector(selectIsReplyMode(comment.id));

    const { userId } = useAuth();
    const replyTextareaRef = useRef<HTMLTextAreaElement>(null);
    const updateCommentTextareaRef = useRef<HTMLTextAreaElement>(null);
    const [showReplies, setShowReplies] = useState(false);
    const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

    const isOwnUserProfile = targetType === "User" && targetId === userId;

    const commentCreatedAt = new Date(comment.createdAt);
    const commentSince = sinceDateInString(commentCreatedAt);
    const commentUpdatedAt = new Date(comment.updatedAt);
    const gotCommentUpdated = commentCreatedAt.getTime() !== commentUpdatedAt.getTime();

    // when clicking the reply button below a comment make the commentbox appear and focus the textarea
    const onReplyClicked = () => {
        dispatch(setIsReplyMode(comment.id));
        dispatch(setIsEditMode(null)); // reset isEditMode to make sure only 1 comment box is open at the time
        setTimeout(() => {
            if (replyTextareaRef.current) replyTextareaRef.current.focus();
        }, 100);
    };

    // clicking on show replies button will toggle the replies to appear/disappear
    const onShowRepliesClicked = () => {
        setShowReplies(!showReplies);
    };

    // clicking on cancel on the comment box of a reply
    const onCommentBoxCancelClicked = () => {
        dispatch(setIsReplyMode(null));
    };

    // clicking like button
    const onLikeClicked = async () => {
        // if visitor -> do nothing
        if (!userId) return
        // if authenticated user is comment author -> do nothing
        if (userId === comment.authorId) return

        try {
            if (comment.hasLiked) {
                await removeLikeDislike({
                    commentId: comment.id,
                    type: "like",
                    targetId,
                    targetType,
                    parentId,
                    lastFetchedTimestamp,
                    sort,
                    limit,
                }).unwrap();
            } else {
                await addLikeDislike({
                    commentId: comment.id,
                    type: "like",
                    targetId,
                    targetType,
                    parentId,
                    lastFetchedTimestamp,
                    sort,
                    limit,
                    hasDisliked: comment.hasDisliked,
                }).unwrap();
            }
        } catch (err) {
            dispatch(addToast({
                type: "error",
                text: `${comment.hasLiked ? "Removing" : "Adding"} like failed`,
            }));
        }
    };

    // clicking dislike button
    const onDislikeClicked = async () => {
        // if visitor -> do nothing
        if (!userId) return
        // if authenticated user is comment author -> do nothing
        if (userId === comment.authorId) return

        try {
            if (comment.hasDisliked) {
                await removeLikeDislike({
                    commentId: comment.id,
                    type: "dislike",
                    targetId,
                    targetType,
                    parentId,
                    lastFetchedTimestamp,
                    sort,
                    limit,
                }).unwrap();
            } else {
                await addLikeDislike({
                    commentId: comment.id,
                    type: "dislike",
                    targetId,
                    targetType,
                    parentId,
                    lastFetchedTimestamp,
                    sort,
                    limit,
                    hasLiked: comment.hasLiked,
                }).unwrap();
            }
        } catch (err) {
            dispatch(addToast({
                type: "error",
                text: `${comment.hasDisliked ? "Removing" : "Adding"} dislike failed`,
            }));
        }
    };

    // clicking 3 dots button on right side of own comments
    const onActionButtonClicked: MouseEventHandler<HTMLButtonElement> = () => {
        if (userId === comment.authorId) {
            dispatch(addCommentOptionlist({
                refId: `action-${comment.id}`,
                props: {
                    commentId: comment.id,
                    authorId: comment.authorId,
                    targetId,
                    targetType,
                    parentId,
                    options: [
                        {
                            text: "Edit",
                            icon: "edit",
                        },
                        {
                            text: "Delete",
                            icon: "delete",
                        },
                    ]
                },
            }));
        } else if (isOwnUserProfile) {
            dispatch(addCommentOptionlist({
                refId: `action-${comment.id}`,
                props: {
                    commentId: comment.id,
                    authorId: comment.authorId,
                    targetId,
                    targetType,
                    parentId,
                    options: [
                        {
                            text: "Delete",
                            icon: "delete",
                        },
                    ]
                },
            }));
        }
    };

    // clicking on cancel when editing own comment
    const onUpdateCommentCancelClicked = () => {
        // reset isEditMode -> makes comment box disappear again
        dispatch(setIsEditMode(null));
    };

    // whenever isEditMode changes to true focus textarea after 100ms
    // timeout to make sure updateCommentTextareaRef is referencing the textarea
    useEffect(() => {
        if (!isEditMode) return
        if (debounceTimeout) clearTimeout(debounceTimeout);

        const timeout = setTimeout(() => {
            if (updateCommentTextareaRef.current) updateCommentTextareaRef.current.focus();
        }, 100);

        setDebounceTimeout(Number(timeout));
    }, [isEditMode]);

    return (
        <div className="comment">
            <div className="comment-thread">
                {isEditMode ? (
                    <CommentBox
                        targetId={targetId}
                        targetType={targetType}
                        parentId={parentId ? parentId : ""}
                        commentId={comment.id}
                        showCommentBoxFooter={true}
                        callbackOnCancel={onUpdateCommentCancelClicked}
                        textareaRef={updateCommentTextareaRef}
                        initialText={comment.content}
                    />
                ) : (
                    <div className="comment-body">
                        <AuthorThumbnail
                            href={`/user/${comment.authorId}`}
                            src={comment.avatarUrl}
                        />
                        <div className="comment-main">
                            <div className="comment-header">
                                <div className="comment-author">
                                    <h3>
                                        <Link
                                            className="text-sm"
                                            to={`/user/${comment.authorId}`}
                                        >
                                            {comment.username}
                                        </Link>
                                    </h3>
                                    <span className="published-time-text">
                                        {commentSince} {gotCommentUpdated && "(edited)"}
                                    </span>
                                </div>
                            </div>
                            <div className="comment-content">
                                <span>{comment.content}</span>
                            </div>
                            <div className="comment-engagement-bar">
                                <div className="toolbar">
                                    <button
                                        className="like-btn"
                                        type="button"
                                        onClick={onLikeClicked}
                                    >
                                        <div
                                            className="icon-container"
                                        >
                                            {comment?.hasLiked ?
                                                <BsHandThumbsUpFill aria-hidden />
                                                :
                                                <BsHandThumbsUp aria-hidden />
                                            }
                                        </div>
                                    </button>
                                    <span className="likecount">
                                        {comment.likes}
                                    </span>
                                    <button
                                        className="dislike-btn"
                                        type="button"
                                        onClick={onDislikeClicked}
                                    >
                                        <div
                                            className="icon-container"
                                        >
                                            {comment?.hasDisliked ?
                                                <BsHandThumbsDownFill aria-hidden />
                                                :
                                                <BsHandThumbsDown aria-hidden />
                                            }
                                        </div>
                                    </button>
                                    <span className="dislikecount">
                                        {comment.dislikes}
                                    </span>
                                    <span className="text-btn-wrapper" style={{ marginLeft: "8px" }}>
                                        <button
                                            type="button"
                                            onClick={onReplyClicked}
                                        >
                                            Reply
                                        </button>
                                    </span>
                                </div>
                                <div className="reply-dialog">
                                    {isReplyMode &&
                                        <CommentBox
                                            targetId={targetId}
                                            targetType={targetType}
                                            parentId={parentId ? parentId : comment.id}
                                            showCommentBoxFooter={true}
                                            callbackOnCancel={onCommentBoxCancelClicked}
                                            textareaRef={replyTextareaRef}
                                            initialText={parentId ? `@${parentComment?.username} ` : undefined}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="comment-action-menu">
                            {(userId === comment.authorId || isOwnUserProfile) &&
                                <button
                                    id={`action-${comment.id}`}
                                    className="dot-btn"
                                    type="button"
                                    onClick={onActionButtonClicked}
                                >
                                    <div
                                        className="icon-container"
                                    >
                                        <BsThreeDotsVertical aria-hidden />
                                    </div>
                                </button>
                            }
                        </div>
                    </div>
                )}

                {(comment.totalReplies > 0 && parentId === "") &&
                    <div className="comment-replies">
                        <div className="expander">
                            <div className="expander-header">
                                <span className="text-btn-wrapper" style={{ display: "inline-block" }}>
                                    <button
                                        className="reply-expand-btn"
                                        type="button"
                                        onClick={onShowRepliesClicked}
                                    >
                                        <div
                                            className="icon-container"
                                            style={{
                                                marginRight: "6px",
                                            }}
                                        >
                                            <MdExpandMore
                                                className={showReplies ? "rotate" : ""}
                                                aria-hidden
                                            />
                                        </div>
                                        <div>
                                            {comment.totalReplies} {comment.totalReplies === 1 ? "Reply" : "Replies"}
                                        </div>
                                    </button>
                                </span>
                            </div>

                            {showReplies &&
                                <div className="expander-content">
                                    <Replies
                                        targetId={targetId}
                                        targetType={targetType}
                                        parentComment={comment}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
});

export default Comment