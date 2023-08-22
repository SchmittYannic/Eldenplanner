import { BuildType, selectAllBuilds } from "./buildsApiSlice";
import { useSelector } from "react-redux";
import { calcSumObjectValues } from "../../utils/functions";
import BuildsList2 from "./BuildsList2";

const Builds = () => {

    const builds = useSelector(selectAllBuilds) as BuildType[];

    const data = builds.length > 0 && builds.map((build) => {
        const sumStats = calcSumObjectValues(build.stats);

        const runelevel = sumStats - 79;

        const createdAt = new Date(build.createdAt);
        const updatedAt = new Date(build.updatedAt);
        const isDateEqual = build.createdAt === build.updatedAt;

        const created = createdAt.toLocaleDateString();
        const modified = !isDateEqual ? updatedAt.toLocaleDateString() : "";

        return { 
            buildId: build.id,
            authorId: build.user,
            level: runelevel,
            stars: 0,
            created,
            modified,
        }
    });

    return (
        <>
            {typeof data !== "boolean" && <BuildsList2 data={data} />}
        </>
    )
}

export default Builds