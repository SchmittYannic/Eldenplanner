import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import useAuth from "../hooks/useAuth";

const Header = (): ReactElement => {

    const { userId, status, isUser, isDemoadmin, isAdmin } = useAuth();

    const [sendLogout, {}] = useSendLogoutMutation();

    return (
        <header>
            <nav className="primary-nav">
                <div className="page-padding">
                    <div className="container-large">
                        <div className="nav-inner">
                            <Link className="nav-logo" to={"/"}>
                                <div>ELDENPLANNER</div>
                            </Link>

                            <ul>
                                <li>
                                    <Link className="nav-link" to="/charplanner">
                                        Charplanner
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/builds">
                                        Community Builds
                                    </Link>
                                </li>
                                {(isAdmin || isDemoadmin) && (
                                    <li>
                                        <Link className="nav-link" to="/users">
                                            Users
                                        </Link>
                                    </li>
                                )}
                                {status === "Visitor" && (
                                    <li>
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                )}
                                {status === "Visitor" && (
                                    <li>
                                        <Link className="nav-link" to="/signup">
                                            Sign Up
                                        </Link>
                                    </li>
                                )}
                                {(isUser || isDemoadmin || isAdmin) && (
                                    <li>
                                        <Link className="nav-link" to={`/${userId}`}>
                                            Your Profile
                                        </Link>
                                    </li>
                                )}
                                {status !== "Visitor" && (
                                    <li>
                                        <button
                                            className="nav-link"
                                            type="button"
                                            onClick={sendLogout}
                                        >
                                            <div>Logout</div>
                                            <MdLogout />
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header