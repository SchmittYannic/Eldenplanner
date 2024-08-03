export type BuildListItem = {
    buildId: number,
    authorId: string,
    title: string,
    author: string,
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