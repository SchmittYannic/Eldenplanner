import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Toast from "./Toast";

const Layout = (): ReactElement => {
    return (
        <>
            <Header />
            <Outlet />
            <Toast />
        </>
    )
};

export default Layout;