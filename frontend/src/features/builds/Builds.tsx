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
            createdAt: build.createdAt,
            updatedAt: build.updatedAt,
        }
    });

    if (builds.length === 0 || users.length === 0) {
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Something went wrong.</span>
                </div>
            </main>
        )
    } else {
        return (
            <>
                {typeof tableData !== "boolean" && <BuildsList2 data={tableData} />}
            </>
        )
    }
}

export default Builds