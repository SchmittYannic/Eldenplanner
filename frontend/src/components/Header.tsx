import { ReactElement, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useSendLogoutMutation } from "src/features/auth/authApiSlice";
import useAuth from "src/hooks/useAuth";
import useWindowSize from "src/hooks/useWindowSize";
import useScrollTracker from "src/hooks/useScrollTracker";
import { navbarlogo } from "src/assets";
import { MdLogout, MdMenu } from "src/components/icons";

const Header = (): ReactElement => {

    const { userId, status, isUser, isDemoadmin, isAdmin } = useAuth();
    const windowSize = useWindowSize();
    const userScrollAction = useScrollTracker();
    const [sendLogout, { }] = useSendLogoutMutation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarHidden, setIsNavbarHidden] = useState(false);

    const isSmallDesktop = windowSize.width && windowSize.width < 920;
    const isMobile = windowSize.width && windowSize.width < 850;

    const closeMenu = () => setIsMenuOpen(false);

    const onLogoutClick = () => {
        closeMenu();
        sendLogout("");
    };

    useEffect(() => {
        if (userScrollAction === "down" && isMobile && !isMenuOpen) {
            setIsNavbarHidden(true);
        } else {
            setIsNavbarHidden(false);
        }
    }, [userScrollAction]);

    useEffect(() => {
        if (isMobile) return
        if (!isNavbarHidden) return
        setIsNavbarHidden(false);
    }, [windowSize]);

    return (
        <header>
            <nav
                className={`primary-nav ${isNavbarHidden ? "outofview" : ""}`}
                role="navigation"
                aria-label="Main menu"
            >
                <div className="page-padding">
                    <div className="container-large">
                        <div className="nav-inner">
                            {isSmallDesktop ? (
                                <Link className="nav-logo" to={"/"}>
                                    <img src={navbarlogo} alt="navbarlogo" />
                                    <div className="gold-text-background">EP</div>
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
                                    onClick={() => {
                                        setIsMenuOpen(!isMenuOpen);
                                        setIsNavbarHidden(false);
                                    }}
                                    aria-expanded={isMenuOpen}
                                    aria-controls="main-menu"
                                >
                                    <MdMenu aria-hidden />
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
                                                    <MdLogout aria-hidden />
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
                    <div id="main-menu" className="mobile-menu">
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
                                        aria-label="Logout from your account"
                                    >
                                        <p>
                                            Logout
                                            <MdLogout aria-hidden />
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