import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { selectCurrentToken } from "../features/auth/authSlice";

type UseAuthReturnType = {
    userId: string;
    username: string;
    roles: string[];
    status: string;
    isUser: boolean;
    isDemoadmin: boolean;
    isAdmin: boolean;
};

type tokenType = {
    UserInfo: {
        userId: string
        username: string
        roles: string[]
    }
}

const useAuth = (): UseAuthReturnType => {
    const token = useSelector(selectCurrentToken);
    let isDemoadmin = false;
    let isAdmin = false;
    let isUser = false;
    let status = "Visitor";

    if (token) {
        const decoded: tokenType = jwtDecode(token);

        const { userId, username, roles } = decoded.UserInfo;

        isUser = roles.includes("User");
        isDemoadmin = roles.includes("Demoadmin");
        isAdmin = roles.includes("Admin");

        if (isUser) status = "User";
        if (isDemoadmin) status = "Demoadmin";
        if (isAdmin) status = "Admin";

        return { userId, username, roles, status, isUser, isDemoadmin, isAdmin }
    }

    return { userId: "", username: "", roles: [], status, isUser, isDemoadmin, isAdmin }
}
export default useAuth