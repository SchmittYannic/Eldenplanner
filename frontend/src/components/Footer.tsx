import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="max-container">
                <div className="footer-content">
                    <Link
                        to={"/impressum"}
                    >
                        Impressum
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer