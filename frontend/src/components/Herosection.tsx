import { Link } from "react-router-dom";

import HeroCanvas from "./HeroCanvas";
import { herobg } from "src/assets";

const Herosection = () => {
    return (
        <section className="hero">
            <img className="hero-img" src={herobg} alt="elden-planner-logo-outline" />
            <HeroCanvas />
            <div className="hero-foreground">
                <div className="hero-text">
                    <h1 className="gold-text-background">ELDENPLANNER</h1>
                    <div className="divider-4" />
                    <div className="divider-4" />
                    <p>
                        A Character Build Planner for the game <a href="https://de.bandainamcoent.eu/elden-ring/elden-ring" target="_blank">Elden Ring</a>. The perfect starting point for your next adventure through the Lands Between.
                    </p>
                    <div className="divider-4" />
                    <div className="divider-2" />
                    <Link to={"/charplanner"} className="action-btn">
                        Get started
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Herosection