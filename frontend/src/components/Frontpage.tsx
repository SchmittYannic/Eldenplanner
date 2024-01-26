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
            <div className="radial-glow left"></div>
            <div className="radial-glow right"></div>
            <main className="frontpage">
                <Herosection />
                <Cardscrollreveal />
                <AdditionalCardsSection />
                <ContactSection />
                <BottomSection />
            </main>
        </>
    )
};

export default Frontpage;