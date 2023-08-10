import { ReactElement } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { UserType, useGetUsersQuery } from "./usersApiSlice";

const User = ({ userId }: { userId: EntityId}): ReactElement => {

    const data = useGetUsersQuery( "usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId]
        }),
    })
    
    const user = data.user as UserType

    if (user) {
        const createdAt = new Date(user.createdAt);
        const updatedAt = new Date(user.updatedAt);
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