export const parseError = err => {
    if (err.isJoi) return err.details[0];
    return JSON.stringify(err, Object.getOwnPropertyNames(err));
};

export const getIdsAndEntitiesOfComments = (comments) => {
    // Check if input is an array
    if (!Array.isArray(comments)) return { ids: [], entities: {} }

    // Check if the array is not empty
    if (comments.length === 0) return { ids: [], entities: {} }
    const ids = [];
    const entities = {};

    comments.forEach(comment => {
        if (typeof comment !== "object" || comment === null) return { ids: [], entities: {} }
        if (!comment.hasOwnProperty("id") || typeof comment.id !== "string") return { ids: [], entities: {} }
        ids.push(comment.id);
        entities[comment.id] = comment;
    });

    return { ids, entities };
}