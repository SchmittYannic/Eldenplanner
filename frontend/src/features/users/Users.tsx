import { ReactElement } from "react";
import { UserAsAdminType, useGetUsersAsAdminQuery } from "./usersApiSlice";
import UsersList2 from "./UsersList2";

const Users = (): ReactElement => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersAsAdminQuery("usersList", {
        pollingInterval: 1000 * 60 // refetching data in 1 minute
    });

    const tableData = isSuccess && users.ids.map(id => {
        return users.entities[id] as UserAsAdminType
    })

    if (isLoading) {
        return (
            <main>
                <p>isLoading...</p>
            </main>
        )
    }

    if (isError) {
        return (
            <main>
                <p>isError...</p>
            </main>
        )
    }

    if (isSuccess && typeof tableData !== "boolean") {
        return (           
            <UsersList2 data={tableData} />         
        )
    }

    return (<></>)
}

export default Users