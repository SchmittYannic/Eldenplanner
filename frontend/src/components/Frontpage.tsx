import { ReactElement } from "react";
import { Link } from "react-router-dom";
import ParticlesHeroBg from "./ParticlesHeroBg";

const Frontpage = (): ReactElement => {
    return (
        <main className="frontpage">
            <section className="hero">
                <ParticlesHeroBg />
                <div className="hero-foreground">
                    <div className="hero-text">
                        <h1>ELDENPLANNER</h1>
                        <div className="divider-4" />
                        <div className="divider-4" />
                        <p>
                            A Character Build Planner for the game Elden Ring. The perfect starting point for your next adventure through the Lands Between.
                        </p>
                        <div className="divider-4" />
                        <div className="divider-4" />
                        <Link to={"/charplanner"} className="action-btn">
                            Get started
                        </Link>
                    </div>
                </div>
            </section>          
        </main>
    )
};

export default Frontpage;