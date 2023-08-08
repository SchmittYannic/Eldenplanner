import React, { ReactElement } from "react";
import { UserType } from "./usersApiSlice";

const User = ({ user }: { user: UserType}): ReactElement => {

    console.log(user.active)

    const createdAt = new Date(user.createdAt);
    const updatedAt = new Date(user.updatedAt);

    if (user) {
        return (
            <tr className="table__row user">
                <td className={`table__cell`}>{user.username}</td>
                <td className={`table__cell`}>{user.email}</td>
                <td className={`table__cell`}>{user.roles.join(", ")}</td>
                <td className={`table__cell`}>{user.active.toString()}</td>
                <td className={`table__cell`}>{user.validated.toString()}</td>
                <td className={`table__cell`}>{createdAt.toLocaleString()}</td>
                <td className={`table__cell`}>{updatedAt.toLocaleString()}</td>
                <td className={`table__cell`}>
                    EDIT
                </td>
            </tr>
        )
    } else return <></>
};

export default User;