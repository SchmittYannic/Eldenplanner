import { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
    StatsStateType,
    selectArmament,
    selectArmor,
    selectGreatrune,
    selectGreatruneactive,
    selectTalisman
} from "./charplannerSlice";
import useTotalstats from "../../hooks/useTotalstats";
import calcStatus from "../../utils/InfoCalculation";


const InfoSection = (): ReactElement => {

    const greatrune = useSelector(selectGreatrune);
    const greatruneactive = useSelector(selectGreatruneactive);
    const talisman = useSelector(selectTalisman);
    const armor = useSelector(selectArmor);
    const armament = useSelector(selectArmament);

    const totalStats = useTotalstats() as StatsStateType;

    const InfoObj = calcStatus(greatrune, greatruneactive, totalStats, talisman, armor, armament);
    return (
        <section className="InfoSection">
            <div className="DetailSubSection">
                <p className="text-left">HP</p>
                <p className="text-right">{InfoObj.hp}</p>
                <p className="text-left">FP</p>
                <p className="text-right">{InfoObj.fp}</p>
                <p className="text-left">Stamina</p>
                <p className="text-right">{InfoObj.stamina}</p>
                <p className="text-left">Equip Load</p>
                <p className="text-right">{InfoObj.equipLoad}</p>
                <p className="text-left"></p>
                <p className="text-right">{InfoObj.loadType}</p>
                <p className="text-left">Poise</p>
                <p className="text-right">{InfoObj.poise}</p>
                <p className="text-left">Discovery</p>
                <p className="text-right">{InfoObj.discovery}</p>
            </div>
            <div className="DefenseSubSection">
                <p className="text-left"></p>
                <p className="text-right">Defense</p>
                <p className="text-right">Negation</p>
                <p className="text-left">Physical</p>
                <p className="text-right">{InfoObj.physicalDefense + "/"}</p>
                <p className="text-right">{InfoObj.physicalNegation}</p>
                <p className="text-left">VS Strike</p>
                <p className="text-right">{InfoObj.strikeDefense + "/"}</p>
                <p className="text-right">{InfoObj.strikeNegation}</p>
                <p className="text-left">VS Slash</p>
                <p className="text-right">{InfoObj.slashDefense + "/"}</p>
                <p className="text-right">{InfoObj.slashNegation}</p>
                <p className="text-left">VS Pierce</p>
                <p className="text-right">{InfoObj.pierceDefense + "/"}</p>
                <p className="text-right">{InfoObj.pierceNegation}</p>
                <p className="text-left">Magic</p>
                <p className="text-right">{InfoObj.magicDefense + "/"}</p>
                <p className="text-right">{InfoObj.magicNegation}</p>
                <p className="text-left">Fire</p>
                <p className="text-right">{InfoObj.fireDefense + "/"}</p>
                <p className="text-right">{InfoObj.fireNegation}</p>
                <p className="text-left">Lightning</p>
                <p className="text-right">{InfoObj.lightningDefense + "/"}</p>
                <p className="text-right">{InfoObj.lightningNegation}</p>
                <p className="text-left">Holy</p>
                <p className="text-right">{InfoObj.holyDefense + "/"}</p>
                <p className="text-right">{InfoObj.holyNegation}</p>
            </div>
            <div className="ResistanceSubSection">
                <p className="text-left"></p>
                <p className="text-right">Resistance</p>
                <p className="text-right">Armor</p>
                <p className="text-left">Immunity</p>
                <p className="text-right">{InfoObj.immunityRes + "/"}</p>
                <p className="text-right">{InfoObj.immunityArmor}</p>
                <p className="text-left">Robustness</p>
                <p className="text-right">{InfoObj.robustnessRes + "/"}</p>
                <p className="text-right">{InfoObj.robustnessArmor}</p>
                <p className="text-left">Focus</p>
                <p className="text-right">{InfoObj.focusRes + "/"}</p>
                <p className="text-right">{InfoObj.focusArmor}</p>
                <p className="text-left">Vitality</p>
                <p className="text-right">{InfoObj.vitalityRes + "/"}</p>
                <p className="text-right">{InfoObj.vitalityArmor}</p>
            </div>
        </section>
    )
}

export default InfoSection