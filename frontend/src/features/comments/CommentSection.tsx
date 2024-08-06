import { useEffect, useState } from "react";
import { useGetCommentsQuery } from "src/features/comments/commentApiSlice";
import Comment from "src/features/comments/Comment";
import { CommentType, sortCommentsType, TargetTypeType } from "src/types";
import "src/features/comments/CommentSection.scss";

type CommentSectionPropsType = {
    targetId: string,
    targetType: TargetTypeType,
}

const CommentSection = ({
    targetId,
    targetType,
}: CommentSectionPropsType) => {

    console.log(targetId, targetType)

    const [comments, setComments] = useState<CommentType[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [lastFetchedTimestamp, setLastFetchedTimestamp] = useState<string>("");
    const [sort, setSort] = useState<sortCommentsType>("new");
    const [limit, setLimit] = useState<number>(25);

    const {
        data,
        isFetching,
        isError,
        isSuccess,
        refetch,
    } = useGetCommentsQuery({
        targetId,
        targetType,
        lastFetchedTimestamp,
        sort,
        limit,
    });

    useEffect(() => {
        if (data) {
            const { comments: newComments, totalComments } = data;

            if (newComments.length > 0) {
                setComments((prev) => {
                    const existingIds = new Set(prev.map(comment => comment.id));
                    const uniqueNewComments = newComments.filter(comment => !existingIds.has(comment.id));
                    return [...prev, ...uniqueNewComments];
                });

                // Update lastFetchedTimestamp based on the last comment's timestamp in the new data
                setLastFetchedTimestamp(newComments[newComments.length - 1]?.createdAt || "");

                // Check if there are more comments to fetch
                if (comments.length >= totalComments) {
                    setHasMore(false);
                }
            }
        }
    }, [data]);

    console.log(comments)

    return (
        <section className="CommentSection">
            <h2>Comments</h2>

            <div className="comments">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                    />
                ))}
            </div>
        </section>
    )
}

export default CommentSection