import {
    CustomFormError,
    CustomError,
    CommentOptionlistPropsType,
    iconMapKeys,
    IconMapKeyType,
    TargetTypeType,
    TargetTypeOptions,
    CommentDeletePropsType,
    UserAsAdminType,
} from "src/types";

function isFieldName<T extends object>(key: number | string | symbol, formData: T): key is keyof T {
    return key in formData;
}

function isCustomFormError(object: any): object is CustomFormError {
    if (typeof object !== "object") return false
    if (!("data" in object)) return false
    if (typeof object.data !== "object") return false
    if (!("status" in object)) return false
    if (typeof object.status !== "number") return false
    if (!("message" in object.data)) return false
    if (typeof object.data.message !== "string") return false
    if (!("context" in object.data)) return false
    if (typeof object.data.context !== "object") return false
    if (!("label" in object.data.context)) return false
    if (typeof object.data.context.label !== "string") return false
    return true
}

function isCustomError(object: any): object is CustomError {
    if (typeof object !== "object") return false
    if (!("data" in object)) return false
    if (typeof object.data !== "object") return false
    if (!("status" in object)) return false
    if (typeof object.status !== "number") return false
    if (!("message" in object.data)) return false
    if (typeof object.data.message !== "string") return false
    if ("action" in object.data && typeof object.data.action !== "string") return false
    return true
};

function isIconMapKeyType(key: any): key is IconMapKeyType {
    return iconMapKeys.includes(key);
}

function isTargetTypeType(type: any): type is TargetTypeType {
    return TargetTypeOptions.includes(type);
}

function isCommentOptionlistPropsType(obj: any): obj is CommentOptionlistPropsType {
    if (typeof obj !== "object" || obj === null) return false;

    const { commentId, targetType, targetId, parentId, options } = obj;

    // Check string fields
    if (typeof commentId !== "string" || typeof targetId !== "string" || typeof parentId !== "string") {
        return false;
    }

    // Check targetType
    if (!isTargetTypeType(targetType)) {
        return false;
    }

    // Check options array
    if (!Array.isArray(options)) return false;
    for (const option of options) {
        if (typeof option !== "object" || option === null) return false;

        if (option.text && typeof option.text !== "string") return false;

        if (option.icon && !isIconMapKeyType(option.icon)) return false;
    }

    return true;
}

function isCommentDeletePropsType(obj: any): obj is CommentDeletePropsType {
    if (typeof obj !== "object" || obj === null) return false;

    const { commentId, targetType, targetId, parentId } = obj;

    // Check string fields
    if (typeof commentId !== "string" || typeof targetId !== "string" || typeof parentId !== "string") {
        return false;
    }

    // Check targetType
    if (!isTargetTypeType(targetType)) {
        return false;
    }

    return true;
}

const isFilterColumnValueArray = (value: unknown): value is [string | null, string | null] => {
    return (
        Array.isArray(value) &&       // Check if value is an array
        value.length === 2 &&         // Check if the array has exactly two elements
        (typeof value[0] === "string" || value[0] === null) && // Check if the first element is string or null
        (typeof value[1] === "string" || value[1] === null)    // Check if the second element is string or null
    );
}

const isUserAsAdminType = (object: any): object is UserAsAdminType => {
    if (!object) return false
    if (typeof object !== "object") return false
    if (!("_id" in object)) return false
    if (typeof object._id !== "string") return false
    if (!("id" in object)) return false
    if (typeof object.id !== "string") return false
    if (!("username" in object)) return false
    if (typeof object.username !== "string") return false
    if (!("email" in object)) return false
    if (typeof object.email !== "string") return false
    if (!("validated" in object)) return false
    if (typeof object.validated !== "boolean") return false
    if (!("active" in object)) return false
    if (typeof object.active !== "boolean") return false
    if (!("roles" in object)) return false
    if (!Array.isArray(object.roles)) return false
    if (object.roles.some((value: any) => typeof value !== "string")) return false
    if (!("createdAt" in object)) return false
    if (typeof object.createdAt !== "string") return false
    if (!("updatedAt" in object)) return false
    if (typeof object.updatedAt !== "string") return false
    return true
};

export {
    isFieldName,
    isCustomFormError,
    isCustomError,
    isCommentOptionlistPropsType,
    isCommentDeletePropsType,
    isFilterColumnValueArray,
    isUserAsAdminType,
}