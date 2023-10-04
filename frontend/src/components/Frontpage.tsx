import { ReactElement } from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../hooks/useWindowSize";
import ParticlesHeroBg from "./ParticlesHeroBg";
import { herobg } from "../assets";

const Frontpage = (): ReactElement => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    return (
        <>
            <div className="radial-glow left"></div>
            <div className="radial-glow right"></div>
            <main className="frontpage">
                <section className="hero">
                    <img className="hero-img" src={herobg} alt="elden-planner-logo-outline" />
                    {!isMobile && <ParticlesHeroBg />}
                    <div className="hero-foreground">
                        <div className="hero-text">
                            <h1 className="gold-text-background">ELDENPLANNER</h1>
                            <div className="divider-4" />
                            <div className="divider-4" />
                            <div className="divider-4" />
                            <p>
                                A Character Build Planner for the game <a href="https://de.bandainamcoent.eu/elden-ring/elden-ring" target="_blank">Elden Ring</a>. The perfect starting point for your next adventure through the Lands Between.
                            </p>
                            <div className="divider-4" />
                            <div className="divider-4" />
                            <div className="divider-4" />
                            <Link to={"/charplanner"} className="action-btn">
                                Get started
                            </Link>
                        </div>
                    </div>
                </section>          
            </main>
        </>
    )
};

export default Frontpage;