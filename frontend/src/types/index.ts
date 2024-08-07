export type BuildListItem = {
    buildId: number,
    authorId: string,
    title: string,
    author: string | null,
    level: number,
    stars: number,
    createdAt: string,
    updatedAt: string,
};

export type CustomFormError = {
    data: {
        message: string,
        context: {
            label: string,
        },
    },
    status: number
};

export type CustomError = {
    data: {
        message: string,
        action?: string,
    },
    status: number
};

export type TargetTypeType = "Build" | "User";

export type SortCommentsType = "new" | "old" | "popular";

export type CommentType<CommentId extends string = string, ReplyId extends string = string> = {
    id: CommentId;
    authorId: string;
    username: string;
    avatarUrl: string,
    parentId: string | null;
    targetId: string;
    targetType: TargetTypeType;
    content: string;
    totalReplies: number;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    repliesIds?: ReplyId[];
    repliesEntities?: Record<ReplyId, CommentType<ReplyId>>;
    lastReplyFetchedTimestamp?: string;
    hasMoreReplies?: boolean;
    hasLiked?: boolean;
}

export type GetCommentsResponseType<CommentId extends string> = {
    ids: CommentId[];
    entities: Record<CommentId, CommentType<CommentId>>;
    totalComments: number;
};