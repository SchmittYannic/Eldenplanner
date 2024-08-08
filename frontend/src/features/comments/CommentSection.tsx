import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { useLazyGetCommentsQuery } from "src/features/comments/commentsApiSlice";
import { selectAllCommentIds, selectHasMoreComments, selectLastFetchedTimestamp, selectLimit, selectSort, selectTotalComments } from "./commentsSlice";
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
    const hasMoreComments = useSelector(selectHasMoreComments);
    const totalComments = useSelector(selectTotalComments);

    const [fetchComments, {
        isFetching,
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

    const observer = useRef<IntersectionObserver | null>(null);
    const observerRef = useRef<HTMLDivElement>(null);
    const [showCommentBoxFooter, setShowCommentBoxFooter] = useState(false);
    const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

    const onCommentBoxCancelClicked = () => {
        setShowCommentBoxFooter(false);
    };

    const onCommentBoxTextAreaFocus = () => {
        setShowCommentBoxFooter(true);
    };

    useEffect(() => {
        fetchComments({
            targetId,
            targetType,
            parentId: "",
            lastFetchedTimestamp,
            sort,
            limit,
        })
    }, []);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        const handleIntersection = () => {
            if (hasMoreComments && !isFetching) {
                fetchComments({
                    targetId,
                    targetType,
                    parentId: "",
                    lastFetchedTimestamp,
                    sort,
                    limit,
                });
            }
        };

        const debouncedFetch = () => {
            if (debounceTimeout) clearTimeout(debounceTimeout);

            const timeout = setTimeout(() => {
                handleIntersection();
            }, 300);

            setDebounceTimeout(Number(timeout));
        };

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                debouncedFetch();
            }
        });

        if (observerRef.current) observer.current.observe(observerRef.current);

        return () => {
            if (observer.current) observer.current.disconnect();
            if (debounceTimeout) clearTimeout(debounceTimeout);
        };
    }, [
        hasMoreComments,
        isFetching,
        fetchComments,
        targetId,
        targetType,
        lastFetchedTimestamp,
        sort,
        limit
    ]);

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

            <div id="load-more" ref={observerRef} />
            {isFetching && <p>Loading more comments...</p>}
        </section>
    )
}

export default CommentSection