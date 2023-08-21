import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import UserBuildList from "./UserBuildList";

const UserPage = (): ReactElement => {

    const param = useParams();
    const userId = param?.userId;

    return (
        <main>
            <h2>Userpage</h2>
            {userId && <UserBuildList userId={userId} />}
        </main>
    )
}

export default UserPage