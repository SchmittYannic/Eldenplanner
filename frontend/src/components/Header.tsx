import { ReactElement, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
    const isMobile = windowSize.width && windowSize.width < 850;

    const closeMenu = () => setIsMenuOpen(false);

    const onLogoutClick = () => {
        closeMenu();
        sendLogout("");
    };

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
                                    <div className="gold-text-background">ELDENPLANNER</div>
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
                                        <NavLink className="nav-link" to="/charplanner">
                                            <p>Charplanner</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link" to="/builds">
                                            <p>Community Builds</p>
                                        </NavLink>
                                    </li>
                                    {(isAdmin || isDemoadmin) && (
                                        <li>
                                            <NavLink className="nav-link" to="/users">
                                                <p>Users</p>
                                            </NavLink>
                                        </li>
                                    )}
                                    {status === "Visitor" && (
                                        <li>
                                            <NavLink className="nav-link" to="/login">
                                                <p>Login</p>
                                            </NavLink>
                                        </li>
                                    )}
                                    {status === "Visitor" && (
                                        <li>
                                            <NavLink className="nav-link" to="/signup">
                                                <p>Sign Up</p>
                                            </NavLink>
                                        </li>
                                    )}
                                    {(isUser || isDemoadmin || isAdmin) && (
                                        <li>
                                            <NavLink className="nav-link" to={`/user/${userId}`}>
                                                <p>Your Profile</p>
                                            </NavLink>
                                        </li>
                                    )}
                                    {status !== "Visitor" && (
                                        <li>
                                            <button
                                                className="nav-link logout"
                                                type="button"
                                                onClick={sendLogout}
                                            >
                                                <p>
                                                    Logout
                                                    <MdLogout />
                                                </p>
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
                                <Link
                                    className="nav-link"
                                    to="/charplanner"
                                    onClick={closeMenu}
                                >
                                    Charplanner
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    to="/builds"
                                    onClick={closeMenu}
                                >
                                    Community Builds
                                </Link>
                            </li>
                            {(isAdmin || isDemoadmin) && (
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="/users"
                                        onClick={closeMenu}
                                    >
                                        Users
                                    </Link>
                                </li>
                            )}
                        </ul>

                        <div className="horizontal-divider" />

                        <ul>
                            {status === "Visitor" && (
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                        onClick={closeMenu}
                                    >
                                        Login
                                    </Link>
                                </li>
                            )}
                            {status === "Visitor" && (
                                <li>
                                    <Link
                                        className="nav-link"
                                        to="/signup"
                                        onClick={closeMenu}
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            )}
                            {(isUser || isDemoadmin || isAdmin) && (
                                <li>
                                    <Link
                                        className="nav-link"
                                        to={`/user/${userId}`}
                                        onClick={closeMenu}
                                    >
                                        Your Profile
                                    </Link>
                                </li>
                            )}
                            {status !== "Visitor" && (
                                <li>
                                    <button
                                        className="nav-link"
                                        type="button"
                                        onClick={onLogoutClick}
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