import { ReactElement } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { UserType, useGetUsersQuery } from "./usersApiSlice";
import { useNavigate } from "react-router-dom";

type PropsType = {
    userId: EntityId
}

const User = ({ userId }: PropsType): ReactElement => {

    const data = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId]
        }),
    });

    const navigate = useNavigate()
    
    const user = data.user as UserType

    const handleEditClick = () => navigate(`/users/${userId}`);

    if (user) {
        const createdAt = new Date(user.createdAt);
        const updatedAt = new Date(user.updatedAt);
        const isDateEqual = user.createdAt === user.updatedAt;
        return (
            <tr className="table__row user">
                <td className={`table__cell`}>{user.username}</td>
                <td className={`table__cell`}>{user.email}</td>
                <td className={`table__cell`}>{user.roles.join(", ")}</td>
                <td className={`table__cell`}>{user.active.toString()}</td>
                <td className={`table__cell`}>{user.validated.toString()}</td>
                <td className={`table__cell`}>{createdAt.toLocaleString()}</td>
                <td className={`table__cell`}>{!isDateEqual ? updatedAt.toLocaleString() : ""}</td>
                <td className={`table__cell`}>
                    <button onClick={handleEditClick}>
                        EDIT
                    </button>
                </td>
            </tr>
        )
    } else return <></>
};

export default User;