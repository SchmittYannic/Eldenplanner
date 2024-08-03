import { CustomFormError, CustomError } from "src/types";

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

export {
    isFieldName,
    isCustomFormError,
    isCustomError,
}