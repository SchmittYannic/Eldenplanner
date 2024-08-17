import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

import { useLazyGetCommentsQuery } from "./commentsApiSlice";
import { selectLimit, selectSort } from "./commentsSlice";
import { addToast } from "src/features/toasts/toastSlice";
import Comment from "./Comment";
import { ClipLoader } from "src/components/ui";
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

    const dispatch = useDispatch();
    const [fetchComments] = useLazyGetCommentsQuery();

    const sort = useSelector(selectSort);
    const limit = useSelector(selectLimit);

    const [isFetchingReplies, setIsFetchingReplies] = useState(false);

    const onLoadMoreRepliesClicked = async () => {
        // if all replies are already loaded dont trigger fetch
        if (parentComment.hasMoreReplies === false) return
        try {
            setIsFetchingReplies(true);
            await fetchComments({
                targetId,
                targetType,
                parentId: parentComment.id,
                lastFetchedTimestamp: parentComment.lastReplyFetchedTimestamp || "",
                sort,
                limit,
            }).unwrap();
            setIsFetchingReplies(false);
        } catch (err) {
            setIsFetchingReplies(false);
            dispatch(addToast({
                type: "error",
                text: `Error fetching replies for ${parentComment.id}`,
            }))
        }
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
                                {isFetchingReplies ?
                                    <ClipLoader
                                        color={"#3ea6ff"}
                                        loading={true}
                                        size={16}
                                    />
                                    :
                                    <MdOutlineSubdirectoryArrowRight aria-hidden />
                                }
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