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

export type CommentType = {
    id: string;
    authorId: string;
    username: string;
    avatarUrl: string,
    parentId: string | null;
    targetId: string;
    targetType: TargetTypeType;
    content: string;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    replies?: CommentType[];
    hasLiked?: boolean;
}

export type GetCommentsResponseType = {
    comments: CommentType[];
    totalComments: number;
};