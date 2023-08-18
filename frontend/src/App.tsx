import { ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Frontpage from "./components/Frontpage";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Charplanner from "./features/charplanner/Charplanner";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import BuildsList from "./features/builds/BuildsList";
import Prefetch from "./features/auth/Prefetch";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";

const App = (): ReactElement => {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<><Frontpage /></>} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                <Route path="charplanner" element={<><Charplanner/></>} />

                <Route element={<Prefetch />}>
                    <Route path="charplanner/:buildId" element={<><Charplanner/></>} />
                
                    <Route path="builds">
                        <Route index element={<><BuildsList/></>} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ ROLES.Demoadmin, ROLES.Admin ]} />}>
                        <Route path="users">
                            <Route index element={<><UsersList/></>} />
                            <Route path=":userId" element={<EditUser />} />
                        </Route>
                    </Route>
                </Route>

                {/* if route doesnt exist redirect back to frontpage */}
                <Route path="*" element={ <Navigate to="/" /> }/>
            </Route>
        </Routes>
    )
};

export default App;
