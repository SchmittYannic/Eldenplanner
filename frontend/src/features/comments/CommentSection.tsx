import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "src/app/store";
import { useLazyGetCommentsQuery } from "src/features/comments/commentsApiSlice";
import {
    selectAllCommentIds,
    selectHasMoreComments,
    selectLastFetchedTimestamp,
    selectLimit,
    selectSort,
    selectTotalComments,
    changeSort,
    selectCachedCommentsData,
    setComments,
    setTotalComments,
    updateHasMore,
    setLastFetchedTimestamp,
} from "./commentsSlice";
import CommentBox from "./CommentBox";
import Comment from "src/features/comments/Comment";
import { CustomSelect } from "src/components/ui";
import { SortCommentsType, sortOptions, TargetTypeType } from "src/types";
import { isValidCache } from "src/utils/functions";
import "src/features/comments/CommentSection.scss";

type CommentSectionPropsType = {
    targetId: string,
    targetType: TargetTypeType,
}

const CommentSection = ({
    targetId,
    targetType,
}: CommentSectionPropsType) => {

    // select cachedData providing targetId and targetType for key of cache
    const cachedData = useSelector((state: RootState) => selectCachedCommentsData(state, targetId, targetType));

    // get state from commentsSlice
    const lastFetchedTimestamp = useSelector(selectLastFetchedTimestamp);
    const sort = useSelector(selectSort);
    const limit = useSelector(selectLimit);
    const hasMoreComments = useSelector(selectHasMoreComments);
    const totalComments = useSelector(selectTotalComments);
    // get all commentIds to map over in jsx to render comments
    const commentIds = useSelector(selectAllCommentIds);
    const dispatch = useDispatch();

    // lazyquery hook from getComments in commentsApiSlice
    const [fetchComments, {
        isFetching,
    }] = useLazyGetCommentsQuery();

    // refs for intersectionObserver
    const observer = useRef<IntersectionObserver | null>(null);
    const observerRef = useRef<HTMLDivElement>(null);

    // local state
    const [showCommentBoxFooter, setShowCommentBoxFooter] = useState(false);
    const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

    // Event handlers for CommentBox and CustomSelect sortComments
    const onCommentBoxCancelClicked = () => {
        setShowCommentBoxFooter(false);
    };

    const onCommentBoxTextAreaFocus = () => {
        setShowCommentBoxFooter(true);
    };

    const onSortChanged = (input: SortCommentsType) => {
        dispatch(changeSort(input))
    };

    // if sort changes
    useEffect(() => {
        if (cachedData && isValidCache(cachedData)) {
            // if cachedData exists
            const { ids, entities, totalComments } = cachedData;
            // set commentIds, commentEntities and totalComments from cachedData
            dispatch(setComments({ ids, entities }));
            dispatch(setTotalComments(totalComments));
            // let state update its hasMore comments state.
            dispatch(updateHasMore());
            // update lastFetchedTimestamp state from last comment from cachedData
            if (ids.length === 0) return
            const lastId = ids[ids.length - 1];
            const lastFetchedTimestampFromCache = entities[lastId].createdAt;
            dispatch(setLastFetchedTimestamp(lastFetchedTimestampFromCache));
        } else {
            // if no cachedData exists fetch comments
            fetchComments({
                targetId,
                targetType,
                parentId: "",
                lastFetchedTimestamp,
                sort,
                limit,
            });
        }
    }, [sort]);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        // if intersecting
        const handleIntersection = () => {
            // check if currently not fetching and there are more comments to load
            if (!hasMoreComments || isFetching) return
            fetchComments({
                targetId,
                targetType,
                parentId: "",
                lastFetchedTimestamp,
                sort,
                limit,
            });
        };

        // add debounce to fetch
        const debouncedFetch = () => {
            if (debounceTimeout) clearTimeout(debounceTimeout);

            const timeout = setTimeout(() => {
                handleIntersection();
            }, 300);

            setDebounceTimeout(Number(timeout));
        };

        // create IntersectionObserver and start observing
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                debouncedFetch();
            }
        });

        if (observerRef.current) observer.current.observe(observerRef.current);

        // cleanup observer and timeout
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
                <div className="flex" style={{ marginBottom: "24px" }}>
                    <h2>{totalComments} Comments</h2>
                    <CustomSelect
                        id="sortComments"
                        className="customselect selectsorttype"
                        label="Sort by:"
                        value={sort}
                        setValue={onSortChanged}
                        options={[...sortOptions]}
                        optionScrollInView={false}
                    />
                </div>

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