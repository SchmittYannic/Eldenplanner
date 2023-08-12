import { ReactElement } from "react";
import CharacterSection from "./CharacterSection";
import EquipmentSection from "./EquipmentSection";
import InfoSection from "./InfoSection";
import ActionsSection from "./ActionsSection";
import "./Charplanner.scss";

const Charplanner = (): ReactElement => {
    return (
        <main className="Charplanner">
            <CharacterSection />
            <EquipmentSection />
            <InfoSection />
            <ActionsSection />
        </main>
    )
};

export default Charplanner;