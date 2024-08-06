import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    BsHandThumbsUp,
    BsHandThumbsUpFill,
    BsHandThumbsDown,
    BsHandThumbsDownFill,
} from "react-icons/bs";
import { CommentType } from "src/types";
import AuthorThumbnail from "./AuthorThumbnail";
import CommentBox from "./CommentBox";
import { sinceDateInString } from "src/utils/functions";

type CommentPropsType = {
    comment: CommentType,
}

const Comment = ({
    comment,
}: CommentPropsType) => {

    const commentBoxTextAreaRef = useRef<HTMLTextAreaElement>(null)
    const [showCommentBox, setShowCommentBox] = useState(false);

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

    const onCommentBoxCancelClicked = () => {
        setShowCommentBox(false);
    };

    return (
        <div className="comment">
            <div className="comment-thread">
                <div className="comment-body">
                    <AuthorThumbnail
                        href={`/user/${comment.authorId}`}
                        src=""
                        alt=""
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
                                <span className="text-btn-wrapper">
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

                <div className="comment-replies">
                    <div className="expander">
                        <div className="expander-header">
                            {/* Add Button to expand replies here */}
                        </div>
                        <div className="expander-content">
                            {/* Add replies here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment