import { ReactElement } from "react";
import WeaponsSubSection from "./WeaponsSubSection";
import TalismanSubSection from "./TalismanSubSection";
import ArmorSubSection from "./ArmorSubSection";
import EffectDisplay from "./EffectDisplay";

const EquipmentSection = (): ReactElement => {
    return (
        <section className="EquipmentSection">
            <WeaponsSubSection />
            <TalismanSubSection />
            <ArmorSubSection />
            <EffectDisplay />
        </section>
    )
}

export default EquipmentSection