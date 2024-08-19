import { ReactElement, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { store } from "../../app/store";
// import { usersApiSlice } from "../users/usersApiSlice";
// import { buildsApiSlice } from "../builds/buildsApiSlice";

/*
    Entire component flagged for deletion.
    No prefetch necessary in current implementation
*/

const Prefetch = (): ReactElement => {

    useEffect(() => {
        // prefetch here
        // store.dispatch(usersApiSlice.util.prefetch("getUsers", "usersList", { force: true }));
        // store.dispatch(buildsApiSlice.util.prefetch("getAllBuilds", "buildsList", { force: true }));
    }, []);

    return <Outlet />
}
export default Prefetch