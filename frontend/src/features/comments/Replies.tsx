import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import { useLazyGetCommentsQuery } from "./commentsApiSlice";
import { selectLimit, selectSort } from "./commentsSlice";
import Comment from "./Comment";
import { CommentType, TargetTypeType } from "src/types";

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
};

export default Replies