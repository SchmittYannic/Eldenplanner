import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { UserAsAdminType, useGetUsersAsAdminQuery } from "./usersApiSlice";
import EditUserAsAdminForm from "./EditUserAsAdminForm";

const EditUserAsAdmin = (): ReactElement => {
    const { userId } = useParams();
    
    const { user } = useGetUsersAsAdminQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId!]
        }),
    })

    if (!user) return <p>is Loading...</p>

    return (
        <EditUserAsAdminForm user={user as UserAsAdminType} />
    )
}

export default EditUserAsAdmin