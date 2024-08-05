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
    } = useGetCommentsQuery({
        targetId,
        targetType,
        lastFetchedTimestamp,
        sort,
        limit,
    });

    useEffect(() => {
        if (data) {
            setComments(prevComments => [...prevComments, ...data.comments]);
            setHasMore(data.comments.length === 25); // Check if more comments are available
            if (data.comments.length) {
                setLastFetchedTimestamp(data.comments[data.comments.length - 1].createdAt);
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