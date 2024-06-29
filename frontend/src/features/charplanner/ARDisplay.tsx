import { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
    armamentSelectorMap,
    ArmamentSelectorMapType,
    selectTwohand,
    StatsStateType
} from "./charplannerSlice";
import useTotalstats from "../../hooks/useTotalstats";
import { WeaponsData } from "../../../data/WeaponsData";
import { EquipParamWeapon } from "../../../data/EquipParamWeapon";
import { AffinityData } from "../../../data/AffinityData";
import { calcWeaponAttackRating } from "../../utils/ARCalculation";

type PropsType = {
    id: string
}

const ARDisplay = ({ id }: PropsType): ReactElement => {

    const totalStats = useTotalstats() as StatsStateType;

    const idWeapon = id + "Weapon";
    const idUpgrade = id + "Upgrade";
    const idAffinity = id + "Affinity";

    const weapon = useSelector(armamentSelectorMap[(idWeapon) as keyof ArmamentSelectorMapType]);
    const upgrade = useSelector(armamentSelectorMap[(idUpgrade) as keyof ArmamentSelectorMapType]);
    const affinity = useSelector(armamentSelectorMap[(idAffinity) as keyof ArmamentSelectorMapType]);
    const twohand = useSelector(selectTwohand);

    let reqStr = 0;
    let reqDex = 0;
    let reqInt = 0;
    let reqFai = 0;
    let reqArc = 0;

    if (weapon) {
        const affinityId = AffinityData[affinity] ?? 0;
        const weaponIdWithAffinity = WeaponsData[weapon]?.["ID"] + affinityId;

        const weaponParameter = EquipParamWeapon[weaponIdWithAffinity];

        reqStr = weaponParameter["properStrength"] ?? 0;
        reqDex = weaponParameter["properAgility"] ?? 0;
        reqInt = weaponParameter["properMagic"] ?? 0;
        reqFai = weaponParameter["properFaith"] ?? 0;
        reqArc = weaponParameter["properLuck"] ?? 0;
    }

    const text = weapon ? "Req: " + reqStr + "/" + reqDex + "/" + reqInt + "/" + reqFai + "/" + reqArc : "";
    const tooltipText = weapon ? "Weapon\xa0Requirements:\n\n"
        + "\xa0\xa0Strength:\xa0" + reqStr + "\n\n"
        + "\xa0\xa0Dexterity:\xa0" + reqDex + "\n\n"
        + "\xa0\xa0Intelligence:\xa0" + reqInt + "\n\n"
        + "\xa0\xa0Faith:\xa0" + reqFai + "\n\n"
        + "\xa0\xa0Arcane:\xa0" + reqArc
        : ""
        ;

    let isFulfilled = true;
    if (
        totalStats["dexterity"] < reqDex
        || totalStats["intelligence"] < reqInt
        || totalStats["faith"] < reqFai
        || totalStats["arcane"] < reqArc
    ) {
        isFulfilled = false;
    } else {
        if (twohand && 1.5 * totalStats["strength"] < reqStr) {
            isFulfilled = false;
        } else if (!twohand && totalStats["strength"] < reqStr) {
            isFulfilled = false;
        }
    }

    const ARCalculation = weapon ? calcWeaponAttackRating(weapon, upgrade, affinity, totalStats, twohand) : ["", ""];

    return (
        <div className={weapon ? "ARDisplay" : "ARDisplay Invisible"}>
            <span className={isFulfilled ? "" : "redText"}>
                <div className="reqText">{text}</div>
                <div className="Tooltip">{tooltipText}</div>
            </span>
            <span className={isFulfilled ? "" : "Invisible"}>
                <div className="arText">{ARCalculation[0]}</div>
                <div className="Tooltip">{ARCalculation[1]}</div>
            </span>
        </div>
    )
}

export default ARDisplay