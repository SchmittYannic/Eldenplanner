import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserType, selectUserById } from "./usersApiSlice";
import { RootState } from "../../app/store";
import useAuth from "../../hooks/useAuth";
import UserBuilds from "./UserBuilds";

const UserPage = (): ReactElement => {

    const param = useParams();
    const userId = param?.userId;
    const { username } = useAuth();

    const user = useSelector((state: RootState) => {
        if(userId) {
            return selectUserById(state, userId) as UserType
        }
        return null
    });

    const userSince = user && new Date(user.createdAt);

    const month = userSince && userSince.toLocaleString("default", { month: "long" });
    const year = userSince && userSince.toLocaleString("default", { year: "numeric" });

    const isOwnProfile = username === user?.username;

    const onEditProfileClicked = () => {

    };

    if (user) {
        return (
            <main className="main--userpage">
                <section className="section--userpage infobuildswrapper">
                    <div className="userpage__userinfo">
                        <h2>Builds of {user?.username}</h2>
                        <div className="divider-2" />
                        <p>Joined {month} {year}</p>
                        <div className="divider-2" />
                        {isOwnProfile && (
                            // turn into Link later
                            <button
                                className="button"
                                type="button"
                                onClick={onEditProfileClicked}
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
    
                    <div className="divider-4" />
    
                    <div className="userpage__userbuilds">
                        {userId && <UserBuilds userId={userId} />}
                    </div>
                </section>
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