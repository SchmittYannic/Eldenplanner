import { ReactElement } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { UserAsAdminType, useGetUsersAsAdminQuery } from "./usersAsAdminApiSlice";
import { useNavigate } from "react-router-dom";

type PropsType = {
    userId: EntityId
}

const User = ({ userId }: PropsType): ReactElement => {

    const data = useGetUsersAsAdminQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId]
        }),
    });

    const navigate = useNavigate()
    
    const user = data.user as UserAsAdminType

    const handleEditClick = () => navigate(`/users/${userId}`);

    if (user) {
        const createdAt = new Date(user.createdAt);
        const updatedAt = new Date(user.updatedAt);
        const isDateEqual = user.createdAt === user.updatedAt;
        return (
            <tr className="table__row user">
                <td className={`table__cell username`}>{user.username}</td>
                <td className={`table__cell email`}>{user.email}</td>
                <td className={`table__cell roles`}>{user.roles.join(", ")}</td>
                <td className={`table__cell active`}>{user.active.toString()}</td>
                <td className={`table__cell validated`}>{user.validated.toString()}</td>
                <td className={`table__cell created`}>{createdAt.toLocaleString()}</td>
                <td className={`table__cell modified`}>{!isDateEqual ? updatedAt.toLocaleString() : ""}</td>
                <td className={`table__cell edit`}>
                    <button className="button" onClick={handleEditClick}>
                        EDIT
                    </button>
                </td>
            </tr>
        )
    } else return <></>
};

export default User;