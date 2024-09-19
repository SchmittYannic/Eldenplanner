import { ReactElement, Suspense, lazy, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "src/app/store";
import { selectGetUserByIdCachedData, useGetBuildsOfUserQuery, useLazyGetUserByIdQuery } from "./usersApiSlice";
import useAuth from "src/hooks/useAuth";
import useIsInView from "src/hooks/useIsInView";
import useWindowSize from "src/hooks/useWindowSize";
import UserBuilds from "./UserBuilds";
import EditUser from "./EditUser";
import { ClipLoader } from "src/components/ui";
import { UserType } from "src/types";
import "src/features/users/UserPage.scss";

const CommentSection = lazy(() => import("src/features/comments/CommentSection" /* webpackChunkName: "CommentSection" */));

const UserPage = (): ReactElement => {

    const navigate = useNavigate();
    const param = useParams();
    const profileUserId = param?.userId;
    const { userId: authUserId, isAdmin, isDemoadmin } = useAuth();
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [fetchUserById, {
        data: userData,
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

    const [user, setUser] = useState<UserType>();

    const isOwnProfile = user?.id === authUserId;

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
            setUser(cachedData);
        } else {
            fetchUserById(profileUserId);
        }
    }, [cachedData]);

    // if fetch is successful setIsOwnProfile
    useEffect(() => {
        if (!isSuccess) return
        if (!userData) return
        setUser(userData);
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
            <main className="main-userpage">
                <section className="section-userpage infosection">
                    {isMobile && (
                        <>
                            <h1>Profile of {user.username}</h1>
                            <div className="divider-2" />
                            <p>Joined {month} {year}</p>
                            <div className="divider-4" />
                        </>
                    )}
                    <div className="leftside">
                        <img
                            src={user.avatarUrl}
                            alt=""
                            width={290}
                            height={290}
                        />
                    </div>
                    <div className="rightside">
                        {!isMobile && (
                            <>
                                <h1>Profile of {user.username}</h1>
                                <div className="divider-2" />
                                <p>Joined {month} {year}</p>
                                <div className="divider-4" />
                            </>
                        )}
                        {isMobile && (
                            <div className="actionsection">
                                {isOwnProfile && (
                                    <Link
                                        to={`/user/${user.id}/edit`}
                                        className="button full"
                                        title="edit account"
                                    >
                                        Edit Account
                                    </Link>
                                )}
                                {isOwnProfile && (isAdmin || isDemoadmin) && (
                                    <>
                                        <div className="divider-4" />
                                        <Link
                                            to={"/users"}
                                            className="action-btn full"
                                            title="go to Admin Panel"
                                        >
                                            Admin Panel
                                        </Link>
                                    </>
                                )}

                                {param?.edit === "edit" && isOwnProfile && <EditUser />}

                                <div className="divider-4" />
                            </div>
                        )}

                        <MetricCards user={user} />
                    </div>
                </section>

                <div className="divider-4" />

                {!isMobile && (
                    <>
                        <section className="section-userpage actionsection">

                            {isOwnProfile && (
                                <Link
                                    to={`/user/${user.id}/edit`}
                                    className="button full"
                                    title="edit account"
                                >
                                    Edit Account
                                </Link>
                            )}
                            {isOwnProfile && (isAdmin || isDemoadmin) && (
                                <>
                                    <div className="divider-4" />
                                    <Link
                                        to={"/users"}
                                        className="action-btn full"
                                        title="go to Admin Panel"
                                    >
                                        Admin Panel
                                    </Link>
                                </>
                            )}


                            {param?.edit === "edit" && isOwnProfile && <EditUser />}
                        </section>

                        <div className="divider-4" />
                    </>
                )}

                <section className="section-userpage tablesection">
                    <h2>Created Builds</h2>
                    <div className="divider-4" />
                    <div className="divider-2" />
                    <div className="userpage__userbuilds">
                        <UserBuilds author={user} />
                    </div>
                </section>

                <div className="divider-4" />

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

type MetricCardsPropsType = {
    user: UserType
}

const MetricCards = ({ user }: MetricCardsPropsType) => {

    const {
        data: userBuildsData,
    } = useGetBuildsOfUserQuery({
        id: user.id
    });

    return (
        <div className="metric-cards">
            <div className="metric-cards-wrapper">
                <div
                    className="metric-card"
                >
                    <div>Builds created</div>
                    <div className="divider-2" />
                    <div>{userBuildsData ? userBuildsData.totalBuilds : 0}</div>
                </div>
                <div
                    className="metric-card"
                >
                    <div>Stars given</div>
                    <div className="divider-2" />
                    <div>0</div>
                </div>
            </div>
            <div className="metric-cards-wrapper">
                <div
                    className="metric-card"
                >
                    <div>Stars received</div>
                    <div className="divider-2" />
                    <div>{userBuildsData ? userBuildsData.totalStars : 0}</div>
                </div>
                <div
                    className="metric-card"
                >
                    <div>Comments</div>
                    <div className="divider-2" />
                    <div>{user.totalComments}</div>
                </div>
            </div>
        </div>
    )
}

export default UserPage