import { Link, useParams } from "react-router-dom";

import ContactDialog from "./ContactDialog";

const ContactSection = () => {

    const params = useParams();

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

                    <Link to={"/contactform"} className="action-btn">
                        Contact
                    </Link>

                    {params?.params === "contactform" && <ContactDialog />}
                </div>
            </div>
        </section>
    )
}

export default ContactSection