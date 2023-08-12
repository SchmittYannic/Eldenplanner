import { ReactElement } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BuildType, useGetBuildsQuery } from "./buildsApiSlice";
import { UserType, selectUserById } from "../users/usersApiSlice";
import { RootState } from "../../app/store";
import { calcSumObjectValues } from "../../utils/functions";

type PropsType = {
    buildId: EntityId
}

const Build = ({ buildId }: PropsType): ReactElement => {

    const data = useGetBuildsQuery("buildsList", {
        selectFromResult: ({ data }) => ({
            build: data?.entities[buildId]
        }),
    });

    const build = data.build as BuildType;

    if (build) {
        const user = useSelector((state: RootState) => selectUserById(state, build.user as EntityId)) as UserType;

        const sumStats = calcSumObjectValues(build.stats);

        const runelevel = sumStats - 79;

        const createdAt = new Date(build.createdAt);
        const updatedAt = new Date(build.updatedAt);
        return (
            <tr className="table__row user">
                <td className={`table__cell`}>
                    <Link to={`/charplanner/${build.id}`}>
                        {build.general.charactername}
                    </Link>
                </td>
                <td className={`table__cell`}>{user ? user.username : "Unknown"}</td>
                <td className={`table__cell`}>{runelevel}</td>
                <td className={`table__cell`}>0</td>
                <td className={`table__cell`}>{createdAt.toLocaleString()}</td>
                <td className={`table__cell`}>{updatedAt.toLocaleString()}</td>
            </tr>
        )
    } else return <></>
}

export default Build