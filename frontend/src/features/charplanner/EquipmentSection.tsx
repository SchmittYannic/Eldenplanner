import { ReactElement } from "react";
import WeaponsSubSection from "./WeaponsSubSection";
import TalismanSubSection from "./TalismanSubSection";
import ArmorSubSection from "./ArmorSubSection";
import EffectDisplay from "./EffectDisplay";

const EquipmentSection = (): ReactElement => {
    return (
        <section className="EquipmentSection">
            <WeaponsSubSection />
            <div className="divider-2" />
            <div className="horizontal-divider" />
            <div className="divider-2" />
            <TalismanSubSection />
            <div className="divider-2" />
            <div className="horizontal-divider" />
            <div className="divider-2" />
            <ArmorSubSection />
            <div className="divider-2" />
            <div className="horizontal-divider" />
            <div className="divider-2" />
            <div className="divider-1" />
            <EffectDisplay />
        </section>
    )
}

export default EquipmentSection