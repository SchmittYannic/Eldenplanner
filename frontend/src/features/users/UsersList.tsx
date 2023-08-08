import { useGetUsersQuery } from "./usersApiSlice";
import User from "./User";

const UsersList = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error     
    } = useGetUsersQuery();

    let content;

    if (isError) {
        let errorMsg = "";

        if ("data" in error) {
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
        console.log(users)

        const tableContent = users.map((user) => <User key={user.id} user={user}/>)

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
                            <th scope="col" className="table__th user__createdAt">CreatedAt</th>
                            <th scope="col" className="table__th user__updatedAt">UpdatedAt</th>
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