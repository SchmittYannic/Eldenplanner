import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { isCustomError } from "../../app/api/apiSlice";
import { UserAsAdminType, isUserAsAdminType, useGetUsersAsAdminQuery } from "./usersAsAdminApiSlice";
import UsersList from "./UsersList";
import EditUserAsAdmin from "./EditUserAsAdmin";
import DeleteUserAsAdmin from "./DeleteUserAsAdmin";

const Users = (): ReactElement => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersAsAdminQuery("usersList", {
        pollingInterval: 1000 * 60 * 5 // refetching data in 5 minutes
    });

    const params = useParams();
    const user = params.userId ? users?.entities[params.userId] : null;

    const tableData = isSuccess && users.ids.map(id => {
        return users.entities[id] as UserAsAdminType
    })

    if (tableData) {
        return (
            <>
                <UsersList data={tableData} />
                {isUserAsAdminType(user) && params.action === "edit" && <EditUserAsAdmin user={user} />}
                {isUserAsAdminType(user) && params.action === "delete" && <DeleteUserAsAdmin user={user} />}
            </>
        )
    } else if (isLoading) {
        return (
            <main>
                <ClipLoader
                    color={"rgb(231, 214, 182)"}
                    loading={isLoading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </main>
        )
    } else if (isError) {
        const errormsg = isCustomError(error) && (error.status === 400 || error.status === 401) && error.data.message;
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{errormsg ? errormsg : "an error occured"}</span>
                </div>
            </main>
        )
    } else {
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Something went wrong.</span>
                </div>
            </main>
        )
    }
}

export default Users