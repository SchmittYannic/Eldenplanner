import { ReactElement, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { store } from "../../app/store";
import { usersApiSlice } from "../users/usersApiSlice";
import { buildsApiSlice } from "../builds/buildsApiSlice";

const Prefetch = (): ReactElement => {

    useEffect(() => {
        store.dispatch(usersApiSlice.util.prefetch("getUsers", "usersList", { force: true }));
        store.dispatch(buildsApiSlice.util.prefetch("getBuilds", "buildsList", { force: true }));
    }, []);

    return <Outlet />
}
export default Prefetch