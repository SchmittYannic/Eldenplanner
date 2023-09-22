import { ReactElement } from "react";
import NameSubSection from "./NameSubSection";
import AttributesSubSection from "./AttributesSubSection";

const CharacterSection = (): ReactElement => {
    return (
        <section>
            <NameSubSection />
            <div className="horizontal-divider" />
            <div className="divider-4" />
            <AttributesSubSection />
        </section>
    )
}

export default CharacterSection