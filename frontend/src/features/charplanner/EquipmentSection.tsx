import { ReactElement } from "react";
import WeaponsSubSection from "./WeaponsSubSection";
import TalismanSubSection from "./TalismanSubSection";

const EquipmentSection = (): ReactElement => {
    return (
        <section className="EquipmentSection">
            <WeaponsSubSection />
            <TalismanSubSection />
            {/*
            <ArmorSubSection />
            <CollapsibleList heading={"Active Effects"} items={activeEffects} /> */}
        </section>
    )
}

export default EquipmentSection