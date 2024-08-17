import { ReactElement } from "react"

import { BuildType, useGetBuildsQuery } from "src/features/builds/buildsApiSlice";
import UserBuildsList from "./UserBuildsList";
import { ClipLoader } from "src/components/ui";
import { calcSumObjectValues } from "src/utils/functions";
import { isCustomError } from "src/utils/typeguards";
import { UserType } from "src/types";

type UserBuildsPropsType = {
    author: UserType,
}

const UserBuilds = ({ author }: UserBuildsPropsType): ReactElement => {

    const {
        data: buildsAsEntityState,
        isSuccess,
        isLoading,
        isError,
        error,
    } = useGetBuildsQuery("buildsList");

    const allBuilds = buildsAsEntityState && Object.values(buildsAsEntityState.entities) as BuildType[];

    const ownBuilds = allBuilds && allBuilds.filter((build) => build.user === author.id.toString());

    const tableData = ownBuilds && ownBuilds.map((build) => {

        const sumStats = calcSumObjectValues(build.stats);
        const runelevel = sumStats - 79;

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

    if (isSuccess && tableData && tableData.length > 0) {
        return (
            <>
                <UserBuildsList data={tableData} />
            </>
        )
    } else if (isSuccess && tableData && tableData.length === 0) {
        return (
            <h4>No Builds</h4>
        )
    } else if (isLoading) {
        return (
            <ClipLoader
                color={"rgb(231, 214, 182)"}
                loading={isLoading}
                size={30}
            />
        )
    } else if (isError) {
        const errormsg = isCustomError(error) && (error.status === 400 || error.status === 401) && error.data.message;
        return (
            <div className="sm-alert errmsg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{errormsg ? errormsg : "an error occured"}</span>
            </div>
        )
    } return (
        <div className="sm-alert errmsg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Something went wrong.</span>
        </div>
    )
}

export default UserBuilds