import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import UserBuildList from "./UserBuildList";
import { useSelector } from "react-redux";
import { UserType, selectUserById } from "./usersApiSlice";
import { RootState } from "../../app/store";
import useAuth from "../../hooks/useAuth";

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

    return (
        <main className="main--userpage">
            <section className="section--userpage infobuildswrapper">
                <div className="userpage__userinfo">
                    <h2>{user?.username}</h2>
                    <p>Joined {month} {year}</p>
                    {isOwnProfile && (
                        // turn into Link later
                        <button
                            type="button"
                            onClick={onEditProfileClicked}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
                <div className="userpage__userbuilds">
                    {userId && <UserBuildList userId={userId} />}
                </div>
            </section>
        </main>
    )
}

export default UserPage