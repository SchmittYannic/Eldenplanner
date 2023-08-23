import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { BuildType } from "../builds/buildsApiSlice";
import { calcSumObjectValues } from "../../utils/functions";

type PropsType = {
    build: BuildType
};

const UserBuild = ({ build }: PropsType): ReactElement => {

    const sumStats = calcSumObjectValues(build.stats);

    const runelevel = sumStats - 79;

    const createdAt = new Date(build.createdAt);
    const updatedAt = new Date(build.updatedAt);
    const isDateEqual = build.createdAt === build.updatedAt;

    return (
        <tr className="table__row userbuild">
            <td className={`table__cell title`}>
                <Link to={`/charplanner/${build.id}`}>
                    {build.title}
                </Link>
            </td>
            <td className={`table__cell level`}>{runelevel}</td>
            <td className={`table__cell stars`}>0</td>
            <td className={`table__cell created`}>{createdAt.toLocaleDateString()}</td>
            <td className={`table__cell modified`}>{!isDateEqual ? updatedAt.toLocaleDateString() : ""}</td>
        </tr>
    )
}

export default UserBuild