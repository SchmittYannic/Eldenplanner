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
                const img2scrolledinpercent = img2scrolledinpx / img2HeightNoScale;
                
                document.body.style.setProperty("--scroll", (img2scrolledinpercent).toString());
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="slideimg-section">
            <div className="slideimg-container" ref={containerRef}>
                <div className="slideimg-wrapper img-above">
                    <img src="" alt="" />
                </div>
                <div className="slideimg-wrapper img-below" ref={imgBelowWrapperRef}>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Cardscrollreveal