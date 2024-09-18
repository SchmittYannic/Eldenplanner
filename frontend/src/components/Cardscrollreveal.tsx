import { useEffect, useRef } from "react";

const Cardscrollreveal = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const imgBelowWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (containerRef.current && imgBelowWrapperRef.current) {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const heightOfContentBefore = containerRef.current.offsetTop; // 608
                const img2HeightNoScale = imgBelowWrapperRef.current.offsetHeight; // img height in px without any scaling changes
                const img2Scale = 0.95; // img scale before animation
                const img2Height = img2HeightNoScale * img2Scale; // img height with scaling changes
                const img2MarginTop = 50; // img margin top in px
                const img2DifToTop = img2MarginTop + img2HeightNoScale * (1 - img2Scale); // img distance to top border of container
                const bottomPosition = (windowHeight - 700) / 2; // img bottom position in css

                const img2scrolledinpx = ((windowHeight - bottomPosition) - (heightOfContentBefore + img2DifToTop + img2Height - scrollY));
                const img2scrolledinpercent = (img2scrolledinpx / img2HeightNoScale) < 0 ? 0
                    : (img2scrolledinpx / img2HeightNoScale) > 1 ? 1
                        : (img2scrolledinpx / img2HeightNoScale);

                containerRef.current.style.setProperty("--scroll", (img2scrolledinpercent).toString());
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="cardscrollreveal-section">
            <div className="cardscrollreveal-container" ref={containerRef}>
                <div className="card-wrapper card-above">
                    <div className="card-border-top border-bg-img-1" />
                    <div className="card-text-wrapper">
                        <h2>All in one</h2>
                        <p>
                            No more excel spreadsheets and standalone calculators. Everything you will ever need to know about your character in one planner.
                        </p>
                    </div>
                    <div className="card-border-bottom border-bg-img-1" />
                </div>
                <div className="card-wrapper card-below" ref={imgBelowWrapperRef}>
                    <div className="card-border-top border-bg-img-2" />
                    <div className="card-text-wrapper">
                        <h2>Community</h2>
                        <p>
                            New to Elden Ring and build creation? Browse our communities creations and discover the perfect build for you.
                        </p>
                    </div>
                    <div className="card-border-bottom border-bg-img-2" />
                </div>
            </div>
        </section>
    )
}

export default Cardscrollreveal