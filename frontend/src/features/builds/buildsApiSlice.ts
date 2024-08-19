import { apiSlice } from "src/app/api/apiSlice";
import { GetBuildsQueryParamsType, GetBuildsResponseType } from "src/types";


export const buildsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBuilds: builder.query<GetBuildsResponseType, GetBuildsQueryParamsType>({
            query: ({
                limit = 10,
                skip = 0,
                field = "stars",
                order = "asc",
                title,
                author,
                minLevel = "0",
                maxLevel,
                minStars = "0",
                maxStars,
            }) => {
                // Construct the query parameters
                let queryParams = new URLSearchParams({
                    limit: String(limit),
                    skip: String(skip),
                    order,
                    minLevel,
                    minStars,
                });

                if (field) queryParams.append("field", field);
                if (title !== undefined) queryParams.append("title", title);
                if (author !== undefined) queryParams.append("author", author);
                if (typeof maxLevel === "string") queryParams.append("maxLevel", maxLevel);
                if (typeof maxStars === "string") queryParams.append("maxStars", maxStars);

                return {
                    url: `/builds?${queryParams.toString()}`,
                    validateStatus: (response, result) => {
                        return response.status === 200 && !result.isError
                    },
                }
            },
            providesTags: (_result, _error, { limit, skip, field, order, title, minStars, maxStars }) => [
                { type: 'Build', id: `list-${limit}-${skip}-${field}-${order}-${title}-${minStars}-${maxStars}` },
            ],
        }),
    })
});

export const {
    useGetBuildsQuery,
} = buildsApiSlice;