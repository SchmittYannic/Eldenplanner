import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Toast from "src/features/toasts/Toast";

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