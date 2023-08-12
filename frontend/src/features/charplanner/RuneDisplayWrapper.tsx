import { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
    calcRuneLevel,
    calcNextLevelRunes,
    calcTotalRunesSpend,
    addThousandsSeperator
} from "../../utils/functions";
import {
    selectStartingclass,
    selectVigor,
    selectMind,
    selectEndurance,
    selectStrength,
    selectDexterity,
    selectIntelligence,
    selectFaith,
    selectArcane
} from "./charplannerSlice";
import StartingClassData from "../../../data/StartingClassData";

type PropsType = {
    children: ReactElement[]
}

const RuneDisplayWrapper = ({ children }: PropsType): ReactElement => {

    const startingclass = useSelector(selectStartingclass);

    const vigor = useSelector(selectVigor);
    const mind = useSelector(selectMind);
    const endurance = useSelector(selectEndurance);
    const strength = useSelector(selectStrength);
    const dexterity = useSelector(selectDexterity);
    const intelligence = useSelector(selectIntelligence);
    const faith = useSelector(selectFaith);
    const arcane = useSelector(selectArcane);

    const startingStats = StartingClassData[startingclass];

    const startLevel = calcRuneLevel(startingStats);

    const runeLevel = calcRuneLevel({
        vigor,
        mind,
        endurance,
        strength,
        dexterity,
        intelligence,
        faith,
        arcane
    });

    const nextLevelRunes = calcNextLevelRunes(runeLevel);
    const totalRunesSpend = calcTotalRunesSpend(startLevel, runeLevel);

    const nextLevelRunesString = addThousandsSeperator(nextLevelRunes);
    const totalRunesSpendString = addThousandsSeperator(totalRunesSpend);

    return (
        <>
            <div className="RuneLevel">
                <span>Level</span>
                <span>{runeLevel}</span>
            </div>
            { ...children}
            <div className="RuneCost">
                <div>
                    <span>Total Runes</span>
                    <span>{totalRunesSpendString}</span>
                </div>
                <div>
                    <span>To Next Level</span>
                    <span>{nextLevelRunesString}</span>
                </div>
            </div>
        </>
    )
}

export default RuneDisplayWrapper