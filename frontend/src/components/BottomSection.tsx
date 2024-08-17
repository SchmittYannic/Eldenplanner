import { Link } from "react-router-dom"

const BottomSection = () => {
    return (
        <section className="bottom-section">
            <div className="bottom-section-content">
                <div className="bottom-section-text">
                    <h2 className="headtext">
                        Forge Your Legend in Elden Ring
                    </h2>
                    <p className="subtext">
                        Craft, Share, Conquer: Your Ultimate Elden Ring Character Awaits. Dive into a community-driven platform where warriors unite to exchange the most formidable character builds. Unearth the secrets to triumph in the Lands Between.
                    </p>
                </div>
                <div className="bottom-section-link">
                    <Link
                        className="action-btn"
                        to="/signup"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BottomSection