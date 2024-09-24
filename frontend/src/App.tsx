import { ComponentType, ReactElement, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "src/components/Layout";
import Prefetch from "src/features/auth/Prefetch";
import RequireAuth from "src/features/auth/RequireAuth";
import { ROLES } from "src/config/roles";
import PersistLogin from "src/features/auth/PersistLogin";
import { ClipLoader } from "src/components/ui";
import ErrorBoundary from "src/components/ErrorBoundary";

const Fallback = () => {
    return (
        <main>
            <ClipLoader
                color={"rgb(231, 214, 182)"}
                loading={true}
                size={30}
            />
        </main>
    )
}

const withSuspense = <P extends object>(
    Component: ComponentType<P>
): React.FC<P> => (props) => (
    <ErrorBoundary>
        <Suspense fallback={<Fallback />}>
            <Component {...props} />
        </Suspense>
    </ErrorBoundary>
);

const Frontpage = withSuspense(lazy(() => import("src/components/Frontpage" /* webpackChunkName: "Frontpage" */)));
const Login = withSuspense(lazy(() => import("src/features/auth/Login" /* webpackChunkName: "Login" */)));
const Signup = withSuspense(lazy(() => import("src/features/auth/Signup" /* webpackChunkName: "Signup" */)));
const VerifyEmail = withSuspense(lazy(() => import("src/features/auth/VerifyEmail" /* webpackChunkName: "VerifyEmail" */)));
const Verify = withSuspense(lazy(() => import("src/features/auth/Verify" /* webpackChunkName: "Verify" */)));
const Reset = withSuspense(lazy(() => import("src/features/auth/Reset" /* webpackChunkName: "Reset" */)));
const ResetPassword = withSuspense(lazy(() => import("src/features/auth/ResetPassword" /* webpackChunkName: "ResetPassword" */)));
const Users = withSuspense(lazy(() => import("src/features/users/Users" /* webpackChunkName: "Users" */)));
const UserPage = withSuspense(lazy(() => import("src/features/users/UserPage" /* webpackChunkName: "UserPage" */)));
const Builds = withSuspense(lazy(() => import("src/features/builds/Builds" /* webpackChunkName: "Builds" */)));
const Charplanner = withSuspense(lazy(() => import("src/features/charplanner/Charplanner" /* webpackChunkName: "Charplanner" */)));
const Impressum = withSuspense(lazy(() => import("src/components/Impressum" /* webpackChunkName: "Impressum" */)));

const App = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route element={<PersistLogin />}>
                    <Route element={<Prefetch />}>
                        <Route index element={<Frontpage />} />
                        <Route path=":params?" element={<Frontpage />} />
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

                        <Route path="charplanner" element={<Charplanner />} />

                        <Route path="charplanner/:buildId" element={<Charplanner />} />

                        <Route path="builds">
                            <Route index element={<Builds />} />
                        </Route>

                        <Route path="user/:userId/:edit?" element={<UserPage />} />

                        <Route element={<RequireAuth allowedRoles={[ROLES.Demoadmin, ROLES.Admin]} />}>
                            <Route path="users">
                                <Route index element={<Users />} />
                                <Route path=":userId/:action" element={<Users />} />
                            </Route>
                        </Route>
                    </Route>

                    <Route path="impressum" element={<Impressum />} />
                </Route>

                {/* if route doesnt exist redirect back to frontpage */}
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
};

export default App;
