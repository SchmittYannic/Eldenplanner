import { ReactElement, Suspense, lazy, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useLazyGetUserByIdQuery } from "./usersApiSlice";
import useAuth from "src/hooks/useAuth";
import useIsInView from "src/hooks/useIsInView";
import UserBuilds from "./UserBuilds";
import EditUser from "./EditUser";
import { ClipLoader } from "src/components/ui";

const CommentSection = lazy(() => import("src/features/comments/CommentSection" /* webpackChunkName: "CommentSection" */));

const UserPage = (): ReactElement => {

    const navigate = useNavigate();
    const param = useParams();
    const profileUserId = param?.userId;
    const { userId: authUserId, isAdmin, isDemoadmin } = useAuth();

    const [fetchUserById, {
        data: user,
        isSuccess,
        isLoading,
        isError,
    }] = useLazyGetUserByIdQuery();

    const {
        isIntersecting,
        elementRef: CommentSectionRef,
    } = useIsInView({
        shouldObserve: user !== undefined,
    });
    const [isOwnProfile, setIsOwnProfile] = useState(false);

    const userSince = user && new Date(user.createdAt);
    const month = userSince && userSince.toLocaleString("default", { month: "long" });
    const year = userSince && userSince.toLocaleString("default", { year: "numeric" });

    // on mount fetchUserById if it exists else navigate to frontpage
    useEffect(() => {
        if (profileUserId) {
            fetchUserById(profileUserId);
        } else {
            navigate("/");
        }
    }, []);

    useEffect(() => {
        if (!isSuccess) return
        if (!user) return
        setIsOwnProfile(user.id === authUserId);
    }, [isSuccess]);

    // if fetch fails direct user to frontpage
    useEffect(() => {
        if (!isError) return
        navigate("/");
    }, [isError]);

    if (isLoading) {
        return (
            <main>
                <ClipLoader
                    color={"rgb(231, 214, 182)"}
                    loading={isLoading}
                    size={30}
                />
            </main>
        )
    }

    if (user) {
        return (
            <main className="main--userpage">
                <section className="section--userpage infobuildswrapper">
                    <div className="userpage__userinfo">
                        <h2>Builds of {user.username}</h2>
                        <div className="divider-2" />
                        <p>Joined {month} {year}</p>
                        <div className="divider-2" />
                        <div className="flex">
                            {isOwnProfile && (
                                <Link
                                    to={`/user/${user.id}/edit`}
                                    className="button"
                                    title="edit account"
                                >
                                    Edit Account
                                </Link>
                            )}
                            {isOwnProfile && (isAdmin || isDemoadmin) && (
                                <>
                                    <div className="v-divider-4" />
                                    <Link
                                        to={"/users"}
                                        className="action-btn"
                                        title="go to Admin Panel"
                                    >
                                        Admin Panel
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {param?.edit === "edit" && isOwnProfile && <EditUser />}

                    <div className="divider-4" />

                    <div className="userpage__userbuilds">
                        <UserBuilds author={user} />
                    </div>
                </section>

                <section
                    ref={CommentSectionRef}
                    className="CommentSection"
                >
                    {isIntersecting ? (
                        <Suspense
                            fallback={
                                <ClipLoader
                                    color={"rgb(231, 214, 182)"}
                                    loading={true}
                                    size={30}
                                />
                            }
                        >
                            <CommentSection
                                targetId={user.id}
                                targetType="User"
                            />
                        </Suspense>
                    ) : (
                        <div>Comment section will load when visible</div>
                    )}
                </section>
            </main>
        )
    }

    // should never show this
    return (
        <main className="main--userpage">
            <div className="sm-alert errmsg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Something went wrong.</span>
            </div>
        </main>
    )
}

export default UserPage