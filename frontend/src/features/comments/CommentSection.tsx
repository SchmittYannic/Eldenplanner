import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useLazyGetCommentsQuery } from "src/features/comments/commentsApiSlice";
import { selectAllCommentIds, selectLastFetchedTimestamp, selectLimit, selectSort, selectTotalComments } from "./commentsSlice";
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

    const [fetchComment, {
        isLoading,
    }] = useLazyGetCommentsQuery();

    // useGetCommentsQuery({
    //     targetId,
    //     targetType,
    //     parentId: "",
    //     lastFetchedTimestamp,
    //     sort,
    //     limit,
    // });

    const commentIds = useSelector(selectAllCommentIds);

    const [showCommentBoxFooter, setShowCommentBoxFooter] = useState(false);

    const onCommentBoxCancelClicked = () => {
        setShowCommentBoxFooter(false);
    };

    const onCommentBoxTextAreaFocus = () => {
        setShowCommentBoxFooter(true);
    };

    useEffect(() => {
        fetchComment({
            targetId,
            targetType,
            parentId: "",
            lastFetchedTimestamp,
            sort,
            limit,
        })
    }, [])

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
                {commentIds.map((commentId) => (
                    <Comment
                        key={commentId}
                        targetId={targetId}
                        targetType={targetType}
                        commentId={commentId}
                    />
                ))}
            </div>
        </section>
    )
}

export default CommentSection