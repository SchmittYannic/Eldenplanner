import { ReactElement } from "react";

import Herosection from "./Herosection";
import Cardscrollreveal from "./Cardscrollreveal";
import AdditionalCardsSection from "./AdditionalCardsSection";
import ContactSection from "./ContactSection";
import BottomSection from "./BottomSection";
import "./Frontpage.scss";

const Frontpage = (): ReactElement => {
    return (
        <>
            {/* <div className="radial-glow left"></div>
            <div className="radial-glow right"></div> */}
            <main className="frontpage">
                <Herosection />
                <Cardscrollreveal />
                <div className="horizontal-divider full" />
                <AdditionalCardsSection />
                <div className="horizontal-divider full" />
                <ContactSection />
                <div className="horizontal-divider full" />
                <BottomSection />
            </main>
        </>
    )
};

export default Frontpage;