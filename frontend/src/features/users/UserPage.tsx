import { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { UserType, useGetUsersQuery } from "./usersApiSlice";
import useAuth from "src/hooks/useAuth";
import UserBuilds from "./UserBuilds";
import EditUser from "./EditUser";
import CommentSection from "src/features/comments/CommentSection";
import { isCustomError } from "src/utils/typeguards";

const UserPage = (): ReactElement => {

    const param = useParams();
    const userId = param?.userId;
    const { username, isAdmin, isDemoadmin } = useAuth();

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersQuery("usersList");

    const user = isSuccess && userId && users.entities[userId] as UserType;
    const userSince = user && new Date(user.createdAt);
    const month = userSince && userSince.toLocaleString("default", { month: "long" });
    const year = userSince && userSince.toLocaleString("default", { year: "numeric" });

    const isOwnProfile = user ? username === user?.username : false;

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
                        {userId && <UserBuilds author={user} />}
                    </div>
                </section>

                {userId &&
                    <CommentSection
                        targetId={userId}
                        targetType="User"
                    />
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