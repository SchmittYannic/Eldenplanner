import { BuildType, selectAllBuilds } from "./buildsApiSlice";
import { useSelector } from "react-redux";
import { calcSumObjectValues } from "../../utils/functions";
import BuildsList2 from "./BuildsList2";
import { UserType, selectAllUsers } from "../users/usersApiSlice";

const Builds = () => {

    const builds = useSelector(selectAllBuilds) as BuildType[];
    const users = useSelector(selectAllUsers) as UserType[];

    const isDataLoaded = builds.length > 0 && users.length > 0;
    
    const tableData = isDataLoaded && builds.map((build) => {
        const user = users.find((user) => user.id.toString() === build.user);

        const sumStats = calcSumObjectValues(build.stats);

        const runelevel = sumStats - 79;

        const createdAt = new Date(build.createdAt);
        const updatedAt = new Date(build.updatedAt);
        const isDateEqual = build.createdAt === build.updatedAt;

        const created = createdAt.toLocaleDateString();
        const modified = !isDateEqual ? updatedAt.toLocaleDateString() : "";

        if(!user) {
            throw new Error("Builds tableData not complete");
        }

        return { 
            buildId: build.id,
            authorId: build.user,
            title: build.title,
            author: user.username,
            level: runelevel,
            stars: 0,
            created,
            modified,
        }
    });

    return (
        <>
            {typeof tableData !== "boolean" && <BuildsList2 data={tableData} />}
        </>
    )
}

export default Builds