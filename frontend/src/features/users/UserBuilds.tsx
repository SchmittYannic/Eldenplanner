import { ReactElement } from "react"
import { useSelector } from "react-redux";
import { BuildType, selectAllBuilds } from "../builds/buildsApiSlice";
import { UserType, useGetUsersQuery } from "./usersApiSlice";
import { calcSumObjectValues } from "../../utils/functions";
import UserBuildsList from "./UserBuildsList";

type PropsType = {
    userId: string,
}

const UserBuilds = ({ userId }: PropsType): ReactElement => {

    const allBuilds = useSelector(selectAllBuilds) as BuildType[];
    
    const { author } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            author: data?.entities[userId] as UserType
        }),
    });
    

    const builds = allBuilds.filter((build: BuildType) => build.user === userId);

    const tableData = allBuilds.length > 0 && author && builds.map((build) => {

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
                <UserBuildsList data={tableData} />
            </>
        )
    } else {
        return (
            <main>
                <p>TESTING</p>
            </main>
        )
    }
}

export default UserBuilds