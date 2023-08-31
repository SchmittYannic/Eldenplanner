import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { MdLogout, MdMenu } from "react-icons/md";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import useAuth from "../hooks/useAuth";
import useWindowSize from "../hooks/useWindowSize";
import { navbarlogo } from "../assets";

const Header = (): ReactElement => {

    const { userId, status, isUser, isDemoadmin, isAdmin } = useAuth();
    const windowSize = useWindowSize();
    const [sendLogout, {}] = useSendLogoutMutation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isSmallDesktop = windowSize.width && windowSize.width < 1040;
    const isMobile = windowSize.width && windowSize.width < 840;

    return (
        <header>
            <nav className="primary-nav">
                <div className="page-padding">
                    <div className="container-large">
                        <div className="nav-inner">
                            {isSmallDesktop ? (
                                <Link className="nav-logo" to={"/"}>
                                    <img src={navbarlogo} alt="" />
                                    <div>EP</div>
                                </Link>
                            ) : (
                                <Link className="nav-logo" to={"/"}>
                                    <div>ELDENPLANNER</div>
                                </Link>
                            )}

                            {isMobile ? (                              
                                <button
                                    className="mobile-menu-button"
                                    type="button"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >                                      
                                    <MdMenu />
                                </button>
                            ) : (
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
                            )}
                        </div>
                    </div>
                </div>

                {(isMenuOpen && isMobile) && (
                    <div className="mobile-menu">
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
                        </ul>

                        <div className="horizontal-divider" />

                        <ul>
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
                )}
                
            </nav>
        </header>
    )
}

export default Header