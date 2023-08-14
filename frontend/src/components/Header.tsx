import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import useAuth from "../hooks/useAuth";

const Header = (): ReactElement => {

    const { username, status, isUser, isDemoadmin, isAdmin } = useAuth();

    const [sendLogout, {}] = useSendLogoutMutation();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/builds">
                            Builds
                        </Link>
                    </li>
                    {(isAdmin || isDemoadmin) && (
                        <li>
                            <Link to="/users">
                                Users
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link to="/charplanner">
                            Charplanner
                        </Link>
                    </li>
                    {status === "Visitor" && (
                        <li>
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </li>
                    )}
                    {status === "Visitor" && (
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    )}
                    {status !== "Visitor" && (
                        <li>
                            <button
                                type="button"
                                onClick={sendLogout}
                                style={{ backgroundColor: "white"}}
                            >
                                Logout
                            </button>
                        </li>
                    )}
                    {(isUser || isDemoadmin || isAdmin) && (
                        <li>
                            <p>{username}</p>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header