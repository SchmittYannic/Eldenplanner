import { ReactElement } from "react";
import NameSubSection from "./NameSubSection";
import AttributesSubSection from "./AttributesSubSection";

const CharacterSection = (): ReactElement => {
    return (
        <section>
            <NameSubSection />
            <AttributesSubSection />
        </section>
    )
}

export default CharacterSection