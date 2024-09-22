import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
    resetCommentsSliceState,
} from "./commentsSlice";
import { addToast } from "src/features/toasts/toastSlice";
import CommentBox from "./CommentBox";
import Comment from "src/features/comments/Comment";
import { CustomSelect, ClipLoader } from "src/components/ui";
import { isValidCache } from "src/utils/functions";
import { isSortCommentsType } from "src/utils/typeguards";
import { SortCommentsType, sortOptions, TargetTypeType } from "src/types";
import "src/features/comments/CommentSection.scss";

type CommentSectionPropsType = {
    targetId: string,
    targetType: TargetTypeType,
}

const CommentSection = ({
    targetId,
    targetType,
}: CommentSectionPropsType) => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const ViewBuildSettingSearchParam = searchParams.get("sortComments");
    const initSort = isSortCommentsType(ViewBuildSettingSearchParam) ? ViewBuildSettingSearchParam : "new";

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
    const [isFetchingComments, setIsFetchingComments] = useState(false);

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

    const fetchInitialComments = async () => {
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
            try {
                setIsFetchingComments(true);
                await fetchComments({
                    targetId,
                    targetType,
                    parentId: "",
                    lastFetchedTimestamp,
                    sort,
                    limit,
                }).unwrap();
                setIsFetchingComments(false);
            } catch (err) {
                setIsFetchingComments(false);
                dispatch(addToast({
                    type: "error",
                    text: `Error fetching comments for ${targetType} ${targetId}`,
                }));
            }
        }
    };

    useEffect(() => {
        dispatch(changeSort(initSort));
    }, []);

    useEffect(() => {
        // reset state in commentSlice
        dispatch(resetCommentsSliceState());
        fetchInitialComments();
    }, [targetId, targetType]);

    // if sort changes
    useEffect(() => {
        fetchInitialComments();

        // Create a copy of the current search params
        const newSearchParams = new URLSearchParams(searchParams);

        // Update the search params
        newSearchParams.set("sortComments", sort);

        navigate(`?${newSearchParams.toString()}`, { replace: true });
    }, [sort]);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        // if intersecting
        const handleIntersection = async () => {
            // check if currently not fetching and there are more comments to load
            if (!hasMoreComments || isFetching) return
            try {
                setIsFetchingComments(true);
                await fetchComments({
                    targetId,
                    targetType,
                    parentId: "",
                    lastFetchedTimestamp,
                    sort,
                    limit,
                }).unwrap();
                setIsFetchingComments(false);
            } catch (err) {
                setIsFetchingComments(false);
                dispatch(addToast({
                    type: "error",
                    text: `Error fetching comments for ${targetType} ${targetId}`,
                }));
            }
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
        <>
            <div className="comment-section-header">
                <div className="comment-section-title">
                    <h2>{totalComments} Comments</h2>
                    <CustomSelect
                        id="sortComments"
                        className="customselect style2"
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
            {isFetchingComments &&
                <div className="full flex justify-center">
                    <ClipLoader
                        color={"rgb(231, 214, 182)"}
                        loading={true}
                        size={30}
                    />
                </div>
            }
        </>
    )
}

export default CommentSection