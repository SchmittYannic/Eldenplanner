import { ComponentType, ReactElement, useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

import useWindowSize from "src/hooks/useWindowSize";
import Layout from "src/components/Layout";
import Prefetch from "src/features/auth/Prefetch";
import RequireAuth from "src/features/auth/RequireAuth";
import { ROLES } from "src/config/roles";
import PersistLogin from "src/features/auth/PersistLogin";
import { ClipLoader } from "src/components/ui";

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
    <Suspense fallback={<Fallback />}>
        <Component {...props} />
    </Suspense>
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

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    useEffect(() => {
        if (isMobile) return
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadSlim(engine);
            await loadPolygonMaskPlugin(engine);
        });
    }, []);

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
