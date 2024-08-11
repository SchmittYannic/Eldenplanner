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

export const sortOptions = ["new", "old"] as const;
export type SortCommentsType = typeof sortOptions[number];

const likeTypeOptions = ["like", "dislike"] as const;
export type LikeTypeType = typeof likeTypeOptions[number];

export type CommentType<CommentId extends string = string, ReplyId extends string = string> = {
    id: CommentId,
    authorId: string,
    username: string,
    avatarUrl: string,
    parentId: string | null,
    targetId: string,
    targetType: TargetTypeType,
    content: string,
    totalReplies: number,
    likes: number,
    dislikes: number,
    createdAt: string,
    updatedAt: string,
    repliesIds?: ReplyId[],
    repliesEntities?: Record<ReplyId, CommentType<ReplyId>>,
    lastReplyFetchedTimestamp?: string,
    hasMoreReplies?: boolean,
    hasLiked?: boolean,
    hasDisliked?: boolean,
}

export type GetCommentsResponseType<CommentId extends string> = {
    ids: CommentId[],
    entities: Record<CommentId, CommentType<CommentId>>,
    totalComments: number,
};

export type GetCommentsQueryParamsType = {
    targetId: string,
    targetType: TargetTypeType,
    parentId: string,
    lastFetchedTimestamp: string,
    sort?: SortCommentsType,
    limit?: number,
}

export type AddLikeDislikeMutationParamsType = {
    commentId: string,
    type: LikeTypeType,
} & GetCommentsQueryParamsType

export type CreateCommentMutationParamsType = {
    authorId: string,
    username: string,
    avatarUrl: string,
    content: string,
} & GetCommentsQueryParamsType

/* Popup slice related types */

export const iconMapKeys = ["edit", "delete"] as const;
export type IconMapKeyType = typeof iconMapKeys[number];

const PopupStateTypes = ["COMMENT_OPTIONLIST", "NONE"] as const;
type PopupStateTypeTypes = typeof PopupStateTypes[number];

export type PositionType = {
    left?: number,
    top?: number,
    right?: number,
    bottom?: number,
}

export type CommentOptionlistPropsType = {
    text?: string,
    icon?: IconMapKeyType,
    commentId?: string,
}[]

type PopupPropsType = {
    NONE: {},
    COMMENT_OPTIONLIST: CommentOptionlistPropsType,
};

export type PopupStateType = {
    refId: string | null,
    isOpen: boolean,
    type: PopupStateTypeTypes,
    position: PositionType,
    props: PopupPropsType[PopupStateTypeTypes],
};