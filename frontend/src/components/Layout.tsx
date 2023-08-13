import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = (): ReactElement => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default Layout;