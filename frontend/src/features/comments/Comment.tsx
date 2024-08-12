import { MouseEventHandler, useEffect, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    BsHandThumbsUp,
    BsHandThumbsUpFill,
    BsHandThumbsDown,
    BsHandThumbsDownFill,
    BsThreeDotsVertical,
} from "react-icons/bs";
import {
    MdExpandMore,
    MdOutlineSubdirectoryArrowRight,
} from "react-icons/md";

import { useAddLikeDislikeMutation, useLazyGetCommentsQuery, useRemoveLikeDislikeMutation } from "./commentsApiSlice";
import {
    selectCommentById,
    selectLastFetchedTimestamp,
    selectLimit,
    selectSort,
    selectIsEditMode,
} from "./commentsSlice";
import { addCommentOptionlist } from "src/features/popups/popupSlice";
import useAuth from "src/hooks/useAuth";
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

    // is comment in edit mode
    const isEditMode = useSelector(selectIsEditMode(comment.id));

    const { userId } = useAuth();
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

    const onLikeClicked = () => {
        // if visitor -> do nothing
        if (!userId) return
        // if authenticated user is comment author -> do nothing
        if (userId === comment.authorId) return
        if (comment.hasLiked) {
            removeLikeDislike({
                commentId: comment.id,
                type: "like",
                targetId,
                targetType,
                parentId,
                lastFetchedTimestamp,
                sort,
                limit,
            })
        } else {
            addLikeDislike({
                commentId: comment.id,
                type: "like",
                targetId,
                targetType,
                parentId,
                lastFetchedTimestamp,
                sort,
                limit,
            })
        }
    };

    const onDislikeClicked = () => {
        // if visitor -> do nothing
        if (!userId) return
        // if authenticated user is comment author -> do nothing
        if (userId === comment.authorId) return
        if (comment.hasDisliked) {
            removeLikeDislike({
                commentId: comment.id,
                type: "dislike",
                targetId,
                targetType,
                parentId,
                lastFetchedTimestamp,
                sort,
                limit,
            })
        } else {
            addLikeDislike({
                commentId: comment.id,
                type: "dislike",
                targetId,
                targetType,
                parentId,
                lastFetchedTimestamp,
                sort,
                limit,
            })
        }
    };

    const onActionButtonClicked: MouseEventHandler<HTMLButtonElement> = () => {
        if (userId !== comment.authorId) return
        dispatch(addCommentOptionlist({
            refId: `action-${comment.id}`,
            props: {
                commentId: comment.id,
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
                                {showCommentBox &&
                                    <CommentBox
                                        targetId={targetId}
                                        targetType={targetType}
                                        parentId={parentId ? parentId : comment.id}
                                        showCommentBoxFooter={true}
                                        callbackOnCancel={onCommentBoxCancelClicked}
                                        textareaRef={commentBoxTextAreaRef}
                                        initialText={parentId ? `@${parentComment?.username} ` : undefined}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="comment-action-menu">
                        {userId === comment.authorId &&
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
})

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

    const [fetchComments, {
        isLoading,
    }] = useLazyGetCommentsQuery();

    const sort = useSelector(selectSort);
    const limit = useSelector(selectLimit);

    const onLoadMoreRepliesClicked = () => {
        // if all replies are already loaded dont trigger fetch
        if (parentComment.hasMoreReplies === false) return

        fetchComments({
            targetId,
            targetType,
            parentId: parentComment.id,
            lastFetchedTimestamp: parentComment.lastReplyFetchedTimestamp || "",
            sort,
            limit,
        });
    }

    //initial fetch on component mount
    useEffect(() => {
        // if all replies are already loaded dont trigger fetch
        // indented to let hasMoreReplies === undefined pass the check and trigger a fetch
        if (parentComment.hasMoreReplies === false) return
        // if repliesIds are already present in parentComment dont trigger fetch -> the case when parentComment loaded from cache
        if (parentComment.repliesIds && parentComment.repliesIds.length !== 0) return
        fetchComments({
            targetId,
            targetType,
            parentId: parentComment.id,
            lastFetchedTimestamp: parentComment.lastReplyFetchedTimestamp || "",
            sort,
            limit,
        });
    }, []);

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

            {parentComment.hasMoreReplies === true &&
                <div>
                    <span className="text-btn-wrapper" style={{ display: "inline-block" }}>
                        <button
                            className="reply-expand-btn"
                            type="button"
                            onClick={onLoadMoreRepliesClicked}
                        >
                            <div
                                className="icon-container"
                                style={{
                                    marginRight: "6px",
                                }}
                            >
                                <MdOutlineSubdirectoryArrowRight aria-hidden />
                            </div>
                            <div>
                                load more replies
                            </div>
                        </button>
                    </span>
                </div>
            }
        </>
    )
}

export default Comment