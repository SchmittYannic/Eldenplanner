import { ReactElement } from "react";
import { useGetUsersAsAdminQuery } from "./usersApiSlice";
import User from "./User";
import { isCustomError } from "../../app/api/apiSlice";

const UsersList = (): ReactElement => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error     
    } = useGetUsersAsAdminQuery("usersList", {
        pollingInterval: 1000 * 60 // refetching data in 1 minute
    });

    let content: ReactElement = (<></>);

    if (isError) {
        let errorMsg = "";

        if (isCustomError(error)) {
            errorMsg = error?.data?.message;
        } else {
            errorMsg = "An Error occured";
        }

        content = (
            <main>
                <p className="error">
                    {errorMsg}
                </p>
            </main>
        )
    }

    if (isLoading) {
        content = (
            <main>
                <p>
                    Loading...
                </p>
            </main>
        )
    }

    if (isSuccess) {
        const { ids } = users;

        const tableContent = ids?.length && ids.map((userId) => <User key={userId} userId={userId}/>)

        content = (
            <main>
                <table className="table table--users">
                    <thead className="table__thead">
                        <tr className="table__row">
                            <th scope="col" className="table__th user__username">Username</th>
                            <th scope="col" className="table__th user__email">Email</th>
                            <th scope="col" className="table__th user__roles">Roles</th>
                            <th scope="col" className="table__th user__active">active</th>
                            <th scope="col" className="table__th user__validated">validated</th>
                            <th scope="col" className="table__th user__createdAt">Created</th>
                            <th scope="col" className="table__th user__updatedAt">Modified</th>
                            <th scope="col" className="table__th user__edit">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            </main>
        )
    }

    return content
}

export default UsersList