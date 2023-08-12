import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Header = (): ReactElement => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/builds">
                            Builds
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/charplanner">
                            Charplanner
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header