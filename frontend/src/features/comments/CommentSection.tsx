import { useState } from "react";
import { useGetCommentsQuery } from "src/features/comments/commentApiSlice";
import Comment from "src/features/comments/Comment";
import { CommentType, sortCommentsType, TargetTypeType } from "src/types";


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

    console.log(data)

    return (
        <section className="CommentSection">
            <h2>Comments</h2>

            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </section>
    )
}

export default CommentSection