import { BuildType, useGetBuildsQuery } from "./buildsApiSlice";
import { ClipLoader } from "react-spinners";
import { calcSumObjectValues } from "../../utils/functions";
import BuildsList from "./BuildsList";
import { UserType, useGetUsersQuery } from "../users/usersApiSlice";
import { isCustomError } from "../../app/api/apiSlice";

const Builds = () => {

    const {
        data: builds,
        isLoading: isBuildsLoading, 
        isSuccess: isBuildsSuccess,
        isError: isBuildsError,
        error: buildsError,   
    } = useGetBuildsQuery("buildsList", {
        pollingInterval: 1000 * 60 * 5 // refetching data in 5 minutes
    });

    const {
        data: users,
        isLoading: isUsersLoading,
        isSuccess: isUsersSuccess,
        isError: isUsersError,
        error: usersError,
    } = useGetUsersQuery("usersList", {
        pollingInterval: 1000 * 60 * 5 // refetching data in 5 minutes
    });
    
    const tableData = isBuildsSuccess && isUsersSuccess && builds.ids.map((buildId) => {
        const build = builds.entities[buildId] as BuildType;
        const author = users.entities[build.user] as UserType;

        const sumStats = calcSumObjectValues(build.stats);

        const runelevel = sumStats - 79;

        if(!author) {
            throw new Error("Builds tableData not complete");
        }

        return { 
            buildId: build.id,
            authorId: build.user,
            title: build.title,
            author: author.username,
            level: runelevel,
            stars: 0,
            createdAt: build.createdAt,
            updatedAt: build.updatedAt,
        }
    });

    if (tableData) {
        return (
            <>
                <BuildsList data={tableData} />
            </>
        )
    } else if (isBuildsLoading || isUsersLoading) {
        return (
            <main>
                <ClipLoader
                    color={"rgb(231, 214, 182)"}
                    loading={isBuildsLoading ? isBuildsLoading : isUsersLoading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </main>
        )
    } else if (isBuildsError) {
        const errormsg = isCustomError(buildsError) && buildsError.status === 400 && buildsError.data.message;
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{errormsg ? errormsg : "an error occured"}</span>
                </div>
            </main>
        )
    } else if (isUsersError) {
        const errormsg = isCustomError(usersError) && usersError.status === 400 && usersError.data.message;
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{errormsg ? errormsg : "an error occured"}</span>
                </div>
            </main>
        )
    } else {
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Something went wrong.</span>
                </div>
            </main>
        )
    }
}

export default Builds