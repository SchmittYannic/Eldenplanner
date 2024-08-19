import { ReactElement } from "react";
import { useParams } from "react-router-dom";

import { useGetUsersAsAdminQuery } from "./usersAsAdminApiSlice";
import UsersList from "./UsersList";
import EditUserAsAdmin from "./EditUserAsAdmin";
import DeleteUserAsAdmin from "./DeleteUserAsAdmin";
import { ClipLoader } from "src/components/ui";
import { isCustomError } from "src/utils/typeguards";
import { UserAsAdminType } from "src/types";

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
    const user = params.userId ? users?.entities[params.userId] : undefined;

    if (isLoading) {
        return (
            <main>
                <ClipLoader
                    color={"rgb(231, 214, 182)"}
                    loading={isLoading}
                    size={30}
                />
            </main>
        )
    }

    if (isError) {
        const errormsg = isCustomError(error) && (error.status === 400 || error.status === 401) && error.data.message;
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{errormsg ? errormsg : "an error occured"}</span>
                </div>
            </main>
        )
    }

    if (isSuccess) {
        const tableData = users.ids.reduce<UserAsAdminType[]>((acc, id) => {
            const user = users.entities[id];
            if (user) {
                acc.push(user);
            }
            return acc;
        }, []);
        return (
            <>
                <UsersList data={tableData} />
                {user && params.action === "edit" && <EditUserAsAdmin user={user} />}
                {user && params.action === "delete" && <DeleteUserAsAdmin user={user} />}
            </>
        )
    }

    return (
        <main>
        </main>
    )
}

export default Users