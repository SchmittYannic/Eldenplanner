import { ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Frontpage from "./components/Frontpage";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import Charplanner from "./features/charplanner/Charplanner";
import Users from "./features/users/Users";
import EditUserAsAdmin from "./features/users/EditUserAsAdmin";
import Builds from "./features/builds/Builds";
import UserPage from "./features/users/UserPage";
import Prefetch from "./features/auth/Prefetch";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import PersistLogin from "./features/auth/PersistLogin";
import VerifyEmail from "./features/auth/VerifyEmail";
import Verify from "./features/auth/Verify";
import Reset from "./features/auth/Reset";
import ResetPassword from "./features/auth/ResetPassword";

const App = (): ReactElement => {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route element={<PersistLogin />}>
                    <Route index element={<Frontpage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="verify">
                        <Route index element={<Verify />} />
                        <Route path=":verificationToken" element={<VerifyEmail />} />
                    </Route>
                    <Route path="reset">
                        <Route index element={<Reset />} />
                        <Route path=":resetPasswordToken" element={<ResetPassword />} />
                    </Route>

                    <Route path="charplanner" element={<Charplanner/>} />

                    <Route element={<Prefetch />}>
                        <Route path="charplanner/:buildId" element={<Charplanner/>} />
                    
                        <Route path="builds">
                            <Route index element={<Builds/>} />
                        </Route>

                        <Route path="user/:userId/:edit?" element={<UserPage/>} />

                        <Route element={<RequireAuth allowedRoles={[ ROLES.Demoadmin, ROLES.Admin ]} />}>
                            <Route path="users">
                                <Route index element={<Users/>} />
                                <Route path=":userId" element={<EditUserAsAdmin />} />
                            </Route>
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
