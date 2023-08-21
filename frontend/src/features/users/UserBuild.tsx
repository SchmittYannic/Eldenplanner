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
            <td className={`table__cell`}>
                <Link to={`/charplanner/${build.id}`}>
                    {build.general.charactername}
                </Link>
            </td>
            <td className={`table__cell`}>{runelevel}</td>
            <td className={`table__cell`}>0</td>
            <td className={`table__cell`}>{createdAt.toLocaleDateString()}</td>
            <td className={`table__cell`}>{!isDateEqual ? updatedAt.toLocaleDateString() : ""}</td>
        </tr>
    )
}

export default UserBuild