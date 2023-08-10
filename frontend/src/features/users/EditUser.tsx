import { useParams } from "react-router-dom";
import { UserType, useGetUsersQuery } from "./usersApiSlice";
import EditUserForm from "./EditUserForm";

const EditUser = () => {
    const { userId } = useParams();
    
    const { user } = useGetUsersQuery("usersList", {
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