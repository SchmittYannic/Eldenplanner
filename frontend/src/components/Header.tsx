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

    const isSmallDesktop = windowSize.width && windowSize.width < 920;
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
                                <NavLink
                                    className="nav-link"
                                    to="/charplanner"
                                    onClick={closeMenu}
                                >
                                    <p>Charplanner</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav-link"
                                    to="/builds"
                                    onClick={closeMenu}
                                >
                                    <p>Community Builds</p>
                                </NavLink>
                            </li>
                        </ul>

                        <div className="horizontal-divider" />

                        <ul>
                            {status === "Visitor" && (
                                <li>
                                    <NavLink
                                        className="nav-link"
                                        to="/login"
                                        onClick={closeMenu}
                                    >
                                        <p>Login</p>
                                    </NavLink>
                                </li>
                            )}
                            {status === "Visitor" && (
                                <li>
                                    <NavLink
                                        className="nav-link"
                                        to="/signup"
                                        onClick={closeMenu}
                                    >
                                        <p>Sign Up</p>
                                    </NavLink>
                                </li>
                            )}
                            {status !== "Visitor" && (
                                <li>
                                    <NavLink
                                        className="nav-link"
                                        to={`/user/${userId}`}
                                        onClick={closeMenu}
                                    >
                                        <p>Your Profile</p>
                                    </NavLink>
                                </li>
                            )}
                            {status !== "Visitor" && (
                                <li>
                                    <button
                                        className="nav-link logout"
                                        type="button"
                                        onClick={onLogoutClick}
                                    >
                                        <p>
                                            Logout
                                            <MdLogout />
                                        </p>
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