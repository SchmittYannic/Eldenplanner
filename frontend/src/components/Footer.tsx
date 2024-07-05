import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <Link
                to={"/impressum"}
            >
                Impressum
            </Link>
        </footer>
    )
}

export default Footer