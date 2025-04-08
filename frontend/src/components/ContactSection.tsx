import { Link } from "react-router-dom";

const ContactSection = () => {
    return (
        <section className="contact-section full">
            <div className="header-gradient-bg" />
            <div className="contact-section-content">
                <h2>
                    Are we lacking a feature?
                </h2>
                <div className="contact-section-text">
                    <p>
                        Contact us here and give us feedback about how we can improve Eldenplanner even more.
                    </p>

                    <Link to={"/contact"} className="action-btn">
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactSection