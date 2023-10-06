import { useEffect, useRef } from "react";

const Test = () => {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (ref.current) {
                console.log("scrolly: ", window.scrollY)
                console.log("window height: ", window.innerHeight)
                console.log("body height: ", document.body.offsetHeight)
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const heightOfContentBefore = 608;
                const img2DifToTop = 50 + 600 * .05; // margin-top + 5% of img height
                const img2Height = 600 * 0.95; // 95% of img height
                const bottomPosition = (window.innerHeight - 700) / 2; // bottom position of img2
                
                console.log("test: ", heightOfContentBefore + img2DifToTop + img2Height - scrollY <= windowHeight - bottomPosition)
                const img2scrolledinpx = ((windowHeight - bottomPosition) - (heightOfContentBefore + img2DifToTop + img2Height - scrollY)) / 600;
                console.log(img2scrolledinpx)
                //const property = ((windowHeight - bottomPosition) - (heightOfContentBefore + img2DifToTop + img2Height - scrollY) / windowHeight - bottomPosition) / 100;
                //console.log("test2", property)
                document.body.style.setProperty('--scroll', (img2scrolledinpx).toString());
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="slideimg-section">
            <div className="slideimg-container" ref={ref}>
                <div className="slideimg-wrapper img1">
                    <img src="" alt="" />
                </div>
                <div className="slideimg-wrapper img2">
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Test