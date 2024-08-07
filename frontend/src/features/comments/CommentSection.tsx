import { useState } from "react";
import { useSelector } from "react-redux";

import { useGetCommentsQuery } from "src/features/comments/commentsApiSlice";
import { selectAllComments, selectLastFetchedTimestamp, selectLimit, selectSort, selectTotalComments } from "./commentsSlice";
import CommentBox from "./CommentBox";
import Comment from "src/features/comments/Comment";
import { TargetTypeType } from "src/types";
import "src/features/comments/CommentSection.scss";

type CommentSectionPropsType = {
    targetId: string,
    targetType: TargetTypeType,
}

const CommentSection = ({
    targetId,
    targetType,
}: CommentSectionPropsType) => {

    const lastFetchedTimestamp = useSelector(selectLastFetchedTimestamp);
    const sort = useSelector(selectSort);
    const limit = useSelector(selectLimit);
    const totalComments = useSelector(selectTotalComments);

    useGetCommentsQuery({
        targetId,
        targetType,
        lastFetchedTimestamp,
        sort,
        limit,
    });

    const comments = useSelector(selectAllComments);

    const [showCommentBoxFooter, setShowCommentBoxFooter] = useState(false);

    const onCommentBoxCancelClicked = () => {
        setShowCommentBoxFooter(false);
    };

    const onCommentBoxTextAreaFocus = () => {
        setShowCommentBoxFooter(true);
    };

    console.log(comments)

    return (
        <section className="CommentSection">
            <div className="comment-section-header">
                <h2>{totalComments} Comments</h2>

                <CommentBox
                    targetId={targetId}
                    targetType={targetType}
                    parentId={null}
                    showCommentBoxFooter={showCommentBoxFooter}
                    callbackOnCancel={onCommentBoxCancelClicked}
                    onTextAreaFocus={onCommentBoxTextAreaFocus}
                />
            </div>

            <div className="comments">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        targetId={targetId}
                        targetType={targetType}
                        comment={comment}
                    />
                ))}
            </div>
        </section>
    )
}

export default CommentSection