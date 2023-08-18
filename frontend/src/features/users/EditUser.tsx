import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { UserType, useGetUsersAsAdminQuery } from "./usersApiSlice";
import EditUserForm from "./EditUserForm";

const EditUser = (): ReactElement => {
    const { userId } = useParams();
    
    const { user } = useGetUsersAsAdminQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId!]
        }),
    })

    if (!user) return <p>is Loading...</p>

    return (
        <EditUserForm user={user as UserType} />
    )
}

export default EditUser