import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setBuildsColumnFilter, setBuildsPagination, setBuildsSorting } from "./buildsSlice";
import { isBuildColumnType, isOrderType } from "src/utils/typeguards";
import { useEffect } from "react";
import { ColumnFiltersState } from "@tanstack/react-table";
import BuildsTable from "./BuildsTable";

const Builds = () => {
    const [searchParams] = useSearchParams();
    // Extracting query parameters from the URL with default value if missing
    const limitSearchParam = searchParams.get("limit");
    const limitParam = limitSearchParam !== null && !Number.isNaN(Number(limitSearchParam)) && Number(limitSearchParam) >= 0
        ? Number(limitSearchParam)
        : 10;

    const skipSearchParam = searchParams.get("skip");
    const skipParam = skipSearchParam !== null && !Number.isNaN(Number(skipSearchParam)) && Number(skipSearchParam) >= 0
        ? Number(skipSearchParam)
        : 0;

    const fieldSearchParam = searchParams.get("field");
    const fieldParam = isBuildColumnType(fieldSearchParam) ? fieldSearchParam : "stars";

    const orderSearchParam = searchParams.get("order");
    const orderParam = isOrderType(orderSearchParam) ? orderSearchParam === "asc" ? false : true : true;

    const titleParam = searchParams.get("title");
    const authorParam = searchParams.get("author");

    const minLevelSearchParam = searchParams.get("minLevel");
    const minLevelParam = minLevelSearchParam !== null && !Number.isNaN(Number(minLevelSearchParam)) && Number(minLevelSearchParam) >= 0
        ? Number(minLevelSearchParam)
        : 0;

    const maxLevelSearchParam = searchParams.get("maxLevel");
    const maxLevelParam = maxLevelSearchParam !== null && !Number.isNaN(Number(maxLevelSearchParam)) && Number(maxLevelSearchParam) >= 0
        ? Number(maxLevelSearchParam)
        : null;

    const minStarsSearchParam = searchParams.get("minStars");
    const minStarsParam = minStarsSearchParam !== null && !Number.isNaN(Number(minStarsSearchParam)) && Number(minStarsSearchParam) >= 0
        ? Number(minStarsSearchParam)
        : 0;

    const maxStarsSearchParam = searchParams.get("maxStars");
    const maxStarsParam = maxStarsSearchParam !== null && !Number.isNaN(Number(maxStarsSearchParam)) && Number(maxStarsSearchParam) >= 0
        ? Number(maxStarsSearchParam)
        : null;

    const columnsFilter: ColumnFiltersState = [];

    if (titleParam) {
        columnsFilter.push({
            id: "title",
            value: titleParam
        });
    }

    if (authorParam) {
        columnsFilter.push({
            id: "author",
            value: authorParam
        });
    }

    columnsFilter.push({
        id: "level",
        value: [
            String(minLevelParam),
            maxLevelParam === null ? null : String(maxLevelParam)
        ]
    });

    columnsFilter.push({
        id: "stars",
        value: [
            String(minStarsParam),
            maxStarsParam === null ? null : String(maxStarsParam)
        ]
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBuildsPagination({ pageSize: limitParam, pageIndex: skipParam > 0 ? skipParam / limitParam : 0 }));
        dispatch(setBuildsSorting([{ id: fieldParam, desc: orderParam }]));
        dispatch(setBuildsColumnFilter(columnsFilter));
    }, []);

    return (
        <BuildsTable />
    )
}

export default Builds