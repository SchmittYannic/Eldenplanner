import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Toast from "src/features/toasts/Toast";
import Popup from "src/features/popups/Popup";

const Layout = (): ReactElement => {
    return (
        <>
            <Popup />
            <Header />
            <Outlet />
            <Footer />
            <Toast />
        </>
    )
};

export default Layout;