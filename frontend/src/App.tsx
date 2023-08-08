import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Frontpage from "./components/Frontpage";
import Login from "./features/auth/Login";
import Header from "./components/Header";
import Charplanner from "./features/charplanner/Charplanner";
import UsersList from "./features/users/UsersList";
import BuildsList from "./features/builds/BuildsList";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<><Header/><Frontpage /></>} />
                <Route path="login" element={<Login />} />
                <Route path="charplanner" element={<><Header/><Charplanner/></>} />

                <Route path="builds">
                    <Route index element={<><Header/><BuildsList/></>} />
                </Route>

                <Route path="users">
                    <Route index element={<><Header/><UsersList/></>} />
                </Route>

                {/* if route doesnt exist redirect back to frontpage */}
                <Route path="*" element={ <Navigate to="/" /> }/>
            </Route>
        </Routes>
    )
};

export default App;
