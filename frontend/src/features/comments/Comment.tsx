import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    BsHandThumbsUp,
    BsHandThumbsUpFill,
    BsHandThumbsDown,
    //BsHandThumbsDownFill,
} from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";

import { useLazyGetCommentsQuery } from "./commentsApiSlice";
import { selectCommentById, selectLimit, selectSort } from "./commentsSlice";
import AuthorThumbnail from "./AuthorThumbnail";
import CommentBox from "./CommentBox";
import { sinceDateInString } from "src/utils/functions";
import { CommentType, TargetTypeType } from "src/types";

type CommentPropsType = {
    targetId: string,
    targetType: TargetTypeType,
    commentId: string,
    parentId?: string,
}

const Comment = ({
    targetId,
    targetType,
    commentId,
    parentId = "",
}: CommentPropsType) => {

    const parentComment = parentId ? useSelector((state) => selectCommentById(state, parentId)) : null;
    const comment = !parentComment ? useSelector((state) => selectCommentById(state, commentId)) : parentComment.repliesEntities ? parentComment.repliesEntities[commentId] : null;

    if (!comment) return (<></>)

    const commentBoxTextAreaRef = useRef<HTMLTextAreaElement>(null)
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [showReplies, setShowReplies] = useState(false);

    const commentCreatedAt = new Date(comment.createdAt);
    const commentSince = sinceDateInString(commentCreatedAt);
    const commentUpdatedAt = new Date(comment.updatedAt);
    const gotCommentUpdated = commentCreatedAt.getTime() !== commentUpdatedAt.getTime();

    const onReplyClicked = () => {
        setShowCommentBox(true);
        setTimeout(() => {
            if (commentBoxTextAreaRef.current) commentBoxTextAreaRef.current.focus();
        }, 100);
    };

    const onShowRepliesClicked = () => {
        setShowReplies(!showReplies);
    };

    const onCommentBoxCancelClicked = () => {
        setShowCommentBox(false);
    };

    return (
        <div className="comment">
            <div className="comment-thread">
                <div className="comment-body">
                    <AuthorThumbnail
                        href={`/user/${comment.authorId}`}
                        src={comment.avatarUrl}
                        width={40}
                        height={40}
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
                                >
                                    <div
                                        className="icon-container"
                                    >
                                        {/* Change button once hasDisliked is created */}
                                        <BsHandThumbsDown aria-hidden />
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
                                {showCommentBox &&
                                    <CommentBox
                                        targetId={targetId}
                                        targetType={targetType}
                                        parentId={comment.id}
                                        showCommentBoxFooter={true}
                                        callbackOnCancel={onCommentBoxCancelClicked}
                                        textareaRef={commentBoxTextAreaRef}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="comment-action-menu">
                        {/* add burger menu with actions like edit */}
                    </div>
                </div>

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
}

type RepliesPropsType = {
    targetId: string,
    targetType: TargetTypeType,
    parentComment: CommentType,
}

const Replies = ({
    targetId,
    targetType,
    parentComment,
}: RepliesPropsType) => {

    const [fetchComment, {
        isLoading,
    }] = useLazyGetCommentsQuery();

    const sort = useSelector(selectSort);
    const limit = useSelector(selectLimit);

    useEffect(() => {
        // if all replies are already loaded dont trigger fetch
        if (parentComment.hasMoreReplies === false) return // indented to let hasMoreReplies === undefined pass the check and trigger a fetch

        fetchComment({
            targetId,
            targetType,
            parentId: parentComment.id,
            lastFetchedTimestamp: parentComment.lastReplyFetchedTimestamp || "",
            sort, //always order replies oldest first
            limit, //maybe use state later
        });
    }, [])

    if (!parentComment.repliesIds) return <></>

    return (
        <>
            {parentComment.repliesIds.map((id) =>
                <Comment
                    key={id}
                    targetId={targetId}
                    targetType={targetType}
                    commentId={id}
                    parentId={parentComment.id}
                />
            )}
        </>
    )
}

export default Comment