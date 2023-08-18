import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BuildType, selectAllBuilds } from "../builds/buildsApiSlice";

const UserPage = (): ReactElement => {

    const param = useParams();
    const userId = param?.userId;

    const allBuilds = useSelector(selectAllBuilds) as BuildType[];

    const builds = allBuilds.filter((build: BuildType) => build.user === userId);
    console.log(builds)

    return (
        <main>
            <h2>Userpage</h2>
        </main>
    )
}

export default UserPage