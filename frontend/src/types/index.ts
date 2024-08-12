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

export const TargetTypeOptions = ["Build", "User"] as const
export type TargetTypeType = typeof TargetTypeOptions[number];

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

export type DeleteCommentMutationParamsType = {
    commentId: string
} & GetCommentsQueryParamsType

/* Popup slice related types */

export const iconMapKeys = ["edit", "delete"] as const;
export type IconMapKeyType = typeof iconMapKeys[number];

const PopupStateTypes = ["NONE", "COMMENT_OPTIONLIST", "COMMENT_DELETE"] as const;
type PopupStateTypeTypes = typeof PopupStateTypes[number];

export type PositionType = {
    left?: number,
    top?: number,
    right?: number,
    bottom?: number,
}

export type CommentOptionlistPropsType = {
    commentId: string,
    targetType: TargetTypeType,
    targetId: string,
    parentId: string,
    options: {
        text?: string,
        icon?: IconMapKeyType,
    }[],
}

export type CommentDeletePropsType = {
    commentId: string,
    targetType: TargetTypeType,
    targetId: string,
    parentId: string,
}

type PopupPropsType = {
    NONE: {},
    COMMENT_OPTIONLIST: CommentOptionlistPropsType,
    COMMENT_DELETE: CommentDeletePropsType,
};

export type PopupStateType = {
    refId: string | null,
    isOpen: boolean,
    type: PopupStateTypeTypes,
    position: PositionType,
    props: PopupPropsType[PopupStateTypeTypes],
};