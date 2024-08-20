import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../hooks/useWindowSize";
import ParticlesHeroBg from "./ParticlesHeroBg";
import { herobg } from "../assets";

const Herosection = (): ReactElement => {

    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 850;

    const [svgUrl, setSvgUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchSvg = async () => {
            const response = await fetch(herobg);
            const text = await response.text();
            const svgBlob = new Blob([text], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(svgBlob);
            setSvgUrl(url);

            return () => {
                URL.revokeObjectURL(url); // Clean up the object URL after component unmounts
            };
        };

        fetchSvg();
    }, []);

    return (
        <section className="hero">
            <img className="hero-img" src={herobg} alt="elden-planner-logo-outline" />
            {!isMobile && <ParticlesHeroBg svgUrl={svgUrl} />}
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