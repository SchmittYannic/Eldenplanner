import { ReactElement, Suspense, lazy, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "src/app/store";
import { selectGetUserByIdCachedData, useLazyGetUserByIdQuery } from "./usersApiSlice";
import useAuth from "src/hooks/useAuth";
import useIsInView from "src/hooks/useIsInView";
import UserBuilds from "./UserBuilds";
import EditUser from "./EditUser";
import { ClipLoader } from "src/components/ui";
import { UserType } from "src/types";

const CommentSection = lazy(() => import("src/features/comments/CommentSection" /* webpackChunkName: "CommentSection" */));

const UserPage = (): ReactElement => {

    const navigate = useNavigate();
    const param = useParams();
    const profileUserId = param?.userId;
    const { userId: authUserId, isAdmin, isDemoadmin } = useAuth();

    const [fetchUserById, {
        data,
        isSuccess,
        isLoading,
        isError,
    }] = useLazyGetUserByIdQuery();

    const cachedData = useSelector((state: RootState) => {
        if (profileUserId) {
            return selectGetUserByIdCachedData(state, profileUserId)
        }
        return null
    });

    const [isOwnProfile, setIsOwnProfile] = useState(false);
    const [user, setUser] = useState<UserType>();

    const {
        isIntersecting,
        elementRef: CommentSectionRef,
    } = useIsInView({
        shouldObserve: user !== undefined,
    });

    const userSince = user && new Date(user.createdAt);
    const month = userSince && userSince.toLocaleString("default", { month: "long" });
    const year = userSince && userSince.toLocaleString("default", { year: "numeric" });

    // if there is no profileUserId from param direct app user back to frontpage
    // if cachedData exists use it instead of sending fetch request
    useEffect(() => {
        if (!profileUserId) {
            navigate("/");
            return
        }
        if (cachedData) {
            setIsOwnProfile(cachedData.id === authUserId);
            setUser(cachedData);
        } else {
            fetchUserById(profileUserId);
        }
    }, [cachedData]);

    // if fetch is successful setIsOwnProfile
    useEffect(() => {
        if (!isSuccess) return
        if (!data) return
        setIsOwnProfile(data.id === authUserId);
        setUser(data);
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

    // should only show this briefly on mount when fetch is uninitialized, no cache data exists and user is undefined
    return (
        <main className="main--userpage">
        </main>
    )
}

export default UserPage