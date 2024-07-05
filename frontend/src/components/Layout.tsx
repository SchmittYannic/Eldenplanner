import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Toast from "./Toast";

const Layout = (): ReactElement => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Toast />
        </>
    )
};

export default Layout;