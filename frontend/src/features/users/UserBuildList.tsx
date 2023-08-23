import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { BuildType, selectAllBuilds } from "../builds/buildsApiSlice";
import UserBuild from "./UserBuild";

type PropsType = {
    userId: string
};

const UserBuildList = ({ userId }: PropsType): ReactElement => {

    const allBuilds = useSelector(selectAllBuilds) as BuildType[];

    const builds = allBuilds.filter((build: BuildType) => build.user === userId);

    const tableContent = builds?.length ? builds.map((build) => <UserBuild key={build.id} build={build} />) : null;

    return (
        <table className="table table--userbuilds">
            <thead className="table__thead">
                <tr className="table__row">
                    <th scope="col" className="table__th userbuild__charactername">Titel</th>
                    <th scope="col" className="table__th userbuild__runelevel">Level</th>
                    <th scope="col" className="table__th userbuild__stars">Stars</th>
                    <th scope="col" className="table__th userbuild__createdAt">Created</th>
                    <th scope="col" className="table__th userbuild__updatedAt">Modified</th>
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </table>
    )
}

export default UserBuildList