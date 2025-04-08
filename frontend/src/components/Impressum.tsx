import { Link } from "react-router-dom";
import "./Impressum.scss"

const Impressum = () => {

    const firstname = String(import.meta.env.VITE_IMPRESSUM_FIRSTNAME) ?? "";
    const lastname = String(import.meta.env.VITE_IMPRESSUM_LASTNAME) ?? "";
    const street = String(import.meta.env.VITE_IMPRESSUM_STREET) ?? "";
    const plz = String(import.meta.env.VITE_IMPRESSUM_PLZ) ?? "";
    const city = String(import.meta.env.VITE_IMPRESSUM_CITY) ?? "";
    const email = String(import.meta.env.VITE_IMPRESSUM_EMAIL) ?? "";

    return (
        <main className="impressum">
            <div className="max-container">
                <h1>
                    Impressum
                </h1>
                <div className="impressum-content">
                    <p>
                        {firstname} {lastname}
                    </p>
                    <p>
                        {street}
                    </p>
                    <p>
                        {plz} {city}
                    </p>
                    <p>
                        Email: <a
                            href={`mailto:${email}`}
                        >
                            {email}
                        </a>
                    </p>
                </div>
                <Link
                    className={`button`}
                    to="/"
                >
                    <svg className="mr-2" width="12" height="12" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="currentColor" />
                    </svg>

                    <span>Back to homepage</span>
                </Link>
            </div>
        </main>
    )
}

export default Impressum