import {
    ReactElement,
    useRef,
    useState,
    Suspense,
    useEffect,
    lazy,
} from "react";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { useGetUsersQuery } from "./usersApiSlice";
import useAuth from "src/hooks/useAuth";
import UserBuilds from "./UserBuilds";
import EditUser from "./EditUser";
import { isCustomError } from "src/utils/typeguards";
import { UserType } from "src/types";

const CommentSection = lazy(() => import("src/features/comments/CommentSection" /* webpackChunkName: "CommentSection" */));

const UserPage = (): ReactElement => {

    const param = useParams();
    const profileUserId = param?.userId;
    const { userId: authUserId, isAdmin, isDemoadmin } = useAuth();
    const CommentSectionRef = useRef(null);
    const [loadComponent, setLoadComponent] = useState(false);

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersQuery("usersList");

    const user = isSuccess && profileUserId && users.entities[profileUserId] as UserType;
    const userSince = user && new Date(user.createdAt);
    const month = userSince && userSince.toLocaleString("default", { month: "long" });
    const year = userSince && userSince.toLocaleString("default", { year: "numeric" });

    const isOwnProfile = user ? authUserId === user?.id : false;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setLoadComponent(true);
                    observer.disconnect();  // Stop observing after loading
                }
            },
            {
                root: null, // Use the viewport as the container
                rootMargin: "0px",
                threshold: 0.1, // Trigger when at least 10% of the target is visible
            }
        );

        if (CommentSectionRef.current) {
            observer.observe(CommentSectionRef.current);
        }

        return () => {
            if (observer && CommentSectionRef.current) {
                observer.unobserve(CommentSectionRef.current);
            }
        };
    }, []);

    if (user) {
        return (
            <main className="main--userpage">
                <section className="section--userpage infobuildswrapper">
                    <div className="userpage__userinfo">
                        <h2>Builds of {user?.username}</h2>
                        <div className="divider-2" />
                        <p>Joined {month} {year}</p>
                        <div className="divider-2" />
                        <div className="flex">
                            {isOwnProfile && (
                                <Link
                                    to={`/user/${param?.userId}/edit`}
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
                        {profileUserId && <UserBuilds author={user} />}
                    </div>
                </section>

                {profileUserId &&
                    <section
                        ref={CommentSectionRef}
                        className="CommentSection"
                    >
                        {loadComponent ? (
                            <Suspense fallback={<div>Loading...</div>}>
                                <CommentSection
                                    targetId={profileUserId}
                                    targetType="User"
                                />
                            </Suspense>
                        ) : (
                            <div>Comment section will load when visible</div>
                        )}
                    </section>
                }
            </main>
        )
    } else if (isLoading) {
        return (
            <main>
                <ClipLoader
                    color={"rgb(231, 214, 182)"}
                    loading={isLoading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </main>
        )
    } else if (isError) {
        const errormsg = isCustomError(error) && (error.status === 400 || error.status === 401) && error.data.message;
        return (
            <main>
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{errormsg ? errormsg : "an error occured"}</span>
                </div>
            </main>
        )
    } else {
        return (
            <main className="main--userpage">
                <div className="sm-alert errmsg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Something went wrong.</span>
                </div>
            </main>
        )
    }
}

export default UserPage